
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-mindful-500 flex items-center justify-center text-white font-semibold">K</div>
              <span className="text-xl font-bold">Klarzo</span>
            </Link>
            <p className="text-gray-300 mb-6">
              AI-powered mental health support that's affordable, private, and always available.
            </p>
            <div className="flex items-center space-x-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor"/>
              </svg>
              <span>hello@klarzo.com</span>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Pages</h3>
            <div className="space-y-3">
              <div><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></div>
              <div><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Klarzo AI</Link></div>
              <div><Link to="/tips" className="text-gray-300 hover:text-white transition-colors">Mental Health Tips</Link></div>
              <div><Link to="/guides" className="text-gray-300 hover:text-white transition-colors">Free Guides</Link></div>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <div className="space-y-3">
              <div><Link to="/crisis" className="text-gray-300 hover:text-white transition-colors">Crisis Support</Link></div>
              <div><Link to="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link></div>
              <div><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></div>
              <div><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></div>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Stay Connected</h3>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for mental health tips and updates.</p>
            <div className="flex space-x-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-700 text-white px-4 py-2 rounded-md flex-grow" 
              />
              <Button className="bg-mindful-500 hover:bg-mindful-600 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>© 2023 Klarzo. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="text-gray-300 hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
