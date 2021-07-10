
import * as ReactBootStarp from 'react-bootstrap'
import Fab from '@material-ui/core/Fab'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);





const App = () => {
  const annaCost = [
    {amount:"10000$",name:"ice cream",reason:"summer"},
    {amount:"15120$",name:"bank",reason:"save"},
    {amount:"14000$",name:"dinner",reason:"food"},
    {amount:"12000$",name:"football",reason:"gym"}
  ]
  const[open,setOpen] = React.useState(false);
  const classes = useStyles(); 
  const renderCosts =(cost , index)=>{

  
    return(
      <tr key={index}>
        <td>{cost.amount} </td>
        <td>{cost.name} </td>
        <td>{cost.reason}</td>
      </tr>


    )
    
  }
  

 


  return (
    <div className="App">
      <ReactBootStarp.Table striped hover bordered>
            <thead>
              <tr>
                <th>amount</th>
                <th>name</th>
                <th>reason</th>
              </tr>
            </thead>
            <tbody>
             {annaCost.map(renderCosts)}
            </tbody>
      </ReactBootStarp.Table>
      <button type="button" onClick={()=> setOpen(true)}>
        react-transition-group
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={()=> setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Typography>
              <TextField
              fullWidth
              variant="outlined"
              margin="20"
              label="name" />
              <TextField
              fullWidth
              variant="outlined"
              label="lase name"
               />
               <Button
               variant="contained"
               >
                 Add
               </Button>
               <Button onClick ={()=> setOpen(false)}
               variant="contained" >
                 Cancel
               </Button>
            </Typography>
          </div>
        </Fade>
      </Modal> 


    </div>
  );
}

export default App;
