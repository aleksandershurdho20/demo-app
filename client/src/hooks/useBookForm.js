import { useState } from "react";
import { validateFields } from "../helpers/validations";

export const useBookForm = (initialState = {}) => {
  const [book, setBook] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBook((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const resetForm = () => {
    setBook({ title: "", author: "", genre: "" });
    setErrors({});
  };

  const validateForm = () => {
    const newErrors = validateFields(book);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return {
    book,
    setBook,
    errors,
    handleInputChange,
    resetForm,
    validateForm,
  };
};