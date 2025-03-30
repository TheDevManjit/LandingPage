import Hero from '../components/Hero';
import School from '../components/School';
import CoachingServices from '../components/Coaching';
import AdditionalServices from '../components/Additional';
import WhyChoose from '../components/WhyChoose';
import ContactUs from '../components/ContactUs';
import Testimonials from '../components/Testimonial';
import CtaSection from '../components/CtaSection';
import React from 'react'

export default function Home() {
  return (
    <>
    {/* Sections with IDs for Smooth Scrolling */}
    <section id="hero" className="section"><Hero /></section>
      <section id="school" className="section"><School /></section>
      <section id="coaching" className="section"><CoachingServices /></section>
      <section id="additional" className="section"><AdditionalServices /></section>
      <section id="why-choose" className="section"><WhyChoose /></section>
      <CtaSection />
      <section id="testimonials" className="section"><Testimonials /></section>
      <section id="contact" className="section"><ContactUs /></section>
      

    </>
  )
}
