// pages/donate.js
import { useState } from 'react';
import Layout from '../components/layout';
import { Heart, Gift, Star, Award } from 'lucide-react';

export default function DonatePage() {
  const [loading, setLoading] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');

  const donationTiers = [
    {
      amount: 50,
      name: "Supporter",
      icon: <Heart className="w-6 h-6" />,
      description: "Help us continue our community outreach programs."
    },
    {
      amount: 100,
      name: "Advocate",
      icon: <Gift className="w-6 h-6" />,
      description: "Support mentorship and educational initiatives."
    },
    {
      amount: 250,
      name: "Champion",
      icon: <Star className="w-6 h-6" />,
      description: "Enable professional development events and workshops."
    },
    {
      amount: 500,
      name: "Leader",
      icon: <Award className="w-6 h-6" />,
      description: "Fund scholarships and leadership programs."
    }
  ];

  const handleDonate = async (amount) => {
    setLoading(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          amount: amount || selectedAmount || parseInt(customAmount)
        })
      });

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error("Error processing donation:", error);
    }
    setLoading(false);
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Support Our Mission</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your donation helps us empower Korean American legal professionals and promote diversity in the legal field.
          </p>
        </div>

        {/* Donation Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
          {donationTiers.map((tier) => (
            <button
              key={tier.amount}
              onClick={() => {
                setSelectedAmount(tier.amount);
                setCustomAmount('');
              }}
              className={`text-left p-6 rounded-lg transition-all duration-200 ${
                selectedAmount === tier.amount
                  ? 'bg-blue-50 border-2 border-blue-500 shadow-md'
                  : 'bg-white border-2 border-gray-100 hover:border-blue-200 hover:shadow-sm'
              }`}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                {tier.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{tier.name}</h3>
              <p className="text-2xl font-bold text-blue-600 mb-2">${tier.amount}</p>
              <p className="text-gray-600 text-sm">{tier.description}</p>
            </button>
          ))}
        </div>

        {/* Custom Amount */}
        <div className="max-w-md mx-auto mb-12">
          <div className="bg-white p-6 rounded-lg border-2 border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Custom Amount</h3>
            <div className="flex gap-4">
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                  placeholder="Enter amount"
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Donate Button */}
        <div className="text-center">
          <button
            onClick={() => handleDonate()}
            disabled={loading || (!selectedAmount && !customAmount)}
            className={`px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg 
              ${loading || (!selectedAmount && !customAmount)
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:bg-blue-700'} 
              transition-colors duration-200`}
          >
            {loading ? "Processing..." : `Donate ${selectedAmount || customAmount ? `$${selectedAmount || customAmount}` : "Now"}`}
          </button>
        </div>

        {/* Tax Information */}
        <div className="mt-12 text-center text-gray-600 text-sm">
          <p>NKABA is a 501(c)(3) nonprofit organization.</p>
          <p>Your donation may be tax-deductible to the extent allowed by law.</p>
        </div>
      </div>
    </Layout>
  );
}
