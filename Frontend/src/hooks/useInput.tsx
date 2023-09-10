import { useState } from "react";
const useInput = (
  initialValue: string,
  validation: (value: string) => boolean
) => {
  const [value, setValue] = useState<string>(initialValue);
  const [error, setError] = useState<boolean>(false);
  const [touched, setTouched] = useState<boolean>(false);
  const [valid, setValid] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onBlur = () => {
    setTouched(true);
    if (value === "") {
      setError(true);
      setErrorMessage("This field is required");
    } else {
      setError(false);
      setErrorMessage("");
    }
  };

  const reset = () => {
    setValue("");
    setError(false);
    setTouched(false);
    setValid(false);
    setErrorMessage("");
  };

  return {
    value,
    onChange,
    onBlur,
    error,
    touched,
    valid,
    errorMessage,
    reset,
  };
};

export default useInput;
