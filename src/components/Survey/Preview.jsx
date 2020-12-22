import React,{useState, useEffect} from 'react';
import "./Themes.css";
import firebaseDb from "../../firebase";
import makeStyles from "@material-ui/core/styles/makeStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import { SketchPicker } from 'react-color';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import single1 from "../../Images/single1.png";
import single2 from "../../Images/single2.png";
import single3 from "../../Images/single3.png";
import multi1 from "../../Images/multi1.png";
import multi2 from "../../Images/multi2.png";
import vertical from "../../Images/vertical.png";
import horizontal from "../../Images/horizontal.png";
import visual1 from "../../Images/visual1.png";
import visual2 from "../../Images/visual2.png";
import visual3 from "../../Images/visual3.png";
import textColor from "../../Images/textColor.png";
import backgroundColor from "../../Images/backgroundColor.png";
import downloadTheme from "../../Images/downloadTheme.png";
import uploadTheme from "../../Images/uploadTheme.png";
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import CheckIcon from '@material-ui/icons/Check';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import SvgDownloadThemes from "../../iconComponents/DownloadThemes.tsx";
import SvgUploadThemes from "../../iconComponents/UploadThemes.tsx";
import {addInfo} from "../../Actions/Listen";
import {connect} from "react-redux";
import "./preview.css";

const useStyles= makeStyles({
    labelStyle: {
        fontSize: props => parseInt(props.labelStyle.fontSize),
        color:props => props.labelStyle.color,
        textDecoration:props => props.labelStyle.textDecoration,
        fontStyle:props => props.labelStyle.fontStyle,
        fontWeight:props => props.labelStyle.fontWeight,
        fontFamily:props=> props.labelStyle.fontFamily,
        backgroundColor:props=> props.labelStyle.backgroundColor
    },
    inputStyle:{
        fontSize: props => parseInt(props.inputStyle.fontSize),
        color:props => props.inputStyle.color,
        textDecoration:props => props.inputStyle.textDecoration,
        fontStyle:props => props.inputStyle.fontStyle,
        fontWeight:props => props.inputStyle.fontWeight,
        fontFamily:props=> props.inputStyle.fontFamily,
        marginRight:props => props.inputStyle.marginRight
    },
    themeStyle:{
        backgroundColor:props => props.themeStyle.backgroundColor,
        margin:props => props.themeStyle.margin,
        padding:props => props.themeStyle.padding,
        overflow:props => props.themeStyle.overflow
    },
    checkboxStyle:{
        height:props => parseInt(props.checkboxStyle.height),
        width:props => parseInt(props.checkboxStyle.width),
    },
    optionsDisplay:{
        display:props => props.optionsDisplay.display,
        marginRight:props=> props.optionsDisplay.marginRight
    },
    headingStyle:{
        fontSize:props => props.headingStyle.fontSize
    },
    root:{
        margin:0,
        padding:0,
        display:"inline-block",
    },
    colorRoot:{
        display:"absolute"
    }
});    

