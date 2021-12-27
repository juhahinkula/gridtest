import React from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import './App.css';

function App() {
  const rowData = [
    {make: "Toyota", model: "Celica", price: 35000},
    {make: "Ford", model: "Mondeo", price: 32000},
    {make: "Porsche", model: "Boxter", price: 72000}
  ];

  const columns = [
    {field: 'make'},
    {field: 'model'},
    {field: 'price'},
    {field: 'make', headerName:'Button', cellRendererFramework: params => <button>Hello</button>}
  ]


  return (
    <div className="ag-theme-alpine" style={{height: 400, width: '80%'}}>
    <AgGridReact
      rowData={rowData}
      columnDefs={columns}>  
    </AgGridReact>
</div>  );
}

export default App;
