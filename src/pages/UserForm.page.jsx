import React, { useState, useEffect } from 'react';
import { TextField, Button, Container, Typography, Box, OutlinedInput } from '@mui/material';
import { nanoid } from "nanoid";

const UserForm = () => {  
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    id: nanoid(),
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.phone || !formData.name || !formData.address) {
      alert('All fields are required!');
      return;
    }
    localStorage.setItem('user', JSON.stringify(formData));
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      id: nanoid(), // Generate new ID
    });
  };
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (formData.name || formData.email || formData.phone || formData.address) {
        event.preventDefault();
        event.returnValue = "You have unsaved changes. Are you sure you want to leave?";
      }
    };
  
    window.addEventListener("beforeunload", handleBeforeUnload);
  
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [formData]);
  
  return (
    <Container maxWidth="sm">
      <Box mt={4}>
        <Typography variant="h4" gutterBottom sx={{color:'#1976d5'}}>
          User Form
        </Typography>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
              name="name"
              value={formData.name}
              onChange={handleChange}
              sx={{
                color: "#1976d5", // Text color
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#1976d5", // Default border color
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#1976d5", // Label color
                },
                "& .MuiInputBase-input": {
                  color: "#1976d5", // Input text color
                },
              }}
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              sx={{
                color: "#1976d5", // Text color
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#1976d5", // Default border color
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#1976d5", // Label color
                },
                "& .MuiInputBase-input": {
                  color: "#1976d5", // Input text color
                },
              }}
            />
            <TextField
              label="Phone"
              variant="outlined"
              fullWidth
              margin="normal"
              name="phone"
              type="phone"
              value={formData.phone}
              onChange={handleChange}
              sx={{
                color: "#1976d5", // Text color
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#1976d5", // Default border color
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#1976d5", // Label color
                },
                "& .MuiInputBase-input": {
                  color: "#1976d5", // Input text color
                },
              }}
            />
            <TextField
              label="Address"
              variant="outlined"
              fullWidth
              margin="normal"
              name="address"
              type="address"
              value={formData.address}
              onChange={handleChange}
              sx={{
                color: "#1976d5", // Text color
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#1976d5", // Default border color
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#1976d5", // Label color
                },
                "& .MuiInputBase-input": {
                  color: "#1976d5", // Input text color
                },
              }}
            />
            <OutlinedInput
              value={formData.id}
              disabled
              inputProps={{ 'aria-label': 'id' }}
              sx={{
                color: "#1976d5", // Text color
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#1976d5", // Border color
                },
                "& .Mui-disabled": {
                  color: "#1976d5", // Ensures the text remains blue even when disabled
                  "-webkit-text-fill-color": "#1976d5", // Fix for some browsers where text color may not apply properly
                }
              }}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Submit
            </Button>
        </form>
      </Box>
    </Container>
  );
};

export default UserForm;
