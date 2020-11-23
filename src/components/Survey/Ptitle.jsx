import React,{useState,useEffect} from 'react';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import firebaseDb from "../../firebase";
import { useTranslation } from 'react-i18next';
import {addInfo} from "../../Actions/Listen";
import {connect} from "react-redux";
import './QuestionSet.css';
import TextArea from 'antd/lib/input/TextArea';
import QuestionSet from './QuestionSet';

function Ptitle(props) {

    const { t } = useTranslation();
    // const [count,setCount]=useState(1);
    const [main, setMain]=useState([]);
    const [mainfetch, setMainfetch]=useState({});
    const [opened,setOpened]=useState("");
    const [checkd,setCheckd]=useState(false);
    const [checked,setChecked]=useState(false);
    const [EditChecked,setEditChecked]=useState(false);
    // EDIT
    const [selectedId,setSelectedId] =useState("1");
    // EDIT
    const [selectedIdd,setSelectedIdd] =useState("1");
    const [pageName,setPageName]=useState("");
    const [pageCount,setPageCount]=useState(0);
    const [pageData,setPageData]=useState({});
    const [nameQuestion,setnameQuestion]=useState("");

    const [checkForCheckbox,setcheckForCheckbox]=useState(false);
    const [impques, setImpques]=useState([]);
    // const [quesPageData,setquesPageData]=useState([]);


    const initialPage={
                "-MLDviLDfbcUJ7qKe85r" : {
                    "id" : "",
                    "isMandatory" : "",
                    "question" : "",
                    "type" : "",
                    "undefined" : ""
                                        }
                    }
                    
                    
                   
                    
//    const [checkCreate,setcheckCreate]=useState(false);
const [checkCreate,setcheckCreate]=useState(true);

     function createCheckHandler()
     {
        // setquesPageData([
        //     ...quesPageData,
        //    {
        //      quesData
        //    }
        // ]);


        // console.log("AFTERQUESPAGEDATA");
        // console.log({quesPageData});
        // console.log("AFTERQUESPAGEDATA");

        setOpened("");

        console.log("create "+quesData);
        
        if(nameQuestion.length>14)
        {
            alert("Length of name should be less than 15");   
        }
        else if(nameQuestion!=="")
        {
        firebaseDb.child('NAMES').push(nameQuestion);
        firebaseDb.child('QuestionsSet').push(quesData);
        setQuesData([]);
        setnameQuestion("")
        setcheckCreate(!checkCreate); 
        }else{
            alert("please Create any question Set");
        }
     }


      




     let nameOfQuestionSet = null;

     function nameHandler(event)
     {
         console.log(event.target.value);
         nameOfQuestionSet = event.target.value;
         console.log("EASY "+ nameOfQuestionSet);
         setnameQuestion(nameOfQuestionSet);
     }


     const [questionData,setquestionData]=useState({});

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

    // useEffect(()=>{
    //     firebaseDb.child("QuestionsSet").on("value",snapshot=>{
    //         if(snapshot.val()!=null)
    //         setquestionData({
    //             ...snapshot.val()
    //         })
    //         else{
    //            firebaseDb.child("QuestionsSet").push(
    //             {},
    //         err=>{
    //             if(err){
    //                 console.log(err);
    //             }
    //         } )
    //         }
    //     })
    // }
    // ,[questionData]);


    const [quesData,setQuesData] = useState([
        // "id" : "",
        // "isMandatory" : "",
        // "question" : "",
        // "type" : ""
       ])


       const [arrayOfId, setarrayOfId]=useState([]);
       var ArrayOfQuestions = [];
       const IdOfQuestions = [];
    // var IdOfQuestions = useRef([])
       var IddOfQuestions = [];
       

     function EditCheckHandler(idOf)
     {
        // setarrayOfId([arrayOfId]);
        Object.keys(questionData[idOf]).map((id,count)=>{
            //  console.log("ABCD "+ (questionData[idOf])[id].question); 
             ArrayOfQuestions.push((questionData[idOf])[id].question);
             addDataToFire(id,idOf);
        }
        )

        for(let i=0; i<ArrayOfQuestions.length;i++)
        {
            console.log("i " +i +" " + ArrayOfQuestions[i]+ " ");
        }

        for(let i=0; i<ArrayOfQuestions.length;i++)
        {
            Object.keys(pageData).map((idd,pageCount)=>{
            Object.keys(pageData[idd]).map((id,count)=>{
                  
                if(ArrayOfQuestions[i]===(pageData[idd])[id].question)
                {
                    IdOfQuestions.push(id);
                    arrayOfId.push(id);
                    // setarrayOfId(arrayOfId => [...arrayOfId, id])
                    // setarrayOfId([...arrayOfId,id]);
                    IddOfQuestions.push(idd);
                }
                 
                }) 
            })
        }
        console.log(" ");
        
        for(let i=0; i<IdOfQuestions.length;i++)
        {
            console.log("idd "  + IddOfQuestions[i]+ " "+"id "  + IdOfQuestions[i]);
        }
       
        console.log("LENGTHOFARRAYIS "+ IdOfQuestions.length); 
        console.log(arrayOfId);  
        console.log("LENGTHOFSTATEARRAYIS "+ arrayOfId.length);      
 
 
        //     console.log(quesData);
        // console.log("NEW ID IS " + idOf);
        setEditChecked(!EditChecked);
        setcheckCreate(!checkCreate);
        setSelectedId(idOf);
     }

     console.log("LENGTHOFSTATEARRAYIS "+ arrayOfId.length); 
    //  console.log("LENGTHOFARRAYIS "+ IdOfQuestions.length);   

     function addDataToFire(id,idd)
     {
        // console.log( (questionData[idd])[id].question);
        // console.log(id); 
        
        setQuesData((prev)=>{
            return[
            ...prev,
           {
         id: id,
         isMandatory: (questionData[idd])[id].isMandatory,
         question:(questionData[idd])[id].question,
         type : (questionData[idd])[id].type 
           }
 
          ]});
 
     }
     

     function SaveHandler()
     {
        // firebaseDb.child(`QuestionsSet/${selectedId}`).push(quesData);
        setarrayOfId([]);
        setOpened("");
        console.log("save " + quesData);
        // console.log(selectedId);
        // console.log(pageData[selectedId]);
        // firebaseDb.child(`QuestionsSet/${selectedId}`).set(quesData);
        // var key="2";
        // firebaseDb.child(`QuestionsSet/${selectedId}`).push(quesData);
        firebaseDb.child(`QuestionsSet/${selectedId}`).set(quesData);
        setEditChecked(!EditChecked);
        setcheckCreate(!checkCreate);
        // firebaseDb.child(`QuestionsSet/${selectedId}`).push.setValue(quesData);
        setQuesData([]);
     }


    //  console.log("QUESPAGEDATA");
    //  console.log({quesPageData});
    //  console.log("QUESPAGEDATA");
     

     function createCheckHandler2()
     {
        setcheckCreate(false); 
     }

    


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

    var str2=null;
    var secondIdd=null;
    function searchHandler(event)
    {
        console.log(event.target.value);

        str2=event.target.value;
        Object.keys(pageData).map((idd,pageCount)=>{
            Object.keys(pageData[idd]).map((id,count)=>{
               
                // console.log((pageData[idd])[id].question);
                var str1=(pageData[idd])[id].question;
               
                if(str1===str2)
                {
                    secondIdd=idd;
                    handleOpenClose(secondIdd);
                     handleEdit2(secondIdd);
                    //  setOpened(secondIdd);
                    console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
                }else{
                    //  setOpened("");
                    // handleOpenClose("");
                    console.log("fffffffffffffffffffffffffffffffffffffffff");
                    // setOpened("");
                }
                 
            }) 
        })
      
    }


    useEffect(()=>{
        setPageCount(Object.keys(pageData).length)
        console.log("page data length is"+Object.keys(pageData).length);
    },[pageData]);
    

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
        console.log("idd is "+idd);
        
    }

    var ArrayOfIds = [];
    var f=0;

    function OnClickCheckBox(id,idd)
    {
        var x = ArrayOfIds.toString();
        console.log("ARRAY IS " + x);
        if(ArrayOfIds.includes(id))
        {
            console.log("PRESENT");
            const index = ArrayOfIds.indexOf(id);
            if (index > -1) {
            ArrayOfIds.splice(index, 1);
             }
             delete quesData[idd];
        }else{
            console.log("NOT");
            ArrayOfIds.push(id);
            addDataToFireBase(id,idd);
            console.log("ID OF NOTLOOP "+id);
            console.log("length is "+Object.keys(quesData).length);

            // delete quesData.[ab];
              Object.keys(quesData).map((ab,quesCount)=>{
                  console.log("plplplplplpl");
                  console.log("ID is"+quesData[ab].id);
                  console.log("question "+quesData[ab].question);
                  console.log("ID OF LOOP "+ab);
                //   delete (quesData.(ab));
                //   delete quesData[ab].id;
                // delete quesData[ab].question;
                // delete quesData[ab].isMandatory;
                // delete quesData[ab].type;
            })
        }
    }
  

    function addDataToFireBase(id,idd)
    {
       console.log( (pageData[idd])[id].question);
       console.log(id);
       setQuesData([
           ...quesData,
          {
        id: id,
        isMandatory: (pageData[idd])[id].isMandatory,
        question:(pageData[idd])[id].question,
        type : (pageData[idd])[id].type 
          }

       ]);  
    }
  
    var countOfquestion=0;

