import React,{useState} from 'react';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function ThankYou() {

    const [opened,setOpened]=useState(false);
    
    function handleOpenClose(){
        setOpened(!opened);
    }

    return (
        <div onClick={handleOpenClose} className="thankYou">
           <p className="heading"> 
           {opened? <ArrowDropDownIcon fontSize="large"/> : <ArrowRightIcon fontSize="large"/> } &nbsp; Thank You Page </p>
           {opened? 
           <p className="thankYouMessage">We thank you for taking the survey. It will hep us in making the required improvements.</p>
            : null}
        </div>
    )
}

export default ThankYou
