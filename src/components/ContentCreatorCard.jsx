import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Button, CardActions, Box } from '@mui/material';
import './ContentCreatorCard.css';

const ContentCreatorCard = ({ creator }) => {
  return (
    <Card sx={{ maxWidth: 700, margin: '20px auto', padding: '20px', boxShadow: 3 }}>
      {creator.imageURL && (
        <CardMedia
          component="img"
          height="350"
          image={creator.imageURL}
          alt={creator.name}
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {creator.name}
        </Typography>
        <Typography 
          variant="body1" 
          color="text.secondary" 
          sx={{ 
            overflow: 'hidden', 
            textOverflow: 'ellipsis', 
            display: '-webkit-box', 
            WebkitLineClamp: 3, // Limit to 3 lines
            WebkitBoxOrient: 'vertical',
            maxHeight: '4.5em' // Adjust based on line height
          }}
        >
          {creator.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Button size="large" href={creator.url} target="_blank" rel="noopener noreferrer">
            Visit
          </Button>
          <Button size="large" component={Link} to={`/edit/${creator.id}`}>
            Edit
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default ContentCreatorCard;
