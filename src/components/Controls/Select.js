import React from 'react'
import { FormControl, InputLabel, Select as MuiSelect, MenuItem, FormHelperText } from '@material-ui/core';
import './Controls.css'

export default function Select(props) {

  const { name, label, value, error = null, onChange, options } = props;

  return (
    <FormControl variant="outlined" 
      className="select__container"
      size="small"
      {...(error && { error: true })}>
      <InputLabel>{label}</InputLabel>
      <MuiSelect
     
        label={label}
        name={name}
        value={value}
        onChange={onChange}>
        {
          options.map(
            item => (<MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>)
          )
        }
      </MuiSelect>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  )
}
