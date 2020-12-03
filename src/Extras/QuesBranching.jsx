import React, {useState, useEffect} from 'react';
import "./QuesBranching.css";


function QuesBranching(props) {

    const [branchQuestion, setBranchQuestion]=useState("");
    const [branchOptions,setBranchOptions]=useState("");
    // const [logic,setLogic]=useState(["1f620d4c-4211-4433-a8db-0ad9bfc60199","||","ae10f63c-8834-40d0-99c1-b43dbf2780e3"]);
    // const [logic,setLogic]=useState({1:{}});
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

    // useEffect(() => {
    //     console.log(logic);
        
    // }, [logic]);

    // function handleOptionSelect(event,logicId,logicCount){
    //     const {name,value}=event.target;
    //     // setLogic([...logic, value]);
    //     setLogic((prev)=>{
    //         return{
    //             ...prev, [logicId]:{"id":logicCount, "value":value}
    //         }
    //     })

    //     setBranchQuestion((prev) => {
    //         return{
    //         ...prev,logic: {...prev.logic, [logicId]:{"id":logicCount, "value":value}}
    //         }
    //     });
    //     console.log("name: "+ name + " value: "+ value );
    // }

    var logicArray=[];

    function addToLogic(event){
        const {name,value}=event.target;
        logicArray.push(value);
        setLogic(logicArray);
    }

    function editLogic(logicItem,logicCount,event){
        // logicArray=logic;
        logicArray.push(...logic);
        // console.log("inside logic array: "+logicArray);
        const {name,value}=event.target;
        if(name==="andOrLogic"){
            // console.log({logicCount}+1);
            logicArray.splice(logicCount, 1, value);
            setLogic(logicArray);
        } else
        {
        console.log({logicCount});
        // console.log(event.target.name +" : "+ event.target.value);
        logicArray.splice(logicCount, 1, value);
        // logicArray[logicCount]=value;
        console.log({logicArray});
        setLogic(logicArray);
        // setLogic((prev)=> {
        //     return[
        //     ...prev, prev.logicItem=value
        //     ]
        // })
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

    function handleForQuestion(event){
        const index=event.target.selectedIndex;
        const name=event.target.options[index].getAttribute("name");
        // console.log(event.target.options[index].outerHTML);
        // console.log(event.target.options[index].value);
        const value=event.target.value;
        console.log("inside handle for");
        
        
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
    // console.log(branchQuestion);
    console.log({logic});    
    
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

                /* <br/>
                <>
                <select name="" id="" className="select-answer">
                <option value=""> -Select Answer- </option>
                {Object.keys(branchOptions).map(optionId =>{
                    return(
                        <>
                        <option value={optionId}> {optionId} </option>
                        </>
                    )
                })}
                </select>
                <button onClick={handleOptionSelect}>+</button>
                </> */
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
                <select name="kuchBHi" id="" className="select-question" onChange={(event) => handleForQuestion(event)} >
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
                <button>+</button>
                <button>-</button>
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
                <button>+</button>
                <button>-</button>
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
