import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background text-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Overflow Church Network</h3>
              <p className="text-foreground/80 mb-4">
                Building community on the red planet through faith, hope, and love.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-foreground/80">
                <li><a href="/first-time" className="hover:text-primary transition-colors duration-300">Plan Your Visit</a></li>
                <li><a href="/small-groups" className="hover:text-primary transition-colors duration-300">Find a Small Group</a></li>
                <li><a href="/sermon" className="hover:text-primary transition-colors duration-300">Watch Sermons</a></li>
                <li><a href="#" className="hover:text-primary transition-colors duration-300">Give Online</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Our Locations</h3>
              <ul className="space-y-2 text-foreground/80">
                <li><a href="/mars-central" className="hover:text-primary transition-colors duration-300">Mars Central Campus</a></li>
                <li><a href="/valles-marineris" className="hover:text-primary transition-colors duration-300">Valles Marineris Campus</a></li>
                <li><a href="/phobos-station" className="hover:text-primary transition-colors duration-300">Phobos Station Campus</a></li>
                <li><a href="/new-terra" className="hover:text-primary transition-colors duration-300">New Terra Campus</a></li>
                <li><a href="#" className="hover:text-primary transition-colors duration-300">Overflow Online</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <div className="space-y-2 text-foreground/80">
                <p>123 Olympus Mons Boulevard</p>
                <p>New Terra, Mars 00001</p>
                <p>(555) 123-MARS</p>
                <p>info@overflowmars.com</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-foreground/20 mt-12 pt-8 text-center text-foreground/70">
            <p>&copy; 2025 Overflow Church Network. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;