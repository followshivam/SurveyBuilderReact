import React,{useState} from 'react';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

function ThankYou(props) {

    const { t } = useTranslation();

    const [opened,setOpened]=useState(false);
    
    function handleOpenClose(){
        setOpened(!opened);
    }

    return (
        <div onClick={handleOpenClose} className="thankYou">
           <p className="heading"> 
           {opened? <ArrowDropDownIcon fontSize="large"/> : <ArrowRightIcon fontSize="large"/> } &nbsp; {t('THANK_YOU_PAGE')} </p>
           {opened? 
           <p className="thankYouMessage">{t('THANK_YOU_MESSAGE')}</p>
            : null}
        </div>
    )
}

export default ThankYou
