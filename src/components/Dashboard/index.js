import React from 'react';

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user) {
    window.location.href = '/';
    return null;
  }

  return (
    <>
    <div>
      <h2>Welcome, {user.username}!</h2>
      <button></button>
    </div>
    </>
  );
};

export default Dashboard;
