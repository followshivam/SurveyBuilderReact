import React from 'react';


function PageTitle() {
    return (
        <div>
        <div className="pageTitle">
           <p className="heading"> > 
            <input type="text" className="input" name="pageName" placeholder="Page Title"/>
           </p>
           <p> 0 Questions</p>
           <a href=""> Add Question</a>
           <a href=""> Important Question</a>
           <a href=""> * Question Branching</a>
           <a href=""> ⚙ </a>
           <a href=""> 🗄</a>
        </div>
            <button className="addPage"> Add Page</button>
            
        </div>
    )
}

export default PageTitle