// console.log("opopopopopopopopop");
//    Object.keys(quesData).map((idd,quesCount)=>{
//     delete quesData[idd];
//             //    console.log("question "+quesData[idd].question);
//             //    console.log("Id "+quesData[idd]);
//             })
// console.log("opopopopopopopopop");                 
 


    // console.log("QUESDATA");
    // console.log(quesData);
    // console.log("QUESDATA");

    //   firebaseDb.child('importedQuestions').push(quesData);


    // console.log("PAGEDATA");
    // console.log({pageData});
    // console.log("PAGEDATA");
    

    
    return (
        <>
        <div className="shade-main2"></div>
        <div>
        <div className="questionPopup">
       

       <div className="both">
        <div className="questionSetTitle">Question Set</div><i onClick={props.handleQuesSet} 
        className="fas fa-times" id="cancel-icon"></i>
       </div>
   
        <hr  style={{color: "#D4D4D4"}}></hr>
        
         <div className="nameInput">
         <label>Name</label><input onChange={nameHandler}  className="InputClass"  ></input></div>
       
         <div className="searchInput">
       <p>Select Questions to create a set</p>
     
      <input className="searchInput2" type="text" placeholder=" Type here to search.." name="search"
      
      onChange={searchHandler}
      />
 
       </div>


        {Object.keys(pageData).length===0 
        ?  
        <div className="pageT">
            <div>
           <p>
          

             <p>{t('PAGE_TITLE')}  <i id="dropAngle"  class="fa fa-angle-down"/></p>
           </p>
           
        </div>
   
    </div>
        :
        <div className="pageT">
      
        {   
            Object.keys(pageData).map((idd,pageCount)=>{
                return(
                    <div  key={idd} >
                     <div onClick={() => handleEdit2(idd)} >
           <p onClick={()=>handleOpenClose(idd)} >
        
             <p className="PAGETITLE">  {t('PAGE_TITLE')} {pageCount+1} 
             {/* {opened===idd? <i id="dropAngle" class="fa fa-angle-up"/> :<i id="dropAngle"  class="fa fa-angle-down"/> } */}
             {(opened===idd || opened===secondIdd)  ? <i id="dropAngle" class="fa fa-angle-up"/> :<i id="dropAngle"
               class="fa fa-angle-down"/> }
             &nbsp; </p>

    
           </p>
           
        </div>
        {opened===idd?
            <div>
            {Object.keys(pageData[idd]).length===0?<p >{t('PAGE_TITLE_MESSAGE')}</p>:null}

                {
                    Object.keys(pageData[idd]).map((id,count)=>{


                        // if( IdOfQuestions.includes(id))
                        // {
                        //     setcheckForCheckbox(true);
                        // }else{
                        //     setcheckForCheckbox(false);
                        // }

                     

//checked={IdOfQuestions.includes(id) ? true : false }


                      console.log("pageCount is " + pageCount + " count is " + count);

                        return(
                             <div key={id} >
                            <div className="Pquestion" >
                           
                            
                            { arrayOfId.includes(id) ? <p ><input onClick={()=> addDataToFireBase(id,idd)}  className="PBox"  type="checkbox"
                                 checked="true"
                            />    
                         {count+1}. &nbsp; {(pageData[idd])[id].question} </p> :
                         <p ><input onClick={()=> addDataToFireBase(id,idd)}  className="PBox"  type="checkbox"
                            />    
                         {count+1}. &nbsp; {(pageData[idd])[id].question} </p>}                       
                        



                             {/* {checkForCheckbox ? <p ><input onClick={()=> addDataToFireBase(id,idd)} checked="true"
                             className="PBox" 
                               type="checkbox"/>    
                                 {count+1}. &nbsp; {(pageData[idd])[id].question} </p> :
                         <p ><input onClick={()=> addDataToFireBase(id,idd)}  className="PBox" checked="true" type="checkbox"/>    
                         {count+1}. &nbsp; {(pageData[idd])[id].question} </p> } */}
                        


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
      
        <div style={{position:"static"},{marginTop: "120px"}}>
        <button onClick={props.handleQuesSet} className="CancelButton">Cancel</button>
        
        
        {EditChecked?
        <button onClick={SaveHandler} className="CreateButton">SAVE</button> :
        <button onClick={createCheckHandler} className="CreateButton">Create</button> 
    }
        
        </div>

        </div>
         {/* { checkCreate && Object.keys(questionData).length!==0 ? */}

        { checkCreate  ?
        <QuestionSet EditHandler={EditCheckHandler} handleQuesSet={props.handleQuesSet}  handleCheckCreate={createCheckHandler2} className="questionPopup"/> :null
            }
        </div>
        </>
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

export default connect(mapStateToProps,matDispatchToProps)(Ptitle);

