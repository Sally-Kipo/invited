import React, { useState } from 'react';
import './SalomeAttendanceForm.css';
import campImage from './camp.jpg';

function decideSalomeAttendance(mishaLikesFestivals) {
  if (mishaLikesFestivals) {
    return "Salome is invited to Tbilisi Open Air for a pleasant evening after work in the evening.";
  } else {
    return "Salome is not invited to Tbilisi Open Air today.";
  }
}

function SalomeAttendanceForm() {
  const [mishaLikesFestivals, setMishaLikesFestivals] = useState(false);
  const [salomeAttendance, setSalomeAttendance] = useState(null);

  const handleMishaPreferenceChange = (event) => {
    setMishaLikesFestivals(event.target.value === 'yes');
  };

  const handleSalomeAttendanceChange = (event) => {
    setSalomeAttendance(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const decision = decideSalomeAttendance(mishaLikesFestivals);
    console.log(decision);
    console.log('Salome will attend:', salomeAttendance === 'yes');
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h1>Invitation for Camping at the Festival with Fuckgirl</h1>
      <div className="input-container">
        <label className="label">
        Do you enjoy festivals, Fuckboy?
          <input
            type="radio"
            name="mishaPreference"
            value="yes"
            checked={mishaLikesFestivals}
            onChange={handleMishaPreferenceChange}
          />
          Yes
        </label>
        <label className="label">
          <input
            type="radio"
            name="mishaPreference"
            value="no"
            checked={!mishaLikesFestivals}
            onChange={handleMishaPreferenceChange}
          />
          No
        </label>
      </div>
    
      <div className="input-container">
        <label className="label">
        Would you like to join me at Tbilisi Open Air? 
          <input
            type="radio"
            name="salomeAttendance"
            value="yes"
            checked={salomeAttendance === 'yes'}
            onChange={handleSalomeAttendanceChange}
          />
          Yes
        </label>
        
        <label className="label">
          <input
            type="radio"
            name="salomeAttendance"
            value="no"
            checked={salomeAttendance === 'no'}
            onChange={handleSalomeAttendanceChange}
          />
          No
        </label>
      </div>
      <div className="button-container">
        <button type="submit">Submit</button>
      </div>
    </form>
    
  );
}

export default SalomeAttendanceForm;
