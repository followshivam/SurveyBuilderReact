import React,{useState} from 'react';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import TextEditor from "./TextEditor1";
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

function ThankYou(props) {

    const { t } = useTranslation();
    const [opened,setOpened]=useState(false);
    function handleOpenClose(){
        setOpened(!opened);
    }

    return (
        <div  className="thankYou">
            <div onClick={handleOpenClose}>
                <p  className="heading"> 
                {opened? <ArrowDropDownIcon fontSize="large"/> : 
                <ArrowRightIcon fontSize="large"/> } &nbsp; 
                {t('THANK_YOU_PAGE')} </p>
            </div>
                {opened? 
                /* <p className="thankYouMessage">{t('THANK_YOU_MESSAGE')}</p> */
                <TextEditor />
                : null}
        </div>
    )
}

export default ThankYou
