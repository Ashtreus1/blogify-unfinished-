import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Heart, Bookmark, MessageCircle, MoreHorizontal } from 'lucide-react';
import { BeatLoader } from 'react-spinners';

const FeaturedCard = ({ post, isLoading, setIsLoading }) => {
  return (
    <Card
      className="relative group rounded-lg overflow-hidden shadow-sm transition-transform duration-300 hover:scale-105"
      onMouseEnter={() => setIsLoading && setIsLoading(true)}
      onMouseLeave={() => setIsLoading && setIsLoading(false)}
    >
      {post ? (
        <>
          <CardHeader className="p-0">
            <img
              src='https://via.placeholder.com/600x400.png?text=No+Image'
              alt={post.title}
              className="w-full h-64 object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-3 space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-lg font-semibold text-white">{post.title}</h3>
              <div className="flex items-center space-x-3 text-white">
                <Bookmark className="w-5 h-5" />
                <Heart className="w-5 h-5" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="px-3 py-2 flex justify-between items-center">
            <div className="text-md text-gray-400">{post.author}</div>
            <div className="flex items-center space-x-3 text-gray-500">
              <div className="flex items-center">
                <MessageCircle className="w-4 h-4 mr-1" />
                <span>{post.comments}</span>
              </div>
              <div className="flex items-center">
                <Heart className="w-4 h-4 mr-1" />
                <span>{post.likes}</span>
              </div>
            </div>
          </CardContent>
          <CardContent className="px-3 py-2">
            <p>{post.description}</p>
          </CardContent>
        </>
      ) : (
        <Link href="#">
          <span className="flex items-center justify-center h-full text-center">
            <div className="relative">
              <MoreHorizontal
                className={`w-12 h-12 mx-auto mb-4 text-gray-500 transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
              />
              <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isLoading ? 'opacity-100' : 'opacity-0'}`}>
                <BeatLoader size={15} color="#4A90E2" />
              </div>
            </div>
          </span>
        </Link>
      )}
    </Card>
  );
};

export default FeaturedCard;
