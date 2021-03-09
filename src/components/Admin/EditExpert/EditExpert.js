import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App/App';
import { Grid, Hidden, Paper, } from '@material-ui/core';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import ResponsiveSidebar from '../../Dashboard/ResponsiveSidebar/ResponsiveSidebar';
import { useHistory, useParams } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import Controls from "../../Controls/Controls";
import { useForm, Form } from '../../FormMaterialUi/useForm'
import { makeStyles } from '@material-ui/core/styles';
import ConfirmDialog from '../../Alert/ConfirmDialog/ConfirmDialog';
import Notification from '../../Alert/Notification/Notification';
import '../ExpertList/ExpertList.css'

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



const EditExpert = () => {
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
  const [expertList, setExpertList] = useState({})
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [image, setImage] = useState("")
  let history = useHistory();
  const { expertID } = useParams()

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

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
  console.log('image', image);

  useEffect(() => {
    fetch(`https://peaceful-lake-24732.herokuapp.com/Expert/${expertID}`)
      .then(res => res.json())
      .then(data => setExpertList(data[0]))
  }, [])

  console.log('setExpertList', expertList);

  const handleSubmit = e => {
    e.preventDefault();
    values.img = image;

    if (values.fullName === '') {
      values.fullName = expertList.fullName
    }
    if (values.email === '') {
      values.email = expertList.email
    }
    if (values.mobile === '') {
      values.mobile = expertList.mobile
    }
    if (values.gender === '') {
      values.gender = expertList.gender
    }
    if (values.details === '') {
      values.details = expertList.details
    }
    if (values.occupation === '') {
      values.occupation = expertList.occupation
    }
    if (values.img === '') {
      values.img = expertList.img
    }

    console.log("values", values);
    if (validate()) {
      fetch(`https://peaceful-lake-24732.herokuapp.com/ExpertUpdate/${expertID}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })
        .then(response => response.json())
        .then(data => {
          if (data) {
          }
        })
      setConfirmDialog({
        isOpen: true,
        title: 'Do You Want To See The Updated Expert List?',
        subTitle: "You can't undo this operation",
        onConfirm: () => { history.push('/expertList') }
      })
      setNotify({
        isOpen: true,
        message: 'Updated Successfully',
        type: 'success'
      })
      resetForm();
    }
  }
  return (
    <div className="dashboard__container">
      <ResponsiveSidebar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      <div className="addExpert__container">
        <h2>Edit Expert</h2>
        <Form onSubmit={handleSubmit} className={classes.root} >
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Controls.Input
                InputLabelProps={{
                  shrink: true,
                }}
                name="fullName"
                label="Full Name"
                value={values.fullName || expertList.fullName}
                onChange={handleInputChange}
                error={errors.fullName}
              />
            </Grid>
            <Grid item xs={12}>
              <Controls.Input
                InputLabelProps={{
                  shrink: true,
                }}
                label="Email"
                name="email"
                value={values.email || expertList.email}
                onChange={handleInputChange}
                error={errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <Controls.Input
                InputLabelProps={{
                  shrink: true,
                }}
                label="Mobile"
                name="mobile"
                value={values.mobile || expertList.mobile}
                onChange={handleInputChange}
                error={errors.mobile}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Controls.Select
                label="Gender"
                name="gender"
                options={genderItems}
                value={values.gender || expertList.gender}
                onChange={handleInputChange}
                error={errors.gender}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Controls.Select
                label="Occupation"
                name="occupation"
                options={occupationList}
                value={values.occupation || expertList.occupation}
                onChange={handleInputChange}
                error={errors.occupation}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <input
                className="upload__button"
                type="file"
                onChange={(e) => {
                  uploadImage(e.target.files)
                }} />
            </Grid>
            <Grid item xs={12}>
              <Controls.Input
                InputLabelProps={{
                  shrink: true,
                }}
                label="Details"
                name="details"
                multiline="multiline"
                row="4"
                value={values.details || expertList.details}
                onChange={handleInputChange}
                error={errors.details}
              />
            </Grid>
            <div>
              <Controls.Button
                className={classes.button}
                type="submit"
                text="Update"
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

export default EditExpert;