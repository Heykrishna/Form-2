import React, { useState } from 'react';
import './FormComponent.css';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    sleep: '',
    appetite: '',
    interest: '',
    fatigue: '',
    worthlessness: '',
    concentration: '',
    agitation: '',
    suicidalIdeation: '',
    sleepDisturbance: '',
    aggression: '',
    panicAttacks: '',
    hopelessness: '',
    restlessness: '',
    lowEnergy: '',
    depressionState: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const options = [
    { value: '1', label: 'Never' },
    { value: '2', label: 'Always' },
    { value: '3', label: 'Often' },
    { value: '4', label: 'Rarely' },
    { value: '5', label: 'Sometimes' },
    { value: '6', label: 'Not at all' }
  ];

  const depressionStateOptions = [
    { value: 'No depression', label: 'No depression' },
    { value: 'Mild', label: 'Mild' },
    { value: 'Moderate', label: 'Moderate' },
    { value: 'Severe', label: 'Severe' }
  ];

  const renderOptions = (name, options) => (
    options.map(option => (
      <label key={option.value} className={`capsule ${formData[name] === option.value ? 'selected' : ''}`}>
        <input
          type="radio"
          name={name}
          value={option.value}
          checked={formData[name] === option.value}
          onChange={handleChange}
        />
        {option.label}
      </label>
    ))
  );

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => (
          key !== 'depressionState' && (
            <div key={key} className="form-group">
              <label>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}</label>
              <div className="options">
                {renderOptions(key, options)}
              </div>
            </div>
          )
        ))}
        <div className="form-group">
          <label>Depression State</label>
          <div className="options">
            {renderOptions('depressionState', depressionStateOptions)}
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;