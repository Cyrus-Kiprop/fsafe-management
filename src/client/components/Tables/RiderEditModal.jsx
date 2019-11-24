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
              <div className="image__display">
                <img src="" alt="" />
              </div>
              <div className="image__upload">
                <input
                  type="file"
                  name="avatar"
                  accept="image/png, image/jpeg"
                ></input>
              </div>

              <div className="modal_list_items">
                <ul>
                  <li>
                    <input type="text" placeholder="Brian Okoth"></input>
                  </li>
                  <li>
                    <input type="text" placeholder="Cyrus Kiprop"></input>
                  </li>
                  <li>
                    <input type="text" placeholder="+254 73424399"></input>
                  </li>
                  <li>
                    <input type="text" placeholder="KME745N"></input>
                  </li>
                  <li>
                    <input type="text" placeholder="Honda CB125"></input>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-9 modal-right">
              <div className="rider_modal_header">
                <div className="input-label" align="center">
                  PERSONAL INFORMATION
                </div>
                <button onClick={toggle}>
                  X{/* <i className="fas fa-times-circle"></i> */}
                </button>
              </div>
              <div className="input_label-container">
                <label>ID No:</label>
                <input
                  name="name"
                  onChange={handleInputs}
                  type="text"
                  placeholder="45345930845"
                />
              </div>
              <div className="input_label-container">
                <label>Driving License:</label>
                <input
                  name="name"
                  onChange={handleInputs}
                  type="text"
                  placeholder="A534590FGY94"
                />
              </div>
              <div className="input_label-container">
                <label>DL Issue Date:</label>
                <input
                  name="name"
                  onChange={handleInputs}
                  type="text"
                  placeholder="2018-12-22"
                />
              </div>
              <div className="input_label-container">
                <label>DL Exp. date:</label>
                <input
                  name="name"
                  onChange={handleInputs}
                  type="text"
                  placeholder="2020-12-22"
                />
              </div>
              <div className="input_label-container">
                <label>Ins Issue Date:</label>
                <input
                  name="name"
                  onChange={handleInputs}
                  type="text"
                  placeholder="2019-12-22"
                />
              </div>
              <div className="input_label-container">
                <label>Ins Exp. date:</label>
                <input
                  name="name"
                  onChange={handleInputs}
                  type="text"
                  placeholder="45345930845"
                />
              </div>
              <div className="input_label-container">
                <label>Status:</label>
                <input
                  name="name"
                  onChange={handleInputs}
                  type="text"
                  placeholder="Active"
                />
              </div>
              <div className="input_label-container">
                <label>Base:</label>
                <input
                  name="name"
                  onChange={handleInputs}
                  type="text"
                  placeholder="Western"
                />
              </div>
              <div className="rider_modal_header">
                <div className="input-label" align="center">
                  BIKE OWNER
                </div>
                <button>{/* <i className="fas fa-times-circle"></i> */}</button>
              </div>

              <div className="input_label-container">
                <label>Name:</label>
                <input
                  name="name"
                  onChange={handleInputs}
                  type="text"
                  placeholder="Cyrus Kiprop"
                />
              </div>
              <div className="input_label-container">
                <label>ID No.</label>
                <input
                  name="name"
                  onChange={handleInputs}
                  type="text"
                  placeholder="4550345403"
                />
              </div>
              <div className="input_label-container">
                <label>Residence:</label>
                <input
                  name="name"
                  onChange={handleInputs}
                  type="text"
                  placeholder="Kondele"
                />
              </div>

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
