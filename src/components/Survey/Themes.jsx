import React,{useState, useEffect} from 'react';
import "./Themes.css";
// import '../components.css';
import {addInfo} from "../../Actions/Listen";
import {connect} from "react-redux";
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
// import downloadTheme from "../../Images/downloadTheme.png";
// import uploadTheme from "../../Images/uploadTheme.png";
// import ToggleButton from '@material-ui/lab/ToggleButton';
// import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import CheckIcon from '@material-ui/icons/Check';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import SvgDownloadThemes from "../../iconComponents/DownloadThemes.tsx";
import SvgUploadThemes from "../../iconComponents/UploadThemes.tsx";
import SvgDot from "../../iconComponents/Dot.tsx";
import SvgAnswer1 from "../../iconComponents/Answer1.tsx";
import SvgAnswer2 from "../../iconComponents/Answer2.tsx";
import SvgAnswer3 from "../../iconComponents/Answer3.tsx";
import SvgAttachment from "../../iconComponents/Attachment.tsx";
import SvgFilled from "../../iconComponents/Filled.tsx";
import SvgFilledCheckbox from "../../iconComponents/FilledCheckbox.tsx";
import SvgLinedCheckbox from "../../iconComponents/LinedCheckbox.tsx";
import SvgTabs from "../../iconComponents/Tabs.tsx";



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
        
    },
    colorRoot:{
        display:"absolute"
    }
});    
    

