import { TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { useEffect, useState } from "react";
import { useFormContext, useController } from "react-hook-form";

export default function DropdownFieldInput({
  name,
  label,
  variant,
  ...autoCompleteProps
}) {
  const { control, setValue } = useFormContext();
  const { field, fieldState } = useController({
    name: name ?? "",
    control,
  });

  return (
    <Autocomplete
      multiple
      {...autoCompleteProps}
      name={field.name}
      onBlur={field.onBlur}
      ref={field.ref}
      value={field.value || []} // Inicialize com uma array vazia se for undefined
      defaultValue={field.value || []} // Inicialize com uma array vazia se for undefined
      isOptionEqualToValue={(v, t) => v === t}
      onChange={(e, value) => setValue(name, value)}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          variant={variant}
          error={Boolean(fieldState.error)}
          helperText={fieldState.error?.message}
          value={Array.isArray(field.value) ? field.value : []} // Verifica se é uma array
        />
      )}
    />
  );
}
