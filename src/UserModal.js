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
import React from 'react';

const UserModal = ({
  handleSubmit,
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
  return (
    <div className="user-modal">
      <Modal
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
      </Modal>
    </div>
  );
};

export default UserModal;