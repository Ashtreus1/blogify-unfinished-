'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link'; 

import FormLayout from '@/components/form/formlayout';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/login', { username, password }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Login Success:', response.data);
      setSuccess('User logged in successfully!');
      setError(null);
      localStorage.setItem('user', JSON.stringify(response.data));

      router.push('/home');
    } catch (error) {
      console.error('Error during login:', error.response ? error.response.data : error.message);
      setError(error.response ? error.response.data.error : 'An error occurred');
      setSuccess(null);
    }
  };

  return (
    <FormLayout
      title="Login"
      description="Enter your username and password to access your account"
      error={error}
      success={success}
      footerText="Don't have an account?"
      footerLink="/signup"
      footerLinkText="Sign up"
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
        <div className="flex items-center justify-between">
          <Label htmlFor="password">Password</Label>
          <Link
            href="/forgot-password"
            className="text-sm text-cyan-600 hover:underline"
          >
            Forgot your password?
          </Link>
        </div>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mt-2"
        />
      </div>
      <Button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">
        Login
      </Button>
    </FormLayout>
  );
}
