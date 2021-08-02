import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import AddUserFab from './AddUserFab';
import UserModal from './UserModal';
import UsersTable from './UsersTable';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';


const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  })
);
const AddUser = styled(Fab)`
  background-color: tomato;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const App = () => {
  const annaCost = useSelector((state) => state.annaCost);
  console.log(annaCost);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const [title, setTitle] = useState('');

  const [title2, setTitle2] = useState('');

  const [title3, setTitle3] = useState('');

  const classes = useStyles();

  const addUser = (e) => {
    dispatch({
      type: 'AddTable',
      payload: { costItem: title, category: title2, description: title3 },
    });
    setOpen(false);
    console.log(annaCost);
  };

  return (
    <div className="App">
      <UsersTable annaCost={annaCost} />
      {annaCost.length > 0 && (
        <AddUserFab setOpen={setOpen} classes={classes} />
      )}
      <UserModal
        addUser={addUser}
        title={title}
        title2={title2}
        title3={title3}
        classes={classes}
        setOpen={setOpen}
        setTitle={setTitle}
        setTitle2={setTitle2}
        setTitle3={setTitle3}
        classes={classes}
        open={open}
      />
      {annaCost.length == 0 && (
        <AddUser onClick={() => setOpen(true)}>
          <AddIcon />
        </AddUser>
      )}
    </div>
  );
};

export default App;
