// src/pages/ShowCreators.js
import React, { useState, useEffect } from 'react';
import { supabase } from '../client';
import ContentCreatorCard from '../components/ContentCreatorCard';

const ShowCreators = () => {
  const [contentCreators, setContentCreators] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContentCreators = async () => {
      let { data, error } = await supabase.from('creators').select('*');
      if (error) console.error(error);
      else setContentCreators(data);
      setLoading(false);
    };
    fetchContentCreators();
  }, []);

  return (
    <div>
      <h1>Content Creators</h1>
      {loading ? (
        <p>Loading...</p>
      ) : contentCreators.length === 0 ? (
        <p>No content creators found.</p>
      ) : (
        contentCreators.map((creator) => (
          <ContentCreatorCard key={creator.id} creator={creator} />
        ))
      )}
    </div>
  );
};

export default ShowCreators;
