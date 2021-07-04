import './App.css';
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/styles';
import { useState } from 'react';
import Modal from './Modal';
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const useStyle = makeStyles({
  actionStyle:{
    marginTop:20,
    color:'@FF2232'
  },
    iconColor:{
      color:'#FF5733',
    }
})

function App() {
  
  const classes = useStyle();
  const [setPopup,setIsPopup] = useState(false)


  return (
    <div className="App">
      <Fab className ={classes.actionStyle} onClick={()=> setIsPopup(true)}>
        <AddIcon className={classes.iconColor}/>
      </Fab>
      <Modal open ={setPopup}>
        <Typography>
          <form >
            <TextField
            className ={classes.actionStyle}
            variant='outlined'
            label='Name'
            fullWidth
            multiline
             />
            <TextField
            className ={classes.actionStyle}
            variant='outlined'
            label='Family'
            fullWidth
            multiline
             />
            <TextField
            className ={classes.actionStyle}
            variant='outlined'
            label='Address'
            fullWidth
            multiline
            rows={2} />

            <Button variant='contained' className={classes.actionStyle}
            onClick={()=> console.log('your form submitted')}
             >
              submit
            </Button>
            
          </form>
        </Typography>
        
      </Modal>
    </div>
  );
}

export default App;
