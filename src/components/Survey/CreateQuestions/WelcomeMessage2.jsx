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

function WelcomeMessage() {

    const { t } = useTranslation();
    const [opened,setOpened]=useState(false);
    
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
                {t('WELCOME_MESSAGE')}
            </p>
            </div>
        {opened===true?
            <div className="title">
                <p>{t('WELCOME_TEXT')}</p>
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
                        <h2>{t('DEAR_TEAM')}</h2>
                        <h4>{t('WELCOME_TEXT_MESSAGE')}</h4>
                    </div>
                </div>
            </div>
        : null} 
        </div>
    )
}

export default WelcomeMessage
