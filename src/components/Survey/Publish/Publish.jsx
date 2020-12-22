import React,{useState} from 'react'
// import { useTranslation } from 'react-i18next';
import './Publish.css';
import Publish2 from './Publish2';
import Preview from '../Preview';

function Publish() {
    const [show, setShow] = useState(false);
    const [showPreview,setShowPreview]=useState(false);

    function changeHandler(){
      setShow(true);
    }
    
    function handleShowPreview(){
      setShowPreview(!showPreview);
    }

    function openPreviewInNewTab(){
      window.open('http://localhost:3000/preview','Data','height=1200,width=900,left=450');
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
        <>
        <div className="Conte2">
          <div className="Sel"><strong>Select the pipeline to publish</strong></div>
          <select name="Select"  className="Sel2">
          <option value="Select">Select</option>
          </select><br/>
          <button onClick={changeHandler}   className="Cont3">Execute</button>
          <button onClick={(openPreviewInNewTab)}   className="Cont3">Preview</button>
        </div>
        {/* {showPreview ? <> <Preview/> <i onClick={handleShowPreview} className="fas fa-times" id="cancel-icon-preview"></i> </>: null} */}
        </>
    )
}

export default Publish
