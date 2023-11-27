import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function useYupForm(schema, defaultValues) {
  return useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });
}
