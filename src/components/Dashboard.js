import React from 'react';
import ProfileForm from './ProfileForm';
import BusinessForm from './BusinessForm';
import LoanApplication from './LoanApplication';

export default function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <ProfileForm />
      <BusinessForm />
      <LoanApplication />
    </div>
  );
}
