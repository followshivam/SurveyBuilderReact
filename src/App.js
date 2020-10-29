import React from 'react';
import './App.css';
// import ProjectTree from "./components/ProjectTree";
// import ProcessTree from "./components/ProcessTree";
import Survey from "./components/Survey/Survey";
// import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div className="Main">
      {/* <MainHeader/> */}
    <div className="App">
      {/* <div className="App1">
        <ProjectTree className="tree1"/>
        <ProcessTree className="tree2"/>
      </div> */}
      <div className="App2">
        <Survey />
      </div>
        </div>
      </div>
  );
}

export default App;
