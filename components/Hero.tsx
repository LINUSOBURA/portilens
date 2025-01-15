
'use client'
import React from "react";
import Section from "./Section";
import { Input } from "./ui/input";
import { useState } from 'react';

export default function Hero() {

  const [url, setUrl] = useState('');
  const [feedback, setFeedback] = useState('');
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });
      const data = await res.json();
      if (data.feedback) {
        setFeedback(data.feedback);
      }
    } catch (error) {
      setFeedback('Error fetching feedback.');
    }
    setLoading(false);
  };
  return (
    <Section>
      <div className="flex flex-col items-center justify-center min-h-screen gap-4 bg-hero-image">
        <h1 className="text-white text-4xl font-bold">
          Analyze your portfolio with PortiLens
        </h1>
        <p className="text-white">
          Uncover your portfolio&apos;s full potential with PortiLens
        </p>
        <div className="w-1/4 text-zinc-100">
        <form onSubmit={handleSubmit} className="flex"><Input type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)} placeholder="Enter your portfolio address" />
           <button type="submit" hidden={loading} className="bg-gray-800 outline outline-white outline-1 rounded-r-md">Review</button>
          </form>
          
        </div>
      </div>
    </Section>
  );
}
