import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Deleteg from "../../../iconComponents/Deleteg.tsx";
import "./Confirm.css";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Confirm(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleAgree = () => {
    setOpen(false);
    // props.setConfirmDelete(true);
    // if(props.id!==""){
    // props.handleDelete(props.idd,props.id);
    // } else{
    //   props.handlePageDelete(props.idd);
    // }
    if(props.id===""){
      props.handlePageDelete(props.idd);
    } else{
      props.handleDelete(props.idd,props.id);
    }
  };

  const handleDisagree = () => {
    setOpen(false);
    // props.setConfirmDelete(false);
  };

  const handleClose=() => {
    setOpen(false);
  }

  return (
    <div className="confirm-div"
    // style={{display:"inline" ,padding:"0", margin:"0", width:"24px", height:"24px"}} 
    >
      <Button className="confirm-button"
      color="primary" onClick={handleClickOpen}>
        {/* Slide in alert dialog */}
        <Deleteg style={{display:"inline" ,padding:"0", margin:"0"}}/> 
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{props.ask}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {props.info}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDisagree} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAgree} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
