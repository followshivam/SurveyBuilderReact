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

function PageTitle() {

    const { t } = useTranslation();

    const [main, setMain]=useState([]);
    const [mainfetch, setMainfetch]=useState({});
    const [opened,setOpened]=useState(false);
    const [checkd,setCheckd]=useState(false);

    useEffect(()=>{
        firebaseDb.child("questionsData").on("value",snapshot=>{
            if(snapshot.val()!=null)
            setMainfetch({
                ...snapshot.val()
            })
        })
    }
    ,[]);

    function handleOpenClose(){
        setOpened(!opened);
    }
    function handleCheck(){
        setCheckd(!checkd);
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
        firebaseDb.child("questionsData").push(
            data,
            err=>{
                if(err){
                    console.log(err);
                }
            }
        )
    }
    function saveAction(){
        setOpened(true);
        setCheckd(false);
    }

    console.log({main});
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
            


            <a className="a" href=""> {t('IMPORT_QUESTION')}</a>
            <a className="a" href=""> <QuestionBranchingHeader />{t('QUESTION_BRANCHING')}</a>
           </section>
           <a className="a" style={{color:"#697A8B"}} href=""> <Duplicate /></a>
           <a className="a" style={{color:"#697A8B"}} href=""> <Deleteg /></a>
        </div>
        {opened?
            <div>
            <p className="noQuesMessage">{t('PAGE_TITLE_MESSAGE')}</p>
            
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
                    Object.keys(mainfetch).map(id=>{
                        return(<div key={id} className="rendered">
                    <div className="rendered-data">
                        <p className="p1" > {mainfetch[id].id}. &nbsp; {mainfetch[id].question} </p>
                        <p className="p2">{mainfetch[id].type}</p>
                        
                    </div>
                    
                    <div className="rendered-buttons">
                        <button><Edit /></button>
                        <button><QuestionBranching /></button>
                        <button><Duplicate /></button>
                        <button><Deleteg /></button>
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
            <button className="addPage"> {t('ADD_PAGE')}</button>
            {checkd?<EditQuestion2 actionSave={saveAction} getData={importData} className="popup"/> :null
            }
            
        </div>
    )
}

export default PageTitle
