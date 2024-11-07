
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="container">
      <h1 className="text-primary">Chào mừng đến với React và Bootstrap 4.6.0!</h1>
      <Button variant="success">Nhấn vào đây</Button>
    </div>
  );
}

export default App;
