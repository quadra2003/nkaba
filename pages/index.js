// pages/index.js
import { useState } from 'react';
import Layout from '../components/layout';
import { Mail, ArrowRight, Users, Scale, Newspaper } from 'lucide-react';

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = async () => {
    if (!email || !validateEmail(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage("Subscribed successfully!");
        setEmail("");
      } else {
        setMessage("Subscription failed. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community",
      description: "Connect with Korean American legal professionals across the nation."
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Legal Excellence",
      description: "Promote the highest standards of legal practice and ethics."
    },
    {
      icon: <Newspaper className="w-6 h-6" />,
      title: "Resources",
      description: "Access exclusive professional development and networking opportunities."
    }
  ];

  return (
    <Layout>
      <div className="space-y-20">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 py-20">
          <div className="relative max-w-3xl mx-auto text-center px-4">
            <h1 className="text-4xl font-bold text-white mb-6">
              Empowering Korean American Legal Professionals
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Join a thriving community dedicated to advancing diversity and excellence in the legal profession.
            </p>
            <a 
              href="/about"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
            >
              Learn More
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-semibold mb-4">Stay Connected</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter for updates on events, opportunities, and community news.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSubscribe}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Subscribe
              </button>
            </div>
            {message && (
              <p className={`mt-4 ${message.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
                {message}
              </p>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto px-4 text-center pb-20">
          <h2 className="text-3xl font-semibold mb-6">Ready to Make an Impact?</h2>
          <p className="text-gray-600 mb-8">
            Join NKABA today and become part of a network dedicated to supporting and advancing Korean American legal professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/donate" 
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Support Our Mission
            </a>
            <a 
              href="/contact" 
              className="px-8 py-3 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
            >
              Get Involved
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
