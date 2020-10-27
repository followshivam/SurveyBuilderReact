import React,{useState} from 'react';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import DeleteIcon from '@material-ui/icons/Delete';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import EditQuestion from "./EditQuestion";
import EditQuestion2 from "./EditQuestion2";
import "./EditQuestion2.css";

function PageTitle() {

    const [main, setMain]=useState([]);

    const [opened,setOpened]=useState(false);
    const [checkd,setCheckd]=useState(false);

    function handleOpenClose(){
        setOpened(!opened);
    }
    function handleCheck(){
        setCheckd(!checkd);
    }
    function importData(data){
        setMain([
            ...main,
            {
                id:data.id,
                question:data.question,
                isMandatory:data.isMandatory,
                type:data.type
            }
        ]);
    }
    function saveAction(){
        setOpened(true);
        setCheckd(false);
    }

    console.log({main});
    

    return (
        <div className="page"  >
        <div className="pageTitle">
           <p onClick={handleOpenClose} className="heading">
           {opened? <ArrowDropDownIcon fontSize="large" /> :<ArrowRightIcon fontSize="large"/> }  
             &nbsp;
            <input type="text" className="input" name="pageName" placeholder="Page Title"/>
           </p>
           <p> 0 Questions</p>

           <section className="blue-section">
                <input checked={checkd} onChange={handleCheck}
                type="checkbox" name="check" class="checkbox" id="check"/>
                <label class="checkbox-label" htmlFor="check">
                    <p className="popup" id="toggle-checkbox" href=""> Add Question</p>
                    {checkd?<i class="fas fa-times" id="cancel-icon"></i> :null
                    }
                 </label>
            


            <a className="a" href=""> Important Question</a>
            <a className="a" href=""> * Question Branching</a>
           </section>
           <a className="a" style={{color:"#697A8B"}} href=""> <FileCopyIcon fontSize="small" /> </a>
           <a className="a" style={{color:"#697A8B"}} href=""> <DeleteIcon fontSize="small"/></a>
        </div>
        {opened?
            <div>
            <p className="noQuesMessage">There are no questions for this survey. Click on "Add Questions" or "Import Questions" tab.</p>
            
             {main.map(q => (
                <div className="rendered">
                    <div className="rendered-data">
                        <p className="p1" > {q.id}. &nbsp; {q.question} </p>
                        <p className="p2">{q.type}</p>
                    </div>
                    
                    <div className="rendered-buttons">
                        <button><FileCopyIcon fontSize="small" /></button>
                        <button><DeleteIcon fontSize="small"/></button>
                        <button><FileCopyIcon fontSize="small" /></button>
                        <button><DeleteIcon fontSize="small"/></button>
                    </div>
                </div>
                ))}
            
            </div>
            
            :null}
            <button className="addPage"> Add Page</button>
            {checkd?<EditQuestion2 actionSave={saveAction} getData={importData} className="popup"/> :null
            }
            
        </div>
    )
}

export default PageTitle
