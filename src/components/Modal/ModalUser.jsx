import { Modal, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import styled from "styled-components";

const ModalUser = ({ openModal, setOpenModal, curentUser }) => {
  return (
    <Modal open={openModal} onClose={() => setOpenModal(!openModal)}>
      <Container>
        <Box className="modal">
          <h1>Modal</h1>
          <TextField placeholder="name" value={curentUser.name} />
          <TextField placeholder="job" />
        </Box>
      </Container>
    </Modal>
  );
};

let Container = styled.div`
  .modal {
    height: 300px;
    width: 400px;
    background: #c2bbbb;
    border-radius: 10px;
    padding: 10px;
    position: fixed;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
  }
`;
export default ModalUser;
