import React from "react";
import { TextField } from "@material-ui/core";
import { Controller } from "react-hook-form";

const TextFieldInput = (props) => {
  return (
    <Controller
      control={props.control}
      name={props.name}
      render={({ field }) => <TextField {...props} {...field} />}
    />
  );
};

export default TextFieldInput;
/*import MaskedTextField from './MaskedTextField';
import { useController } from 'react-hook-form';

export default function TextFieldInput(props) {
  const { field, fieldState, formState } = useController({ name: props.name });

  return (
    <MaskedTextField
      {...field}
      {...props}
      onBlur={(e) => {
        field.onBlur(e);
        props.onBlur && props.onBlur(e);
      }}
      InputLabelProps={{
        shrink: field.value !== '' && field.value !== undefined,
      }}
      error={Boolean(fieldState.error)}
      helperText={fieldState.error?.message}
    />
  );
}
 */
