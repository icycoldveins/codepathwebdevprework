import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { supabase } from '../client';
import { TextField, Button, Container, Typography, Box, Stack } from '@mui/material';

const EditCreator = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the id from the URL parameters
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState('');

  useEffect(() => {
    const fetchCreator = async () => {
      let { data, error } = await supabase.from('creators').select('*').eq('id', id).single();
      if (error) console.error(error);
      else {
        setName(data.name);
        setUrl(data.url);
        setDescription(data.description);
        setImageURL(data.imageURL);
      }
    };
    fetchCreator();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.from('creators').update({ name, url, description, imageURL }).eq('id', id);
    if (error) console.error(error);
    else alert('Content creator updated successfully!');
  };

  const handleDelete = async () => {
    const { data, error } = await supabase.from('creators').delete().eq('id', id);
    if (error) console.error(error);
    else {
      alert('Content creator deleted successfully!');
      navigate('/');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#1976d2' }}>
          Edit Content Creator
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
            <Button type="submit" variant="contained" sx={{ backgroundColor: '#1976d2', color: '#fff' }}>
              Update Content Creator
            </Button>
            <Button type="button" variant="outlined" sx={{ borderColor: '#d32f2f', color: '#d32f2f' }} onClick={handleDelete}>
              Delete Content Creator
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

export default EditCreator;
