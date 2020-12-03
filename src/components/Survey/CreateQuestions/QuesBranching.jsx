import React, {useState, useEffect} from 'react';
import "./QuesBranching.css";


function QuesBranching(props) {

    const [branchQuestion, setBranchQuestion]=useState("");
    const [branchOptions,setBranchOptions]=useState("");
    const [logic,setLogic]=useState([]);
    const [forQuestion,setForQuestion]=useState([]);

    useEffect(() => {
        
            setBranchQuestion({
                ...(props.pageData[props.selectedIdd])[props.selectedId]
            });
            
        setBranchOptions({
            ...(props.pageData[props.selectedIdd])[props.selectedId].options
            });
        
    }, [props.pageData, props.selectedId, props.selectedIdd])

    var logicArray=[];

    function addToLogic(event){
        const {name,value}=event.target;
        logicArray.push(value);
        setLogic(logicArray);
    }
    
    function editLogic(logicItem,logicCount,event){
        logicArray.push(...logic);
        const {name,value}=event.target;
        if(name==="andOrLogic"){
            logicArray.splice(logicCount, 1, value);
            setLogic(logicArray);
        } else
        {
        console.log({logicCount});
        logicArray.splice(logicCount, 1, value);
        console.log({logicArray});
        setLogic(logicArray);
        }
    }

    function addEmptyToLogic(){
        setLogic((prev)=> {
            return[
                ...prev,"OR",""
            ]
        })
        // logicArray.push("");
        // console.log({logicArray});
    }

    function removeFromLogic(logicCount,event){
        logicArray.push(...logic);
        logicArray.splice(logicCount, 1);
        // console.log({logicArray});
        setLogic(logicArray);
    }

    var forQuestionArray=[];
    
    function handleForQuestion(event,forQuestionCount){
        const index=event.target.selectedIndex;
        const name=event.target.options[index].getAttribute("name");
        // console.log(event.target.options[index].outerHTML);
        // console.log(event.target.options[index].value);
        const value=event.target.value;
        console.log("inside handle for");
        const object={
            "pageId":name,
            "quesId":value
        };
        
        forQuestionArray.push(...forQuestion);
        // const {name,value}=event.target;
        // if(name==="andOrLogic"){
        //     forQuestionArray.splice(logicCount, 1, value);
        //     setLogic(forQuestionArray);
        // } else
        // {
        // console.log({logicCount});
        forQuestionArray.splice(forQuestionCount, 1, object);
        // console.log({logicArray});
        setForQuestion(forQuestionArray);
    }

    function addToForQuestion(event){
        const index=event.target.selectedIndex;
        const name=event.target.options[index].getAttribute("name");
        const value=event.target.value;
        const object={
            "pageId":name,
            "quesId":value
        };
        forQuestionArray.push(object);
        setForQuestion(forQuestionArray);
        console.log("inside add to ");
        
    }

    function addEmptyToForQuestion(){
        const object={
            "pageId":"",
            "quesId":""
        };
        setForQuestion((prev)=> {
            return[
                ...prev,object
            ]
        })
        // logicArray.push("");
        // console.log({logicArray});
    }

    function removeFromForQuestion(forQuestionCount,event){
        forQuestionArray.push(...forQuestion);
        forQuestionArray.splice(forQuestionCount, 1);
        // console.log({logicArray});
        setForQuestion(forQuestionArray);
    }
    // console.log(branchQuestion);
    console.log({forQuestion});    
    
    return (
        <>
        <div className="shade-main2"></div>
        <div className="branching-main">
            <p className="branching-main-header"> Question Branching</p>
            <p className="branching-if-p">
            If Answer to this question  
            <span> Q {branchQuestion.question} </span>  is</p>
            <div className="select-option">
            {logic.length!==0?
            <>
                {logic.map((logicItem,logicCount) => {
                    return(
                        <>
                        {logicCount%2===0
                        ?
                        <>
                        <select onChange={(event) => editLogic(logicItem,logicCount,event)} value={logicItem===""? "-Select Answer-" :logic[logicCount]}  name="optionLogic" id="logic" className="select-answer">
                <option value=""> -Select Answer- </option>
                {Object.keys(branchOptions).map(optionId =>{
                    return(
                        <>
                        <option value={optionId}> {branchOptions[optionId].name} </option>
                        </>
                    )
                })}
                </select>
                <button onClick={addEmptyToLogic}>+</button> 
                <button onClick={removeFromLogic}>-</button>
                </>
                :
                <>
                <select name="andOrLogic" id="" onChange={(event)=>editLogic(logicItem,logicCount,event)} value={logic[logicCount]} >
                    <option value="OR">OR</option>
                    <option value="AND">AND</option>
                </select>  <br/>
                </>
            
                        }
                        </>
                    )
                })}
               </>
               :
               <>
               <select onChange={addToLogic}  name="logic" id="logic" className="select-answer">
                <option value=""> -Select Answer- </option>
                {Object.keys(branchOptions).map(optionId =>{
                    return(
                        <>
                        <option value={optionId}> {branchOptions[optionId].name} </option>
                        </>
                    )
                })}
                </select>
               </>
            }
            </div>

            <p className="branching-if-p">then Show Question </p>
            <div className="select-option">
            {forQuestion.length!==0
            ?
            <>
                {forQuestion.map((forQuestionItem,forQuestionCount) =>{
                    return(
                        <>
                <select  id=""
                value={forQuestion[forQuestionCount].quesId} name={forQuestion[forQuestionCount].pageId}
                // value={(props.pageData[forQuestion[forQuestionCount].pageId])[forQuestion[forQuestionCount].quesId].question}
                className="select-question" onChange={(event) => handleForQuestion(event,forQuestionCount)} >
                    {/* map function for all questions here */}
                    <option value=""> -Select Question- </option>
                    {Object.keys(props.pageData).map(pageId =>{
                    return(
                        <>
                        {Object.keys(props.pageData[pageId]).map(quesId =>{
                    return(
                        <option key={quesId} name={pageId} value={quesId}> {(props.pageData[pageId])[quesId].question} </option>
                    )
                })}
                        </>
                    )
                })}
                </select>
                <button onClick={addEmptyToForQuestion}>+</button>
                <button onClick={removeFromForQuestion}>-</button>
                <br/>
                        </>
                    )
                }
                )}
            </>
            :
            /* if length is zero */
            <>
                <select name="addFirstOne" id="" className="select-question" onChange={(event) => addToForQuestion(event)} >
                    {/* map function for all questions here */}
                    <option value=""> -Select Question- </option>
                    {Object.keys(props.pageData).map(pageId =>{
                    return(
                        <>
                        {Object.keys(props.pageData[pageId]).map(quesId =>{
                    return(
                        <option key={quesId} name={pageId} value={quesId}> {(props.pageData[pageId])[quesId].question} </option>
                    )
                })}
                        </>
                    )
                })}
                </select>
                <button onClick={addEmptyToForQuestion}>+</button>
                <button onClick={removeFromForQuestion}>-</button>
                <br/>
                        </>
            }
            </div>
            <div className="saveCancelBtn">
                <button onClick={props.handleQuesBranchingCheck} className="cancel-button"> Cancel </button>
                <button  className="save-button">Save</button>
            </div>
        </div>
        </>
    )
}

export default QuesBranching
