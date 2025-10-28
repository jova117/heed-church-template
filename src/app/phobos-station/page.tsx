'use client';

import React from 'react';
import { MapPin, Phone, Mail, Clock, Users, Car, Wifi, Coffee } from 'lucide-react';
import Navigation from '../overflow-church-network/components/Navigation';
import Footer from '../overflow-church-network/components/Footer';

// Hero Section
const CampusHero = () => {
  return (
    <section className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Phobos Station Campus
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-foreground">
            Where faith reaches for the stars
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
                      789 Space Station Alpha<br />
                      Phobos Station, Mars 00003
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Phone</h3>
                    <p className="text-foreground">(555) 789-MARS</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Email</h3>
                    <p className="text-foreground">phobos@overflowmars.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Service Times</h3>
                    <div className="text-foreground space-y-1">
                      <p>Sunday: 8:00 AM & 2:00 PM</p>
                      <p>Saturday: 6:00 PM (Fellowship)</p>
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
                  <h3 className="text-lg font-semibold text-foreground mb-2">Orbital Chapel</h3>
                  <p className="text-foreground text-sm">Worship in our unique orbital chapel with Earth views</p>
                </div>

                <div className="card">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Coffee className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Zero Gravity Worship</h3>
                  <p className="text-foreground text-sm">Experience worship in zero gravity conditions</p>
                </div>

                <div className="card">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Car className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Space Suit Storage</h3>
                  <p className="text-foreground text-sm">Secure storage for all space suit types</p>
                </div>

                <div className="card">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Wifi className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Communication Array</h3>
                  <p className="text-foreground text-sm">Advanced communication systems for global reach</p>
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
              <span className="text-4xl font-bold text-primary">MR</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Pastor Michael Rodriguez</h3>
            <p className="text-primary font-semibold mb-4">Campus Pastor</p>
            <p className="text-foreground mb-6 max-w-2xl mx-auto">
              Pastor Michael brings a unique perspective from his background in space engineering and theology. His ability to connect faith with the wonders of space exploration has inspired many to see God&apos;s handiwork in the cosmos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Contact Pastor Michael
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
              <h3 className="text-2xl font-bold text-foreground mb-6">Transportation</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">1</div>
                  <p className="text-foreground">Take the Mars-Phobos shuttle from any major city</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">2</div>
                  <p className="text-foreground">Arrive at Phobos Station Terminal</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">3</div>
                  <p className="text-foreground">Take the orbital tram to Space Station Alpha</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">4</div>
                  <p className="text-foreground">Look for the dome with Earth views</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Important Information</h3>
              <div className="card">
                <h4 className="text-lg font-semibold text-foreground mb-4">Space Travel Requirements</h4>
                <ul className="space-y-2 text-foreground">
                  <li>• Valid space travel permit required</li>
                  <li>• Space suit certification recommended</li>
                  <li>• Zero gravity training available</li>
                  <li>• Shuttle reservations recommended</li>
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
export default function PhobosStationCampus() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="phobos station" />
      <CampusHero />
      <CampusInfo />
      <PastorInfo />
      <Directions />
      <Footer />
    </div>
  );
}