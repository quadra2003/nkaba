// pages/board.js
import { useState, useEffect } from 'react';
import Layout from '../components/layout';
import { Globe, Linkedin, X } from 'lucide-react';

export default function BoardPage() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const boardMembers = [
    {
      name: "Daniel Chung",
      link: "https://www.spencerfane.com/professionals/daniel-chung/",
      linkedin: "https://www.linkedin.com/in/chungforchange/",
      image: "/daniel-chung.jpg",
      title: "Board Member",
      bio: "An experienced trial attorney who assists clients through all stages of litigation and dispute resolution. Former criminal prosecutor in New York City and Silicon Valley."
    },
    {
      name: "Jenny Goak",
      link: "https://ktslaw.com/en/People/G/GoakJenny",
      linkedin: "https://www.linkedin.com/in/jennygoak/",
      image: "/jenny-goak.jpg",
      title: "Board Member",
      bio: "Senior Associate focusing on trademark, copyright, and right of publicity law. Provides guidance and strategy for protecting and enforcing intellectual property rights."
    },
    {
      name: "Lawrence Han",
      link: "https://www.rivkinradler.com/attorneys/lawrence-han/",
      linkedin: "https://www.linkedin.com/in/lawrence-han-2a7b6036/",
      image: "/lawrence-han.jpg",
      title: "Board Member",
      bio: "Partner in Rivkin Radler's Professional Liability Practice Group, representing professionals against claims of malpractice, breach of fiduciary duty, and fraud."
    },
    {
      name: "Gene Kang",
      link: "https://www.rivkinradler.com/attorneys/gene-y-kang/",
      linkedin: "https://www.linkedin.com/in/gene-kang/",
      image: "/gene-kang.jpg",
      title: "Board Member",
      bio: "Partner with extensive experience in civil litigation and corporate counseling, including trial and appellate work involving commercial matters and employment issues."
    },
    {
      name: "Chang Lim",
      link: "https://www.knobbe.com/professionals/chang-lim/",
      linkedin: "https://www.linkedin.com/in/changsiklim/",
      image: "/chang-lim.jpg",
      title: "Board Member",
      bio: "Partner specializing in patent and trademark counseling, representing multinational corporations and emerging businesses across various industries."
    },
    {
      name: "Rosa Namgoong",
      link: "https://www.troutman.com/professionals/rosa-namgoong.html",
      linkedin: "https://www.linkedin.com/in/rosa-namgoong-265bb468/",
      image: "/rosa-namgoong.jpg",
      title: "Board Member",
      bio: "Represents clients in financing transactions, advising venture capital funds, private equity entities, high-net-worth individuals, and corporate clients."
    },
    {
      name: "Jin Hee Park",
      link: "https://bbklaw.com/people/jin_hee_park",
      linkedin: "https://www.linkedin.com/in/jin-hee-park-esq-2141b978/",
      image: "/jin-hee-park.jpg",
      title: "Board Member",
      bio: "Of counsel in Best Best & Krieger's Health Care practice, advising health care systems, hospitals, and providers on regulatory compliance and reimbursement."
    },
    {
      name: "Samuel Sung H. You",
      link: "https://www.royoulaw.com/samuel-h-you",
      linkedin: "https://www.linkedin.com/in/samuelyou/",
      image: "/samuel-you.jpg",
      title: "Board Member",
      bio: "Founding member of RO & YOU LLP, concentrating on the defense of workers' compensation claims, risk management, and employer liability matters."
    },
    {
      name: "Samuel Yu",
      link: "https://kahanafeld.com/team-member/samuel-yu-esq/",
      linkedin: "https://www.linkedin.com/in/samuel-yu-6277721b/",
      image: "/samuel-yu.jpg",
      title: "Board Member",
      bio: "Managing Partner at Kahana Feld's Irvine office, specializing in shareholder disputes, employment litigation, real estate disputes, and trade secret litigation."
    }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Board of Directors</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated professionals leading NKABA's mission to support and advance
            the Korean American legal community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {boardMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden cursor-pointer group"
              onClick={() => setSelectedMember(member)}
            >
              <div className="relative pt-[100%]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm text-blue-600 mb-4">{member.title}</p>
                
                <div className="flex space-x-4">
                  <a
                    href={member.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                  >
                    <Globe className="w-5 h-5" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedMember && (
          <div 
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedMember(null)}
          >
            <div 
              className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="grid md:grid-cols-2 gap-6 p-6">
                  <div className="relative pt-[100%] md:pt-0 md:h-full">
                    <img
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      className="absolute inset-0 w-full h-full object-cover rounded-lg md:relative"
                    />
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-1">
                        {selectedMember.name}
                      </h2>
                      <p className="text-blue-600 font-medium">
                        {selectedMember.title}
                      </p>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      {selectedMember.bio}
                    </p>

                    <div className="flex space-x-4 pt-4">
                      <a
                        href={selectedMember.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                      >
                        <Globe className="w-5 h-5 mr-2" />
                        Website
                      </a>
                      <a
                        href={selectedMember.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                      >
                        <Linkedin className="w-5 h-5 mr-2" />
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