function Preview(prop) {

    useEffect(()=>{
        console.log("in use effect 1");
        firebaseDb.child("themes").on("value",snapshot=>{
            if(snapshot.val()!=null)
            setThemeData({
                ...snapshot.val()
            })
            else{
               firebaseDb.child("themes").set(
                defaultTheme,
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
        
        console.log("in use effect 2");
        firebaseDb.child("allPages").on("value",snapshot=>{
        setPageData({
            ...snapshot.val()
        })
        })
    },[]);

    const [defaultTheme,setDefaultTheme]=useState({
        default:{
        labelStyle:{
            fontSize:12,
            color:"#3A3A3A",
            textDecoration:"",
            fontStyle:"",
            fontWeight:600,
            fontFamily:"Open Sans",
            backgroundColor:"white"
        },
        inputStyle:{
            fontSize:12,
            color:"#3A3A3A",
            textDecoration:"",
            fontStyle:"",
            fontWeight:300,
            fontFamily:"Open Sans",
            marginRight:"2em"
        },
        themeStyle:{
            backgroundColor:"#FFFFFF",
            margin:"1em 6em 2em",
            padding:".5em 2em 2em",
            overflow: "scroll"
        },
        checkboxStyle:{
            height:30,
            width:30
        },
        optionsDisplay:{
            display:"block",
        marginRight:"0em"
        },
        headingStyle:{
            fontSize:11
        }
    }});

    const [pageData,setPageData]= useState({});
    const [count,setCount]=useState(1);
    const [showLabelColor,setShowLabelColor]=useState(false);
    const [showInputColor,setShowInputColor]=useState(false);
    const [showBackgroundColor,setShowBackgroundColor]= useState(false);
    const [showThemeColor,setShowThemeColor]=useState(false);
    const [inputVariant,setInputVariant]=useState("outlined-out");
    const [singleDisplay, setSingleDisplay]=useState("dot");
    const [multiDisplay, setMultiDisplay]=useState("");
    const default1={
        labelStyle:{
            fontSize:12,
            color:"#3A3A3A",
            textDecoration:"",
            fontStyle:"",
            fontWeight:600,
            fontFamily:"Open Sans",
            backgroundColor:"white"
        },
        inputStyle:{
            fontSize:12,
            color:"#3A3A3A",
            textDecoration:"",
            fontStyle:"",
            fontWeight:300,
            fontFamily:"Open Sans",
            marginRight:"2em"
        },
        themeStyle:{
            backgroundColor:"#FFFFFF",
            margin:"1em 6em 2em",
            padding:".5em 2em 2em",
            overflow: "scroll"
        },
        checkboxStyle:{
            height:30,
            width:30
        },
        optionsDisplay:{
            display:"block",
        marginRight:"0em"
        },
        headingStyle:{
            fontSize:11
        }
    };
    const [themeData,setThemeData]=useState({
        "default":default1
    });
    // console.log(themeData);
    
    const [currentThemeId,setCurrentThemeId]=useState("default");

    const [labelStyle,setLabelStyle]=useState({
        fontSize:themeData[currentThemeId].labelStyle.fontSize,
        color:themeData[currentThemeId].labelStyle.color,
        textDecoration:themeData[currentThemeId].labelStyle.textDecoration,
        fontStyle:themeData[currentThemeId].labelStyle.fontStyle,
        fontWeight:themeData[currentThemeId].labelStyle.fontWeight,
        fontFamily:themeData[currentThemeId].labelStyle.fontFamily,
        backgroundColor:themeData[currentThemeId].labelStyle.backgroundColor,
    });
    // console.log({labelStyle});
    // console.log({currentThemeId});
    const [inputStyle,setInputStyle]=useState({
        fontSize:themeData[currentThemeId].inputStyle.fontSize,
        color:themeData[currentThemeId].inputStyle.color,
        textDecoration:themeData[currentThemeId].inputStyle.color,
        fontStyle:themeData[currentThemeId].inputStyle.fontStyle,
        fontWeight:themeData[currentThemeId].inputStyle.fontWeight,
        fontFamily:themeData[currentThemeId].inputStyle.fontFamily,
        marginRight:themeData[currentThemeId].inputStyle.marginRight
    });
    const [themeStyle,setThemeStyle]=useState({
        backgroundColor:themeData[currentThemeId].themeStyle.backgroundColor,
        margin:themeData[currentThemeId].themeStyle.margin,
        padding:themeData[currentThemeId].themeStyle.padding,
        overflow: themeData[currentThemeId].themeStyle.overflow
    });
    const [checkboxStyle,setCheckboxStyle]=useState({
        height:themeData[currentThemeId].checkboxStyle.height,
        width:themeData[currentThemeId].checkboxStyle.width
    });
    const [optionsDisplay,setOptionsDisplay]=useState({
        display:themeData[currentThemeId].optionsDisplay.display,
        marginRight:themeData[currentThemeId].optionsDisplay.marginRight
    });
    const [headingStyle,setHeadingStyle]=useState({
        fontSize:themeData[currentThemeId].headingStyle.fontSize
    });

    useEffect(() => {
        setLabelStyle((prev)=>{
            return({ 
                fontSize:themeData[currentThemeId].labelStyle.fontSize,
                color:themeData[currentThemeId].labelStyle.color,
                textDecoration:themeData[currentThemeId].labelStyle.color,
                fontStyle:themeData[currentThemeId].labelStyle.fontStyle,
                fontWeight:themeData[currentThemeId].labelStyle.fontWeight,
                fontFamily:themeData[currentThemeId].labelStyle.fontFamily,
                marginRight:themeData[currentThemeId].labelStyle.marginRight
            })  
            });
            setInputStyle({
                fontSize:themeData[currentThemeId].inputStyle.fontSize,
        color:themeData[currentThemeId].inputStyle.color,
        textDecoration:themeData[currentThemeId].inputStyle.color,
        fontStyle:themeData[currentThemeId].inputStyle.fontStyle,
        fontWeight:themeData[currentThemeId].inputStyle.fontWeight,
        fontFamily:themeData[currentThemeId].inputStyle.fontFamily,
        marginRight:themeData[currentThemeId].inputStyle.marginRight
            });
            setThemeStyle({
                backgroundColor:themeData[currentThemeId].themeStyle.backgroundColor,
        margin:themeData[currentThemeId].themeStyle.margin,
        padding:themeData[currentThemeId].themeStyle.padding,
        overflow: themeData[currentThemeId].themeStyle.overflow
            });
            setCheckboxStyle({
                height:themeData[currentThemeId].checkboxStyle.height,
        width:themeData[currentThemeId].checkboxStyle.width
            });
            setOptionsDisplay({
                display:themeData[currentThemeId].optionsDisplay.display,
        marginRight:themeData[currentThemeId].optionsDisplay.marginRight
            });
            setHeadingStyle({
                fontSize:themeData[currentThemeId].headingStyle.fontSize
            })
    }, [themeData])
    
    // const [labelFont,setLabelFont]=useState(10);
    
    const props = {
        labelStyle:{
            fontSize: labelStyle.fontSize,
            color:labelStyle.color,
            textDecoration:labelStyle.textDecoration,
            fontStyle:labelStyle.fontStyle,
            fontWeight:labelStyle.fontWeight,
            fontFamily:labelStyle.fontFamily,
            backgroundColor:labelStyle.backgroundColor
        },
        inputStyle:{
            fontSize: inputStyle.fontSize,
            color:inputStyle.color,
            textDecoration:inputStyle.textDecoration,
            fontStyle:inputStyle.fontStyle,
            fontWeight:inputStyle.fontWeight,
            fontFamily:inputStyle.fontFamily,
            marginRight:inputStyle.marginRight
        },
        themeStyle:{
            backgroundColor:themeStyle.backgroundColor,
            margin:themeStyle.margin,
            padding:themeStyle.padding,
            overflow:themeStyle.overflow
        },
        checkboxStyle:{
            height:checkboxStyle.height,
            width:checkboxStyle.width
        },
        optionsDisplay:{
            display:optionsDisplay.display,
            marginRight:optionsDisplay.marginRight
        },
        headingStyle:{
            fontSize:headingStyle.fontSize
        }
    };
    
    const classes=useStyles(props);

    const [currentTheme,setCurrentTheme]=useState({
        default:{
        labelStyle:{
            fontSize:labelStyle.fontSize,
            color:labelStyle.color,
            textDecoration:labelStyle.textDecoration,
            fontStyle:labelStyle.fontStyle,
            fontWeight:labelStyle.fontWeight,
            fontFamily:labelStyle.fontFamily,
            backgroundColor:labelStyle.backgroundColor 
        },
        inputStyle:{
            fontSize:inputStyle.fontSize,
            color:inputStyle.color,
            textDecoration:inputStyle.textDecoration,
            fontStyle:inputStyle.fontStyle,
            fontWeight:inputStyle.fontWeight,
            fontFamily:inputStyle.fontFamily,
            marginRight:inputStyle.marginRight
        },
        themeStyle:{
            backgroundColor:themeStyle.backgroundColor,
            margin:themeStyle.margin,
            padding:themeStyle.padding,
            overflow:themeStyle.overflow
        },
        checkboxStyle:{
            height:checkboxStyle.height,
            width:checkboxStyle.width
        },
        optionsDisplay:{
            display:optionsDisplay.display,
        marginRight:optionsDisplay.marginRight
        },
        headingStyle:{
            fontSize:headingStyle.fontSize
        }
    }});

    useEffect(() => {
        setCurrentTheme({
            default:{
            labelStyle:{
                fontSize:labelStyle.fontSize,
                color:labelStyle.color,
                textDecoration:labelStyle.textDecoration,
                fontStyle:labelStyle.fontStyle,
                fontWeight:labelStyle.fontWeight,
                fontFamily:labelStyle.fontFamily,
                backgroundColor:labelStyle.backgroundColor
            },
            inputStyle:{
                fontSize:inputStyle.fontSize,
                color:inputStyle.color,
                textDecoration:inputStyle.textDecoration,
                fontStyle:inputStyle.fontStyle,
                fontWeight:inputStyle.fontWeight,
                fontFamily:inputStyle.fontFamily,
                marginRight:inputStyle.marginRight
            },
            themeStyle:{
                backgroundColor:themeStyle.backgroundColor,
                margin:themeStyle.margin,
                padding:themeStyle.padding,
                overflow:themeStyle.overflow
            },
            checkboxStyle:{
                height:checkboxStyle.height,
                width:checkboxStyle.width
            },
            optionsDisplay:{
                display:optionsDisplay.display,
            marginRight:optionsDisplay.marginRight
            },
            headingStyle:{
                fontSize:headingStyle.fontSize
            }
        }})
    }, [labelStyle,inputStyle,themeStyle,checkboxStyle,optionsDisplay,headingStyle]);
    
    
    console.log({themeData});
    console.log(labelStyle.fontSize);
    console.log(currentTheme.default.labelStyle.fontSize);
    // console.log({currentTheme});
    
    // const [optionsDisplay,setOptionsDisplay]=useState("vertical");
    

    // function handleLabelTextSize(event){
    //     // console.log(event.target.value);
    //     const {name,value}=event.target;
    //     setLabelStyle((prev) =>{
    //         return{
    //             ...prev,[name]:value
    //         }
    //     });
    //     console.log(labelStyle.labelFont);
    // }

    function handleLabelTextStyle(event){
        const {name,value}=event.target;
        if(name==="fontSize"){
            setLabelStyle((prev) =>{
                return{
                    ...prev,[name]:value
                }
            });
        }
        else if(name==="fontFamily"){
            setLabelStyle((prev) =>{
                return{
                    ...prev,fontFamily:value
                }
            });
        } else
        {
        if(value==="none"){
            setLabelStyle((prev) =>{
                return{
                    ...prev,fontWeight:"",fontStyle:"",textDecoration:""
                }
            });
        
        }
        else if(value==="bolder"){
            setLabelStyle((prev) =>{
                return{
                    ...prev,fontWeight:value,fontStyle:"",textDecoration:""
                }
            });
        }
        else if(value==="italic"){
            setLabelStyle((prev) =>{
                return{
                    ...prev,fontWeight:"",fontStyle:value,textDecoration:""
                }
            });
        } 
        else if(value==="underline"){
            setLabelStyle((prev) =>{
                return{
                    ...prev,fontWeight:"",fontStyle:"",textDecoration:value
                }
            });
        }
        else if(value==="italic-bolder"){
            setLabelStyle((prev) =>{
                return{
                    ...prev,fontWeight:"bolder",fontStyle:"italic",textDecoration:""
                }
            });
        }
    }  
    }
    function handleInputTextStyle(event){
        const {name,value}=event.target;
        if(name==="fontSize"){
            setInputStyle((prev) =>{
                return{
                    ...prev,[name]:value
                }
            });
        }
        else if(name==="fontFamily"){
            setInputStyle((prev) =>{
                return{
                    ...prev,fontFamily:value
                }
            });
        } else
        {
        if(value==="none"){
            setInputStyle((prev) =>{
                return{
                    ...prev,fontWeight:"",fontStyle:"",textDecoration:""
                }
            });
        }
        else if(value==="bolder"){
            setInputStyle((prev) =>{
                return{
                    ...prev,fontWeight:value,fontStyle:"",textDecoration:""
                }
            });
        }
        else if(value==="italic"){
            setInputStyle((prev) =>{
                return{
                    ...prev,fontWeight:"",fontStyle:value,textDecoration:""
                }
            });
        }
        else if(value==="underline"){
            setInputStyle((prev) =>{
                return{
                    ...prev,fontWeight:"",fontStyle:"",textDecoration:value
                }
            });
        }
        else if(value==="italic-bolder"){
            setInputStyle((prev) =>{
                return{
                    ...prev,fontWeight:"bolder",fontStyle:"italic",textDecoration:""
                }
            });
        }
    }  
    }

    function handleLabelTextColor(updatedColor){
        setLabelStyle((prev) =>{
            return{
                ...prev,color:updatedColor.hex
            }
        });
    }

    function handleInputTextColor(updatedColor){
        setInputStyle((prev) =>{
            return{
                ...prev,color:updatedColor.hex
            }
        });
    }
    function handleBackgroundColor(updatedColor){
        setLabelStyle((prev) =>{
            return{
                ...prev,backgroundColor:updatedColor.hex
            }
        });
    }
    function handleThemeColor(updatedColor){
        setThemeStyle((prev) =>{
            return{
                ...prev,backgroundColor:updatedColor.hex
            }
        });
    }
    function handleInputVariant(event,newValue){
        setInputVariant(newValue);
    };
    function handleSingleDisplay(event,newValue){
        setSingleDisplay(newValue);
    };
    function handleMultiDisplay(event,newValue){
        setMultiDisplay(newValue);
    };
    function handleOptionsDisplay(event,newValue){
        if(newValue==="horizontal"){
            setOptionsDisplay((prev) =>{
                return{
                    ...prev,display:"inline"
                }
            });
        }
        else {
            setOptionsDisplay((prev) =>{
                return{
                    ...prev,display:"block"
                }
            });
        }
        }
    function increaseThemeSize(){
            setHeadingStyle((prev) => {
                return{
                    ...prev, fontSize:parseInt(headingStyle.fontSize)+1
                }
            })
            setInputStyle((prev) => {
                return{
                    ...prev, fontSize:parseInt(inputStyle.fontSize)+1
                }
            })
            setLabelStyle((prev) => {
                return{
                    ...prev, fontSize:parseInt(labelStyle.fontSize)+1
                }
            })
    }
    function decreaseThemeSize(){
        setHeadingStyle((prev) => {
            return{
                ...prev, fontSize:parseInt(headingStyle.fontSize)-1
            }
        })
        setInputStyle((prev) => {
            return{
                ...prev, fontSize:parseInt(inputStyle.fontSize)-1
            }
        })
        setLabelStyle((prev) => {
            return{
                ...prev, fontSize:parseInt(labelStyle.fontSize)-1
            }
        })
    }
    function SaveTheme(){
        firebaseDb.child("themes").set(
            JSON.parse( JSON.stringify(currentTheme) ),
            err=>{
                if(err){
                    console.log(err);
                } else
                {
                    console.log("saved theme changes to firebase");
                }
            }
        )
    }
    const [pageIndex,setPageIndex]=useState(0);
    const [quesIndex,setQuesIndex]=useState(0);
    const [selectedPageId,setSelectedPageId]=useState();
    const [selectedQuesId,setSelectedQuesId]=useState();

    function increaseSelectedPage(){
        setPageIndex(pageIndex+1);
    }
    function decreaseSelectedPage(){
        setPageIndex(pageIndex-1);
    }
    function decreaseSelectedQues() {
        setQuesIndex(quesIndex-1);
    }
    function increaseSelectedQues() {
        setQuesIndex(quesIndex+1);
    }
    function increaseSelectedPagenQues() {
        setPageIndex(pageIndex+1);
        setQuesIndex(0);

    }
    const [tempState,setTempState]=useState("display3");
    console.log({prop});
    
useEffect(() => {
    if(pageData){
        var pageIdArray= Object.keys(pageData);
        // console.log(pageIdArray);
        var selectedPageIdIn=pageIdArray[pageIndex];
        setSelectedPageId(pageIdArray[pageIndex]);
        console.log(selectedPageIdIn);
        // console.log(pageData[selectedPageIdIn]);
        if(selectedPageIdIn){
            var quesIdArray=Object.keys((pageData[selectedPageIdIn]));
            // console.log(quesIdArray);
            var selectedQuesIdIn=quesIdArray[quesIndex];
            setSelectedQuesId(quesIdArray[quesIndex]);
            // console.log(selectedQuesIdIn);
        }
        }
}, [pageIndex,quesIndex,pageData]);

console.log(pageIndex);
console.log(Object.keys(pageData).length);

    
// console.log(selectedPageId);
// console.log(selectedQuesId);    
    
    
    
    // const selectedQuesId=(pageIdArray[selectedPageId])[0];

    return (
        <>
        <div className="shade-main-preview"> </div>
                
                <div className="preview-questions" style={{height:"90vh"}}>
                    <div className={classes.themeStyle}>
                        <div className="theme-questions-header">
                        {prop.logo && <img src={prop.logo.imageObjectURL} alt="image"/>}
                            <p className={classes.headingStyle} >Employee Satisfaction Survey</p>
                            {/* 10% percent complete */}
                        </div>
                        {/* <p className={classes.headingStyle} style={{marginBottom:"2em"}}>Welcome Message here </p> */}
                        {tempState==="display3" &&
                        <p className={classes.headingStyle} >Page {pageIndex+1} out of {(Object.keys(pageData).length)} </p> }

                         {/* DISPLAY 1 SINGLE QUESTIONS ONLY */}
                        {/* ______________________________________________________________________________________________________ */}
                        {tempState==="display1" && <>
                        {Object.keys(pageData).map((idd,counto)=>{
                            return(
                                <>
                                {selectedPageId===idd &&
                                <div  key={idd}>
                                 <>
                                 
                                {
                                Object.keys(pageData[idd]).map((id,counti)=>{
                                    return(
                                        <>
                                        {selectedQuesId===id &&
                                    <div className="theme-ques" style={{height:"75vh",textAlign:"center"}}  key={id}>
                                        {(pageData[idd])[id].options || inputVariant!=="outlined-in" ?
                                        <p className={classes.labelStyle}> {count}. &nbsp; {(pageData[idd])[id].question} </p>
                                        : null}

                                        {(pageData[idd])[id].options && (pageData[idd])[id].options!="" ?
                                        <div>
                                        {Object.keys((pageData[idd])[id].options).map((i)=>{
                                            return(
                                                <div className={classes.optionsDisplay} key={i}>
                                                    {(pageData[idd])[id].type==="single-select"
                                                    ? <label htmlFor={id} className={singleDisplay==="dot"? `radio-container ${classes.inputStyle}` 
                                                        :[singleDisplay==="toggle"? `radio-container ${classes.inputStyle}` :classes.inputStyle ]  } >
                                                        <input type="radio" name={id} value={i} id={i} /> &nbsp;
                                                        <span className="checkmark"></span>
                                                    {(pageData[idd])[id].options[i].name}
                                                      </label>

                                                    :[ (pageData[idd])[id].type==="multi-select"
                                                    ? <label className={classes.inputStyle}  htmlFor={i}>
                                                    <input type="checkbox" className={multiDisplay==="lined" ? "checkboxStyles": "" } style={{height:"1.4em", width:"1.4em" }} name={i} value={i} id={i} /> &nbsp;
                                                    <span className="checkboxStyles-span"></span>
                                                    {(pageData[idd])[id].options[i].name}
                                                    </label>
                                                    : null]
                                                    }
                                                </div>
                                            )
                                        })} 
                                        </div> 
                                        : 
                                        <TextField
                                            id="outlined-helperText"
                                            label={inputVariant==="outlined-in" ? <div> <p className={classes.labelStyle}> {count}. &nbsp; {(pageData[idd])[id].question} </p> </div>
                                            : null
                                            }
                                            multiline
                                            rows={1}
                                            // defaultValue="Enter here"
                                            // helperText="Some important text"
                                            variant={inputVariant==="outlined-out" || inputVariant==="outlined-in"  ? "outlined" : "standard" }
                                            InputLabelProps={{
                                                 shrink: true,
                                            }}
                                            />
                                        
                                        }
                                    </div>
                                        }
                                    </>
                                    )})
                                } </> 
                                </div> } </>
                                )
                            })} 
                            <div className="preview-buttons">
                                {quesIndex===0 && pageIndex===0? null :
                                <button onClick={decreaseSelectedQues}> Previous</button> }
                                
                                {(pageIndex+1)===(Object.keys(pageData).length) && (quesIndex+1)===(Object.keys(pageData[selectedPageId]).length)
                                ? null
                                :[
                                    (quesIndex+1)===3
                                    ? <button onClick={increaseSelectedPagenQues}> Next</button>
                                :
                                <button onClick={increaseSelectedQues}> Next</button> 
                                ]}
    

                            </div>
                            </>}
                                    {/* DISPLAY 2 QUESTIONS PAGE WISE */}
                        {/* ______________________________________________________________________________________________________ */}
                        {tempState==="display3" && <>
                        {Object.keys(pageData).map((idd,counto)=>{
                            return(
                                <>
                                {selectedPageId===idd &&
                                <div  key={idd}>
                                 <>
                                 
                                {
                                Object.keys(pageData[idd]).map((id,counti)=>{
                                    return(
                                    <div className="theme-ques" key={id}>                                     
                        
                                        {(pageData[idd])[id].options || inputVariant!=="outlined-in" ?
                                        <p className={classes.labelStyle}> {count}. &nbsp; {(pageData[idd])[id].question} </p>
                                        : null}

                                        {(pageData[idd])[id].options && (pageData[idd])[id].options!="" ?
                                        <div>
                                        {Object.keys((pageData[idd])[id].options).map((i)=>{
                                            return(
                                                <div className={classes.optionsDisplay} key={i}>
                                                    {(pageData[idd])[id].type==="single-select"
                                                    ? <label htmlFor={id} className={singleDisplay==="dot"? `radio-container ${classes.inputStyle}` 
                                                        :[singleDisplay==="toggle"? `radio-container ${classes.inputStyle}` :classes.inputStyle ]  } >
                                                        <input type="radio" name={id} value={i} id={i} /> &nbsp;
                                                        <span className="checkmark"></span>
                                                    {(pageData[idd])[id].options[i].name}
                                                      </label>

                                                    :[ (pageData[idd])[id].type==="multi-select"
                                                    ? <label className={classes.inputStyle}  htmlFor={i}>
                                                    <input type="checkbox" className={multiDisplay==="lined" ? "checkboxStyles": "" } style={{height:"1.4em", width:"1.4em" }} name={i} value={i} id={i} /> &nbsp;
                                                    <span className="checkboxStyles-span"></span>
                                                    {(pageData[idd])[id].options[i].name}
                                                    </label>
                                                    : null]
                                                    }
                                                </div>
                                            )
                                        })} 
                                        </div> 
                                        : 
                                        <TextField
                                            id="outlined-helperText"
                                            label={inputVariant==="outlined-in" ? <div> <p className={classes.labelStyle}> {count}. &nbsp; {(pageData[idd])[id].question} </p> </div>
                                            : null
                                            }
                                            multiline
                                            rows={1}
                                            // defaultValue="Enter here"
                                            // helperText="Some important text"
                                            variant={inputVariant==="outlined-out" || inputVariant==="outlined-in"  ? "outlined" : "standard" }
                                            InputLabelProps={{
                                                 shrink: true,
                                            }}
                                            />
                                        
                                        }
                                    </div>
                                    )})
                                } </> 
                                </div> } </>
                                )
                            })} 
                            <div className="preview-buttons">
                                {pageIndex===0? null :
                                <button onClick={decreaseSelectedPage}> Previous</button> }
                                {(pageIndex+1)===(Object.keys(pageData).length)? null :
                                <button onClick={increaseSelectedPage}> Next</button>}
                            </div>
                            </>}
                             {/* DISPLAY ALL QUESTIONS AT ONCE */}
                        {/* ______________________________________________________________________________________________________ */}
                        {tempState==="display2" && <>
                        {Object.keys(pageData).map((idd,counto)=>{
                            return(
                                <div  key={idd}>
                                 <>
                                {
                                Object.keys(pageData[idd]).map((id,counti)=>{
                                    return( 
                                    <div className="theme-ques" key={id}>                                      
                        
                                        {(pageData[idd])[id].options || inputVariant!=="outlined-in" ? 
                                        <p className={classes.labelStyle}> {count}. &nbsp; {(pageData[idd])[id].question} </p>
                                        : null}

                                        {(pageData[idd])[id].options && (pageData[idd])[id].options!="" ?
                                        <div>
                                        {Object.keys((pageData[idd])[id].options).map((i)=>{
                                            return(
                                                <div className={classes.optionsDisplay} key={i}>
                                                    {(pageData[idd])[id].type==="single-select"
                                                    ? <label htmlFor={id} className={singleDisplay==="dot"? `radio-container ${classes.inputStyle}` 
                                                        :[singleDisplay==="toggle"? `radio-container ${classes.inputStyle}` :classes.inputStyle ]  } >
                                                        <input type="radio" name={id} value={i} id={i} /> &nbsp;
                                                        <span className="checkmark"></span>
                                                    {(pageData[idd])[id].options[i].name}
                                                      </label>

                                                    :[ (pageData[idd])[id].type==="multi-select"
                                                    ? <label className={classes.inputStyle}  htmlFor={i}>
                                                    <input type="checkbox" className={multiDisplay==="lined" ? "checkboxStyles": "" } style={{height:"1.4em", width:"1.4em" }} name={i} value={i} id={i} /> &nbsp;
                                                    <span className="checkboxStyles-span"></span>
                                                    {(pageData[idd])[id].options[i].name}
                                                    </label>
                                                    : null]
                                                    }
                                                </div>
                                            )
                                        })} 
                                        </div> 
                                        : 
                                        <TextField
                                            id="outlined-helperText"
                                            label={inputVariant==="outlined-in" ? <div> <p className={classes.labelStyle}> {count}. &nbsp; {(pageData[idd])[id].question} </p> </div>
                                            : null
                                            }
                                            multiline
                                            rows={1}
                                            // defaultValue="Enter here"
                                            // helperText="Some important text"
                                            variant={inputVariant==="outlined-out" || inputVariant==="outlined-in"  ? "outlined" : "standard" }
                                            InputLabelProps={{
                                                 shrink: true,
                                            }}
                                            />
                                        
                                        }
                                    </div>
                                    )})
                                } </> 
                                </div>
                                )
                            })} </> }
                            
                    </div>       
                    
                    <div className="submit-button">
                        <button> Submit</button>
                    </div>
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
      showQuestions:state.surveyInfo.showQuestions,
      surveyDetails:state.surveyDetails
    }
  }

function mapDispatchToProps(dispatch){
    return{
      changeData:(data)=>{dispatch(addInfo(data))}
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Preview);
// export default Themes;