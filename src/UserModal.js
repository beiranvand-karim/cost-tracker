import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import React from 'react';
import styled from 'styled-components';
import { Dialog } from '@material-ui/core';

const UserModal = ({
  addUser,
  title,
  title2,
  title3,
  open,
  setOpen,
  setTitle,
  setTitle2,
  setTitle3,
  classes,
}) => {
  const TomatoButton = styled(Button)`
    color: tomato;
    border-color: tomato;
  `;
  //ss
  const AddButton = styled(Button)`
    color: green;
    border-color: tomato;
    margin: 10px;
  `;
  const UserForm = styled(FormControl)`
    margin: theme.spacing(1);
    min-width: 120px;
  `;

  return (
    <div className="user-modal">
      <Dialog
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
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

                <UserForm>
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
                </UserForm>
                <div>
                  <TextareaAutosize
                    value={title3}
                    onChange={(e) => setTitle3(e.target.value)}
                    aria-label="empty textarea"
                    placeholder="Empty"
                  />
                </div>

                <div className="btn-style">
                  <AddButton variant="contained" onClick={addUser}>
                    Add
                  </AddButton>

                  <TomatoButton
                    onClick={() => setOpen(false)}
                    variant="contained"
                  >
                    Cancel
                  </TomatoButton>
                </div>
              </Typography>
            </form>
          </div>
        </Fade>
      </Dialog>
    </div>
  );
};

export default UserModal;
