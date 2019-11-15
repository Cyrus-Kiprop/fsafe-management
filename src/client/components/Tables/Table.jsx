import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { ButtonToggle, Button } from "reactstrap";
import EditModal from "./EditModal";

const Table = ({ tableHeader, data, UI }) => {
  const [newData, setNewData] = useState(data);

  useEffect(() => {
    setNewData([...data]);
  }, [data]);

  return (
    <table>
      <thead>
        <tr style={{ backgroundColor: "#E2E7FF" }}>
          {tableHeader.map((item, index) => (
            <th key={index} scope="col">
              {item}
              <i className="fas fa-sort" style={{ color: "grey" }}></i>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {newData &&
          newData.map((items, index) => {
            const {
              sacco,
              name,
              status,
              riders,
              ratings,
              location,
              reports,
              actions,
              operationStatus
            } = items;
            return (
              <tr key={index}>
                <td data-label="No.">{index + 1}</td>
                <td data-label="Sacco"></td>
                <td data-label="Status">{status}</td>
                <td data-label="Riders">{riders || ratings}</td>
                <td data-label="Location">{location}</td>
                <td data-label="Reports">{reports}</td>
                <td data-label="Actions">
                  <Button
                    className="deactivate_activate action_btn"
                    outline
                    color={operationStatus === "Active" ? "success" : "danger"}
                  >
                    {operationStatus}
                  </Button>
                  <EditModal modalTitle={UI.modal} />

                  <Button className=" action_btn" outline color="danger">
                    <i className="fas fa-trash-alt"></i>
                  </Button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  tableHeader: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  saccoUI: PropTypes.object,
  riderUI: PropTypes.object
};

export default Table;
