import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Button, CardActions, Box, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import './ContentCreatorCard.css';

const ContentCreatorCard = ({ creator }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEditClick = (e) => {
    e.stopPropagation();
    navigate(`/edit/${creator.id}`);
  };

  return (
    <>
      <Card 
        sx={{ maxWidth: 700, margin: '20px auto', padding: '20px', boxShadow: 3 }}
        onClick={handleClickOpen}
      >
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
              WebkitLineClamp: 3, // Limit to 3 lines if not expanded
              WebkitBoxOrient: 'vertical',
              maxHeight: '4.5em' // Adjust based on line height
            }}
          >
            {creator.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <Button size="large" href={creator.url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
              Visit
            </Button>
            <Button size="large" onClick={handleEditClick}>
              Edit
            </Button>
          </Box>
        </CardActions>
      </Card>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>{creator.name}</DialogTitle>
        <DialogContent>
          {creator.imageURL && (
            <CardMedia
              component="img"
              height="350"
              image={creator.imageURL}
              alt={creator.name}
            />
          )}
          <Typography variant="body1" color="text.secondary" paragraph>
            {creator.description}
          </Typography>
          <Typography variant="body2" color="primary">
            <a href={creator.url} target="_blank" rel="noopener noreferrer">
              {creator.url}
            </a>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ContentCreatorCard;
