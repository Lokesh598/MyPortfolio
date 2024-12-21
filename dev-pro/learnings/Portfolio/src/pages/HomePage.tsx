import React from 'react';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Portfolio />
      <Blog />
      <Contact />
    </>
  );
}