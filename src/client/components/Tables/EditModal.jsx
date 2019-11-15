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
      <Modal isOpen={modal} toggle={toggle} className="modal-lg">
        <ModalHeader toggle={toggle}>Edit {modalTitle}</ModalHeader>
        <ModalBody>
          <div className="row">
            <div className="col-md-3 modal-left " align="center">
              <label className="">KISUMU SACCO</label>
            </div>

            <div className="col-md-9 modal-right">
              <label>Name</label>
              <input type="text" placeholder="sacco name" />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Submit
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
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
