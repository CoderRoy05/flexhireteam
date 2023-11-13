import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import flexhirelogo from '/flexhirelogo.png';
import './index.css';


export default function FlexhireForm() {
  const [apiKey, setApiKey] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://flexhire.com/api/v2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'FLEXHIRE-API-KEY': apiKey,
        },
        // Include any additional data or body if required
      });

      if (response.ok) {
        console.log('API Key:', apiKey);
        // Redirect to Flexhire component with API key
        navigate(`/flexhire/${apiKey}`);
      } else {
        console.error('Failed to authenticate. Please check your API key.');
      }
    } catch (error) {
      console.error('An error occurred while sending the API request:', error);
    }
  };

  return (
    <div className='body'>
      <img src={flexhirelogo} alt="flexhirelogo" style={{ width: '100%', marginBottom: '36px' }} />
      <Typography component="h1" variant="h5" align="center">
        {/* Flexhire Form */}
      </Typography>
      <div className="col-sm-6 offset-sm-3" id='body'>
        <form onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="apiKey"
            label="API Key"
            className='yes'
            name="apiKey"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            InputProps={{ style: { color: 'white', borderColor: 'white', borderBottom: '1px solid grey', } }}
            InputLabelProps={{ style: { color: 'white' } }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: '16px' }}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
