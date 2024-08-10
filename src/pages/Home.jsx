import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet'; // Import Helmet
import { supabase } from '../client';
import ContentCreatorCard from '../components/ContentCreatorCard';
import { Container, Typography, Button, Grid } from '@mui/material'; // Import Material-UI components

const Home = () => {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
      let { data, error } = await supabase.from('creators').select('*');
      if (error) {
        console.error('Error fetching creators:', error);
      } else {
        setCreators(data);
      }
    };
    fetchCreators();
  }, []);

  return (
    <Container>
      <Helmet>
        <title>Creatorverse</title> {/* Set the page title */}
      </Helmet>
      <header>
        <Typography variant="h2" component="h1" gutterBottom>
        Creatorverse
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          component={Link} 
          to="/add"
          sx={{ marginBottom: 2 }}
        >
          Add New Content Creator
        </Button>
      </header>
      <Grid container spacing={3}>
        {creators.map((creator) => (
          <Grid item key={creator.id} xs={12} sm={6} md={4}>
            <ContentCreatorCard creator={creator} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
