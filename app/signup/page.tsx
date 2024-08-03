'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


import { useState } from 'react';
import axios from 'axios';
import FormLayout from '@/components/form/formlayout';

export default function SignupPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);

    try {
      const response = await axios.post('/api/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Registration Success:', response.data);
      setSuccess('User registered successfully!');
      setError(null);
    } catch (error) {
      console.error('Error during registration:', error.response ? error.response.data : error.message);
      setError(error.response ? error.response.data.error : 'An error occurred');
      setSuccess(null);
    }
  };

  return (
    <FormLayout
      title="Register"
      description="Create an account to get started"
      error={error}
      success={success}
      footerText="Already have an account?"
      footerLink="/login"
      footerLinkText="Login"
      onSubmit={handleSubmit}
    >
      <div>
        <Label htmlFor="username">Username</Label>
        <Input
          id="username"
          type="text"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mt-2"
        />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-2"
        />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-2"
        />
      </div>
      <Button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">
        Register
      </Button>
    </FormLayout>
  );
}