function Themes(prop) {
    const [logoData,setLogoData]=useState();

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
        firebaseDb.child("definitionData/logo/imageBlob").on("value",snapshot=>{
            if(snapshot.val()!=null)
            setLogoData({
                ...snapshot.val()
            })
            console.log(snapshot.val());
            
            
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
    const [saveAsPopup,setSaveAsPopup]=useState(false);
    const [newThemeInput,setNewThemeInput]=useState("");
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
    console.log({themeData});
    
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
    }, [themeData,currentThemeId])
    
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
    });

    useEffect(() => {
        setCurrentTheme({
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
        })
    }, [labelStyle,inputStyle,themeStyle,checkboxStyle,optionsDisplay,headingStyle]);
    
    
    console.log({themeData});
    console.log(labelStyle.fontSize);
    console.log(currentTheme.labelStyle.fontSize);
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
    };
    function handleInputVariant(event){
        const newValue=event.currentTarget.getAttribute("value");
        console.log(event.currentTarget);
        
        setInputVariant(newValue);
    };
    function handleSingleDisplay(event){
        const newValue=event.currentTarget.getAttribute("value");
        setSingleDisplay(newValue);
    };
    function handleMultiDisplay(event){
        const newValue=event.currentTarget.getAttribute("value");
        setMultiDisplay(newValue);
    };
    function handleOptionsDisplay(event){
        const newValue=event.target.getAttribute("value");
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
        firebaseDb.child(`themes/${currentThemeId}`).set(
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

    function handleSaveAsPopup(){
        setSaveAsPopup(!saveAsPopup);
    }

    function addNewTheme(){
        firebaseDb.child(`themes/${newThemeInput}`).set(
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
        setSaveAsPopup(false);
        setCurrentThemeId(newThemeInput);
        setNewThemeInput("");
    }
    function handleNewThemeInput(event){
        const {name,value}=event.target;
        setNewThemeInput(value);
    }
    function handleCurrentThemeId(event){
        setCurrentThemeId(event.target.value)
        console.log(event.target.value);
        
    }
    console.log(props);
    

    return (
        <>
        <div className="shade-main"></div>
        {saveAsPopup? <><div className="shade-main-saveAs"></div><div className="saveAsThemePopUp">
        <p className="newTheme">New Theme Name:</p>
        <input onChange={handleNewThemeInput} name="newTheme" value={newThemeInput} type="text"/>
        <button className="createNew-btn" onClick={addNewTheme}> Create New</button>
        <button className="cancel-btn" onClick={handleSaveAsPopup}> Cancel</button>
        </div></> :null }
        <div className="theme">
            <div className="theme-main">
                <div className="theme-header1">
                    <p 
                    // style={{fontSize:parseInt(labelFont), color:"red"}}
                    > Theme: </p>
                    <select name="" onChange={handleCurrentThemeId} id="">
                    {Object.keys(themeData).map((theme)=>{
                        return(
                            <option name={theme} key={theme} value={theme}> {theme} </option>
                        )
                        
                    })}                        
                    </select>
                    <a> <SvgDownloadThemes/> Download Theme</a>
                    <a> <SvgUploadThemes/> Upload Theme </a>
                    {/* <img src={downloadTheme} alt=""/> <img src={uploadTheme} alt=""/> */}
                    
                </div>

                <div className="theme-questions" >
                    <div className={`theme-questions-inner ${classes.themeStyle}`} >
                        <div className="theme-questions-header">
                            {prop.logo &&<img src={prop.logo.imageObjectURL} alt="image"/>}
                            {/* <img src={logoData} alt="image"/> */}
                            <p className={classes.headingStyle} >Employee Satisfaction Survey</p>
                            
                            {/* 10% percent complete */}
                        </div>
                        <p>Welcome Message</p>
                        

                        {Object.keys(pageData).map((idd,counto)=>{
                            return(
                                <div  key={idd}>
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
                                                    <input type="checkbox" className={multiDisplay==="lined" ? "checkboxStyles": "" } style={{height:"1.4em", width:"1.4em"}} name={i} value={i} id={i} /> &nbsp;
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
                                }
                                </div>
                                )
                            })}
                    </div>       
                    
                    <div className="">
                        
                    </div>
                </div>
            </div>
            <div className="theme-main2">
                <div className="theme-header2">
                    <div className="theme-header2-sub1"> <p> Text Size</p> <a onClick={decreaseThemeSize}>-</a> <a onClick={increaseThemeSize}>+</a> </div> 
                    <div className="theme-header2-sub2"> <p>Theme Color</p> <label htmlFor="theme-color"></label>
                    
                        {showThemeColor? <div style={{height:"2.5em",width:"2em",display:"inline-flex", flexDirection:"column"}}>
                        <a onClick={()=> setShowThemeColor(!showThemeColor)}> <img src={backgroundColor} alt=""/> 
                        <div style={{height:".5em",width:"2em", backgroundColor:`${themeStyle.backgroundColor}`}}></div> </a>
                        {/* <div style={{height:".5em",width:"2em", backgroundColor:"red"}}></div> */}
                        <div style={{position:"absolute",zIndex:"6", right:"2em",top:"3em"}}> <SketchPicker
                            color={themeStyle.backgroundColor}
                            onChange={updatedColor=> handleThemeColor(updatedColor)}/> </div> </div>
                        :  <a onClick={()=> setShowThemeColor(!showThemeColor)}> <div style={{height:"2.5em",width:"2em",display:"inline-flex", flexDirection:"column"}}>
                        <img src={backgroundColor} alt=""/>
                        <div style={{height:".5em",width:"2em", backgroundColor:`${themeStyle.backgroundColor}`}}></div>
                        </div> </a> } 
                    </div>
                </div>
                <div className="theme-body">
                    <p >Detailed Configuration</p>
                    <div className="theme-style-main-outer">
                    <div className="theme-style-main">
                        <div className="theme-style-sub1" > <a href="">Form</a> <a href="">Questionnaire</a> </div>
                        <div className="theme-style-sub2" >
                        <h4>Questionnaire</h4>

                        {/* Label Field  */}
                        <div>
                        <h5> Input Field Label</h5>
                        <p> Font Style</p>
                        <select name="fontFamily" id="fontFamily" onChange={handleLabelTextStyle}>
                            <option value="Open Sans">Open Sans</option>
                            <option value="Goldman">Goldman</option>
                            <option value="Poppins">Poppins</option>
                            <option value="Roboto">Roboto</option>
                            <option value="Ubuntu">Ubuntu</option>
                            <option value="Montserrat">Montserrat</option>
                        </select>
                        <input type="number" min="8" max="20" placeholder="10" step="1" value={labelStyle.fontSize} name="fontSize" onChange={(event) => handleLabelTextStyle(event)} />
                        {/* <input type="color"/> */}
                         
                        {showLabelColor? <div style={{height:"2.5em",width:"2em",display:"inline-flex", flexDirection:"column"}}><a onClick={()=> setShowLabelColor(!showLabelColor)}>
                        <img src={textColor} alt=""/></a>
                        <div style={{height:".5em",width:"2em", backgroundColor:`${labelStyle.color}`}}></div> 
                        {/* <div style={{height:".5em",width:"2em", backgroundColor:"red",position:"absolute",right:"9.5em"}}></div> */}
                        <div style={{position:"absolute",zIndex:"6", right:"-3em",top:"12em"}}>
                        <SketchPicker
                            color={labelStyle.color}
                            onChange={updatedColor=> handleLabelTextColor(updatedColor)}
                        /></div></div>
                        : <a onClick={()=> setShowLabelColor(!showLabelColor)}> <div style={{height:"2.5em",width:"2em",display:"inline-flex", flexDirection:"column"}}><img src={textColor} alt=""/>
                        <div style={{height:".5em",width:"2em", backgroundColor:`${labelStyle.color}`}}></div>
                        {/* <div style={{height:".5em",width:"2em", backgroundColor:"red",position:"absolute",right:"9.5em"}}></div> */}
                        </div> </a> } <br/>
                        {/* <SketchPicker 
                            color={labelStyle.color}
                            onChange={updatedColor=> handleLabelTextColor(updatedColor)}

                        /> */}
                        <select name="textStyle" id="textStyle" onChange={handleLabelTextStyle} >
                            <option value="none">None</option>
                            <option value="bolder">Bold</option>
                            <option value="italic">Italic</option>
                            <option value="italic-bolder">Italic-Bold</option>
                            <option value="underline">Underline</option>
                        </select>
                        <p>Background</p>
                        
                        {showBackgroundColor? <div style={{height:"2.5em",width:"2em",display:"inline-flex", flexDirection:"column"}}> <a onClick={()=> setShowBackgroundColor(!showBackgroundColor)}> 
                        <img src={backgroundColor} alt=""/> </a>
                        <div style={{height:".5em",width:"2em", backgroundColor:`${labelStyle.backgroundColor}`}}></div>
                        {/* <div style={{height:".5em",width:"2em", backgroundColor:"red"}}></div> */}
                        <div style={{position:"absolute",zIndex:"6",right:"0em"}}> <SketchPicker
                            color={labelStyle.backgroundColor}
                            onChange={updatedColor=> handleBackgroundColor(updatedColor)}
                        /> </div> </div>
                        : <a onClick={()=> setShowBackgroundColor(!showBackgroundColor)}> <div style={{height:"2.5em",width:"2em",display:"inline-flex", flexDirection:"column"}}><img src={backgroundColor} alt=""/>
                        <div style={{height:".5em",width:"2em", backgroundColor:`${labelStyle.backgroundColor}`}}></div>
                        {/* <div style={{height:".5em",width:"2em", backgroundColor:"red"}}></div> */}
                        </div> </a> } <br/>
                        {/* <input type="color"/>     */}
                        </div>

                        {/* Input style */}
                        <div>
                            <h5> Input Style</h5>
                            <p> Font Style</p>
                        <select name="fontFamily" id="fontFamily" onChange={handleInputTextStyle}>
                            <option value="Open Sans">Open Sans</option>
                            <option value="Goldman">Goldman</option>
                            <option value="Poppins">Poppins</option>
                            <option value="Roboto">Roboto</option>
                            <option value="Ubuntu">Ubuntu</option>
                            <option value="Montserrat">Montserrat</option>
                        </select>
                        <input type="number" min="8" max="20" placeholder="10" step="1" value={inputStyle.fontSize} name="fontSize" onChange={(event) => handleInputTextStyle(event)} />
                        
                        {showInputColor? <div style={{height:"2.5em",width:"2em",display:"inline-flex", flexDirection:"column"}}>
                        <a onClick={()=> setShowInputColor(!showInputColor)}><img src={textColor} alt=""/> </a>
                        <div style={{height:".5em",width:"2em", backgroundColor:`${inputStyle.color}`}}></div>
                        {/* <div style={{height:".5em",width:"2em", backgroundColor:"red",position:"absolute",right:"9.5em"}}></div> */}
                        <div style={{position:"absolute",zIndex:"6",right:"6em"}}> <SketchPicker
                            color={inputStyle.color}
                            onChange={updatedColor=> handleInputTextColor(updatedColor)}
                        /> </div> </div>
                        : <a onClick={()=> setShowInputColor(!showInputColor)}><div style={{height:"2.5em",width:"2em",display:"inline-flex", flexDirection:"column"}}><img src={textColor} alt=""/>
                        <div style={{height:".5em",width:"2em", backgroundColor:`${inputStyle.color}`}}></div>
                        {/* <div style={{height:".5em",width:"2em", backgroundColor:"red",position:"absolute",right:"9.5em"}}></div>  */}
                        </div> </a> }<br/>
                        {/* <input type="color"/> */}
                        <select name="textStyle" id="textStyle" onChange={handleInputTextStyle} >
                            <option value="none">None</option>
                            <option value="bolder">Bold</option>
                            <option value="italic">Italic</option>
                            <option value="italic-bolder">Italic-Bold</option>
                            <option value="underline">Underline</option>
                        </select>
                        </div>

                        {/* Answer Style     */}
                        <div className="answer-style">
                         <h5>Answer Style</h5> 
                        <p>
                        Multiple Choice(Single Select)
                        </p>
                        {/* multiDisplay singleDisplay multiDisplay optionsDisplay */}
                        <div className="theme-boxes" value={singleDisplay} exclusive aria-label="singleDisplay" >
                            <div className={singleDisplay==="dot" ? "shaded-boxes boxes" : "boxes"} onClick={handleSingleDisplay} value="dot" aria-label="dot">
                                <SvgDot/> &nbsp; Dot 
                            </div>
                            <div className={singleDisplay==="filled" ? "shaded-boxes boxes" : "boxes"} onClick={handleSingleDisplay} value="filled" aria-label="filled">
                                <SvgFilled/> &nbsp; Filled 
                            </div>
                            <div className={singleDisplay==="toggle" ? "shaded-boxes boxes" : "boxes"} onClick={handleSingleDisplay} value="toggle" aria-label="toggle">
                                
                                <SvgTabs/> &nbsp; Tabs
                            </div>
                        </div>
                        
                        <p>Multiple Choice(Multi Select)</p>
                        <div className="theme-boxes" value={multiDisplay} exclusive  aria-label="multiDisplay" >
                            <div className={multiDisplay==="lined" ? "shaded-boxes boxes" : "boxes"} onClick={handleMultiDisplay} value="lined" aria-label="lined">
                                <SvgLinedCheckbox/> &nbsp; Lined 
                            </div>
                            <div className={multiDisplay==="filled" ? "shaded-boxes boxes" : "boxes"} onClick={handleMultiDisplay} value="filled" aria-label="filled">
                                 <SvgFilledCheckbox/> &nbsp; Filled 
                            </div>
                        </div>
                        
                        <p>Multiple Choice Display Type</p>
                        <div className="theme-boxes" value={optionsDisplay} aria-label="displayDirection">
                            <div className={optionsDisplay.display==="block" ? "shaded-boxes boxes" : "boxes"} onClick={handleOptionsDisplay} value="vertical" aria-label="vertical">
                                {/* <img src={vertical} value="vertical" name="displayDirection"/> */}
                                Vertical
                            </div>
                            <div className={optionsDisplay.display==="inline" ? "shaded-boxes boxes" : "boxes"} onClick={handleOptionsDisplay} value="horizontal" aria-label="horizontal">
                                {/* <img src={horizontal} value="horizontal" name="displayDirection"/> */}
                                Horizontal
                            </div>
                        </div>
                        
                        
                        <p>Short Answer</p>
                        <div className="theme-boxes" value={inputVariant} aria-label="displayType" >
                            <div className={inputVariant==="outlined-out" ? "shaded-boxes boxes" : "boxes"} onClick={handleInputVariant} value="outlined-out" aria-label="outlined-out">
                                {/* <img alt="displayType" src={visual1} value="outlined-out" name="displayType"/> */}
                                <SvgAnswer1/>
                            </div>
                            <div className={inputVariant==="standard" ? "shaded-boxes boxes" : "boxes"} onClick={handleInputVariant} value="standard" aria-label="standard">
                                {/* <img alt="displayType" src={visual2} value="standard" name="displayType"/> */}
                                <SvgAnswer2/>
                            </div>
                            <div className={inputVariant==="outlined-in" ? "shaded-boxes boxes" : "boxes"} onClick={handleInputVariant} value="outlined-in" aria-label="right aligned">
                                {/* <img alt="displayType" src={visual3} value="outlined-in" name="displayType"/> */}
                                <SvgAnswer3/> 
                            </div>
                        </div>
                        <p>Long Answer</p>
                        <div className="theme-boxes" value={inputVariant}  aria-label="displayType" >
                            <div className={inputVariant==="outlined-out" ? "shaded-boxes boxes" : "boxes"} onClick={handleInputVariant} value="outlined-out" aria-label="outlined-out">
                                {/* <img alt="displayType" src={visual1} value="outlined-out" name="displayType"/> */}
                                <SvgAnswer1/>
                            </div>
                            <div className={inputVariant==="standard" ? "shaded-boxes boxes" : "boxes"} onClick={handleInputVariant} value="standard" aria-label="standard">
                                {/* <img alt="displayType" src={visual2} value="standard" name="displayType"/> */}
                                <SvgAnswer2/>
                            </div>
                            <div className={inputVariant==="outlined-in" ? "shaded-boxes boxes" : "boxes"} onClick={handleInputVariant} value="outlined-in" aria-label="right aligned">
                                {/* <img alt="displayType" src={visual3} value="outlined-in" name="displayType"/> */}
                                <SvgAnswer3/>
                            </div>
                        </div>
                        <p>Dropdown</p>
                        <div className="theme-boxes" value={inputVariant} aria-label="displayType" >
                            <div className={inputVariant==="outlined-out" ? "shaded-boxes boxes" : "boxes"} onClick={handleInputVariant} value="outlined-out" aria-label="outlined-out">
                                {/* <img alt="displayType" src={visual1} value="outlined-out" name="displayType"/> */}
                                <SvgAnswer1/>
                            </div>
                            <div className={inputVariant==="standard" ? "shaded-boxes boxes" : "boxes"} onClick={handleInputVariant} value="standard" aria-label="standard">
                                {/* <img alt="displayType" src={visual2} value="standard" name="displayType"/> */}
                                <SvgAnswer2/>
                            </div>
                            <div className={inputVariant==="outlined-in" ? "shaded-boxes boxes" : "boxes"} onClick={handleInputVariant} value="outlined-in" aria-label="right aligned">
                                {/* <img alt="displayType" src={visual3} value="outlined-in" name="displayType"/> */}
                                <SvgAnswer3/>
                            </div>
                        </div>
                        <p>Datepicker</p>
                        <div className="theme-boxes" value={inputVariant} aria-label="displayType">
                            <div className={inputVariant==="outlined-out" ? "shaded-boxes boxes" : "boxes"} onClick={handleInputVariant} value="outlined-out" aria-label="outlined-out">
                                {/* <img alt="displayType" src={visual1} value="outlined-out" name="displayType"/> */}
                                <SvgAnswer1/>
                            </div>
                            <div className={inputVariant==="standard" ? "shaded-boxes boxes" : "boxes"} onClick={handleInputVariant} value="standard" aria-label="standard">
                                {/* <img alt="displayType"  src={visual2} value="standard" name="displayType"/> */}
                                <SvgAnswer2/>
                            </div>
                            <div className={inputVariant==="outlined-in" ? "shaded-boxes boxes" : "boxes"} onClick={handleInputVariant} value="outlined-in" aria-label="right aligned">
                                {/* <img alt="displayType" src={visual3} value="outlined-in" name="displayType"/> */}
                                <SvgAnswer3/>
                            </div>
                        </div>
                        </div>    
                        </div>
                        

                    </div>
                    <div className="button-group">
                            {/* <button style={{background: "#0072C6", border:"none", color: "#FFFFFF" ,fontWeight:"100", fontSize:"12px", padding:".5em 1em"}} className="apply">Apply</button> */}
                            <div> <button style={{background: "#0072C6", border:"none", color: "#FFFFFF" ,fontWeight:"100", fontSize:"12px", padding:".5em 1em" }} 
                            onClick={SaveTheme} className="save">Save Changes</button>
                             </div>
                            <div><button onClick={handleSaveAsPopup} className="save-as"
                            style={{background: "#0072C6", border:"none", color: "#FFFFFF" ,fontWeight:"100", fontSize:"12px", padding:".5em 1em"}} >Save As</button>
                            </div> 
                        </div>
                    </div>
                            
                </div>
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
      showQuestions:state.surveyInfo.showQuestions
    }
  }
  
  function matDispatchToProps(dispatch){
    return{
      changeData:(data)=>{dispatch(addInfo(data))}
    }
  }
  
  export default connect(mapStateToProps,matDispatchToProps)(Themes);
// export default Themes;