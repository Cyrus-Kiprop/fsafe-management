import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const EditModal = props => {
  const { modalTitle, className } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  // forms state
  const [errors, setErrors] = useState({});
  const [inputs, setInputs] = useState({});
  const [setIsLoading, isLoading] = useState(false);

  // handler functions
  const handleInputs = event => {
    event.preventDefault();
    event.persist();
    const { target } = event;
    const { name, value } = target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = () => {
    event.preventDefault();
    // some fetch apis

    console.log(inputs);
  };

  return (
    <>
      <Button outline color="warning" onClick={toggle}>
        <i className="fas fa-edit"></i>
      </Button>
      <Modal isOpen={modal} toggle={toggle} className=" modal-lg">
        {/* <ModalHeader toggle={toggle}>Edit {modalTitle}</ModalHeader> */}
        <ModalBody className="modal-container">
          <div className="row">
            <div className="col-md-3 modal-left " align="center">
              <label className="">KISUMU SACCO</label>
            </div>

            <div className="col-md-9 modal-right">
              <ModalHeader toggle={toggle} className="modal-btn"></ModalHeader>
              <label>Name</label>
              <input name="name" onChange={handleInputs} type="text" />
              <label>Phone:</label>
              <input name="phone" onChange={handleInputs} type="text" />
              <label>Email:</label>
              <input name="email" onChange={handleInputs} type="text" />
              <label>Address:</label>
              <input
                name="Addressaddress"
                onChange={handleInputs}
                type="text"
              />
              <label>Manager:</label>
              <input name="manager" onChange={handleInputs} type="text" />
              <label>Code:</label>
              <input name="code" onChange={handleInputs} type="text" />
              <label>Registration Number:</label>
              <input name="regNumber" onChange={handleInputs} type="text" />
              <label>Date Founded:</label>
              <input name="dataFounded" onChange={handleInputs} type="text" />
              <label>Status:</label>
              <input name="status" onChange={handleInputs} type="text" />

              <ModalFooter className="modal-btn">
                <Button color="primary" onClick={handleSubmit}>
                  Save
                </Button>
              </ModalFooter>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default EditModal;

// some custom hooks
const useHandleForms = callback => {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputs = event => {
    event.preventDefault();
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    console.log(inputs);
  };

  return {
    inputs,
    errrors,
    handleInputs,
    handleSubmit,
    isLoading
  };
};
