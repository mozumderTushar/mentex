import React from 'react'
import { TextField } from '@material-ui/core';

export default function Input(props) {

  const { name, label, value, error = null, onChange, type, multiline, row, } = props;
  return (
    <TextField
      InputLabelProps={props.InputLabelProps}
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      multiline={multiline}
      rows={row}
      style={{ width: '100%' }}
      size="small"
      type={type}
      {...(error && { error: true, helperText: error })}
    />
  )
}
