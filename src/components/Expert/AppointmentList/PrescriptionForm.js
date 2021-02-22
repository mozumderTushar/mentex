import React, { useState, useEffect } from 'react'
import { Grid, Hidden, Paper, } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import Controls from "../../Controls/Controls";
import { useForm, Form } from '../../FormMaterialUi/useForm'
import { makeStyles } from '@material-ui/core/styles';

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


const initialFValues = {
  prescription: '',
}

export default function PrescriptionForm() {

  const classes = useStyles()

  const validate = (fieldValues = values) => {
    let temp = { ...errors }
    if ('prescription' in fieldValues)
      temp.prescription = fieldValues.prescription.length > 0 ? "" : "Add your Prescription."
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

      fetch('http://localhost:5000/addPrescription', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(values)
      })
        .then(res => res.json())
        .then(success => {
          if (success) {
             alert('Prescription created successfully.');
          }
        })
      resetForm();
    }
  }

  return (
    <Form onSubmit={handleSubmit} className={classes.root} >
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Controls.Input
            label="Prescription"
            name="prescription"
            multiline="multiline"
            row="20"
            value={values.prescription}
            onChange={handleInputChange}
            error={errors.prescription}
          />
        </Grid>
        <div>
          <Controls.Button
            className={classes.button}
            type="submit"
            text="Submit"
            endIcon={<Icon>send</Icon>} />
        </div>
      </Grid>
    </Form>
  )
}
