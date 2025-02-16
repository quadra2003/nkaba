// pages/about.js
import Layout from '../components/layout';
import { Target, Users, Scale, BookOpen } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Mission",
      description: "To advance, connect, and empower Korean American legal professionals across the United States."
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Justice",
      description: "Promoting equal access to justice and advocating for diversity in the legal profession."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community",
      description: "Building strong networks and fostering mentorship within the Korean American legal community."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Education",
      description: "Supporting the professional development of current and aspiring Korean American legal professionals."
    }
  ];

  return (
    <Layout>
      <div className="space-y-20 py-12">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">About NKABA</h1>
          <p className="text-xl text-gray-600">
            The National Korean American Bar Association is dedicated to serving the Korean American legal community and promoting professional growth and diversity in the legal field.
          </p>
        </div>

        {/* Values Grid */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-blue-100 p-3 mr-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {value.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* History Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-8">Our History</h2>
            <div className="prose max-w-none text-gray-600">
              <p className="mb-4">
                Founded by a group of dedicated Korean American legal professionals, NKABA has grown into a nationwide network of attorneys, judges, and law students. Our organization represents the interests of Korean American legal professionals and works to increase diversity and inclusion in the legal field.
              </p>
              <p className="mb-4">
                Through mentorship programs, professional development events, and advocacy initiatives, we continue to support the growth and success of Korean American legal professionals at all stages of their careers.
              </p>
              <p>
                Today, NKABA stands as a testament to the strength of our community and our commitment to advancing justice and equality in the legal profession.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto px-4 text-center pb-8">
          <h2 className="text-3xl font-semibold mb-6">Join Our Community</h2>
          <p className="text-gray-600 mb-8">
            Whether you're a seasoned legal professional or just starting your journey, NKABA welcomes you to join our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Get Involved
            </a>
            <a 
              href="/board" 
              className="px-8 py-3 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
            >
              Meet Our Board
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
