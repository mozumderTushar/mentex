import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App/App';
import { Grid, Hidden, Paper, TextField } from '@material-ui/core';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import ResponsiveSidebar from '../../Dashboard/ResponsiveSidebar/ResponsiveSidebar';
import '../AddAdmin/AddAdmin.css'
import { useHistory } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import Controls from "../../Controls/Controls";
import { useForm, Form } from '../../FormMaterialUi/useForm'
import { makeStyles } from '@material-ui/core/styles';
import Notification from '../../Alert/Notification/Notification';
import ConfirmDialog from '../../Alert/ConfirmDialog/ConfirmDialog';

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


const EditAdmin = () => {
  const [initialFValues, setInitialFValues] = useState({
    fullName: '',
    email: '',
    mobile: '',
    gender: '',
    age: '',
  })

  const { adminID } = useParams()
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
    if ('age' in fieldValues)
      temp.age = fieldValues.age ? "" : "This field is required."
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
  })

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [adminList, setAdminList] = useState([])
  let history = useHistory();

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  useEffect(() => {
    fetch(`https://peaceful-lake-24732.herokuapp.com/Admin/${adminID}`)
      .then(res => res.json())
      .then(data => setAdminList(data[0]))
  }, [])

  console.log('adminList', adminList);

  const handleSubmit = e => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    })
    e.preventDefault();
    if (values.fullName === '') {
      values.fullName = adminList.fullName
    }
    if (values.email === '') {
      values.email = adminList.email
    }
    if (values.mobile === '') {
      values.mobile = adminList.mobile
    }
    if (values.gender === '') {
      values.gender = adminList.gender
    }
    if (values.age === '') {
      values.age = adminList.age
    }

    fetch(`https://peaceful-lake-24732.herokuapp.com/AdminUpdate/${adminID}`, {
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
      title: 'Do You Want To See The Updated Admin List?',
      subTitle: "You can't undo this operation",
      onConfirm: () => { history.push('/adminList') }
    })
    setNotify({
      isOpen: true,
      message: 'Updated Successfully',
      type: 'success'
    })
    resetForm();

  }
  return (
    <div className="dashboard__container">
      <ResponsiveSidebar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      <div className="addExpert__container">
        <h2>Edit Admin</h2>
        <Form onSubmit={handleSubmit} className={classes.root} >
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Controls.Input
                InputLabelProps={{
                  shrink: true,
                }}
                name="fullName"
                label="Full Name"
                value={values.fullName || adminList.fullName}
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
                value={values.email || adminList.email}
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
                value={values.mobile || adminList.mobile}
                onChange={handleInputChange}
                error={errors.mobile}
              />
            </Grid>
            <Grid item xs={6}>
              <Controls.Select
                InputLabelProps={{
                  shrink: true,
                }}
                label="Gender"
                name="gender"
                options={genderItems}
                value={values.gender || adminList.gender}
                onChange={handleInputChange}
                error={errors.gender}
              />
            </Grid>
            <Grid item xs={6}>
              <Controls.Input
                InputLabelProps={{
                  shrink: true,
                }}
                type="number"
                label="Age"
                name="age"
                value={values.age || adminList.age}
                onChange={handleInputChange}
                error={errors.age}
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
        </Form>
      </div>
      <Notification notify={notify} setNotify={setNotify} />
      <ConfirmDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog} />
    </div>
  );
};

export default EditAdmin;