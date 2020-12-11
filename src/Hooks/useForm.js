import { useState } from "react";

export const useForm = (initState) => {
  const [form, setForm] = useState(initState);

  const onChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  return [form, onChange];
};
