import React, { useState, useEffect } from 'react'
import { Grid, Hidden, Paper, } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import Controls from "../Controls/Controls";
import { useForm, Form } from './useForm'
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


const genderItems = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    { id: 'other', title: 'Other' },
]

const initialFValues = {
    id: '0',
    fullName: '',
    email: '',
    mobile: '',
    age: '',
    gender: 'male',
    weight: '',
    details: '',
}

export default function FormMaterialUi() {
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
        if (validate()){
            console.log(values);
            resetForm();
        }
    }

    return (
        <Form onSubmit={handleSubmit} className={classes.root} >
            <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ maxHeight: '80vh' }}
            >
                <Grid item xs={6}>
                    <Controls.Input
                        name="fullName"
                        label="Full Name"
                        value={values.fullName}
                        onChange={handleInputChange}
                        error={errors.fullName}
                    />
                    <Controls.Input
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                        error={errors.email}
                    />
                    <Controls.Input
                        label="Mobile"
                        name="mobile"
                        value={values.mobile}
                        onChange={handleInputChange}
                        error={errors.mobile}
                    />
                    <Controls.Input
                        label="City"
                        name="city"
                        value={values.city}
                        onChange={handleInputChange}
                    />

                </Grid>
                <Grid item xs={6}>
                    <Controls.RadioGroup
                        name="gender"
                        label="Gender"
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
                    />
                    <Controls.Input
                        label="Age"
                        name="age"
                        value={values.age}
                        onChange={handleInputChange}
                    />
                    <Controls.Input
                        label="Weight"
                        name="weight"
                        value={values.weight}
                        onChange={handleInputChange}
                    />
                    <Controls.Input
                        label="Details"
                        name="details"
                        value={values.details}
                        onChange={handleInputChange}
                    />
                    <div>
                        <Controls.Button
                            className={classes.button}
                            type="submit"
                            text="Send"
                            endIcon={<Icon>send</Icon>} />
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}
