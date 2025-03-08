import React, { useState } from "react";
import "../styles/NewBoxForm.css";

function NewBoxForm({ addBox }) {
  const [formData, setFormData] = useState({
    width: "",
    height: "",
    backgroundColor: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(data => ({ ...data, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.width || !formData.height || !formData.backgroundColor) return;
    
    addBox({ 
      width: Number(formData.width), 
      height: Number(formData.height), 
      backgroundColor: formData.backgroundColor 
    });

    setFormData({ width: "", height: "", backgroundColor: "" });
  };

  return (
    <form className="box-form" onSubmit={handleSubmit}>
      <label htmlFor="width">Width (rem):</label>
      <input 
        type="number" 
        id="width" 
        name="width" 
        value={formData.width} 
        onChange={handleChange} 
        min="1"
      />

      <label htmlFor="height">Height (rem):</label>
      <input 
        type="number" 
        id="height" 
        name="height" 
        value={formData.height} 
        onChange={handleChange} 
        min="1"
      />

      <label htmlFor="backgroundColor">Background Color:</label>
      <input 
        type="text" 
        id="backgroundColor" 
        name="backgroundColor" 
        value={formData.backgroundColor} 
        onChange={handleChange} 
      />

      <button type="submit">Add Box</button>
    </form>
  );
}

export default NewBoxForm;
