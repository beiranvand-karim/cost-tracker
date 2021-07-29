import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import AddUserFab from './AddUserFab';
import UserModal from './UserModal';
import UsersTable from './UsersTable';

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
      <UsersTable annaCost={annaCost} />
      <AddUserFab setOpen={setOpen} classes={classes} />
      <UserModal
        handleSubmit={handleSubmit}
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
    </div>
  );
};

export default App;
