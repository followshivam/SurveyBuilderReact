import React, {useState,useEffect} from 'react'
import '../../components.css';
// import {useSelector, useDispatch} from "react-redux";
import {addInfo} from "../../../Actions/Listen";
import {connect} from "react-redux";
// import TextareaAutosize from '@material-ui/core/TextareaAutosize';
// import Select from '@material-ui/core/Select';
// import Switch from '@material-ui/core/Switch';
// import { withStyles, makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
import { DatePicker, Space } from 'antd';
import moment from 'moment';
import TextareaAutosize from 'react-textarea-autosize';
// import Button from '@material-ui/core/Button';
import axios from "axios";
import "./SurveyDefinition.css";
import '../../components.css';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import display1 from "../../../Images/display1.png";
import display2 from "../../../Images/display2.png";
import display3 from "../../../Images/display3.png";
import {useLocation} from "react-router-dom";

const { RangePicker } = DatePicker;

  function SurveyDefinition(props){
    // const [surveyId,setSurveyId]=useState();
    // const [surveyName,setSurveyName]=useState();
    // const [userIndex,setUserIndex]=useState();
    // const [formType,setFormType]=useState();
    // const [surveyDefId,setSurveyDefId]=useState();
    // const [userName,setUserName]=useState();
    // const [cabinetName,setCabinetName]=useState();
    // const [userDBId,setUserDBId]=useState();
    // http://localhost:3000/surveydesigner/survey/index.html?surveyStatus=0&createdDateTime=12122008&channel=Newgen2020&createdBy=MohitSharma&option=SurveyExecutor&surveyId=200&surveyName=HrSUrvey&userIndex=100&formType=surveyNewgen&surveyDefId=1235&userName=shivam&cabinetName=ng1&userDBId=ng20
    // const url="http://localhost:3000/survey-definition?surveyStatus=0&createdDateTime=12122008&channel=Newgen2020&createdBy=MohitSharma&option=SurveyExecutor&surveyId=200&surveyName=HrSUrvey&userIndex=100&formType=surveyNewgen&surveyDefId=1235&userName=shivam&cabinetName=ng1&userDBId=ng20";
    
    
      const useQuery=() => {
        return new URLSearchParams(useLocation().search);
      };
      const query=useQuery();
  
      const surveyId=query.get("surveyId" || "");
      const surveyName=query.get("surveyName" || "");
      const userIndex=query.get("userIndex" || "");
      const formType=query.get("formType" || "");
      const surveyDefId=query.get("surveyDefId" || "");
      const userName=query.get("userName" || "");
      const cabinetName=query.get("cabinetName" || "");
      const userDBId=query.get("userDBId" || "");
      const option=query.get("option"|| "");
      const createdBy=query.get("createdBy"|| "");
      const channel=query.get("channel"|| "");
      const surveyStatus=query.get("surveyStatus"|| "");
      const createdDateTime=query.get("createdDateTime"|| "");
  
      const name="surveyDetails";
      const value={surveyId:surveyId,surveyName:surveyName,
      userIndex:userIndex,formType:formType,surveyDefId:surveyDefId,
      userName:userName,cabinetName:cabinetName,userDBId:userDBId,
      surveyStatus:surveyStatus,cabinetName:cabinetName,option:option,
      createdBy:createdBy,channel:channel,surveyStatus:surveyStatus,createdDateTime:createdDateTime};
      props.changeData({name,value});
      const value2=JSON.stringify(value);
      // console.log(props.surveyDetails);

      const urlSurveyDetail={
        "surveyDetails":{
          surveyId:surveyId,surveyName:surveyName,
      userIndex:userIndex,formType:formType,surveyDefId:surveyDefId,
      userName:userName,cabinetName:cabinetName,userDBId:userDBId,
      surveyStatus:surveyStatus,cabinetName:cabinetName,option:option,
      createdBy:createdBy,channel:channel,surveyStatus:surveyStatus,createdDateTime:createdDateTime
        }
      };

      console.log(urlSurveyDetail);

    // useEffect(() => {
    //   console.log(urlSurveyDetail);
    //     axios.post("http://localhost:8000/survey-definition",urlSurveyDetail)
    //       .then(response => {
    //           console.log(response)
    //       })
    //       .catch(error =>{
    //           console.log(error);
    //       } )
    //    }, []);
    
    

    console.log(props.surveyDetails);

    // axios.post("http://localhost:8080/survey-definition",props.surveyDetails)
    //     .then(response => {
    //         console.log(response)
    //     })
    //     .catch(error =>{
    //         console.log(error);
    //     } )

    const {t} = useTranslation();
    const [date,setDate]=useState({
      start:"01/01/0001",
      end:"08/01/0001"
    });

    const [fileName,setFileName]=useState("");
    const [d,setD]=useState("");
    const [logoImg,setLogoImg]=useState();

    function handleChange(event){
      const {name,value}=event.target;
      console.log(name+" value is: "+value);
      props.changeData({name,value});
    }

    function handleToggle(event){
      const {name,checked}=event.target;
      const value=checked;
      console.log(name+" value is: "+value);
      props.changeData({name,value});
    };

    const handleFile = async(event) => {
      const imageObject=event.target.files[0];
      const fileReader=new FileReader();
      const imageBase64=await convertBase64(imageObject);
      // console.log(imageBase64);

      const imageObjectURL=URL.createObjectURL(imageObject);
      const value={imageBase64:imageBase64,imageObjectURL:imageObjectURL};
      const name=event.target.name;
      setFileName(imageObject.name);
      setLogoImg(URL.createObjectURL(imageObject));
      props.changeData({name,value});
      // console.log( imageObject);
      // console.log({value});
    }

    const convertBase64 =(file) => {
      return new Promise((resolve,reject) => {
        const fileReader=new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
          resolve(fileReader.result);
        };

        fileReader.onerror =(error) => {
          reject(error);
        };
      });
    };

    function upload(e){
      e.preventDefault();
      const data = new FormData(); 
      data.append('file',props.logo);
      axios.post("http://localhost:8000/upload", data, {
        
      })
      .then(res => {
        console.log(res.statusText)
      })
    }

    function handleDate(val,dateString){
      console.log('Formatted Selected Time: ', dateString);
      const startDate=dateString[0];
      const endDate=dateString[1];
      const name="duration";
      const value={start:startDate,end:endDate};
      props.changeData({name,value});
      setDate((prev)=>{
        return({ ...prev,
           start:startDate , end:endDate
        })
      });
    }

    function handleClick(event){
      const passed=event.target;
      const name=passed.attributes.name.value;
      const value=passed.attributes.value.value;
      setD(value);
      props.changeData({name,value});
      console.log(name+": "+ value);
     }

    // console.log({date});
    // console.log({fileName});
    // function onOk(value) {
    //   console.log('onOk: ', value);
    // }
    // const getStartDate=props.duration;
    //  useEffect(() => {
    // console.log({props});

    //   axios.post("http://localhost:8000/survey-definition",props.surveyDetails)
    //     .then(response => {
    //         console.log(response)
    //     })
    //     .catch(error =>{
    //         console.log(error);
    //     } )
    //  }, [props.surveyDetails]);

    // console.log({props});
    // console.log({fileName});
    

    return (

    <div className="surveyDefinition">
        <div className="surveydef-div">
            <label className="label"><span className="span">* &nbsp;</span>{t('TITLE')} : </label>
            <input onChange={handleChange}  name="title" 
            value={props.title}
            type="text" placeholder={t("ENTER_TITLE")} id="title" required />
        </div>


        <div className="surveydef-div">
            <label htmlFor="description">{t('DESCRIPTION')}:</label>
            <TextareaAutosize minRows={3} onChange={handleChange} name="description" 
            value={props.description}
            type="text" id="description" placeholder={t('ENTER_DESCRIPTION')} required />
        </div>

        {/* <div className="surveydef-div">
            <label htmlFor="project"><span className="span">* &nbsp;</span>{t('PROJECT')}:</label>
            <select
              // native="true"
              value={props.project}
              onChange={handleChange}
              label="Select Department"
              name= "project"
              id= "project"
            >
              <option aria-label="None" value="" />
              <option className="sel" value="HR">{t("HR")}</option>
              <option className="sel" value="Development">{t("DEVELOPMENT")}</option>
              <option className="sel" value="Testing">{t("TESTING")}</option>
              <option className="sel"value="Admin">{t("ADMIN")}</option>
            </select>
            </div> */}
        {/* <div className="surveydef-div">
            <label htmlFor="description">Description:</label>
            <TextareaAutosize rowsMin={3} onChange={handleChange} name="description" 
            value={props.description}
            type="text" id="description" placeholder="Enter description" required />
            </div>
        <div className="surveydef-div">
            <label htmlFor="project"><span className="span">* &nbsp;</span>Project:</label>
            <Select
              native
              value={props.project}
              onChange={handleChange}
              label="Select Department"
              inputProps={{
              name: "project",
              id: "project",
            }}>
            <option aria-label="None" value="" />
            <option value="HR">HR</option>
            <option value="Development">Development</option>
            <option value="Testing">Testing</option>
            <option value="Admin">Admin</option>
            </Select> */}
            {/* <input onChange={handleChange} name="project" value={props.project}
            type="text" id="project" placeholder="Enter Project Name" required  /> */}
        {/* </div> */}

        <div className="surveydef-div">
            <label htmlFor="duration"><span className="span"> * &nbsp;</span>{t('DURATION')}:</label>
            <div>
            <RangePicker
            defaultValue={[moment(props.duration.start, "DD/MM/YYYY"), moment(props.duration.end, "DD/MM/YYYY")]}
            format="DD/MM/YYYY"  onChange={handleDate }
            className="duration" 
            // onOK={onOk}
            />
            </div>
            {/* <TextField
              id="duration"
              type="date"
              defaultValue=""
              className={classes.textField}
              /> */}
        </div>

        <div className="surveydef-div">
            <label htmlFor="logo">{t('LOGO')}:</label>
            <div className="logo">
        {fileName===""?
              <div>
            <label htmlFor="logo-upload" className="file-upload-label">
            {t('UPLOAD')}</label>
            <input className="file" required type="file" 
              id="logo-upload" name="logo" onChange={handleFile}
              accept=".jpg,.jpeg,.png"
              />
              </div>
         : <div className="logoAfter">
           <p  className="logoFilePath">🔗 {fileName}</p>
           <div>
            <label htmlFor="logo-upload" className="file-upload-label">
            🗑</label>
            <input className="file" required type="file" 
              id="logo-upload" name="logo" onChange={handleFile}
              accept=".jpg,.jpeg,.png"
              />
              </div>
         </div>
         }
         </div>
         </div>
         {/* <p> {props.logo} </p> */}
         {/* {logoImg &&<img src={props.logo.imageBlob} style={{width:"5em"}} alt="image"/>} */}
            
        {/* <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
          />
          <label htmlFor="contained-button-file">
            <Button size="small" variant="outlined" className={classes.button} component="span">
              Upload
            </Button>
          </label>        */}
        
        
        <div className="surveydef-div format-div">
            <label htmlFor="displayFormat"><span className="span">* &nbsp;</span>{t('SURVEY_DISPLAY_FORMAT')}:</label>
            <div className="display-formats">
              <div className={d==="display1"|| props.display==="display1"? "display-format display-clicked" :"display-format"} value="display1"  name="display" onClick={handleClick} > <div className="display-outer" value="display1"  name="display"> <div className="display-logo" value="display1"  name="display"> <img src={display1} value="display1"  name="display"/> </div>  {t("ONE_QUESTION")} <span className="question-logo">?</span></div> </div>
              <div className={d==="display2"|| props.display==="display2" ? "display-format display-clicked" :"display-format"} value="display2"  name="display" onClick={handleClick} > <div className="display-outer" value="display2"  name="display"> <div className="display-logo" value="display2"  name="display"> <img src={display2} value="display2"  name="display"/> </div>  {t("ALL_QUESTION")} <span className="question-logo">?</span> </div>  </div>
              <div className={d==="display3"|| props.display==="display3" ? "display-format display-clicked" :"display-format"} value="display3"  name="display" onClick={handleClick} > <div className="display-outer" value="display3"  name="display"> <div className="display-logo" value="display3"  name="display"> <img src={display3} value="display3"  name="display"/> </div> {t("PAGEWISE_QUESTIONS")} <span className="question-logo">?</span> </div> </div>
            </div>
              
        </div>
        
        <div className="slideBar">
            <label htmlFor="showQuestions">{t('SHOW_QUESTION_NUMBER')}:</label>
               <label  className="switch">
               <input type="checkbox" 
               checked={props.showQuestions}
              onChange={handleToggle}
              name="showQuestions"/>
               <span className="slider round"></span>
               </label>
        </div>

         <div className="slideBar">
            <label htmlFor="showQuestions">{t('SHOW_PROGRESS_BAR')}:</label>
               <label  className="switch">
               <input type="checkbox"
               checked={props.showProgress}
              onChange={handleToggle}
              name="showProgress"/>
               <span className="slider round"></span>
               </label>
         </div>

         {/* <div className="surveydef-div">
            <label htmlFor="showQuestions">Show Question Number:</label>
            <div className="switch">
            <BlueSwitch  
              className="switch"
              checked={props.showQuestions}
              onChange={handleToggle}
              name="showQuestions"
              value={props.showQuestions} />
              </div>
        </div>
        <div className="surveydef-div">
            <label htmlFor="showProgress">Show Progress Bar:</label>
            <div className="switch"> 
            <BlueSwitch  
              className="switch"
              checked={props.showProgress}
              onChange={handleToggle}
              name="showProgress" 
              value={props.showProgress}
              />
              </div>
        </div> */}
        
    </div>
    );
}

 function mapStateToProps(state){
  return{
    title:state.surveyInfo.title,
    description:state.surveyInfo.description,
    project:state.surveyInfo.project,
    duration:state.surveyInfo.duration,
    logo:state.surveyInfo.logo,
    display:state.surveyInfo.display,
    showProgress:state.surveyInfo.showProgress,
    showQuestions:state.surveyInfo.showQuestions,
    surveyDetails:state.surveyDetails
  }
}

function matDispatchToProps(dispatch){
  return{
    changeData:(data)=>{dispatch(addInfo(data))}
  }
}

export default connect(mapStateToProps,matDispatchToProps)(SurveyDefinition);

{/* <div className="shade-main" style={{ opacity: 1, backgroundColor:"white", padding:"0", margin:"0", minHeight:"700px"}}> </div> */}
