import { TextField } from "@material-ui/core";
import { Controller } from "react-hook-form";
import { useController } from "react-hook-form";
import { DatePicker } from "@mui/x-date-pickers";
export default function DatePickers({ ...props }) {
  const { field } = useController({ name: props.name });

  return (
    <Controller
      name={props.name}
      render={({ field }) => (
        <DatePicker
          style={{ width: "90%" }}
          variant="outlined"
          label={props.label}
          type="date"
          {...props}
          {...field}
        />
      )}
    />
  );
}
