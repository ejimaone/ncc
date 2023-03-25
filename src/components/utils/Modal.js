import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

export default function BasicModal(props) {
  const handleOpen = () => {
    props.handleOpen0();
  };
  const handleClose = () => {
    props.handleCLose0();
  };
  return (
    <>
      <div>
        <div onClick={handleOpen}>{props.element}</div>
        <Modal
          open={props.open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            className={
              " bg-white h-80 w-[365px]  absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] shadow-lg rounded-md flex justify-center items-center lg:w-[500px]"
            }
          >
            {props.children}
          </Box>
        </Modal>
      </div>
    </>
  );
}
