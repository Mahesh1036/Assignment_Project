import React, { useState } from 'react';
import API from '../services/api';

export default function ProfileForm() {
  const [form, setForm] = useState({ age: '', family_members: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post('profile/', form);
    alert('Profile saved!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Age" type="number" onChange={(e) => setForm({...form, age: e.target.value})} />
      <input placeholder="Family Members" type="number" onChange={(e) => setForm({...form, family_members: e.target.value})} />
      <button type="submit">Save Profile</button>
    </form>
  );
}
