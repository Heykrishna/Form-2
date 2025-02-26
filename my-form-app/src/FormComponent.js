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

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allFieldsFilled = Object.values(formData).every(value => value !== '');
    if (!allFieldsFilled) {
      setShowModal(true);
      return;
    }
    console.log(formData);
    // Add your form submission logic here
  };

  const closeModal = () => {
    setShowModal(false);
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
              <label className="large-label" htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}</label>
              <div className="options">
                {renderOptions(key, options)}
              </div>
            </div>
          )
        ))}
        <div className="form-group">
          <label className="large-label" htmlFor="depressionState">Depression State</label>
          <div className="options">
            {renderOptions('depressionState', depressionStateOptions)}
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <p>Please select all options before submitting the form.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormComponent;