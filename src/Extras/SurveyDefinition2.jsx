import React, {useState} from 'react'
import '../components.css';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from 'antd';

import 'antd/dist/antd.css';


  
  function SurveyDefinition(){

    const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('horizontal');

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  const formItemLayout =
    formLayout === 'horizontal'
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null;
  const buttonItemLayout =
    formLayout === 'horizontal'
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;

    const [data, setData]= useState({
    title: "", description:"", project:"", duration:"", logo:"", 
    displayFormat:"", showQuestions:"", showProgress:""
  });

  
    return (
    <div className="surveyDefinition">
        {/* <label htmlFor=""> *Title: <input type="text" /></label> 
        <label>  Description: <input type="text" /></label>
        <label>  Project: <input type="text" /></label>
        <label >Duration: <input type="date"/> </label>
        <label >Logo: <input type="file" /> </label>
        <label >  Survey Display Format: <input type=""/> </label>
        <label > Show Question Number: <input type="" /> </label>
        <label > Show Progress Bar: <input type="checkbox" /> </label> */}
        <div className="surveydef-div">
            <label htmlFor="title">*Title:</label>
            <input type="text" id="title" />
        </div>
        <div className="surveydef-div">
            <label htmlFor="description">Description:</label>
            <input type="text" id="description" />
        </div>
        <div className="surveydef-div">
            <label htmlFor="project">*Project:</label>
            <input type="text" id="project" />
        </div>
        <div className="surveydef-div">
            <label htmlFor="duration">*Duration:</label>
            <input type="date" id="duration" />
        </div>
        <div className="surveydef-div">
            <label htmlFor="logo">Logo:</label>
            <input type="file" id="logo" />
        </div>
        <div className="surveydef-div">
            <label htmlFor="displayFormat">*Survey Display Format:</label>
            <input type="text" id="displayFormat" />
        </div> 
         <div className="surveydef-div">
            <label htmlFor="showQuestions">Show Question Number:</label>
            <input type="checkbox" id="showQuestions" />
        </div>
        <div className="surveydef-div">
            <label htmlFor="showProgress">Show Progress Bar:</label>
            <input type="checkbox" id="showProgress" />
        </div>
        {/* <div className="displayFormat-ant">
        <Form.Item label="*Survey Display Format:" name="layout">
          <Radio.Group  value={formLayout}>
            <Radio.Button className="choose" value="horizontal">Horizontal</Radio.Button>
            <Radio.Button className="choose" value="vertical">Vertical</Radio.Button>
            <Radio.Button  className="choose" value="inline">Inline</Radio.Button>
          </Radio.Group>
        </Form.Item>
        </div>
        <div className="showQues-ant">
            <Form.Item label="Show Question Number:">
                <Switch />
            </Form.Item>
        </div>
        <div className="showProgress-ant">
            <Form.Item label="Show Progress Bar:">
                <Switch />
            </Form.Item>
        </div> */}

    </div>
    );
}

export default SurveyDefinition;

