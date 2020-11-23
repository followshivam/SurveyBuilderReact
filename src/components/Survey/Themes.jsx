import React,{useState, useEffect} from 'react';
import "./Themes.css";
import firebaseDb from "../../firebase";
import makeStyles from "@material-ui/core/styles/makeStyles";
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
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

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
        fontFamily:props=> props.inputStyle.fontFamily
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
        fontFamily:"Open Sans"
    });
    const [themeStyle,setThemeStyle]=useState({
        backgroundColor:"#FFFFFF",
        margin:"1em 6em 2em",
        padding:".5em 2em 2em",
        overflow: "scroll"
    });
    const [checkboxStyle,setCheckboxStyle]=useState({
        height:16,
        width:16
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
            fontFamily:inputStyle.fontFamily
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
                        <option value="">survey</option>
                    </select>
                    <a> Download Theme</a>
                    <a> Upload Theme</a>
                </div>

                <div className="theme-questions" >
                    <div className={classes.themeStyle} >
                        <div className="theme-questions-header">
                            <p>Employee Satisfaction Survey</p>
                            {/* 10% percent complete */}
                        </div>
                        {Object.keys(pageData).map((idd,counto)=>{
                            return(
                                <div key={idd}>
                                {
                                Object.keys(pageData[idd]).map((id,counti)=>{
                                    return( 
                                    <div className="theme-ques" key={id}>
                                        
                                        {/* {inputVariant!=="standard" && ((pageData[idd])[id].type==="short" || (pageData[idd])[id].type==="long")
                                        ? <p className={classes.labelStyle}> {count}. &nbsp; {(pageData[idd])[id].question} </p>
                                        :null} */}
                                        {/* {(pageData[idd])[id].type==="options" || ((pageData[idd])[id].type!=="options" && inputVariant!=="outlined")
                                        ? <p className={classes.labelStyle}> {count}. &nbsp; {(pageData[idd])[id].question} </p>
                                        : null
                                        } */}
                                        {(pageData[idd])[id].options || inputVariant!=="outlined-in" ? 
                                        <p className={classes.labelStyle}> {count}. &nbsp; {(pageData[idd])[id].question} </p>
                                        : null}

                                        {(pageData[idd])[id].options && (pageData[idd])[id].options!="" ?
                                        <div>
                                        {Object.keys((pageData[idd])[id].options).map((i)=>{
                                            return(
                                                <div key={i}>
                                                    {(pageData[idd])[id].type==="single-select"
                                                    ? <label className={singleDisplay==="dot"? `radio-container ${classes.inputStyle}` 
                                                    :[singleDisplay==="toggle"? `radio-container ${classes.inputStyle}` :classes.inputStyle ]  } htmlFor={id}>
                                                    <input type="radio" name={id} value={i} id={id} /> &nbsp;
                                                    <span class="checkmark"></span>
                                                    {i}
                                                    </label>
                                                    :[ (pageData[idd])[id].type==="multi-select"
                                                    ? <label className={classes.inputStyle}  htmlFor={id}>
                                                    <input type="checkbox" style={{height:"1.5em", width:"1.5em"}} className="checkboxStyle"  name={id} value={i} id={id} /> &nbsp;
                                                    {i}
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
                                        /* [(pageData[idd])[id].type==="short"?
                                        <Input
                                            id="outlined-helperText"
                                            // label={(pageData[idd])[id].question}
                                            // defaultValue="Enter here"
                                            // helperText="Some important text"
                                            variant={inputVariant}
                                            InputLabelProps={{
                                                 shrink: true,
                                            }}
                                            
                                            />
                                        : 
                                        [(pageData[idd])[id].type==="long"? 
                                        <Input
                                            id="outlined-helperText"
                                            // {inputVariant==="standard"?label={(pageData[idd])[id].question} :null } 
                                            // defaultValue="Enter here"
                                            // helperText="Some important text"
                                            variant={inputVariant}
                                            InputLabelProps={{
                                                 shrink: true,
                                            }}
                                            
                                            /> : null
                                        ]] */
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
                    <div className="theme-header2-sub1"> <p> Text Size</p> <a>-</a> <a>+</a> </div>
                    <div className="theme-header2-sub2"> <p>Theme Color</p> <label htmlFor="theme-color"></label> 
                    {/* <input type="color" name="theme-color" id="theme-color" />  */}
                    <a onClick={()=> setShowThemeColor(!showThemeColor)}> 
                        {showThemeColor? <SketchPicker 
                            color={themeStyle.backgroundColor}
                            onChange={updatedColor=> handleThemeColor(updatedColor)}
                        />
                        : "Color" } </a>
                    </div>
                </div>
                <div className="theme-body">    
                    <p>Detailed Configuration</p>
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
                        : "Color" } </a>
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
                        : "Color" } </a>
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
                        : "Color" } </a>
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
                        <div>
                         <h5>Answer Style</h5> 
                        <p>
                        Multiple Choice(Single Select)
                        </p>
                        <ToggleButtonGroup
                            value={singleDisplay}
                            exclusive
                            onChange={handleSingleDisplay}
                            aria-label="singleDisplay"
                            >
                            <ToggleButton value="dot" aria-label="dot">
                                <img src={single1} value="single1" name="single"/>
                            </ToggleButton>
                            <ToggleButton value="filled" aria-label="filled">
                                <img src={single2} value="single2" name="single"/>
                            </ToggleButton>
                            <ToggleButton value="toggle" aria-label="toggle">
                                <img src={single3} value="single3" name="single"/>
                            </ToggleButton>
                        </ToggleButtonGroup>
                        
                        <p>Multiple Choice(Multi Select)</p>
                        <img src={multi1} value="multi1" name="multi"/>
                        <img src={multi2} value="multi2" name="multi"/>
                        <p>Multiple Choice Display Type</p>
                        <img src={vertical} value="vertical" name="displayDirection"/>
                        <img src={horizontal} value="horizontal" name="displayDirection"/>
                        <p>Short Answer</p>
                        <ToggleButtonGroup
                            value={inputVariant}
                            exclusive
                            onChange={handleInputVariant}
                            aria-label="displayType"
                            >
                            <ToggleButton value="outlined-out" aria-label="outlined-out">
                                <img alt="displayType" src={visual1} value="outlined-out" name="displayType"/>
                            </ToggleButton>
                            <ToggleButton value="standard" aria-label="standard">
                                <img alt="displayType" src={visual2} value="standard" name="displayType"/>
                            </ToggleButton>
                            <ToggleButton value="outlined-in" aria-label="right aligned">
                                <img alt="displayType" src={visual3} value="outlined-in" name="displayType"/>
                            </ToggleButton>
                        </ToggleButtonGroup>
                        <p>Long Answer</p>
                        <ToggleButtonGroup
                            value={inputVariant}
                            exclusive
                            onChange={handleInputVariant}
                            aria-label="displayType"
                            >
                            <ToggleButton value="outlined-out" aria-label="outlined-out">
                                <img alt="displayType" src={visual1} value="outlined-out" name="displayType"/>
                            </ToggleButton>
                            <ToggleButton value="standard" aria-label="standard">
                                <img alt="displayType" src={visual2} value="standard" name="displayType"/>
                            </ToggleButton>
                            <ToggleButton value="outlined-in" aria-label="right aligned">
                                <img alt="displayType" src={visual3} value="outlined-in" name="displayType"/>
                            </ToggleButton>
                        </ToggleButtonGroup>
                        <p>Dropdown</p>
                        <ToggleButtonGroup
                            value={inputVariant}
                            exclusive
                            onChange={handleInputVariant}
                            aria-label="displayType"
                            >
                            <ToggleButton value="outlined-out" aria-label="outlined-out">
                                <img alt="displayType" src={visual1} value="outlined-out" name="displayType"/>
                            </ToggleButton>
                            <ToggleButton value="standard" aria-label="standard">
                                <img alt="displayType" src={visual2} value="standard" name="displayType"/>
                            </ToggleButton>
                            <ToggleButton value="outlined-in" aria-label="right aligned">
                                <img alt="displayType" src={visual3} value="outlined-in" name="displayType"/>
                            </ToggleButton>
                        </ToggleButtonGroup>
                        <p>Datepicker</p>
                        <ToggleButtonGroup
                            value={inputVariant}
                            exclusive
                            onChange={handleInputVariant}
                            aria-label="displayType"
                            >
                            <ToggleButton value="outlined-out" aria-label="outlined-out">
                                <img alt="displayType" src={visual1} value="outlined-out" name="displayType"/>
                            </ToggleButton>
                            <ToggleButton value="standard" aria-label="standard">
                                <img alt="displayType"  src={visual2} value="standard" name="displayType"/>
                            </ToggleButton>
                            <ToggleButton value="outlined-in" aria-label="right aligned">
                                <img alt="displayType" src={visual3} value="outlined-in" name="displayType"/>
                            </ToggleButton>
                        </ToggleButtonGroup>
                        </div>    
                        </div>
                    </div>        
                </div>
            </div>
        </div>
        </>
        
    )
}


export default Themes;