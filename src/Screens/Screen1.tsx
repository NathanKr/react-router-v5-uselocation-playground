import { useState } from "react";
import { Redirect } from "react-router-dom";

const Screen1 = () => {
  const [redirectToScreen2, setRedirectToScreen2] = useState(false);

  if (redirectToScreen2) {
    return (
      <Redirect
        to={{
          pathname: "/Screen2",
          state: { ar : [1,2,3] }
        }}
      />
    );
  }

  return (
    <div>
      <h1>Screen1</h1>
      <button
        onClick={() => {
          setRedirectToScreen2(true);
        }}
      >
        Navigate to Screen2
      </button>
    </div>
  );
};

export default Screen1;
