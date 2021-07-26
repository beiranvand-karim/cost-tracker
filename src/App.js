import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import styled from 'styled-components';

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
    testButton: {
      position: 'absolute',
      right: -16,
      bottom: -16,
      transform: 'translate(-50%, -50%)',
      marginTop: 40,
    },
    tableStyle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      flexDirection: 'column',
      marginTop: 40,
    },
    costStyle: {
      alignSelf: 'center',
      textAlign: 'center',
    },
    catgryStyle: {
      order: 1,
    },
    dscrpStyle: {
      order: 2,
    },
    bodyStyle: {},
  })
);
const useStyles2 = makeStyles({
  table: {
    minWidth: 650,
  },
});
const showModal1 = styled(Modal)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const App = () => {
  const [annaCost, setAnnaCost] = useState([]);

  const [open, setOpen] = useState(false);

  const [title, setTitle] = useState('');

  const [title2, setTitle2] = useState('');

  const [title3, setTitle3] = useState('');

  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    setAnnaCost((values) =>
      setAnnaCost([
        ...values,
        { costItem: title, category: title2, description: title3 },
      ])
    );
    setOpen(false);
  };

  return (
    <div className="App">
      <TableContainer component={Paper}>
        {annaCost.length > 0 && (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="right">costItem</TableCell>
                <TableCell align="right">category</TableCell>
                <TableCell align="right">description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {annaCost.map((row) => (
                <TableRow key={row.name}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.costItem}</TableCell>
                  <TableCell>{row.category}</TableCell>
                  <TableCell>{row.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </TableContainer>
      <Fab className={classes.testButton} onClick={() => setOpen(true)}>
        <AddIcon />
      </Fab>

      <showModal1
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <form>
              <Typography>
                <TextField
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  fullWidth
                  variant="outlined"
                  margin="20"
                  label="Cost Item"
                />

                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="grouped-native-select">
                    Grouping
                  </InputLabel>
                  <Select
                    native
                    defaultValue=""
                    id="grouped-native-select"
                    value={title2}
                    onChange={(e) => setTitle2(e.target.value)}
                  >
                    <option value="food"> food </option>
                    <option value="clothes"> clothes </option>
                    <option value="furniture"> furniture </option>
                    <option value="gym"> gym </option>
                  </Select>
                </FormControl>
                <div>
                  <TextareaAutosize
                    value={title3}
                    onChange={(e) => setTitle3(e.target.value)}
                    aria-label="empty textarea"
                    placeholder="Empty"
                  />
                </div>

                <div className="btn-style">
                  <Button
                    variant="contained"
                    onClick={handleSubmit}
                    className={classes.customStyle}
                  >
                    Add
                  </Button>
                  <Button
                    onClick={() => setOpen(false)}
                    variant="contained"
                    className={classes.customStyle}
                  >
                    Cancel
                  </Button>
                </div>
              </Typography>
            </form>
          </div>
        </Fade>
      </showModal1>
    </div>
  );
};

export default App;
