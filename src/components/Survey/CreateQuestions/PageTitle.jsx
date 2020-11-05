import React,{useState,useEffect} from 'react';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import DeleteIcon from '@material-ui/icons/Delete';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import EditQuestion2 from "./EditQuestion2";
import "./EditQuestion2.css";
import firebaseDb from "../../../firebase";
import Deleteg from "../../../iconComponents/Deleteg.tsx";
import Duplicate from "../../../iconComponents/Duplicate.tsx";
import Edit from "../../../iconComponents/Edit.tsx";
import QuestionBranching from "../../../iconComponents/QuestionBranching.tsx";
import QuestionBranchingHeader from "../../../iconComponents/QuestionBranchingHeader.tsx";
import Save from "../../../iconComponents/Save.tsx";
import Settings from "../../../iconComponents/Settings.tsx";
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import {addInfo} from "../../../Actions/Listen";
import {connect} from "react-redux";
import ImportQuestions from "./importQuestions";


function PageTitle(props) {

    const { t } = useTranslation();
    // const [count,setCount]=useState(1);
    const [main, setMain]=useState([]);
    const [mainfetch, setMainfetch]=useState({});
    const [opened,setOpened]=useState(false);
    const [checkd,setCheckd]=useState(false);
    const [checked,setChecked]=useState(false);
    const [selectedId,setSelectedId] =useState("");

    useEffect(()=>{
        firebaseDb.child("questionsData").on("value",snapshot=>{
            if(snapshot.val()!=null)
            setMainfetch({
                ...snapshot.val()
            })
            else{
                setMainfetch({})
            }
        })
    }
    ,[]);

    // useEffect(()=>{
    //     console.log(selectedId);
    // },[selectedId])

    function handleOpenClose(){
        setOpened(!opened);
    }
    function handleCheck(){
        setCheckd(!checkd);
    }
    function handleCheck2(){
         setChecked(!checked);
     }
    function importData(data){
        setMain([
            ...main,
            {
                id:data.id,
                question:data.question,
                isMandatory:data.isMandatory,
                type:data.type
            }
        ]);
        if(selectedId===""){
        firebaseDb.child("questionsData").push(
            data,
            err=>{
                if(err){
                    console.log(err);
                } else
                {
                    setSelectedId("");
                }
            }
        )} else
        {
            firebaseDb.child(`questionsData/${selectedId}`).set(
                data,
                err=>{
                    if(err){
                        console.log(err);
                    } else
                    {
                        setSelectedId("");
                    }
                }
            )
        }
    }

    function saveAction(){
        setOpened(true);
        setCheckd(false);
    }
    function handleEdit(id){
        setSelectedId(id);
        console.log(id);
        setCheckd(true);
    }

    function handleDelete(id){
        console.log("delete called");
        console.log(id);
                
        if(window.confirm("Are you sure you want to delete this question?")){
            firebaseDb.child(`questionsData/${id}`).remove(
                err=>{
                    if(err){
                        console.log(err);
                    } else
                    {
                        setSelectedId("");
                    }
                }
            )
        }
    }
    // console.log({main});
    console.log({mainfetch});
    
    return (
        <div className="page"  >
        <div className="pageTitle">
           <p onClick={handleOpenClose} className="heading">
           {opened? <ArrowDropDownIcon fontSize="large" /> :<ArrowRightIcon fontSize="large"/> }
             &nbsp;
            <input type="text" className="input" name="pageName" placeholder={t('PAGE_TITLE')}/>
           </p>
           <p> {Object.keys(mainfetch).length} {t('NO_OF_QUESTIONS')}</p>

           <section className="blue-section">
                <input checked={checkd} onChange={handleCheck}
                type="checkbox" name="check" className="checkbox" id="check"/>
                <label className="checkbox-label" htmlFor="check">
                    <p className="popup" id="toggle-checkbox" href=""> {t('ADD_QUESTION')}</p>
                    {checkd?<i className="fas fa-times" id="cancel-icon"></i> :null
                    }
                 </label>

                 <input checked={checked} onChange={handleCheck2}
                type="checkbox" name="check2" class="checkbox" id="check2"/>
                <label class="checkbox-label" htmlFor="check2">
                    <p className="popup" id="toggle-checkbox" href=""> {t('IMPORT_QUESTION')}</p>
                    {checked?<i class="fas fa-times" id="cancel-icon"></i> :null
                    }
                 </label>  

                {/* <a className="a" href=""> {t('IMPORT_QUESTION')}</a> */}
                <a className="a" href=""> <QuestionBranchingHeader />{t('QUESTION_BRANCHING')}</a>
            </section>
            <a className="a" style={{color:"#697A8B"}} href=""> <Duplicate /></a> 
            <a className="a" style={{color:"#697A8B"}} href=""> <Deleteg /></a>
        </div>
        {opened?
            <div>
            {Object.keys(mainfetch).length===0?<p className="noQuesMessage">{t('PAGE_TITLE_MESSAGE')}</p>:null}
            
             {/* {main.map(q => (
                <div className="rendered">
                    <div className="rendered-data">
                        <p className="p1" > {q.id}. &nbsp; {q.question} </p>
                        <p className="p2">{q.type}</p>
                    </div>
                    
                    <div className="rendered-buttons">
                        <button><FileCopyIcon fontSize="small" /></button>
                        <button><DeleteIcon fontSize="small"/></button>
                        <button><FileCopyIcon fontSize="small" /></button>
                        <button><DeleteIcon fontSize="small"/></button>
                    </div>
                </div>
                ))} */}

                {/* {main.map(q => (
                <div className="rendered">
                    <div className="rendered-data">
                        <p className="p1" > {q.id}. &nbsp; {q.question} </p>
                        <p className="p2">{q.type}</p>
                    </div>
                    
                    <div className="rendered-buttons">
                        <button><FileCopyIcon fontSize="small" /></button>
                        <button><DeleteIcon fontSize="small"/></button>
                        <button><FileCopyIcon fontSize="small" /></button>
                        <button><DeleteIcon fontSize="small"/></button>
                    </div>
                </div>
                ))} */}

                {
                    Object.keys(mainfetch).map((id,count)=>{
                        return(<div key={id} className="rendered">
                    <div className="rendered-data">
                        <p className="p1" > {count+1}. &nbsp; {mainfetch[id].question} </p>
                        <p className="p2">{mainfetch[id].type}</p>
                    </div>
                    
                    <div className="rendered-buttons">
                        <a onClick={() => handleEdit(id)}><Edit /> </a>
                        <a ><QuestionBranching /></a>
                        <a><Duplicate /></a>
                        <a onClick={() => handleDelete(id)}> <Deleteg /></a>
                    </div>
                </div>
                        
                        ) 
                        {/* <tr key={id}>
                            <td>
                                {mainfetch[id].question}
                            </td>
                            <td>
                                {mainfetch[id].type}
                            </td>
                        </tr> */}

                    })
                }
            
            </div>
            
            :null}
            {props.display==="display3" ? <button className="addPage"> {t('ADD_PAGE')}</button> : 
            null
            /* <button disabled style={{borderColor:"grey" , color:"grey"}} className="addPage"> {t('ADD_PAGE')}</button>
             */
             }
            
            {checkd?<EditQuestion2 mainfetch={mainfetch} selectedId={selectedId} handleCheck={handleCheck} actionSave={saveAction} getData={importData} className="popup"/> :null
            }
            {checked?<ImportQuestions className="popup"/> :null
            }
            
        </div>
    )
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
    showQuestions:state.surveyInfo.showQuestions
  }
}

function matDispatchToProps(dispatch){
  return{
    changeData:(data)=>{dispatch(addInfo(data))}
  }
}

export default connect(mapStateToProps,matDispatchToProps)(PageTitle);

