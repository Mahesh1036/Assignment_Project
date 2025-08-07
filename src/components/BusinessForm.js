import React, { useState } from 'react';
import API from '../services/api';

export default function BusinessForm() {
  const [form, setForm] = useState({
    business_name: '',
    location: '',
    income: '',
    business_age: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post('business/', form);
    alert('Business details saved!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Business Name" onChange={(e) => setForm({...form, business_name: e.target.value})} />
      <input placeholder="Location" onChange={(e) => setForm({...form, location: e.target.value})} />
      <input placeholder="Income" onChange={(e) => setForm({...form, income: e.target.value})} />
      <input placeholder="Business Age" onChange={(e) => setForm({...form, business_age: e.target.value})} />
      <button type="submit">Submit</button>
    </form>
  );
}
