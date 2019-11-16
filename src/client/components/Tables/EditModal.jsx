import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const EditModal = props => {
  const { modalTitle, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

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
              <input type="text" />
              <label>Phone:</label>
              <input type="text" />
              <label>Email:</label>
              <input type="text" />
              <label>Address:</label>
              <input type="text" />
              <label>Manager:</label>
              <input type="text" />
              <label>Code:</label>
              <input type="text" />
              <label>Registration Number:</label>
              <input type="text" />
              <label>Date Founded:</label>
              <input type="text" />
              <label>Status:</label>
              <input type="text" />

              <ModalFooter className="modal-btn">
                <Button color="primary" onClick={toggle}>
                  Save
                </Button>
              </ModalFooter>
            </div>
          </div>
        </ModalBody>
        {/* <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Submit
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter> */}
      </Modal>
    </>
  );
};

export default EditModal;

// const tableHeaderData = [sacco, status, Riders, Location, Reports, Actions];
// let tableHead = tabelHeaders.map(item => <td>item</td>)
// const tableBodyData = [{
//     name:"Kisumu Sacco" , status: "Active" , riders: 113, reports: "12"
// }]

// let tableBody = tableBodyData.map(item => < td>

// </td>)

// return (
//     <th>
//         tableHead
//   </th>
//     <tbody>
//         <td>tableBodyData.name</td>
//         td
//     </tbody>
// );
