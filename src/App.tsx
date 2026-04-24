/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Calendar, 
  MessageCircle, 
  ShieldCheck, 
  Users, 
  Stethoscope, 
  Baby, 
  HeartPulse, 
  ChevronRight,
  Menu,
  X,
  Instagram,
  Facebook,
  Linkedin
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const SERVICES = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "General Consultations",
    desc: "Comprehensive check-ups and diagnostic services for all ages."
  },
  {
    icon: <HeartPulse className="w-6 h-6" />,
    title: "Chronic Care",
    desc: "Long-term management for hypertension, diabetes, and other conditions."
  },
  {
    icon: <Stethoscope className="w-6 h-6" />,
    title: "Women's Health",
    desc: "Specialized care including pap smears, family planning, and maternity."
  },
  {
    icon: <Baby className="w-6 h-6" />,
    title: "Child Health",
    desc: "Immunizations, well-baby checks, and pediatric care."
  }
];

const REVIEWS = [
  { name: "Sipho M.", text: "Dr Mabaso is very professional and caring. The surgery is clean and efficient.", rating: 5 },
  { name: "Priya G.", text: "Best family doctor in the area. Always explains everything clearly.", rating: 5 },
  { name: "John D.", text: "Fast booking and same-day help when I needed it most. Highly recommend.", rating: 5 }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen font-sans">
      {/* Top Bar */}
      <div className="bg-medical-blue text-white text-[10px] uppercase font-bold tracking-widest py-2 px-4 flex justify-between items-center sm:px-8 border-b border-white/10">
        <div className="flex gap-6">
          <span className="flex items-center gap-1.5 opacity-90"><Phone size={10} /> 011 456 7890</span>
          <span className="flex items-center gap-1.5 hidden sm:flex opacity-90"><MapPin size={10} /> Sandton Medical Hub</span>
        </div>
        <div className="flex gap-6">
          <span className="flex items-center gap-1.5 opacity-90"><Clock size={10} /> 08:00 - 17:30</span>
          <span className="flex items-center gap-1.5 hidden md:flex opacity-90"><ShieldCheck size={10} /> HPCSA Accredited</span>
        </div>
      </div>

      {/* Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-medical py-3' : 'bg-white py-5'}`}>
        <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center sm:px-8">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo('home')}>
            <div className="bg-medical-blue w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-xl transition-transform hover:scale-105">
              M
            </div>
            <div>
              <h1 className="font-bold text-lg leading-tight tracking-tight text-medical-blue">Dr Mabaso’s Surgery</h1>
              <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Registered Medical Practice • MP064231</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {['Services', 'Patient Info', 'About', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollTo(item.toLowerCase().replace(' ', '-'))}
                className="text-sm font-medium text-slate-500 hover:text-medical-blue transition-colors cursor-pointer"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => scrollTo('booking')}
              className="btn-primary py-2.5 text-sm"
            >
              Book Online
            </button>
          </div>

          {/* mobile menu toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-white shadow-xl p-8 md:hidden flex flex-col gap-6"
            >
              {['Services', 'About', 'Contact', 'Booking'].map((item) => (
                <button 
                  key={item} 
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="text-lg font-semibold text-left text-primary flex items-center justify-between"
                >
                  {item} <ChevronRight className="text-secondary" />
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative pt-8 pb-12 overflow-hidden bg-background-slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
            
            {/* Hero Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3 bg-gradient-to-br from-medical-blue to-blue-900 rounded-[2rem] p-8 sm:p-14 text-white relative overflow-hidden flex flex-col justify-center min-h-[500px]"
            >
              <div className="relative z-10">
                <span className="badge-medical mb-6">Now Accepting New Patients</span>
                <h2 className="text-4xl sm:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight">
                  Your Trusted Local <br/>Family Doctor in <span className="text-medical-light">Sandton</span>
                </h2>
                <p className="text-lg text-white/80 mb-10 max-w-xl leading-relaxed">
                  Quality, compassionate medical care for your family. We offer same-day appointments, specialized chronic care, and convenient health screenings.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => scrollTo('booking')}
                    className="btn-secondary-white py-4 px-10 rounded-full"
                  >
                    Book Appointment
                  </button>
                  <button className="btn-whatsapp py-4 px-10 rounded-full border border-white/20">
                    <MessageCircle size={18} /> WhatsApp Us
                  </button>
                </div>
              </div>
              
              {/* Decorative Circle */}
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute top-1/2 right-10 w-40 h-40 bg-medical-light/5 rounded-full blur-2xl pointer-events-none" />
            </motion.div>

            {/* Aside Profile Info */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 card-medical flex flex-col gap-6"
            >
              <div className="relative h-48 rounded-2xl overflow-hidden bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400" 
                  alt="Dr Tebogo Mabaso" 
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-medical-blue">Dr. Tebogo Mabaso</h3>
                <p className="text-sm text-slate-500 font-semibold mb-3">MBChB (Wits), FCPSA (SA)</p>
                <p className="text-xs text-slate-500 leading-relaxed">Over 15 years of dedicated service. Specialized in integrated primary healthcare and family wellness for our community.</p>
              </div>
              
              <div className="bg-slate-50 rounded-2xl p-5 flex flex-col gap-3">
                <div className="flex justify-between items-center py-2 border-b border-slate-200/50">
                  <span className="text-xs font-medium text-slate-500">Wait Time</span>
                  <span className="text-xs font-bold text-health-green">Under 15 mins</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-200/50">
                  <span className="text-xs font-medium text-slate-500">Consultations</span>
                  <span className="text-xs font-bold text-medical-blue">Same-day avail.</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-xs font-medium text-slate-500">Practice</span>
                  <span className="text-xs font-bold text-slate-800">Sandton Hub</span>
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-auto">
                <button 
                  onClick={() => scrollTo('booking')}
                  className="btn-primary w-full py-3 text-xs"
                >
                  <Phone size={14} /> Call Practice
                </button>
                <div className="flex items-center justify-center gap-3 pt-2">
                  <div className="h-px flex-1 bg-slate-100" />
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">HPCSA Accredited</span>
                  <div className="h-px flex-1 bg-slate-100" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 font-sans">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <h4 className="text-medical-blue font-bold uppercase tracking-[0.2em] text-xs mb-3">Our Expertise</h4>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-medical-blue tracking-tight">Specialized Services</h2>
            </div>
            <p className="text-slate-500 text-sm max-w-sm border-l-2 border-medical-light pl-6 py-2">
              Integrated primary healthcare solutions delivered with professional excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -8, shadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-medical transition-all group cursor-pointer"
              >
                <div className="bg-medical-light/30 w-12 h-12 rounded-xl flex items-center justify-center text-medical-blue mb-6 group-hover:bg-medical-blue group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-base font-bold text-medical-blue mb-2.5">{service.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-6">{service.desc}</p>
                <div className="flex items-center gap-2 text-medical-blue text-[10px] font-bold uppercase tracking-widest">
                  View Detail <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section id="about" className="py-24 bg-white overflow-hidden border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-medical-xl ring-8 ring-slate-50">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71f1e16943?q=80&w=2070&auto=format&fit=crop" 
                alt="Dr Lindiwe Mabaso" 
                className="w-full h-[600px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Background Blob */}
            <div className="absolute -top-12 -left-12 w-80 h-80 bg-medical-light/40 blur-[100px] rounded-full pointer-events-none" />
          </div>
          <div className="lg:w-1/2">
            <div className="inline-block px-3 py-1 bg-medical-light text-medical-blue rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">Expert Practitioner</div>
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-8 text-medical-blue tracking-tight">Professional Medical Excellence</h2>
            <div className="space-y-6 text-slate-500 leading-relaxed text-base">
              <p>With over 15 years in private practice, Dr. Tebogo Mabaso has built a reputation for thorough clinical diagnosis and compassionate patient engagement.</p>
              <p>Our practice serves the wider Sandton area, focusing on a holistic approach that combines modern medical science with traditional family values.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 pt-4">
                {[
                  "MBChB (University of Witwatersrand)",
                  "Registered with HPCSA",
                  "FCPSA (College of Physicians SA)",
                  "Primary Care & Family Wellness"
                ].map((stat, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                    <div className="w-2 h-2 bg-health-green rounded-full shadow-sm shadow-health-green/20" />
                    {stat}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12 flex gap-4 items-center">
              <button 
                onClick={() => scrollTo('booking')}
                className="btn-primary py-4 px-10 shadow-medical-xl"
              >
                Meet Dr. Mabaso
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking" className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="bg-white rounded-[2.5rem] shadow-medical-xl border border-slate-100 p-8 sm:p-14 text-center">
            <div className="bg-medical-light/40 w-16 h-16 rounded-2xl flex items-center justify-center text-medical-blue mb-8 mx-auto">
              <Calendar size={28} />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-medical-blue mb-4 tracking-tight">Book Your Consultation</h2>
            <p className="text-slate-500 text-sm mb-12 max-w-lg mx-auto">Skip the queue. Secure your appointment slot now and receive an instant SMS confirmation.</p>
            
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400 ml-1">Patient Full Name</label>
                <input type="text" placeholder="e.g. John Smith" className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-medical-blue/10 focus:border-medical-blue text-sm transition-all" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400 ml-1">Mobile Number</label>
                <input type="tel" placeholder="011 456 7890" className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-medical-blue/10 focus:border-medical-blue text-sm transition-all" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400 ml-1">Appointment Date</label>
                <input type="date" className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-medical-blue/10 focus:border-medical-blue text-sm transition-all" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400 ml-1">Service Type</label>
                <select className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-medical-blue/10 focus:border-medical-blue text-sm appearance-none transition-all">
                  <option>General Consultation</option>
                  <option>Chronic Check-up</option>
                  <option>Women's Wellness</option>
                  <option>Pediatric Check-up</option>
                </select>
              </div>
              <button type="submit" className="sm:col-span-2 btn-primary py-4 text-base font-bold mt-4 shadow-medical-xl">
                Request Appointment Slot
              </button>
            </form>
            <div className="mt-8 flex items-center justify-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <ShieldCheck size={12} className="text-health-green" /> Secure 256-bit Encrypted Triage
            </div>
          </div>
        </div>
        {/* Background Gradients */}
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-medical-blue/5 blur-[120px] rounded-full" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-health-green/5 blur-[120px] rounded-full" />
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
           <h2 className="text-3xl font-extrabold text-primary mb-12 uppercase tracking-tighter">What Our Patients Say</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {REVIEWS.map((review, i) => (
               <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center">
                 <div className="flex gap-1 text-yellow-400 mb-4">
                   {[1,2,3,4,5].map(s => <HeartPulse key={s} size={14} fill="currentColor" />)}
                 </div>
                 <p className="text-slate-600 mb-6 italic leading-relaxed">"{review.text}"</p>
                 <p className="font-bold text-primary">{review.name}</p>
                 <p className="text-[10px] uppercase tracking-widest text-secondary font-bold mt-1">Verified Heart Patient</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-extrabold text-primary mb-8 uppercase tracking-tighter">Visit the Surgery</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-secondary/10 p-3 rounded-xl text-secondary h-fit">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Location</h4>
                  <p className="text-slate-500">123 Health Way, Ground Floor, Suite 4</p>
                  <p className="text-slate-500">Morningside, Sandton, 2196</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-secondary/10 p-3 rounded-xl text-secondary h-fit">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Contact Details</h4>
                  <p className="text-slate-500">Tel: 011 234 5678</p>
                  <p className="text-slate-500">Email: info@drmabaso.co.za</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-secondary/10 p-3 rounded-xl text-secondary h-fit">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Operational Hours</h4>
                  <p className="text-slate-500">Mon - Fri: 08:00 - 17:00</p>
                  <p className="text-slate-500">Saturday: 08:00 - 12:00</p>
                  <p className="text-slate-500 text-secondary font-bold mt-1">Closed on Sundays & Holidays</p>
                </div>
              </div>
            </div>
            <div className="mt-12 flex gap-4">
               <button className="p-3 bg-slate-100 rounded-xl text-slate-600 hover:bg-secondary hover:text-white transition-all"><Facebook size={20} /></button>
               <button className="p-3 bg-slate-100 rounded-xl text-slate-600 hover:bg-secondary hover:text-white transition-all"><Instagram size={20} /></button>
               <button className="p-3 bg-slate-100 rounded-xl text-slate-600 hover:bg-secondary hover:text-white transition-all"><Linkedin size={20} /></button>
            </div>
          </div>
          <div className="h-[450px] bg-slate-100 rounded-[2rem] overflow-hidden border-2 border-slate-50 shadow-inner relative group">
            <img 
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066&auto=format&fit=crop" 
              className="w-full h-full object-cover grayscale-[0.2]" 
              alt="Map View"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-all pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 border-2 border-secondary font-bold">
               <MapPin size={18} className="text-secondary" /> Get Directions
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-medical-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-16 mb-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-white w-8 h-8 rounded-lg flex items-center justify-center text-medical-blue font-bold text-lg">
                  M
                </div>
                <h1 className="font-bold text-lg tracking-tight">Dr Mabaso’s Surgery</h1>
              </div>
              <p className="text-xs text-white/60 leading-relaxed max-w-xs">Dedicated to providing world-class primary medical care for our family community in Sandton and surrounds.</p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-medical-light">Quick Links</h4>
              <div className="flex flex-col gap-2.5 text-sm font-medium text-white/80">
                <button className="text-left hover:text-white transition-colors" onClick={() => scrollTo('services')}>Our Services</button>
                <button className="text-left hover:text-white transition-colors" onClick={() => scrollTo('about')}>About Practice</button>
                <button className="text-left hover:text-white transition-colors" onClick={() => scrollTo('booking')}>Book Online</button>
                <button className="text-left hover:text-white transition-colors">Privacy Policy</button>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-medical-light">Accreditations</h4>
              <div className="flex flex-wrap gap-3">
                <div className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-wider">HPCSA Certified</div>
                <div className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-wider">BHF Registered</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] text-center">
            <p>© 2026 Dr Mabaso’s Surgery. Sandton, South Africa.</p>
            <p>Designed for Healthcare Excellence</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="#" 
        className="fixed bottom-6 right-6 z-[60] bg-health-green text-white p-4 rounded-full shadow-medical-xl hover:scale-110 active:scale-95 transition-all group flex items-center gap-3 overflow-hidden max-w-[64px] hover:max-w-[220px]"
      >
        <MessageCircle size={32} />
        <span className="font-bold text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">Chat on WhatsApp</span>
      </a>

      {/* Sticky Book Now CTA on Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-slate-100 z-50">
        <button 
          onClick={() => scrollTo('booking')}
          className="btn-primary w-full py-4 text-sm font-bold tracking-widest shadow-lg shadow-secondary/20"
        >
          BOOK APPOINTMENT NOW
        </button>
      </div>
    </div>
  );
}
