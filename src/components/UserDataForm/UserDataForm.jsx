import React, { useState, useEffect } from "react";
import { TextField, Button, Container, Stack, Typography } from "@mui/material";
import useUnsavedChanges from "../../hooks/useUnsavedChanges";
import generateUserId from "../../utils/generateUserId";

import './UserDataForm.css'

 const UserDataForm = () => {
    const [formData, setFormData] = useState({
        id: generateUserId(),
        name: '',
        address: '',
        email: '',
        phone: '',
      });
    
      const [isDirty, setIsDirty] = useState(false);
    
      useEffect(() => {
        const savedData = localStorage.getItem('userData');
        if (savedData) {
          setFormData(JSON.parse(savedData));
          setIsDirty(false);
        }
      }, []);
    
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setIsDirty(true);
      };
    
      const handleSubmit = () => {
        localStorage.setItem('userData', JSON.stringify(formData));
        setIsDirty(false);
        alert('Data saved successfully!');
      };
    
      useUnsavedChanges(isDirty);
    
      return (
        <Container className='cont' maxWidth="md" sx={{ py: 4 }}>
          <Typography variant="h5" gutterBottom>User Data Form</Typography>
          <Stack spacing={3}>
            <TextField name="name" label="Name" value={formData.name} onChange={handleChange} fullWidth />
            <TextField name="address" label="Address" value={formData.address} onChange={handleChange} fullWidth />
            <TextField name="email" label="Email" value={formData.email} onChange={handleChange} fullWidth />
            <TextField name="phone" label="Phone" value={formData.phone} onChange={handleChange} fullWidth />
            <Button variant="contained" onClick={handleSubmit} sx={{ width: '150px' }}>Save</Button>
          </Stack>
        </Container>
      );
}
export default UserDataForm;