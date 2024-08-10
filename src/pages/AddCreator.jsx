import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../client';
import { TextField, Button, Container, Typography, Box, Stack } from '@mui/material';

const AddCreator = () => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.from('creators').insert([
      { name, url, description, imageURL }
    ]);
    if (error) console.error(error);
    else alert('Content creator added successfully!');
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#1976d2' }}>
          Add Content Creator
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="URL"
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            required
            multiline
            rows={4}
            margin="normal"
          />
          <TextField
            label="Image URL"
            type="url"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Add Content Creator
            </Button>
            <Button type="button" variant="text" sx={{ color: '#757575' }} onClick={() => navigate(-1)}>
              Back
            </Button>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default AddCreator;
