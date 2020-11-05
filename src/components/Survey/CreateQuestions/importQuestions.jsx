import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './EditQuestion2.css';
import { Table, Tag, Space } from 'antd';
import { useTranslation } from 'react-i18next';

function ImportQuestions () {

const columns = [
 {
    title: <span className="target-field-header"> Target Fields </span>,
    dataIndex: "target_field",
    key: "target_field",
    render: text => <a>{text}</a>
  },
  {
    title: <span className="source-field-header"> Source Fields </span>,
    dataIndex: "source_field",
    key: "source_field"
  }
  
];

const data = [
  {
    key: '1',
    target_field: <span className="target-field-column">Question Label </span> ,
    source_field: <select className='source-field-column'>
      <option value='question_label'>Question Label</option>
      </select>
   
  },
  {
    key: '2',
    target_field: <span className="target-field-column">Answer Type</span>,
    source_field: <select className='source-field-column'>
      <option value='answer_type'>Answer Type</option>
      </select>
   
  },
    {
    key: '3',
    target_field: <span className="target-field-column">Option 1 </span>,
    source_field: <select className='source-field-column'>
      <option value='option1'>1st Option</option>
      </select>
   
  },
    {
    key: '4',
    target_field: <span className="target-field-column">Option 2 </span>,
    source_field: <select className='source-field-column'>
      <option value='option2'>2nd Option</option>
      </select>
   
  },
    {
    key: '5',
    target_field: <span className="target-field-column">Option 3 </span>,
    source_field: <select className='source-field-column'>
      <option value='option3'>3rd Option</option>
      </select>
   
  },
    {
    key: '6',
    target_field: <span className="target-field-column">Option 4 </span>,
    source_field: <select className='source-field-column'>
      <option value='option4'>4th Option</option>
      </select>
   
  },
    {
    key: '7',
    target_field: <span className="target-field-column">Option 5 </span>,
    source_field: <select className='source-field-column'>
      <option value='option5'>5th Option</option>
      </select>
   
  },
];

return (
  <div className="question-popup">
  <h3 className = "import-ques-heading" >Import Question</h3>
        <button className="choose-file-btn">
        Choose File
        </button>
        <input className="choose-file-input" type='text'></input>
        <button className="define-mapping">
        Define Mapping
        </button>
          <div className="separator">
            <span className="separator-text"> Separator* </span>
                <select className="separator-select">
                    <option aria-label="Comma" value="Select" >Comma </option>
                </select> 
          </div>
            <h3 className="mapping"> Mapping </h3>
  <Table className="table" columns={columns} dataSource={data} pagination={false} />
  <div className="div-bottom">
    <span> No of Questions imported per page </span>
    <input  className="imported-question-no"type="text">
    </input>
  </div>
              <button className="import-button">Import </button>
              <button className="cancel-button">Cancel
              </button>
  </div>

)
}

export default ImportQuestions;