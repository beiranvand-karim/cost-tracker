import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import React from 'react';
const AddUserFab = ({ setOpen, classes }) => {
  return (
    <div className="add-user-fab">
      <Fab onClick={() => setOpen(true)} className={classes.testButton}>
        <AddIcon />
      </Fab>
    </div>
  );
};

export default AddUserFab;
