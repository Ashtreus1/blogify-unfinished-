'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FeaturedCard from './featuredcard';
import { Post } from '@/types/types';

const FeaturedPosts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get<Post[]>('/api/featuredpost');
        console.log('Fetched posts:', response.data);
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section className="py-12 lg:px-16">
      <div className="container mx-auto">
        <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold mb-12">Featured Blogs</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {posts.length > 0 ? (
            posts.map((post) => (
              <FeaturedCard key={post.post_id} post={post} />
            ))
          ) : (
              <p>No post available</p>
          )}
              <FeaturedCard isLoading={isLoading} setIsLoading={setIsLoading}/>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
