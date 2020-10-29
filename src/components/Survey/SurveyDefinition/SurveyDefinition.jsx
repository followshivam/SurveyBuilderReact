import React, {useState} from 'react'
import '../../components.css';
// import {useSelector, useDispatch} from "react-redux";
import {addInfo} from "../../../Actions/Listen";
import {connect} from "react-redux";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { DatePicker, Space } from 'antd';
import moment from 'moment';
import Button from '@material-ui/core/Button';

const { RangePicker } = DatePicker;
const useStyles = makeStyles((theme) => ({
  input: {
    display: 'none'    
  },
  button:{
    color:"#0072C6",
    border:"1px solid #0072C6",
    borderRadius:"0"
  }

}));
// const useStyles = makeStyles((theme) => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width: 200,
//   },
// }));

const BlueSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#0072C6',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

  function SurveyDefinition(props){
    
    console.log({props});
    const classes = useStyles();
    
    // const globalData=useSelector(state => state.SurveyInfo);
    // const dispatch=useDispatch();
    // function handleChange(event){
    //   const {name, value}=event.target;
    //   setData((prev)=>{
    //     return{
    //     ...prev, [name]:value
    //   }})
    //   props.changeData(data);
    //   // dispatch(addInfo(data));
    // }
  // , duration:"", logo:"", 
  //   displayFormat:"", showQuestions:"", showProgress:""
  //   const [data, setData]= useState({
  //   title: props.title, 
  //   description: props.description,
  //   project:props.project,
  //   showProgress:props.showProgress
  // });
    const [date,setDate]=useState({
      start:"08/10/1993",
      end:"08/08/2222"
    });

    function handleChange(event){
      const {name,value}=event.target;
      console.log(name+" value is: "+value);
      props.changeData({name,value});
    }
    function handleToggle(event){
      const {name,checked}=event.target;
      const value=checked;
      console.log(name+" value is: "+value);
      props.changeData({name,value});
    };

    function handleDate(val,dateString){
      console.log('Formatted Selected Time: ', dateString);
      console.log({date});
      const startDate=dateString[0];
      const endDate=dateString[1];
      const name="duration";
      const value={start:startDate,end:endDate};
      props.changeData({name,value});

      setDate((prev)=>{
        return({
          ...prev, start:startDate , end:endDate
        })
      });
    }

    function onOk(value) {
      console.log('onOk: ', value);
    }

    const getStartDate=props.duration;
    
    return (
    <div className="surveyDefinition">
        <div className="surveydef-div">
            <label className="label" htmlFor="title"><span className="span">* &nbsp;</span>Title : </label>
            <input onChange={handleChange}  name="title" value={props.title}
            type="text" placeholder="Enter title" id="title" required={true} />
        </div>
        <div className="surveydef-div">
            <label htmlFor="description">Description:</label>
            <TextareaAutosize rowsMin={3} onChange={handleChange} name="description" 
            value={props.description}
            type="text" id="description" placeholder="Enter description" required />
            </div>
        <div className="surveydef-div">
            <label htmlFor="project"><span className="span">* &nbsp;</span>Project:</label>
            <Select
              native
              value={props.project}
              onChange={handleChange}
              label="Select Department"
              inputProps={{
              name: "project",
              id: "project",
            }}>
            <option aria-label="None" value="" />
            <option value="HR">HR</option>
            <option value="Development">Development</option>
            <option value="Testing">Testing</option>
            <option value="Admin">Admin</option>
            </Select>
            {/* <input onChange={handleChange} name="project" value={props.project}
            type="text" id="project" placeholder="Enter Project Name" required  /> */}
        </div>
        <div className="surveydef-div">
            <label htmlFor="duration"><span className="span"> * &nbsp;</span>Duration:</label>
            <div>
            <RangePicker
            defaultValue={[moment(date.start, "DD/MM/YYYY"), moment(date.end, "DD/MM/YYYY")]}
            format="DD/MM/YYYY"  onChange={handleDate } 
            className="duration" onOK={onOk} 

            />
            </div>
            {/* <TextField
              id="duration"
              type="date"
              defaultValue=""
              className={classes.textField}
              /> */}
        </div>
        <div className="surveydef-div">
            <label htmlFor="logo">Logo:</label>
            <div className="logo">
        <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
          />
          <label htmlFor="contained-button-file">
            <Button size="small" variant="outlined" className={classes.button} component="span">
              Upload
            </Button>
          </label>       
        </div>
        </div>
        
        <div className="surveydef-div">
            <label htmlFor="displayFormat"><span className="span">* &nbsp;</span>Survey Display Format:</label>
            <input type="text" id="displayFormat" />
        </div> 
         <div className="surveydef-div">
            <label htmlFor="showQuestions">Show Question Number:</label>
            <div className="switch">
            <BlueSwitch  
              className="switch"
              checked={props.showQuestions}
              onChange={handleToggle}
              name="showQuestions" />
              </div>
        </div>
        <div className="surveydef-div">
            <label htmlFor="showProgress">Show Progress Bar:</label>
            <div className="switch"> 
            <BlueSwitch  
              className="switch"
              checked={props.showProgress}
              onChange={handleToggle}
              name="showProgress" />
              </div>
        </div>
        
    </div>
    );
}

 function mapStateToProps(state){
  return{
    title:state.title,
    description:state.description,
    project:state.project,
    duration:state.duration,
    showProgress:state.showProgress,
    showQuestions:state.showQuestions
  }
}

function matDispatchToProps(dispatch){
  return{
    changeData:(data)=>{dispatch(addInfo(data))}
  }
}

export default connect(mapStateToProps,matDispatchToProps)(SurveyDefinition);

