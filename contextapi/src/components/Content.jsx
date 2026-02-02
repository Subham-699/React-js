import React from 'react';
import { useTheme } from '../context/ThemeContext';

function Content() {
  const { theme } = useTheme();
  
  const contentStyle = {
    background: theme === 'light' ? '#f5f5f5' : '#222222',
    color: theme === 'light' ? '#000000' : '#ffffff',
    padding: '40px',
    minHeight: 'calc(100vh - 84px)',
    transition: 'all 0.3s ease'
  };
  
  const cardStyle = {
    background: theme === 'light' ? '#ffffff' : '#333333',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '20px',
    boxShadow: theme === 'light' 
      ? '0 2px 4px rgba(0,0,0,0.1)' 
      : '0 2px 4px rgba(255,255,255,0.1)'
  };
  
  return (
    <div style={contentStyle}>
      <div style={cardStyle}>
        <h2>Welcome to Theme Switcher!</h2>
        <p>Current theme: <strong>{theme}</strong></p>
        <p>This is an example of using Context API for global state management.</p>
      </div>
      
      <div style={cardStyle}>
        <h3>Features:</h3>
        <ul>
          <li>Toggle between light and dark themes</li>
          <li>State is shared across all components</li>
          <li>No prop drilling needed!</li>
        </ul>
      </div>
    </div>
  );
}

export default Content;