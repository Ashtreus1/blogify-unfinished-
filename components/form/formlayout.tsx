'use client';

import { ReactNode, useState, useEffect } from 'react';
import Link from "next/link";
import { ArrowLeft, ShieldX, ShieldCheck } from 'lucide-react'; // Import ArrowLeft icon
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import SideHeader from './sideheader';

interface FormLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
  error?: string | null;
  success?: string | null;
  footerText?: string;
  footerLink?: string;
  footerLinkText?: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function FormLayout({
  title,
  description,
  children,
  error,
  success,
  footerText,
  footerLink,
  footerLinkText,
  onSubmit,
}: FormLayoutProps) {
  const [showError, setShowError] = useState(!!error);
  const [showSuccess, setShowSuccess] = useState(!!success);

  useEffect(() => {
    if (error) {
      setShowError(true);
      const timer = setTimeout(() => setShowError(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  useEffect(() => {
    if (success) {
      setShowSuccess(true);
      const timer = setTimeout(() => setShowSuccess(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <div className="flex min-h-screen overflow-hidden">
      <div className="flex flex-col justify-center w-full lg:w-1/2 p-8 lg:p-16">
        
        <div className="fixed top-0 left-0 p-10 cursor-pointer hover:text-cyan-400 transition-colors">
          <Link href="/" className="flex items-center">
            <ArrowLeft className="h-10 w-10"/>
            <span className="ml-2 text-lg">Back</span>
          </Link>
        </div>

        <div className="fixed top-0 inset-x-0 p-4">
          {showError && (
            <Alert className="mb-4">
              <ShieldX className="h-4 w-4 mr-2" />
              <AlertTitle>Error detected!</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          {showSuccess && (
            <Alert className="mb-4">
              <ShieldCheck className="h-4 w-4 mr-2" />
              <AlertTitle>Success!</AlertTitle>
              <AlertDescription>{success}</AlertDescription>
            </Alert>
          )}
        </div>

        <div className="mx-auto w-full max-w-sm mt-16">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="mt-2">{description}</p>
          </div>
          <form onSubmit={onSubmit} className="space-y-6">
            {children}
          </form>
          <div className="text-center text-sm text-gray-600 mt-4">
            {footerText}{" "}
            <Link href={footerLink || ""} className="text-cyan-600 hover:underline">
              {footerLinkText}
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex lg:w-1/2 bg-cover bg-center">
        <SideHeader />
      </div>
    </div>
  );
}
