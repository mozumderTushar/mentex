import React, { useEffect, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { withStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import PrescriptionModal from './PrescriptionModal';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});
const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const AppointmentListTable = ({ appointmentList, handleClose, handleOpen, open, body }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [prescriptionID, setPrescriptionID] = useState();
  const [prescriptionUser, setPrescriptionUser] = useState([]);

  function openModal(id) {
    setIsOpen(true);
    setPrescriptionID(id)
    console.log('openModal',id);
  }

  function closeModal() {
    setIsOpen(false);
  }
  useEffect(() => {
    const appointmentUserInfo = appointmentList.find(item => item._id === prescriptionID)
    setPrescriptionUser(appointmentUserInfo)
  })

  return (
    <div className="table-responsive">
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Full Description
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom >
            {body}
          </Typography>
        </DialogContent>
      </Dialog>
      <table class="table table-striped table-dark table__list">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Disease</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Weight</th>
            <th scope="col">Details</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            appointmentList.map((appointment, index) =>
              <tr key={appointment._id}>
                <th scope="row">{index + 1}</th>
                <td>{appointment.service}</td>
                <td>{appointment.name}</td>
                <td>{appointment.age}</td>
                <td>{appointment.weight}</td>
                {
                  appointment.details.length > 100 ? <td>{appointment.details.substring(0, 100)}
                    <a onClick={() => handleOpen(appointment._id)} style={{ color: '#5F81C8', cursor: 'pointer' }}>
                      See More
                    </a>
                  </td>
                    :
                    <td>{appointment.details}</td>
                }
                <td> <button type="button" onClick={()=>openModal(appointment._id)} className="btn btn-success">Advice</button></td>
              </tr>
            )
          }
        </tbody>
      </table>
      <PrescriptionModal modalIsOpen={modalIsOpen} closeModal={closeModal} prescriptionID={prescriptionID} prescriptionUser={prescriptionUser}></PrescriptionModal>
      <div className="table__banner row mt-3 mb-5 ml-3">
        <h3 className="about-title">Get In Touch</h3>
        <p className="lead">“Anything that’s human is mentionable, and anything that is mentionable can be more manageable. When we can talk about our feelings, they become less overwhelming, less upsetting, and less scary.”</p>
        <p className="lead feel">Feel Free to contact with us...</p>
      </div>
    </div>
  );
};
export default AppointmentListTable;