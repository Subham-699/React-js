import React from 'react';
import { useTheme } from '../context/ThemeContext';

function Header() {
  const { theme, toggleTheme } = useTheme();
  
  const headerStyle = {
    background: theme === 'light' ? '#ffffff' : '#333333',
    color: theme === 'light' ? '#000000' : '#ffffff',
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: `2px solid ${theme === 'light' ? '#ddd' : '#555'}`
  };
  
  const buttonStyle = {
    padding: '10px 20px',
    background: theme === 'light' ? '#007bff' : '#ffc107',
    color: theme === 'light' ? '#fff' : '#000',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 'bold'
  };
  
  return (
    <header style={headerStyle}>
      <h1>My Theme App</h1>
      <button style={buttonStyle} onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </header>
  );
}

export default Header;