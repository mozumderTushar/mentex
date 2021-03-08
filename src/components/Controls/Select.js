import React from 'react'
import { FormControl, InputLabel, Select as MuiSelect, MenuItem, FormHelperText } from '@material-ui/core';
import './Controls.css'

export default function Select(props) {

  const { name, label, value, error = null, onChange, options,required } = props;

  return (
    <FormControl variant="outlined" 
      className="select__container"
      size="small"
      {...(error && { error: true })}>
      <InputLabel>{label}</InputLabel>
      <MuiSelect
        variant="outlined"
        required={required}
        label={label}
        name={name}
        value={value}
        onChange={onChange}>
        {
          options.map(
            item => (<MenuItem key={item.id||item._id} value={item.id||item.email}>{item.title||item.fullName}</MenuItem>)
          )
        }

      </MuiSelect>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  )
}
