import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios'
const landingPageStyle = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(to right, #FF6666, #FFCC33)',
  textShadow: '0px 0px 10px rgba(0,0,0, 1)', // Add text outline
 
};

const headingStyle = {
  fontSize: '2.5rem',
  fontWeight: 'bold',
  color: 'white', // Text color
  marginBottom: '1.5rem',
};

const buttonContainerStyle = {
  display: 'flex',
  gap: '1rem',
};

const App = () => {
  const getMessages = async()=>{
try {
  const response  = await  axios.get('http://localhost:5000/api/messages')
  console.log(response)
} catch (error) {
  console.log(error)
}
  }
  const postMessages = async()=>{
    try {
      const response  = await  axios.post('http://localhost:5000/api/messages',{
        name : 'ravi'
      })
      console.log(response)
    } catch (error) {
      console.log(error)
    }
      }
  return (
    <div style={landingPageStyle}>
      <Typography  fontFamily = 'cambria'variant="h1" style={headingStyle}>
        Panchayati
      </Typography>
      <div style={buttonContainerStyle}>
        <Button variant="contained" color="primary"onClick={postMessages}>
          New Group
        </Button>
        <Button variant="contained" color="secondary" onClick={getMessages}>
          Join Group
        </Button>
      </div>
    </div>
  );
};

export default App;
