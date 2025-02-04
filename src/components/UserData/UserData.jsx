import React, { useState, useEffect } from 'react';
import { TextField, Button, Container, Box, Typography } from '@mui/material';
import useUnsavedChanges from '../../hooks/useUnsavedChanges';
import generateUserId from '../../utils/generateUserId';
import './UserData.css';

const UserData = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
  });

  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    setFormData((prev) => ({ ...prev, id: generateUserId() }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setIsDirty(true);
  };

  const handleSubmit = () => {
    localStorage.setItem('userData', JSON.stringify(formData));
    setIsDirty(false);
  };

  useUnsavedChanges(isDirty);

  return (
    <Container maxWidth="sm" className="user-data-form">
      <Box className="form-box">
        <Typography variant="h6" className="form-header">UserData: JSON object</Typography>
        <TextField name="name" label="Name" value={formData.name} onChange={handleChange} fullWidth className="form-input id" />
        <TextField name="id" label="ID" value={formData.id} disabled  className="form-input" />
        <Button variant="contained" onClick={handleSubmit} className="form-button">Save</Button>
      </Box>
    </Container>
  );
};

export default UserData;