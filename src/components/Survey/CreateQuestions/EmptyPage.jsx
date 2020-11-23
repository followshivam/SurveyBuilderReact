import React from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import QuestionBranchingHeader from "../../../iconComponents/QuestionBranchingHeader.tsx";

function EmptyPage() {
    const { t } = useTranslation();

    return (
            <div className="page">
                     <div className="pageTitle">
           <p className="heading">
           <ArrowDropDownIcon fontSize="large" />
             &nbsp;
             <p className="page-title">{t('PAGE_TITLE')} </p>
           </p>
           <p className="page-title2" > 0 {t('NO_OF_QUESTIONS')}</p>
 
           <section className="blue-section">
                <input checked={checkd} onChange={handleCheck}
                type="checkbox" name="check" className="checkbox" id="check"/> 
                <label className="checkbox-label" htmlFor="check">
                    <p className="popup" id="toggle-checkbox" href=""> {t('ADD_QUESTION')}</p>
                    {checkd?<i className="fas fa-times" id="cancel-icon"></i> :null
                    }
                 </label>

                 <input checked={checked} onChange={handleCheck2}
                type="checkbox" name="check2" className="checkbox" id="check2"/>
                <label className="checkbox-label" htmlFor="check2">
                    <p className="popup" id="toggle-checkbox" href=""> {t('IMPORT_QUESTION')}</p>
                    {/* {checked?<i className="fas fa-times" id="cancel-icon"></i> :null
                    } */}
                 </label>  

                {/* <a className="a" href=""> {t('IMPORT_QUESTION')}</a> */}
                <a 
                // className="a" 
                href=""> <QuestionBranchingHeader />{t('QUESTION_BRANCHING')}</a>
            </section>
            {/* <a className="a"  onClick={(event) => handlePageCopy(idd,event)} href=""> <Duplicate /></a> 
            <a className="a" onClick={(event) => handlePageDelete(idd,event)} href=""> <Deleteg /></a> */}
        </div>
        <div className="open-page">
            <p className="noQuesMessage"> {t('PAGE_TITLE_MESSAGE')} </p>
        </div>
    </div>
    )
}

export default EmptyPage
