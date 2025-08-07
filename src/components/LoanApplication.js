import React, { useEffect, useState } from 'react';
import API from '../services/api';

export default function LoanApplication() {
  const [loans, setLoans] = useState([]);

  const applyLoan = async () => {
    await API.post('loans/', {});
    fetchLoans();
  };

  const fetchLoans = async () => {
    const res = await API.get('loans/');
    setLoans(res.data);
  };

  useEffect(() => {
    fetchLoans();
  }, []);

  return (
    <div>
      <button onClick={applyLoan}>Apply for Loan</button>
      <ul>
        {loans.map((loan) => (
          <li key={loan.id}>Status: {loan.status} | Applied on: {loan.created_at}</li>
        ))}
      </ul>
    </div>
  );
}
