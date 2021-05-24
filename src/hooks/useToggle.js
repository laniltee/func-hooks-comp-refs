import {useCallback, useMemo, useState} from "react";

const useToggle = () => {
  const [status, setStatus] = useState(false);

  const toggleStatus = useCallback(() => {
    setStatus((prevStatus) => !prevStatus);
  }, []);

  return useMemo(
      () => ({
        status,
        toggleStatus
      }),
      [status, toggleStatus]
  );
};

export default useToggle;
