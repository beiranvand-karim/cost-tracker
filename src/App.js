import * as ReactBootStarp from 'react-bootstrap'
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
import { useState } from 'react';
import { Height, Translate } from '@material-ui/icons';



const useStyles = makeStyles((theme) =>
  createStyles({
    modal: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      
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
    testButton:{
      position:'absolute',
      right:"50%",
      left:"50%",
      transform: 'translate(-50%, -50%)',
      marginTop:20
    },
  }),
);

const App = () => {
  const [annaCost,setAnnaCost] =useState( [{
    costItem:"kabab",category:"food",description:"for fun"}
  ])
  
 
  
  
  const[open,setOpen] = useState(false);

  const [title,setTitle] = useState('');

  const [title2,setTitle2] = useState('');

  const [title3,setTitle3] = useState('');

  const classes = useStyles(); 

  const handleSubmit=(e)=>{
    e.preventDefault();
    setAnnaCost(values=>setAnnaCost([...values,{costItem:title,category:title2,description:title3}]))
    setOpen(false)
  }

  const renderCosts =(cost , index)=>{
    return(
      <tr key={index}>
        <td>{cost.costItem} </td>
        <td>{cost.category} </td>
        <td>{cost.description}</td>
      </tr>
    ) 
  }

  return (
    <div className="App">
      <ReactBootStarp.Table striped hover bordered>
            <thead>
              <tr>
                <th>costItem</th>
                <th>category</th>
                <th>description</th>
              </tr>
            </thead>
            <tbody>
             {annaCost.map(renderCosts)}
            </tbody>
      </ReactBootStarp.Table>
      <button type="button" onClick={()=> setOpen(true)} 
      className={classes.testButton} >
        Add Cost Item
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
            <form  >
            <Typography>
              <TextField
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              fullWidth
              variant="outlined"
              margin="20"
              label="Cost Item" />

      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select">Grouping</InputLabel>
        <Select native defaultValue="" id="grouped-native-select"
        value={title2} onChange={(e)=>setTitle2(e.target.value)}
         >
            <option value="food">  food </option>
            <option value="clothes" > clothes </option>
            <option value="furniture" > furniture </option>
            <option value="gym" > gym </option>
          
        </Select>
      </FormControl>
     <div>
     <TextareaAutosize  value={title3} 
     onChange={(e)=>setTitle3(e.target.value)} aria-label="empty textarea" placeholder="Empty" />
     </div>
     
      <Button
      variant="contained"
      onClick={handleSubmit}

      >
        Add
      </Button>
      <Button onClick ={()=> setOpen(false)}
      variant="contained" >
        Cancel
      </Button>
      
     
               
            </Typography>
            </form>
            
          </div>
        </Fade>
      </Modal> 
    </div>
  );
}

export default App;
