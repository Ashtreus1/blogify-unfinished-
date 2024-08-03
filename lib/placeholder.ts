export type Post = {
  title: string;
  description: string;
  image: string;
  likes: number;
  comments: number;
  bookmarks: number;
  author: string; 
};

export const posts: Post[] = [
  {
    title: 'Exploring the Wonders of Nature',
    description: 'Discover the beauty and diversity of the natural world in this exciting journey.',
    image: 'https://via.placeholder.com/400x200',
    likes: 150,
    comments: 25,
    bookmarks: 40,
    author: 'John Doe', 
  },
  {
    title: 'Tech Innovations in 2024',
    description: 'A deep dive into the most groundbreaking technological advancements of the year.',
    image: 'https://via.placeholder.com/400x200',
    likes: 200,
    comments: 35,
    bookmarks: 60,
    author: 'Jane Smith',
  },
  {
    title: 'The Art of Culinary Masterpieces',
    description: 'Uncover the secrets behind some of the world’s most exquisite dishes.',
    image: 'https://via.placeholder.com/400x200',
    likes: 180,
    comments: 40,
    bookmarks: 55,
    author: 'Alice Johnson',
  },
  {
    title: 'A Journey Through Ancient Civilizations',
    description: 'Explore the history and culture of ancient civilizations around the world.',
    image: 'https://via.placeholder.com/400x200',
    likes: 220,
    comments: 50,
    bookmarks: 70,
    author: 'Robert Brown',
  },
  {
    title: 'Fitness Trends for a Healthier Lifestyle',
    description: 'Discover the latest trends in fitness and wellness for a balanced life.',
    image: 'https://via.placeholder.com/400x200',
    likes: 170,
    comments: 30,
    bookmarks: 45,
    author: 'Emily Davis',
  },
  {
    title: 'The Evolution of Modern Art',
    description: 'An in-depth look at the evolution and impact of modern art movements.',
    image: 'https://via.placeholder.com/400x200',
    likes: 190,
    comments: 20,
    bookmarks: 50,
    author: 'Michael Wilson',
  },
  {
    title: 'Travel Destinations for 2024',
    description: 'Top travel destinations to explore and experience in the coming year.',
    image: 'https://via.placeholder.com/400x200',
    likes: 240,
    comments: 60,
    bookmarks: 80,
    author: 'Sarah Martinez',
  },
  {
    title: 'Sustainable Living: Tips and Tricks',
    description: 'Practical tips for living a sustainable and eco-friendly lifestyle.',
    image: 'https://via.placeholder.com/400x200',
    likes: 130,
    comments: 15,
    bookmarks: 35,
    author: 'David Garcia',
  },
  {
    title: 'The Future of Artificial Intelligence',
    description: 'Exploring the potential and challenges of AI in various industries.',
    image: 'https://via.placeholder.com/400x200',
    likes: 260,
    comments: 70,
    bookmarks: 90,
    author: 'Laura Rodriguez',
  },
  {
    title: 'Gourmet Coffee: A World of Flavors',
    description: 'An exploration of the rich and diverse flavors of gourmet coffee.',
    image: 'https://via.placeholder.com/400x200',
    likes: 210,
    comments: 55,
    bookmarks: 65,
    author: 'James White',
  },
  {
    title: 'The Impact of Social Media on Society',
    description: 'Analyzing the positive and negative effects of social media on modern society.',
    image: 'https://via.placeholder.com/400x200',
    likes: 300,
    comments: 80,
    bookmarks: 100,
    author: 'Jessica Thompson',
  },
  {
    title: 'Mindfulness and Mental Health',
    description: 'Understanding the benefits of mindfulness practices for mental well-being.',
    image: 'https://via.placeholder.com/400x200',
    likes: 180,
    comments: 40,
    bookmarks: 50,
    author: 'Christopher Lee',
  },
  {
    title: 'Innovations in Renewable Energy',
    description: 'Exploring the latest advancements in renewable energy technologies.',
    image: 'https://via.placeholder.com/400x200',
    likes: 230,
    comments: 65,
    bookmarks: 75,
    author: 'Amanda Walker',
  },
];

export type Testimonials = {
	name: string;
	avatar: string;
	review: string;
};


export const testimonials: Testimonials[] = [
    {
      name: 'John Doe',
      avatar: 'https://via.placeholder.com/100', 
      review: 'This blogging platform is fantastic! It\'s easy to use and has helped me connect with readers all over the world.',
    },
    {
      name: 'Jane Smith',
      avatar: 'https://via.placeholder.com/100', 
      review: 'I love the clean and modern design. The features are amazing and it\'s perfect for sharing my thoughts.',
    },
    {
      name: 'Alex Johnson',
      avatar: 'https://via.placeholder.com/100', 
      review: 'An excellent platform for bloggers! The tools are intuitive and the community is great.',
    },
    {
      name: 'Alex Johnson',
      avatar: 'https://via.placeholder.com/100', 
      review: 'An excellent platform for bloggers! The tools are intuitive and the community is great.',
    },
    {
      name: 'Alex Johnson',
      avatar: 'https://via.placeholder.com/100', 
      review: 'An excellent platform for bloggers! The tools are intuitive and the community is great.',
    },
    {
      name: 'Alex Johnson',
      avatar: 'https://via.placeholder.com/100', 
      review: 'An excellent platform for bloggers! The tools are intuitive and the community is great.',
    },
    {
      name: 'Alex Johnson',
      avatar: 'https://via.placeholder.com/100', 
      review: 'An excellent platform for bloggers! The tools are intuitive and the community is great.',
    },
    {
      name: 'Alex Johnson',
      avatar: 'https://via.placeholder.com/100', 
      review: 'An excellent platform for bloggers! The tools are intuitive and the community is great.',
    },
  ];

