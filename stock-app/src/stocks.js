import React, { useState, useEffect } from "react";
import "./App.css";
import Spinner from "react-bootstrap/Spinner";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";

function getStocks() {
  const url = `http://131.181.190.87:3001/all`;
  return fetch(url)
    .then((res) => res.json())
    .then((data) =>
      data.map((stock) => ({
        symbol: stock.symbol,
        name: stock.name,
        industry: stock.industry,
      }))
    );
}

export default function Stocks() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [rowData, setRowData] = useState([]);

  const columns = [
    { dataField: "symbol", text: "Symbol", filter: textFilter() },
    { dataField: "name", text: "Name" },
    { dataField: "industry", text: "Industry", filter: textFilter() },
  ];
  useEffect(() => {
    getStocks()
      .then((rowData) => {
        setRowData(rowData);
        setLoading(false);
      })
      .catch((e) => {
        setError(e);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Spinner animation="grow" />;
  }

  if (error) {
    return <p>Something went wrong : {error.message}</p>;
  }
  return (
    <div className="stock-container">
      <h3> Select Stock</h3>
      <BootstrapTable
        keyField="id"
        data={rowData}
        columns={columns}
        filter={filterFactory()}
        pagination={paginationFactory()}
      />
    </div>
  );
}
