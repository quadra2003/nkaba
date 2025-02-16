// pages/contact.js
import Layout from '../components/layout';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

export default function ContactPage() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Get in touch with us using the information below.
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {/* Email Card */}
          <div className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow duration-200">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
            <a 
              href="mailto:contact@nkaba.org"
              className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
            >
              contact@nkaba.org
            </a>
          </div>

          {/* Phone Card */}
          <div className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow duration-200">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
            <a 
              href="tel:+1-123-456-7890"
              className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
            >
              (123) 456-7890
            </a>
          </div>

          {/* Location Card */}
          <div className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow duration-200">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
            <p className="text-gray-600">
              123 NKABA Lane<br />
              Los Angeles, CA 90001
            </p>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="bg-gray-50 rounded-lg p-8 max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Connect With Us</h2>
          <div className="flex justify-center space-x-6">
            <a 
              href="https://www.linkedin.com/company/nkaba"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors duration-200"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Additional Information */}
        <div className="max-w-2xl mx-auto mt-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Additional Information</h2>
          <p className="text-gray-600 mb-8">
            For media inquiries, partnership opportunities, or general questions about NKABA, please don't hesitate to reach out.
          </p>
          <div className="flex justify-center">
            <a 
              href="/about"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
