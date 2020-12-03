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
// import EmptyPage from "./EmptyPage"
import Confirm from "./Confirm";
import "./Confirm.css";



function PageTitle(props) {

    const { t } = useTranslation();
    // const [count,setCount]=useState(1);
    const [main, setMain]=useState([]);
    const [mainfetch, setMainfetch]=useState({});
    const [opened,setOpened]=useState("");
    const [checkd,setCheckd]=useState(false);
    const [checked,setChecked]=useState(false);
    const [selectedId,setSelectedId] =useState("");
    const [selectedIdd,setSelectedIdd] =useState("1");
    const [pageName,setPageName]=useState("");
    const [pageCount,setPageCount]=useState(0);
    const [pageData,setPageData]=useState({});
    const [confirmDelete,setConfirmDelete]=useState(false);
    const [emptyCount,setEmptyCount]=useState(1);
    const initialPage={
                "-MLDviLDfbcUJ7qKe85r" : {
                    "id" : "",
                    "isMandatory" : "",
                    "question" : "",
                    "type" : "",
                    "undefined" : ""
                                        }
                    }                           

    
    // useEffect(()=>{
    //     firebaseDb.child("questionsData").on("value",snapshot=>{
    //         if(snapshot.val()!=null)
    //         setMainfetch({
    //             ...snapshot.val()
    //         })
    //         else{
    //             setMainfetch({})
    //         }
    //     })
    // }
    // ,[]);

    useEffect(()=>{
        firebaseDb.child("pagis").on("value",snapshot=>{
            if(snapshot.val()!=null)
            setPageData({
                ...snapshot.val()
            })
            else{
               firebaseDb.child("pagis").push(
                {},
            err=>{
                if(err){
                    console.log(err);
                }
            } )
            }
        })
    }
    ,[]);


    useEffect(()=>{
        setPageCount(Object.keys(pageData).length)
        console.log("page data length is "+Object.keys(pageData).length);
    },[pageData]);
    // useEffect(()=>{
    //     console.log(selectedId);
    // },[selectedId])

    function handleOpenClose(idd){
        if(opened===""){
        setOpened(idd);
        } else if(opened!==idd){
        setOpened(idd);
        }else{
            setOpened("")
        }
    
    }
    function handleCheck(){
        setCheckd(!checkd);
    }
    function handleCheck2(){
         setChecked(!checked);
     }
    //  function handlePage(event){
    //     setPageName(event.target.value);
    //  }
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
        firebaseDb.child(`pagis/${selectedIdd}`).push(
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
            firebaseDb.child(`pagis/${selectedIdd}/${selectedId}`).set(
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
    function handleEdit(idd,id){
        console.log("edit called");
        console.log(idd);
        console.log(id);
        
        setSelectedIdd(idd);
        setSelectedId(id);
        setCheckd(true);
    }
    function handleEdit2(idd){
        setSelectedIdd(idd);
        console.log("idd is "+idd);
        
    }

    function handleDelete(idd,id){
        console.log("delete called");
        console.log(idd);
        console.log(id);

        // if(window.confirm("Are you sure you want to delete this question?")){
        //     firebaseDb.child(`pagis/${idd}/${id}`).remove(
        //         err=>{
        //             if(err){
        //                 console.log(err);
        //             } else
        //             {
        //                 setSelectedId("");
        //             }
        //         }
        //     )
        // }
        
        // <Confirm  setConfirmDelete={setConfirmDelete} ask="Are you sure you want to delete this question?" />

            // if(confirmDelete){
            firebaseDb.child(`pagis/${idd}/${id}`).remove(
                err=>{
                    if(err){
                        console.log(err);
                    } else
                    {
                        setSelectedId("");
                    }
                }
            )
        // }
    }

    function addNewPage(){
        firebaseDb.child("pagis").push(
                initialPage,
            err=>{
                if(err){
                    console.log(err);
                }
            } )
    }
    function handlePageDelete(idd,event){
        // event.preventDefault();
        console.log("page delete called");
        console.log(idd);
                
        // if(window.confirm("Are you sure you want to delete this page?")){
            firebaseDb.child(`pagis/${idd}`).remove(
                err=>{
                    if(err){
                        console.log(err);
                    } else
                    {
                        setSelectedIdd("");
                    }
                }
            )
        // }
    }

    function handlePageCopy(idd,event){
        event.preventDefault();
        console.log("page copy called");
        console.log(idd);
        var dataTocopy={};
        firebaseDb.child(`pagis/${idd}`).on("value",snapshot=>{
            dataTocopy=snapshot.val();
        });
        console.log("data received to copy is: "+ dataTocopy);
        

            firebaseDb.child("pagis").push(
                dataTocopy,
                err=>{
                    if(err){
                        console.log(err);
                    } 
                }
            )
    }

    function handleQuesCopy(idd,id,event){
        event.preventDefault();
        console.log("Question copy called");
        console.log(idd);
        var quesToCopy={};
        firebaseDb.child(`pagis/${idd}/${id}`).on("value",snapshot=>{
            quesToCopy=snapshot.val();
        });
        console.log("question received to copy is: "+ quesToCopy);
        

            firebaseDb.child(`pagis/${idd}`).push(
                quesToCopy,
                err=>{
                    if(err){
                        console.log(err);
                    } 
                }
            )
    }

    // console.log({main});
    console.log({pageData});
    
    return (
        <div>
        {Object.keys(pageData).length===0
        ? 
       
        <div className="page">
            <div className="pageTitle">
           <p className="heading">
           <ArrowDropDownIcon fontSize="large" />
             &nbsp;
             <p className="page-title">{t('PAGE_TITLE')} </p>
           </p>
           {props.showQuestions? <p className="page-title2" > 0 {t('NO_OF_QUESTIONS')}</p>
           : null }
           
           <section style={{marginTop:"-0em"}} className="blue-section">
                <input checked={checkd} onChange={handleCheck}
                type="checkbox" name="check" className="checkbox" id="check"/> 
                <label className="checkbox-label" htmlFor="check">
                    <p className="popup" id="toggle-checkbox" href=""> {t('ADD_QUESTION')}</p>
                    {checkd?<i className="fas fa-times" id="cancel-icon"></i> :null
                    }
                 </label>

                 <input checked={checked} onChange={handleCheck2}
                type="checkbox" name="check2" className="checkbox" id="check2"/>
                <label className="checkbox-label" htmlFor="check2">
                    <p className="popup" id="toggle-checkbox" href=""> {t('IMPORT_QUESTION')}</p>
                    {/* {checked?<i className="fas fa-times" id="cancel-icon"></i> :null
                    } */}
                 </label>  

                {/* <a className="a" href=""> {t('IMPORT_QUESTION')}</a> */}
                <a 
                // className="a" 
                href=""> <QuestionBranchingHeader />{t('QUESTION_BRANCHING')}</a>
            </section>
            {/* <a className="a"  onClick={(event) => handlePageCopy(idd,event)} href=""> <Duplicate /></a> 
            <a className="a" onClick={(event) => handlePageDelete(idd,event)} href=""> <Deleteg /></a> */}
        </div>
        <div className="open-page">
            <p className="noQuesMessage"> {t('PAGE_TITLE_MESSAGE')} </p>
            {props.display==="display3" ? <button onClick={addNewPage} className="addPage"> {t('ADD_PAGE')}</button> : 
            null
             }
        </div>
        {checkd?<EditQuestion2 pageData={pageData} mainfetch={mainfetch} selectedIdd={selectedIdd} selectedId={selectedId} handleCheck={handleCheck}
            actionSave={saveAction} getData={importData} className="popup"/> :null
            }
            {checked?<ImportQuestions handleCheck2={handleCheck2} className="popup"/> :null
            }
    </div>
        
        :
        <div className="outer-page">
        {/* {Object.keys(pageData).length===0 ?
            <div>
            <div> {props.display==="display1"||"display2"||"" ? <button className="addPage"> {t('ADD_PAGE')}</button> :null } </div>
            {Object.keys(pageData[idd]).length===0?<p className="noQuesMessage">{t('PAGE_TITLE_MESSAGE')}</p>:null}
            </div>
        : null
        } */}
        {   
            Object.keys(pageData).map((idd,pageCount)=>{
                return(
                    <div className="page" key={idd} >
                     <div onClick={() => handleEdit2(idd)} className="pageTitle">
           <p onClick={()=>handleOpenClose(idd)} className="heading">
           {opened===idd? <ArrowDropDownIcon fontSize="large" /> :<ArrowRightIcon fontSize="large"/> }
             &nbsp;
            {/* <input type="text" className="input" name="pageName"
            // value={pageName} onChange={handlePage}
             placeholder={t('PAGE_TITLE')}/> */}
             {/* <p className="page-title">{t('PAGE_TITLE')}</p> */}
             <p className="page-title">{t('PAGE_TITLE')} {pageCount+1} </p>
             
           </p>
           {props.showQuestions 
            ?   <p className="page-title2" > {Object.keys(pageData[idd]).length} {t('NO_OF_QUESTIONS')}</p>
            : null}

            {opened===idd? 
           <section className="blue-section">
                <input checked={checkd} onChange={handleCheck}
                type="checkbox" name="check" className="checkbox" id="check"/>
                <label className="checkbox-label" htmlFor="check">
                    <p className="popup" id="toggle-checkbox" href=""> {t('ADD_QUESTION')}</p>
                    {checkd?<i className="fas fa-times" id="cancel-icon"></i> :null
                    }
                 </label>

                 <input checked={checked} onChange={handleCheck2}
                type="checkbox" name="check2" className="checkbox" id="check2"/>
                <label className="checkbox-label" htmlFor="check2">
                    <p className="popup" id="toggle-checkbox" href=""> {t('IMPORT_QUESTION')}</p>
                    {checked?<i className="fas fa-times" id="cancel-icon"></i> :null
                    }
                 </label>

                {/* <a className="a" href=""> {t('IMPORT_QUESTION')}</a> */}
                <a style={{margin:"0", padding:"0" }}
                // className="a" 
                href=""> <QuestionBranchingHeader />
                {t('QUESTION_BRANCHING')}</a>
            </section>
            : null}
            <a className="a"  onClick={(event) => handlePageCopy(idd,event)} href=""> <Duplicate /></a>
            <a className="a"
            style={{display:"inline" ,padding:"0.6em", margin:"0", marginRight:"1em"}}
            // onClick={(event) => handlePageDelete(idd,event)} href=""
            > 
            {/* <Deleteg /> */}
            <Confirm handlePageDelete={handlePageDelete} idd={idd} id=""
            setConfirmDelete={setConfirmDelete} ask="Are you sure you want to delete this page?" info="This will delete the selected page permanently" />
            </a>
        </div>
        {opened===idd?
            <div className="open-page">
            {Object.keys(pageData[idd]).length===0?<p className="noQuesMessage">{t('PAGE_TITLE_MESSAGE')}</p>:null}
            
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
                    Object.keys(pageData[idd]).map((id,count)=>{
                        return( 
                            <div>
                            {/* {(pageData[idd])[id].question==="" ? <p onload={setEmptyCount(2)} style={{display:"hidden"}}></p> : null}  */}
                            {(pageData[idd])[id].question==="" ? null
                                :
                            <div key={id} className="rendered">
                            <div className="rendered-data">
                                <p className="p1" > 
                                {props.showQuestions?  <>{count+1}.</>  
                                : null }  
                                &nbsp; {(pageData[idd])[id].question} </p>
                                <p className="p2">{(pageData[idd])[id].type}</p>
                            </div>

                            <div className="rendered-buttons">
                                <a onClick={() => handleEdit(idd,id)}><Edit /> </a>
                                <a ><QuestionBranching /></a>
                                <a onClick={(event) => handleQuesCopy(idd,id,event)}><Duplicate /></a>
                                <a className="a"
                                // style={{display:"inline" ,padding:".5em", margin:"0.5em", paddingTop:".5em", marginTop:".5em"}}
                                // onClick={() => handleDelete(idd,id)}
                                > 
                                {/* <Deleteg />  */}
                                <Confirm handleDelete={handleDelete} idd={idd} id={id}
                                 setConfirmDelete={setConfirmDelete} ask="Are you sure you want to delete this question?" info="This will delete the selected question permanently" />
                                </a>
                            </div>
                        </div>
                         }
                         </div>) 
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
            {/* {props.display==="display3" ? <button onClick={addNewPage} className="addPage"> {t('ADD_PAGE')}</button> : 
            null
            /* <button disabled style={{borderColor:"grey" , color:"grey"}} className="addPage"> {t('ADD_PAGE')}</button>
             */
             }
            
            {checkd?<EditQuestion2 pageData={pageData} mainfetch={mainfetch} selectedIdd={selectedIdd} selectedId={selectedId} handleCheck={handleCheck} 
            actionSave={saveAction} getData={importData} className="popup"/> :null
            }
            {checked?<ImportQuestions  handleCheck2={handleCheck2} className="popup"/> :null
            }
            
        </div>
                )
            })
            
            

        }
        {props.display==="display3" || Object.keys(pageData).length>1  ? <button onClick={addNewPage} className="addPage"> {t('ADD_PAGE')}</button> : 
            null
            /* <button disabled style={{borderColor:"grey" , color:"grey"}} className="addPage"> {t('ADD_PAGE')}</button>
             */
             }
        </div>
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

