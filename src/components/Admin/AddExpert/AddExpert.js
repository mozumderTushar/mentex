import React, { useContext, useState } from 'react';
import { UserContext } from '../../App/App';
import { Grid, Hidden, Paper, } from '@material-ui/core';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import ResponsiveSidebar from '../../Dashboard/ResponsiveSidebar/ResponsiveSidebar';
import { useHistory } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import Controls from "../../Controls/Controls";
import { useForm, Form } from '../../FormMaterialUi/useForm'
import { makeStyles } from '@material-ui/core/styles';
import ConfirmDialog from '../../Alert/ConfirmDialog/ConfirmDialog';
import Notification from '../../Alert/Notification/Notification';
import './AddExpert.css'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  }
}))


const genderItems = [
  { id: '1', title: 'Male' },
  { id: '2', title: 'Female' },
  { id: '3', title: 'Other' },
]
const occupationList = [
  { id: '1', title: 'Psychitrist' },
  { id: '2', title: 'Mental Researcher' },
  { id: '3', title: 'Other' },
]

const initialFValues = {
  fullName: '',
  email: '',
  mobile: '',
  occupation: '',
  gender: '',
  details: '',
}



const AddExpert = () => {

  const classes = useStyles()

  const validate = (fieldValues = values) => {
    let temp = { ...errors }
    if ('fullName' in fieldValues)
      temp.fullName = fieldValues.fullName ? "" : "This field is required."
    if ('email' in fieldValues)
      temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
    if ('mobile' in fieldValues)
      temp.mobile = fieldValues.mobile.length > 10 ? "" : "11 numbers required."
    if ('gender' in fieldValues)
      temp.gender = fieldValues.gender ? "" : "This field is required."
    if ('occupation' in fieldValues)
      temp.occupation = fieldValues.occupation ? "" : "This field is required."
    if ('details' in fieldValues)
      temp.details = fieldValues.details.length > 0 ? "" : "Add your details."
    setErrors({
      ...temp
    })

    if (fieldValues == values)
      return Object.values(temp).every(x => x == "")
  }

  const {
    values,
    errors,
    setErrors,
    handleInputChange,
    resetForm
  } = useForm(initialFValues, true, validate);

  const [notify, setNotify] = useState({
    isOpen: false,
    message: '',
    type: '',
  })
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: '',
    subTitle: '',
  })
  const [admin, setAdmin] = useState({})
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const [sidebarOpen, setSidebarOpen] = useState(false);
  let history = useHistory();

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const handleBlur = e => {
    const newAdmin = { ...admin }
    newAdmin[e.target.name] = e.target.value
    setAdmin(newAdmin)
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(values);
    resetForm();
    // fetch('https://peaceful-lake-24732.herokuapp.com/addExpert', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(admin)
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     if (data) {
    //       // alert('Expert Added Successfully')
    //       setNotify({
    //         isOpen: true,
    //         message: 'Expert Added Successfully',
    //         type: 'success'
    //       })
    //       // document.getElementById('email').value = '';
    //         setConfirmDialog({
    //           isOpen: true,
    //           title: 'Do You Want To See The Expert List?',
    //           subTitle: "You can't undo this operation",
    //           onConfirm: () => {  history.push('/expertList') }
    //         })
    //       // history.push('/expertList')
    //     }
    //   })

  }
  return (
    <div className="dashboard__container">
      {/* <div className='addAdmin__container' >
        <form onSubmit={handleSubmit} className="form-inline" style={{ padding: '50px' }}>
          <label className="sr-only">Email</label>
          <input id="email" type="email" name="email" onBlur={handleBlur} className="form-control mb-2 mr-sm-2" style={{ width: "450px" }} placeholder="jon@gamil.com" required />
          <button type="submit" className="btn mb-2" style={{ backgroundColor: '#009444', color: '#fff' }}>Submit</button>
        </form>
      </div> */}
      <ResponsiveSidebar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      <div className="addExpert__container">
        <h2>Add Expert</h2>
        <Form onSubmit={handleSubmit} className={classes.root} >
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Controls.Input
                name="fullName"
                label="Full Name"
                value={values.fullName}
                onChange={handleInputChange}
                error={errors.fullName}
              />
            </Grid>
            <Grid item xs={12}>
              <Controls.Input
                label="Email"
                name="email"
                value={values.email}
                onChange={handleInputChange}
                error={errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <Controls.Input
                label="Mobile"
                name="mobile"
                value={values.mobile}
                onChange={handleInputChange}
                error={errors.mobile}
              />
            </Grid>
            <Grid item xs={4}>
              <Controls.Select
                label="Gender"
                name="gender"
                options={genderItems}
                value={values.gender}
                onChange={handleInputChange}
                error={errors.gender}
              />
            </Grid>
            <Grid item xs={6}>
              <Controls.Select
                label="Occupation"
                name="occupation"
                options={occupationList}
                value={values.occupation}
                onChange={handleInputChange}
                error={errors.occupation}
              />
            </Grid>
            <Grid item xs={12}>
              <Controls.Input
                label="Details"
                name="details"
                multiline="multiline"
                row="4"
                value={values.details}
                onChange={handleInputChange}
                error={errors.details}
              />
            </Grid>
            <div>
              <Controls.Button
                className={classes.button}
                type="submit"
                text="Send"
                endIcon={<Icon>send</Icon>} />
            </div>
          </Grid>
          <Notification notify={notify} setNotify={setNotify} />
          <ConfirmDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog} />
        </Form>
      </div>
    </div>

  );
};

export default AddExpert;