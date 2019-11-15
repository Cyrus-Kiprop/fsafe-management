import React, { useState, useEffect } from "react";
import mockData from "./reportdata.json";

const Reports = () => {
  const [data, getData] = useState([]);
  useEffect(() => {
    loadData();
    const renew = setInterval(loadData, 8000);
    return () => {
      clearInterval(renew);
    };
  }, []);
  const loadData = () => {
    getData([...mockData]);
  };
  console.log(data);

  return (
    <div className="table-responsive">
      <table>
        <thead>
          <tr style={{ backgroundColor: "#E2E7FF" }}>
            {["from", "message", "time"].map((item, index) => (
              <th key={index} scope="col">
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, i) => {
              const { from, message, time } = item;
              return (
                <tr key={i}>
                  <td>{from}</td>
                  <td>{message}</td>
                  <td>{time}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Reports;
