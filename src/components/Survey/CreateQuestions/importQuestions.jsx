import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './EditQuestion2.css';
import firebaseDb from  '../../../firebase';
import * as XLSX from'xlsx';
import { Link } from 'react-router-dom';
import { Table, Tag, Space } from 'antd';
import { useTranslation } from 'react-i18next';

function ImportQuestions (props) {

  const {t} = useTranslation();


  const [data,setData] = useState([]);
  const [file, setFile] = useState([]);
  const [showTable,setShowTable] = useState(false);
  var row=[];
  const [tableMap,setTableMap] = useState();
  var mapTemp ={};
	var QuestionLimit=0;
 function handleUpload(event) {
   console.log(event.target.files[0]);
    setFile(event.target.files[0]);
 }
function setQuestionLimit(event){
	const {name,value }= event.target;
	QuestionLimit = parseInt(value);
}

  function show() {

  var promise = new Promise((resolve,reject) => {

	var fileReader = new FileReader();
	fileReader.readAsArrayBuffer(file);

	fileReader.onload = (e) => {

		var bufferArray = e.target.result;
		var workBook = XLSX.read(bufferArray, {type: "buffer" });
		var workSheetName = workBook.SheetNames[0];
		var workSheet  = workBook.Sheets[workSheetName];
		var data = XLSX.utils.sheet_to_json(workSheet);
		resolve(data);

	};

	fileReader.onerror = (error) => {
		reject(error);
	};
  });


promise.then((d) => {

	setFile(d);
  console.log(Object.keys(d[1]));
  var keys = Object.keys(d[1]);

  var quesData =[];
  definetable(keys);
  setShowTable(true);

  });

  }
function sendData() {

  var quesData = [];
  var keys=Object.keys(file[0]);
  var prev=0;
  for(let i=0;i<file.length;i++){
    var quesAnsObject = {};
    var options = {};
    var values= Object.values(file[i]);
    quesAnsObject = {
                question:values[parseInt(tableMap.QuestionLabel)],
                type:values[parseInt(tableMap.AnswerType)]
            }
    var tablemapKeys = Object.keys(tableMap);
    var tableMapValues = Object.values(tableMap);
    var optionValue ='A';
    var optionValueIncrement = 0;
    for( let k=0;k<tablemapKeys.length;k++){
        var optionValueScoreObject = {
                                    value : '',
                                    score : ''
                                }
         if(tablemapKeys[k]!=='QuestionLabel' && tablemapKeys[k]!=='AnswerType'){
           optionValueScoreObject.value = String.fromCharCode(optionValue.charCodeAt(0)+optionValueIncrement);
           var optionOfQuestion = values[parseInt(tableMapValues[k])];
          //  console.log(typeof optionOfQuestion);
           if(optionOfQuestion && optionOfQuestion.includes("."))
              optionOfQuestion = optionOfQuestion.replaceAll('.', " ");
           if(optionOfQuestion && optionOfQuestion.includes("$"))
              optionOfQuestion = optionOfQuestion.replaceAll('$', " ");
           if(optionOfQuestion && optionOfQuestion.includes("#"))
              optionOfQuestion = optionOfQuestion.replaceAll('#', " ");
           if(optionOfQuestion && optionOfQuestion.includes("/"))
              optionOfQuestion = optionOfQuestion.replaceAll('/', " ");
           if(optionOfQuestion && optionOfQuestion.includes("["))
              optionOfQuestion = optionOfQuestion.replaceAll('[', " ");
           if(optionOfQuestion && optionOfQuestion.includes( "]"))
              optionOfQuestion = optionOfQuestion.replaceAll(']', " ");
           options[optionOfQuestion] = optionValueScoreObject;
           optionValueIncrement++;
         }
         quesAnsObject.options = options;
      }
      quesData.push(quesAnsObject);
      if(i%QuestionLimit===QuestionLimit-1){
        firebaseDb.child('pages').push(quesData.slice(prev,QuestionLimit+prev));
        console.log(quesData.slice(prev,QuestionLimit+prev));
        prev=i+1;
        }

      }
      if(quesData!==[]){
        firebaseDb.child('pages').push(quesData.slice(prev,file.length));
        console.log(quesData.slice(prev,file.length));
      }
}

function definetable(keys){
  row=[];

    for(let i=0;i<keys.length;i++){

    if(i===0){
        var selectElement= <select  className='source-field-column' name="QuestionLabel" onChange ={handleMapping}>
                    {keys.map((e,idx)=>{
                        return <option value = {idx.toString()}>{keys[idx]}</option>
                    })}
                </select>
        var item ={
            target_field: <span className="target-field-column">Qusetion Label</span>,
            source_field: selectElement
          }
          mapTemp['QuestionLabel'] = '0';
      }
    else if(i===1){
        var selectElement= <select  className='source-field-column' name="AnswerType" onChange ={handleMapping}>
                    {keys.map((e,idx)=>{
                        return <option value = {idx.toString()}>{keys[idx]}</option>
                    })}
                </select>
          var item ={
            target_field: <span className="target-field-column">Answer Type</span>,
            source_field: selectElement
            }
            mapTemp['AnswerType'] = '0';
      }
    else {
        var selectElement= <select  className='source-field-column' name={"Option" + (i-1).toString()} onChange ={handleMapping}>
                    {keys.map((e,idx)=>{
                        return <option value = {idx.toString()}>{keys[idx]}</option>
                    })}
                </select>

        var item ={
            target_field: <span className="target-field-column">{"Option"  + (i-1).toString()}</span>,
            source_field: selectElement
        }
        mapTemp["Option" + (i-1).toString()] = '0';
    }
    row.push(item);

    }
    setTableMap(mapTemp);
    setData(row);
}
function handleMapping(event) {
  const {name,value} = event.target;
  mapTemp[name] = value;
  setTableMap(mapTemp);
}
const columns = [
 {
    title: <span className="target-field-header"> {t('TARGET_FIELD_HEADER')} </span>,
    dataIndex: "target_field",
    key: "target_field",
    render: text => <a>{text}</a>
  },
  {
    title: <span className="source-field-header">{t('SOURCE_FIELD_HEADER')}</span>,
    dataIndex: "source_field",
    key: "source_field"
  }

];



return (
  <>
  <div className="shade-main2"></div>
  <div className="question-popup">
  <h3 className="import-ques-heading"> {t('IMPORT_QUESTION_HEADING')} </h3>

      <input  className="file-input" type="file" accept=".xls,.xlsx,.csv"  onChange={handleUpload} />
        {/* <input className="choose-file-input" type='text'/>*/}
        <button className="define-mapping" onClick={show}> {t('DEFINE_MAPPING_BTN')}</button>
     {showTable? <div>
    <div className="separator">
      <span className="separator-text"> {t('SEPARATOR_TEXT')}* </span>
      <select className="separator-select">
          <option aria-label="Comma" value="Select" >{t('SEPARATOR_SELECT')} </option>
      </select>
    </div>
  <h3 className="mapping"> {t('MAPPING')} </h3>
  <Table className="table" columns={columns} dataSource={data} pagination={false} scroll={window.scroll} />
  <div className="div-bottom">
    <span>{t('NO_OF_QUESTION_IMPORTED')} </span>
    <input  className="imported-question-no" type="text" onChange={setQuestionLimit}/>
  </div>  </div>
  :null }
      <div className="bottomDiv2" >
      {showTable?
      <button className="import-button" onClick={sendData}>{t('IMPORT_BTN')} </button>:
      <button className="import-button-disabled" disabled>{t('IMPORT_BTN')} </button> }
      <button className="cancel-button" onClick={props.handleCheck2}>{t('CANCEL_BTN')} </button>
      </div>
</div>
</>

);
}

export default ImportQuestions;
