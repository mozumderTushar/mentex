import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Typography, Button, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles(theme => ({
  dialog: {
    padding: theme.spacing(2),
    position: 'absolute',
    top: theme.spacing(5)
  },
  dialogTitle: {
    textAlign: 'center'
  },
  dialogContent: {
    textAlign: 'center'
  },
  dialogActions: {
    justifyContent: 'center'
  },
  titleIcon: {
    color: '#FF454D',
    background: '#FFE2E8',
    '&:hover': {
      backgroundColor: '#FF454D',
      color: '#FFE2E8',
      cursor: 'default'
    },
    '& .MuiSvgIcon-root': {
      fontSize: '3rem',
    }
  }
}))

const ConfirmDialog = (props) => {
  const { confirmDialog, setConfirmDialog } = props;
  const classes = useStyles()
  return (
    <Dialog open={confirmDialog.isOpen} classes={{ paper: classes.dialog }}>
      <DialogTitle className={classes.dialogTitle}>
        <IconButton disableRipple className={classes.titleIcon}>
          <NotListedLocationIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <Typography variant="h6">
          {confirmDialog.title}
        </Typography>
        <Typography variant="subtitle2">
          {confirmDialog.subTitle}
        </Typography>
      </DialogContent>
      <DialogActions className={classes.dialogActions}>
        <Button variant="contained" onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })}>
          <CloseIcon />No
        </Button>
        <Button variant="contained" color="secondary" onClick={confirmDialog.onConfirm}>
         <CheckIcon/> Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;