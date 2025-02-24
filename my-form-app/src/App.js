import React from 'react';
import FormComponent from './FormComponent';
import './App.css'; // Import App.css for additional styling if needed

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Depression Assessment Form</h1>
        <FormComponent />
      </div>
    </div>
  );
}

export default App;