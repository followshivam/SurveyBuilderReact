import React,{useState,useEffect} from 'react';
import '../components.css';
import './QuestionSet2.css';
// import './QuestionSet.css';
// import Backdrop from "./Backdrop";
import firebaseDb from "../../firebase";
import { useTranslation } from 'react-i18next';
import Deleteg from "../../iconComponents/Deleteg.tsx";
import Duplicate from "../../iconComponents/Duplicate.tsx";
import Edit from "../../iconComponents/Edit.tsx";
import Ptitle from './Ptitle';


function QuestionSet(props)
{
    const { t } = useTranslation();
    const [questionData,setquestionData]=useState({});
    const [opened,setOpened]=useState("");
    const [selectedIdd,setSelectedIdd] =useState("1");
    const [questionCount,setQuestionCount]=useState(0);


    //////////////////////////////////////////////////////
    const [names,setNames]=useState([]);

    useEffect(()=>{
        firebaseDb.child("NAMES").on("value",snapshot=>{
            if(snapshot.val()!=null)
            setNames({
                ...snapshot.val()
            })
            else{
               firebaseDb.child("NAMES").push(
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



    console.log("NAMES")
    // console.log({names.MM7AS5keQuAPBntkE7j});
    console.log({names});
    console.log("NAMES")
/////////////////////////////////////////////


    useEffect(()=>{
        firebaseDb.child("QuestionsSet").on("value",snapshot=>{
            if(snapshot.val()!=null)
            setquestionData({
                ...snapshot.val()
            })
            else{
               firebaseDb.child("QuestionsSet").push(
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

    console.log("bhhhhhhhhhhhhhh")
    console.log({questionData});
    console.log("bhhhhhhhhhhhhhh")

    useEffect(()=>{
        setQuestionCount(Object.keys(questionData).length)
        // console.log("QuestionPage data length is "+Object.keys(questionData).length);
    },[questionData]);


    function handleOpenClose(idd){
        if(opened===""){
        setOpened(idd);
        } else if(opened!==idd){
        setOpened(idd);
        }else{
            setOpened("")
        }

    }

    function handleEdit2(idd){
        setSelectedIdd(idd);
        // console.log("idd is "+idd);

    }


    var ab =null;
    var efgh = [];
    var ijkl = [];
    var ind = 0 ;

    // function handleEdit(){
    //     {props.EditHandler}
    // }


    function handlePageDelete(idd,event, iddName){
        event.preventDefault();
        console.log("page delete called");
        console.log(idd);
        console.log("MANCHESTER " + iddName );
        console.log("CITY NAME IS " + efgh[iddName]);
        console.log("ID IS " + ijkl[iddName]);


        firebaseDb.child(`NAMES/${ijkl[iddName]}`).remove(
            err=>{
                if(err){
                    console.log(err);
                } else
                {
                    setSelectedIdd("");
                }
            }
         );

        const nameOfid = ijkl.indexOf(ijkl[iddName]);
        if (nameOfid > -1) {
          ijkl.splice(nameOfid, 1);
        }

        const nameOfset = efgh.indexOf(efgh[iddName]);
         if (nameOfset > -1) {
          efgh.splice(nameOfset, 1);
         }

         console.log(efgh);
         console.log(ijkl);

        if(window.confirm("Are you sure you want to delete this page?")){
            firebaseDb.child(`QuestionsSet/${idd}`).remove(
                err=>{
                    if(err){
                        console.log(err);
                    } else
                    {
                        setSelectedIdd("");
                    }
                }
            )
        }
    }

    function handlePageCopy(idd,event, iddName){
        event.preventDefault();
        console.log("page copy called");
        console.log(idd);

        //ADDING TO THE ARRAY

        // const nameOfid = ijkl.indexOf(ijkl[iddName]);
        // if (nameOfid > -1) {

        // }

        // const nameOfset = efgh.indexOf(efgh[iddName]);
        //  if (nameOfset > -1) {

        //  }

        var dataTocopy2={};
        firebaseDb.child(`NAMES/${ijkl[iddName]}`).on("value",snapshot=>{
            dataTocopy2=snapshot.val();
        });
        console.log("data received to copy is: "+ dataTocopy2);


            firebaseDb.child("NAMES").push(
                dataTocopy2,
                err=>{
                    if(err){
                        console.log(err);
                    }
                }
            )


        var dataTocopy={};
        firebaseDb.child(`QuestionsSet/${idd}`).on("value",snapshot=>{
            dataTocopy=snapshot.val();

        });
        console.log("data received to copy is: "+ dataTocopy);


            firebaseDb.child("QuestionsSet").push(
                dataTocopy,
                err=>{
                    if(err){
                        console.log(err);
                    }
                }
            )
    }






     return(
        <div className="quesPopup">

<div className="both">
        <div className="questionSetTitle">Question Set</div>
        <button className="CreateButton2" onClick={props.handleCheckCreate} >Create New</button>
        <i onClick={props.handleQuesSet}
        className="fas fa-times" id="cancel-icon"></i>
       </div>

        <hr  style={{color: "#D4D4D4"}}></hr>

        <div></div>


        {Object.keys(questionData).length===0
        ?
        <div className="pageT">
            <div>
           <p>

           <h1>NO QUESTION SET PRESENT NOW CREATE NEW</h1>

             {/* <p>{t('PAGE_TITLE')} <i id="dropAngle"  class="fa fa-angle-down"/></p> */}
           </p>

        </div>

    </div>
        :
        <div className="pageT">

        {




            Object.keys(questionData).map((idd,pageCount,nam)=>{
                if(efgh.length !== Object.keys(questionData).length)
                {
                Object.keys(names).map(iddd=>{
                    console.log(ind+1 + " " + names[iddd] + " " + iddd );
                    // if(names[iddd]===""){
                         if(efgh.includes(names[iddd]))
                         {
                        efgh[ind]=names[iddd]+"(copy)";
                         }
                         else
                        efgh[ind]=names[iddd];
                    //  }else{efgh[ind]="bhavyajain";}

                    ijkl[ind]=iddd;
                    ind=ind+1;
                });
            }


                return(
                    <div  key={idd} ab={efgh[pageCount]}>
                     <div className="questionPageTitle" onClick={() => handleEdit2(idd)} >

                         {/* <p style={{display:"inline"}}>NEY</p> */}
           {/* <p style={{display:"inline"}} onClick={()=>handleOpenClose(idd)} > */}
           <p style={{display:"inline"}}  >
             <p >  {efgh[pageCount]} {ab}

             {/* {opened===idd? <i id="dropAngle" class="fa fa-angle-up"/> :<i id="dropAngle"  class="fa fa-angle-down"/> }
             &nbsp;  */}

             <p className="TitleQuestion" onClick={()=>handleOpenClose(idd)} > {Object.keys(questionData[idd]).length} QUESTIONS </p>

             <a className="Edit" onClick={()=>props.EditHandler(idd)} ><Edit /> </a>
             <a className="Delete"  onClick={(event) => handlePageCopy(idd,event, pageCount)} href=""> <Duplicate /></a>
            <a className="Duplicate" onClick={(event) => handlePageDelete(idd,event, pageCount)} href=""> <Deleteg /></a>

            </p>

           </p>

        </div>
        {opened===idd?
            <div>
            {Object.keys(questionData[idd]).length===0?<p >{t('PAGE_TITLE_MESSAGE')}</p>:null}

                {
                    Object.keys(questionData[idd]).map((id,count)=>{
                        return(
                             <div key={id} >
                            <div className="Pquestion" >
                                <p >
                                 {count+1}. &nbsp; {(questionData[idd])[id].question} </p>
                            </div>
                        </div>
                        )
                    })
                }

            </div>

            :null}

        </div>
                )
            })

        }

        </div>
        }

         </div>
     )
}

export default QuestionSet;
