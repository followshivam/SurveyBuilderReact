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
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
// import {Editor, EditorState} from 'draft-js';
// import MyEditor from "./MyEditor";
import TextEditor from "./TextEditor2";


function ThankYou() {

    const { t } = useTranslation();
    const [opened,setOpened]=useState(false);
    const message="We thank you for taking part in the survey. Wish you have a good day."
    function handleOpenClose(){
        setOpened(!opened);
    }

    return (
        <div className="welcomeMessage">
            <div onClick={handleOpenClose} className="heading-div" >
            <p  className="heading"> &nbsp;
            {opened===true? 
                <ArrowDropDownIcon fontSize="large" />
                : <ArrowRightIcon  fontSize="large"/>}
                 &nbsp;
                 {t('THANK_YOU_PAGE')}
            </p>
            </div>
        {opened===true?
            <div className="title">
                <p>{t('THANKYOU_TEXT')}</p>
                <div className="message">
                    <TextEditor message={message} />
                    {/* <div className="buttons">
                        
                    </div>
                    <div className="text">
                        <MyEditor/>
                        <TextEditor/>
                        <h2>{t('DEAR_TEAM')}</h2>
                        <h4>{t('WELCOME_TEXT_MESSAGE')}</h4>
                    </div> */}
                </div>
            </div>
        : null} 
        </div>
    )
}

export default ThankYou
