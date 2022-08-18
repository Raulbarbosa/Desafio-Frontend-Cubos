import { useState } from "react";

function useUtilsProvider() {
  const [form, setForm] = useState({});

  return {
    form,
    setForm,
  };
}

export default useUtilsProvider;
