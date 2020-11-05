import React from 'react';

import './Publish.css';

const Publish2 = (props) =>(
              <div className="Conte">
        <div  onClick={props.changeHand}  class="back"><strong> <i class="arrow left"></i> Back to Publish </strong></div><br/>
        <div ><strong>Execution ID</strong></div>
        <div ><strong>19</strong></div><br/>
        <div ><strong>Execution Time</strong></div>
        <div ><strong>24-09-2020 </strong><strong className="Con"> 05:38:42</strong></div><br/>
        <button className="Cont1">Preview Survey</button>  or  <button className="Cont2">Copy Survey</button>
  </div>
)

export default Publish2