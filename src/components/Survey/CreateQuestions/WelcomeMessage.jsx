import React,{useState} from 'react'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import FormatIndentDecreaseIcon from '@material-ui/icons/FormatIndentDecrease';
import FormatIndentIncreaseIcon from '@material-ui/icons/FormatIndentIncrease';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import SpellcheckIcon from '@material-ui/icons/Spellcheck';


function WelcomeMessage() {

    const [opened,setOpened]=useState(false);
    
    function handleOpenClose(){
        setOpened(!opened);
    }

    return (
        <div onClick={handleOpenClose}  className="welcomeMessage">
            <div className="heading-div" >
            <p className="heading"> &nbsp;
            {opened===true? 
                <ArrowDropDownIcon fontSize="large" />
                : <ArrowRightIcon  fontSize="large"/>}
                 &nbsp;  
                Welcome Message 
            </p>
            </div>
        {opened===true?
            <div className="title">
                <p>Welcome Text</p>
                <div className="message">
                    <div className="buttons">
                        <button><FormatBoldIcon fontSize="small"/></button>
                        <button><FormatItalicIcon fontSize="small"/></button>
                        <button><FormatUnderlinedIcon fontSize="small"/></button>
                        <button><SpellcheckIcon fontSize="small"/></button> &nbsp;
                        <button><FormatListBulletedIcon fontSize="small"/></button>
                        <button><FormatItalicIcon fontSize="small"/></button>
                        <button><FormatIndentIncreaseIcon fontSize="small"/></button>
                        <button><FormatIndentDecreaseIcon fontSize="small"/></button> &nbsp;
                        <button><FormatListBulletedIcon fontSize="small"/></button>
                    </div>
                    <div className="text">
                        <h2>Dear Team,</h2>
                        <h4>Please take a moment to fill out a short survey we wil use to improve your experience.</h4>
                    </div>
                </div>
            </div>
        : null} 
        </div>
    )
}

export default WelcomeMessage
