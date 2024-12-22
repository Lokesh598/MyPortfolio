import React from 'react';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ResumeSection from '../components/ResumeSection';
import BackToTopButton from '../components/BackToTopButton';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection/>
      <ResumeSection />
      <Portfolio />
      <Blog />
      <Contact />
      <BackToTopButton/>
    </>
  );
}