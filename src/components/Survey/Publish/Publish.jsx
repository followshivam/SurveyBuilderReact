import React,{useState} from 'react'
// import { useTranslation } from 'react-i18next';
import './Publish.css';
import Publish2 from './Publish2';

function Publish() {
    const [show, setShow] = useState(false);

    function changeHandler(){
      setShow(true);
    }

    function changeHandlertoFalse(){
    setShow(false);
    }

    if(show)
        {
        return <Publish2  changeHand={changeHandlertoFalse} />;
        }

    // const { t } = useTranslation();
    return (
        
        <div className="Conte2">
          <div className="Sel"><strong>Select the pipeline to publish</strong></div>
          <select name="Select"  className="Sel2">
          <option value="Select">Select</option>
          </select><br/>
          <button onClick={changeHandler}   className="Cont3">Execute</button>
          </div>
    )
}

export default Publish
