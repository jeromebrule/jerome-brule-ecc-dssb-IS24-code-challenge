import React, {ReactNode} from "react";

interface Props {
  status: number;
}

const statusMessage = ({status}: Props) => {
  if (status === 200) "Contact Updated.";
  if (status === 201) "Contact Created.";
  if (status === 400) "Contact already exist.";
  if (status === 400) "Contact already exist.";
  if (status === 500) "Contact already exist.";
};

const Toast = ({status}: Props) => {
  return (
    <>
      {status && (
        <div className="toast toast-end">
          <div className="alert alert-success">
            <div className="toast toast-end">
              <div className="alert alert-success">
                <span>{status}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Toast;
