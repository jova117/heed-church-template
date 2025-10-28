'use client';

import React from 'react';
import { MapPin, Phone, Mail, Clock, Users, Car, Wifi, Coffee } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

// Hero Section
const CampusHero = () => {
  return (
    <section className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Mars Central Campus
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-foreground">
            Where the red planet meets the redemptive power of Christ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg py-4 px-8">
              Plan Your Visit
            </button>
            <button className="btn-secondary text-lg py-4 px-8">
              Watch Online
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Campus Information Section
const CampusInfo = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Campus Details */}
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-8">Campus Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Address</h3>
                    <p className="text-foreground">
                      123 Olympus Mons Boulevard<br />
                      New Terra, Mars 00001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Phone</h3>
                    <p className="text-foreground">(555) 123-MARS</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Email</h3>
                    <p className="text-foreground">central@overflowmars.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Service Times</h3>
                    <div className="text-foreground space-y-1">
                      <p>Sunday: 9:00 AM & 11:00 AM</p>
                      <p>Wednesday: 7:00 PM (Bible Study)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Campus Features */}
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-8">Campus Features</h2>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="card">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Zero Gravity Chapel</h3>
                  <p className="text-foreground text-sm">Experience worship in our unique zero-gravity sanctuary</p>
                </div>

                <div className="card">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Coffee className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Oxygen Garden</h3>
                  <p className="text-foreground text-sm">Relax in our beautiful oxygen-producing garden</p>
                </div>

                <div className="card">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Car className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Mars Rover Parking</h3>
                  <p className="text-foreground text-sm">Convenient parking for all types of rovers</p>
                </div>

                <div className="card">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Wifi className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Solar Panel Roof</h3>
                  <p className="text-foreground text-sm">Sustainable energy for all our operations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Pastor Information Section
const PastorInfo = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-8">Meet Our Campus Pastor</h2>
          
          <div className="card">
            <div className="w-32 h-32 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-4xl font-bold text-primary">AC</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Pastor Alex Chen</h3>
            <p className="text-primary font-semibold mb-4">Campus Pastor</p>
            <p className="text-foreground mb-6 max-w-2xl mx-auto">
              Pastor Alex has been serving the Mars community for over 15 years, helping establish the first Christian church on the red planet. His passion for space exploration and faith has inspired thousands to seek God among the stars.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Contact Pastor Alex
              </button>
              <button className="btn-secondary">
                Schedule Meeting
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Directions Section
const Directions = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-8 text-center">Getting Here</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Directions</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">1</div>
                  <p className="text-foreground">Take the Olympus Mons Expressway to the New Terra exit</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">2</div>
                  <p className="text-foreground">Turn right onto Red Planet Boulevard</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">3</div>
                  <p className="text-foreground">Continue for 2.3 miles to Olympus Mons Boulevard</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">4</div>
                  <p className="text-foreground">Look for the dome-shaped building with solar panels</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Parking Information</h3>
              <div className="card">
                <h4 className="text-lg font-semibold text-foreground mb-4">Mars Rover Parking</h4>
                <ul className="space-y-2 text-foreground">
                  <li>• Free parking for all rover types</li>
                  <li>• Charging stations available</li>
                  <li>• Handicap accessible spaces</li>
                  <li>• Valet service on Sundays</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Page Component
export default function MarsCentralCampus() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="mars central" />
      <CampusHero />
      <CampusInfo />
      <PastorInfo />
      <Directions />
      <Footer />
    </div>
  );
}