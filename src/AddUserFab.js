import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import React from 'react';
import styled from 'styled-components';

const AddUserFab = ({ setOpen }) => {
  const AddFab = styled(Fab)`
    position: absolute;
    right: -16px;
    bottom: -16px;
    transform: translate(-50%, -50%);
    margin-top: 40px;
    background-color: burlywood;
  `;

  return (
    <div className="add-user-fab">
      <AddFab onClick={() => setOpen(true)}>
        <AddIcon />
      </AddFab>
    </div>
  );
};

export default AddUserFab;
