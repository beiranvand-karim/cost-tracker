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
    font-size: 13px;
    font-style: oblique;
    font-weight: bold;
  `;

  const AddButton = styled(Button)`
    color: green;
    border-color: tomato;
    margin: 10px;
    font-style: oblique;
    font-weight: bold;
  `;
  const UserForm = styled(FormControl)`
    min-width: 220px;
    height: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    font-family: 'Times New Roman', Times, serif;
    font-size: 10px;
    font-weight: bold;
  `;
  const CostField = styled(TextField)`
    margin-bottom: 10px;
  `;
  const DescField = styled(TextareaAutosize)`
    margin-top: 20px;
  `;
  const SelectOption = styled(Select)`
    font-family: 'Times New Roman', Times, serif;
    font-size: 20px;
    font-weight: bold;
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
            <form noValidate autoComplete="off">
              <TextField
                className={classes.txtStyle}
                value={title}
                color="primary"
                onChange={(e) => setTitle(e.target.value)}
                fullWidth
                variant="outlined"
                placeholder="Cost Itmes"
                multiline
                rows={2}
              />

              <UserForm>
                <InputLabel htmlFor="grouped-native-select">
                  Category
                </InputLabel>
                <SelectOption
                  native
                  fullWidth
                  value={title2}
                  onChange={(e) => setTitle2(e.target.value)}
                  color="primary"
                >
                  <option value="food"> food </option>
                  <option value="clothes"> clothes </option>
                  <option value="furniture"> furniture </option>
                  <option value="gym"> gym </option>
                </SelectOption>
              </UserForm>
              <div>
                <TextField
                  color="primary"
                  fullWidth
                  multiline
                  rows={3}
                  variant="outlined"
                  value={title3}
                  onChange={(e) => setTitle3(e.target.value)}
                  placeholder="description"
                />
              </div>

              <AddButton variant="contained" onClick={addUser}>
                Add
              </AddButton>

              <TomatoButton onClick={() => setOpen(false)} variant="contained">
                Cancel
              </TomatoButton>
            </form>
          </div>
        </Fade>
      </Dialog>
    </div>
  );
};

export default UserModal;
