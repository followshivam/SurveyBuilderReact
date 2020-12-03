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

function Themes() {
    const [labelStyle,setLabelStyle]=useState({
        fontSize:12,
        color:"#3A3A3A",
        textDecoration:"",
        fontStyle:"",
        fontWeight:600,
        fontFamily:"Open Sans",
        backgroundColor:"white"
    });
    const [inputStyle,setInputStyle]=useState({
        fontSize:12,
        color:"#3A3A3A",
        textDecoration:"",
        fontStyle:"",
        fontWeight:300,
        fontFamily:"Open Sans",
        marginRight:"2em"
    });
    const [themeStyle,setThemeStyle]=useState({
        backgroundColor:"#FFFFFF",
        margin:"1em 6em 2em",
        padding:".5em 2em 2em",
        overflow: "scroll"
    });
    const [checkboxStyle,setCheckboxStyle]=useState({
        height:30,
        width:30
    });
    const [optionsDisplay,setOptionsDisplay]=useState({
        display:"block",
        marginRight:"0em"
    });
    const [headingStyle,setHeadingStyle]=useState({
        fontSize:11
    });

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
    const [pageData,setPageData]= useState({});
    const [count,setCount]=useState(1);
    const [showLabelColor,setShowLabelColor]=useState(false);
    const [showInputColor,setShowInputColor]=useState(false);
    const [showBackgroundColor,setShowBackgroundColor]= useState(false);
    const [showThemeColor,setShowThemeColor]=useState(false);
    const [inputVariant,setInputVariant]=useState("outlined-out");
    const [singleDisplay, setSingleDisplay]=useState("dot");
    const [multiDisplay, setMultiDisplay]=useState("");

    const [themeData,setThemeData]=useState({});
    const [currentThemeId,setCurrentThemeId]=useState();

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
    
    const [defaultTheme,setDefaultTheme]=useState({
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
    });
    
    // const [optionsDisplay,setOptionsDisplay]=useState("vertical");
    useEffect(()=>{
        firebaseDb.child("themes").on("value",snapshot=>{
            if(snapshot.val()!=null)
            setThemeData({
                ...snapshot.val()
            })
            else{
               firebaseDb.child("themes").push(
                {defaultTheme},
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
        firebaseDb.child("pagis").on("value",snapshot=>{
        setPageData({
            ...snapshot.val()
        })
        })
    },[]);

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

    return (
        <>
        <div className="shade-main"> </div>
        <div className="theme" >
            <div className="theme-main">
                <div className="theme-header1">
                    <p 
                    // style={{fontSize:parseInt(labelFont), color:"red"}}
                    > Theme: </p>
                    <select name="" id="">
                        <option value="">Default Theme</option>
                    </select>
                    <a> <SvgDownloadThemes/> Download Theme</a>
                    <a> <SvgUploadThemes/> Upload Theme </a>
                    {/* <img src={downloadTheme} alt=""/> <img src={uploadTheme} alt=""/> */}
                    
                </div>

                <div className="theme-questions" >
                    <div className={classes.themeStyle} >
                        <div className="theme-questions-header">
                            <p className={classes.headingStyle} >Employee Satisfaction Survey</p>
                            {/* 10% percent complete */}
                        </div>
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
                    <a onClick={()=> setShowThemeColor(!showThemeColor)}> 
                        {showThemeColor? <SketchPicker 
                            color={themeStyle.backgroundColor}
                            onChange={updatedColor=> handleThemeColor(updatedColor)}
                        />
                        : <img src={backgroundColor} alt=""/> } </a>
                    </div>
                </div>
                <div className="theme-body">
                    <p >Detailed Configuration</p>
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
                        <a onClick={()=> setShowLabelColor(!showLabelColor)}> 
                        {showLabelColor? <SketchPicker
                            color={labelStyle.color}
                            onChange={updatedColor=> handleLabelTextColor(updatedColor)}
                        />
                        : <img src={textColor} alt=""/> } </a>
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
                        <a onClick={()=> setShowBackgroundColor(!showBackgroundColor)}> 
                        {showBackgroundColor? <SketchPicker 
                            color={labelStyle.backgroundColor}
                            onChange={updatedColor=> handleBackgroundColor(updatedColor)}
                        />
                        : <img src={backgroundColor} alt=""/> } </a>
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
                        <a onClick={()=> setShowInputColor(!showInputColor)}> 
                        {showInputColor? <SketchPicker 
                            color={inputStyle.color}
                            onChange={updatedColor=> handleInputTextColor(updatedColor)}
                        />
                        : <img src={textColor} alt=""/> } </a>
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
                        <ToggleButtonGroup className={classes.root} value={singleDisplay} exclusive onChange={handleSingleDisplay} aria-label="singleDisplay" >
                            <ToggleButton className={classes.root} value="dot" aria-label="dot">
                                <img src={single1} value="single1" name="single"/>
                            </ToggleButton>
                            <ToggleButton className={classes.root} value="filled" aria-label="filled">
                                <img src={single2} value="single2" name="single"/>
                            </ToggleButton>
                            <ToggleButton className={classes.root} value="toggle" aria-label="toggle">
                                <img src={single3} value="single3" name="single"/>
                            </ToggleButton>
                        </ToggleButtonGroup>
                        
                        <p>Multiple Choice(Multi Select)</p>
                        <ToggleButtonGroup className={classes.root} value={multiDisplay} exclusive onChange={handleMultiDisplay} aria-label="multiDisplay" >
                            <ToggleButton className={classes.root} value="lined" aria-label="lined">
                                <img src={multi1} value="lined" name="lined"/>
                            </ToggleButton>
                            <ToggleButton className={classes.root} value="filled" aria-label="filled">
                                <img src={multi2} value="filled" name="filled"/>
                            </ToggleButton>
                        </ToggleButtonGroup>
                        
                        <p>Multiple Choice Display Type</p>
                        <ToggleButtonGroup className={classes.root} value={optionsDisplay} exclusive onChange={handleOptionsDisplay} aria-label="displayDirection">
                            <ToggleButton className={classes.root} value="vertical" aria-label="vertical">
                                <img src={vertical} value="vertical" name="displayDirection"/>
                            </ToggleButton>
                            <ToggleButton className={classes.root} value="horizontal" aria-label="horizontal">
                                <img src={horizontal} value="horizontal" name="displayDirection"/>
                            </ToggleButton>
                        </ToggleButtonGroup>
                        
                        
                        <p>Short Answer</p>
                        <ToggleButtonGroup className={classes.root} value={inputVariant} exclusive onChange={handleInputVariant} aria-label="displayType" >
                            <ToggleButton className={classes.root} value="outlined-out" aria-label="outlined-out">
                                <img alt="displayType" src={visual1} value="outlined-out" name="displayType"/>
                            </ToggleButton>
                            <ToggleButton className={classes.root} value="standard" aria-label="standard">
                                <img alt="displayType" src={visual2} value="standard" name="displayType"/>
                            </ToggleButton>
                            <ToggleButton className={classes.root} value="outlined-in" aria-label="right aligned">
                                <img alt="displayType" src={visual3} value="outlined-in" name="displayType"/>
                            </ToggleButton>
                        </ToggleButtonGroup>
                        <p>Long Answer</p>
                        <ToggleButtonGroup className={classes.root} value={inputVariant} exclusive onChange={handleInputVariant} aria-label="displayType" >
                            <ToggleButton className={classes.root} value="outlined-out" aria-label="outlined-out">
                                <img alt="displayType" src={visual1} value="outlined-out" name="displayType"/>
                            </ToggleButton>
                            <ToggleButton className={classes.root} value="standard" aria-label="standard">
                                <img alt="displayType" src={visual2} value="standard" name="displayType"/>
                            </ToggleButton>
                            <ToggleButton className={classes.root} value="outlined-in" aria-label="right aligned">
                                <img alt="displayType" src={visual3} value="outlined-in" name="displayType"/>
                            </ToggleButton>
                        </ToggleButtonGroup>
                        <p>Dropdown</p>
                        <ToggleButtonGroup className={classes.root} value={inputVariant} exclusive onChange={handleInputVariant} aria-label="displayType" >
                            <ToggleButton className={classes.root} value="outlined-out" aria-label="outlined-out">
                                <img alt="displayType" src={visual1} value="outlined-out" name="displayType"/>
                            </ToggleButton>
                            <ToggleButton className={classes.root} value="standard" aria-label="standard">
                                <img alt="displayType" src={visual2} value="standard" name="displayType"/>
                            </ToggleButton>
                            <ToggleButton className={classes.root} value="outlined-in" aria-label="right aligned">
                                <img alt="displayType" src={visual3} value="outlined-in" name="displayType"/>
                            </ToggleButton>
                        </ToggleButtonGroup>
                        <p>Datepicker</p>
                        <ToggleButtonGroup className={classes.root} value={inputVariant} exclusive onChange={handleInputVariant} aria-label="displayType">
                            <ToggleButton className={classes.root} value="outlined-out" aria-label="outlined-out">
                                <img alt="displayType" src={visual1} value="outlined-out" name="displayType"/>
                            </ToggleButton>
                            <ToggleButton className={classes.root} value="standard" aria-label="standard">
                                <img alt="displayType"  src={visual2} value="standard" name="displayType"/>
                            </ToggleButton>
                            <ToggleButton className={classes.root} value="outlined-in" aria-label="right aligned">
                                <img alt="displayType" src={visual3} value="outlined-in" name="displayType"/>
                            </ToggleButton>
                        </ToggleButtonGroup>
                        </div>    
                        </div>
                    </div>
                    <div className="button-group">
                            <button className="apply">Apply</button>
                            <button className="save">Save</button>
                            <button className="save-as">Save As</button>
                    </div>        
                </div>
            </div>
        </div>
        </>
        
    )
}

export default Themes;