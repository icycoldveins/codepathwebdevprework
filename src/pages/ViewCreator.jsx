// src/pages/ViewCreator.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../client';

const ViewCreator = () => {
  const { id } = useParams();
  const [creator, setCreator] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCreator = async () => {
      let { data, error } = await supabase.from('creators').select('*').eq('id', id).single();
      if (error) console.error(error);
      else setCreator(data);
      setLoading(false);
    };
    fetchCreator();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!creator) return <p>Content creator not found.</p>;

  return (
    <div>
      <h1>{creator.name}</h1>
      <p>{creator.description}</p>
      <a href={creator.url} target="_blank" rel="noopener noreferrer">Visit</a>
      {creator.imageURL && <img src={creator.imageURL} alt={creator.name} />}
      <Link to={`/edit/${creator.id}`}>Edit</Link>
    </div>
  );
};

export default ViewCreator;
