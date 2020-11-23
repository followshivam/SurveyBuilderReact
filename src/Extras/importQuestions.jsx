import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './EditQuestion2.css';
import { Table, Tag, Space } from 'antd';
import { useTranslation } from 'react-i18next';

function ImportQuestions () {

  const {t} = useTranslation();

const columns = [
 {
    title: <span className="target-field-header"> {t('TARGET_FIELD_HEADER')} </span>,
    dataIndex: "target_field",
    key: "target_field",
    render: text => <a>{text}</a>
  },
  {
    title: <span className="source-field-header">{t('SOURCE_FIELD_HEADER')}</span>,
    dataIndex: "source_field",
    key: "source_field"
  }
  
];

const data = [
  {
    key: '1',
    target_field: <span className="target-field-column">{t('TARGET_FIELD_QUESTION_LABEL')}  </span> ,
    source_field: <select className='source-field-column'>
      <option value='question_label'>{t('SOURCE_FIELD_QUESTION_LABEL')}</option>
      </select>
   
  },
  {
    key: '2',
    target_field: <span className="target-field-column">{t('TARGET_FIELD_ANSWER_TYPE')}</span>,
    source_field: <select className='source-field-column'>
      <option value='answer_type'>{t('SOURCE_FIELD_ANSWER_TYPE')}</option>
      </select>
   
  },
    {
    key: '3',
    target_field: <span className="target-field-column">{t('TARGET_FIELD_OPTION1')} </span>,
    source_field: <select className='source-field-column'>
      <option value='option1'>{t('SOURCE_FIELD_OPTION1')}</option>
      </select>
   
  },
    {
    key: '4',
    target_field: <span className="target-field-column">{t('TARGET_FIELD_OPTION2')} </span>,
    source_field: <select className='source-field-column'>
      <option value='option2'>{t('SOURCE_FIELD_OPTION2')}</option>
      </select>
   
  },
    {
    key: '5',
    target_field: <span className="target-field-column">{t('TARGET_FIELD_OPTION3')} </span>,
    source_field: <select className='source-field-column'>
      <option value='option3'>{t('SOURCE_FIELD_OPTION3')}</option>
      </select>
   
  },
    {
    key: '6',
    target_field: <span className="target-field-column">{t('TARGET_FIELD_OPTION4')} </span>,
    source_field: <select className='source-field-column'>
      <option value='option4'>{t('SOURCE_FIELD_OPTION4')}</option>
      </select>
   
  },
    {
    key: '7',
    target_field: <span className="target-field-column">{t('TARGET_FIELD_OPTION5')} </span>,
    source_field: <select className='source-field-column'>
      <option value='option5'>{t('SOURCE_FIELD_OPTION5')}</option>
      </select>
   
  },
];

return (
  <>
  <div className="shade-main2"></div>
  <div className="question-popup">
  <h3 className="import-ques-heading"> {t('IMPORT_QUESTION_HEADING')} </h3>

      <button className="choose-file-btn"> {t('CHOOSE_FILE_BTN')}</button>
        <input className="choose-file-input" type='text'/>
        <button className="define-mapping"> {t('DEFINE_MAPPING_BTN')}</button>
      
    <div className="separator">
      <span className="separator-text"> {t('SEPARATOR_TEXT')}* </span>
      <select className="separator-select">
          <option aria-label="Comma" value="Select" >{t('SEPARATOR_SELECT')} </option>
      </select>
    </div> 
  <h3 className="mapping"> {t('MAPPING')} </h3>
  <Table className="table" columns={columns} dataSource={data} pagination={false} scroll={window.scroll} />
  <div className="div-bottom">
    <span>{t('NO_OF_QUESTION_IMPORTED')} </span>
    <input  className="imported-question-no"type="text"/>
  </div>

      <button className="import-button">{t('IMPORT_BTN')} </button>
      <button className="cancel-button">{t('CANCEL_BTN')} </button>
            
</div>
</>


)
}

export default ImportQuestions;