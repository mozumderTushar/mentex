import React, { useState, useEffect } from 'react'
import { Grid, Hidden, Paper, } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import Controls from "../Controls/Controls";
import { useForm, Form } from './useForm'
import { makeStyles } from '@material-ui/core/styles';
import Notification from '../Alert/Notification/Notification';
import ConfirmDialog from '../Alert/ConfirmDialog/ConfirmDialog';

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

const initialFValues = {
  fullName: '',
  email: '',
  mobile: '',
  age: '',
  gender: '',
  weight: '',
  details: '',
}

export default function FormMaterialUi(props) {
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
  const classes = useStyles()

  const validate = (fieldValues = values) => {
    let temp = { ...errors }
    if ('fullName' in fieldValues)
      temp.fullName = fieldValues.fullName ? "" : "This field is required."
    if ('email' in fieldValues)
      temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
    if ('mobile' in fieldValues)
      temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
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

  const handleSubmit = e => {
    e.preventDefault()
    if (validate()) {
      values.service = props.appointmentOn;
      values.date = props.date;
      values.created = new Date();

      fetch('https://peaceful-lake-24732.herokuapp.com/addProfessionalAppointment', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(values)
      })
        .then(res => res.json())
        .then(success => {
          if (success) {
            // alert('Appointment created successfully.');
          }
        })
        setNotify({
          isOpen: true,
          message: 'Appointment Added Successfully',
          type: 'success'
        })
        setTimeout(function(){ props.closeModal(); }, 2000);
      resetForm();
    }
  }

  return (
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
          />
        </Grid>
        <Grid item xs={4}>
          <Controls.Input
            type="number"
            label="Age"
            name="age"
            value={values.age}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={4}>
          <Controls.Input
            type="number"
            label="Weight"
            name="weight"
            value={values.weight}
            onChange={handleInputChange}
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
  )
}
