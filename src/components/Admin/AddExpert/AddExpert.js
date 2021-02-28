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
  { id: 'Male', title: 'Male' },
  { id: 'Female', title: 'Female' },
  { id: 'Other', title: 'Other' },
]
const occupationList = [
  { id: 'Psychitrist', title: 'Psychitrist' },
  { id: 'Mental Researcher', title: 'Mental Researcher' },
  { id: 'Other', title: 'Other' },
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
  const [image, setImage] = useState("")
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

  const uploadImage = (files) => {
    const formData = new FormData()
    formData.append('file', files[0])
    formData.append('upload_preset', 'xobhnc8v')

    return fetch('https://api.cloudinary.com/v1_1/mentex/image/upload', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => setImage(data.url))
  }
    console.log('image',image);
  const handleSubmit = e => {
    e.preventDefault();
    values.img = { image }
  
    if (validate()) {
      fetch('https://peaceful-lake-24732.herokuapp.com/addExpert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })
        .then(response => response.json())
        .then(data => {
          if (data) {
            setNotify({
              isOpen: true,
              message: 'Expert Added Successfully',
              type: 'success'
            })
            setConfirmDialog({
              isOpen: true,
              title: 'Do You Want To See The Expert List?',
              subTitle: "You can't undo this operation",
              onConfirm: () => { history.push('/expertList') }
            })

          }
        })
      resetForm();
    }
  }
  return (
    <div className="dashboard__container">
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
            <Grid item xs={4}>
              <Controls.Select
                label="Occupation"
                name="occupation"
                options={occupationList}
                value={values.occupation}
                onChange={handleInputChange}
                error={errors.occupation}
              />
            </Grid>
            <Grid item xs={4}>
              <input
                type="file"
                onChange={(e) => {
                  uploadImage(e.target.files)
                }} />
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
                text="Add"
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