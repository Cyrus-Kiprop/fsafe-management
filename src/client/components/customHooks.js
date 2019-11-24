/* eslint-disable arrow-parens */
// eslint-disable-next-line quotes
import { useState } from "react";


export const useSignUpForm = callback => {
  const [inputs, setInputs] = useState({});

  // we need a state that handles our errors

  // handles the data upon submit
  const handleSubmit = e => {
    if (e) {
      e.preventDefault();
    }
    callback();
  };

  // handles the change in the form inputs
  const handleInputChange = e => {
    e.persist();
    setInputs(input => ({
      ...input,
      [e.target.name]: e.target.value
    }));
  };
  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
};

export const fetchProduct = async (url, setInit) => {
  const response = await fetch(url);
  const json = await response.json();
  setInit(json);
};
