
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
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

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
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }),
);

const App = () => {
  const annaCost = [
    {CostItem :"",Category:"",Description:""},
    {CostItem:"",Category:"",Description:""},
    {CostItem:"",Category:"",Description:""},
    {CostItem:"",Category:"",Description:""}
  ]

  const[open,setOpen] = React.useState(false);

  const classes = useStyles(); 

  const renderCosts =(cost , index)=>{
    return(
      <tr key={index}>
        <td>{cost.CostItem} </td>
        <td>{cost.Category} </td>
        <td>{cost.Description}</td>
      </tr>
    ) 
  }

  return (
    <div className="App">
      <ReactBootStarp.Table striped hover bordered>
            <thead>
              <tr>
                <th>CostItem</th>
                <th>Category</th>
                <th>Description</th>
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
              label="Cost Item" />

      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select">Grouping</InputLabel>
        <Select native defaultValue="" id="grouped-native-select">
            <option value={1}>  food </option>
            <option value={2}> clothes </option>
            <option value={3}> furniture </option>
            <option value={4}> gym </option>
          
        </Select>
      </FormControl>
     <div>
     <TextareaAutosize aria-label="empty textarea" placeholder="Empty" />
     </div>
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
