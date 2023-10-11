import React, {ReactNode} from "react";

interface Props {
  status: number;
}

const statusMessage = ({status}: Props) => {
  if (status === 200) "Product Updated.";
  if (status === 201) "Product Created.";
  if (status === 400) "Product already exist.";
  if (status === 400) "Product already exist.";
  if (status === 500) "Product already exist.";
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
