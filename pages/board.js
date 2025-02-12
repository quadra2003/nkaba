import { useState } from 'react';
import Layout from '../components/layout';

export default function Board() {
    const [selectedMember, setSelectedMember] = useState(null);

    const boardMembers = [
        { 
            name: "Daniel Chung", 
            link: "https://www.spencerfane.com/professionals/daniel-chung/", 
            linkedin: "https://www.linkedin.com/in/chungforchange/", 
            image: "/daniel-chung.jpg",
            bio: "An experienced trial attorney who assists clients through all stages of litigation and dispute resolution. Former criminal prosecutor in New York City and Silicon Valley."
        },
        { 
            name: "Jenny Goak", 
            link: "https://ktslaw.com/en/People/G/GoakJenny", 
            linkedin: "https://www.linkedin.com/in/jennygoak/", 
            image: "/jenny-goak.jpg",
            bio: "Senior Associate focusing on trademark, copyright, and right of publicity law. Provides guidance and strategy for protecting and enforcing intellectual property rights."
        },
        { 
            name: "Lawrence Han", 
            link: "https://www.rivkinradler.com/attorneys/lawrence-han/", 
            linkedin: "https://www.linkedin.com/in/lawrence-han-2a7b6036/", 
            image: "/lawrence-han.jpg",
            bio: "Partner in Rivkin Radler's Professional Liability Practice Group, representing professionals against claims of malpractice, breach of fiduciary duty, and fraud."
        },
        { 
            name: "Gene Kang", 
            link: "https://www.rivkinradler.com/attorneys/gene-y-kang/", 
            linkedin: "https://www.linkedin.com/in/gene-kang/", 
            image: "/gene-kang.jpg",
            bio: "Partner with extensive experience in civil litigation and corporate counseling, including trial and appellate work involving commercial matters and employment issues."
        },
        { 
            name: "Chang Lim", 
            link: "https://www.knobbe.com/professionals/chang-lim/", 
            linkedin: "https://www.linkedin.com/in/changsiklim/", 
            image: "/chang-lim.jpg",
            bio: "Partner specializing in patent and trademark counseling, representing multinational corporations and emerging businesses across various industries."
        },
        { 
            name: "Rosa Namgoong", 
            link: "https://www.troutman.com/professionals/rosa-namgoong.html", 
            linkedin: "https://www.linkedin.com/in/rosa-namgoong-265bb468/", 
            image: "/rosa-namgoong.jpg",
            bio: "Represents clients in financing transactions, advising venture capital funds, private equity entities, high-net-worth individuals, and corporate clients."
        },
        { 
            name: "Jin Hee Park", 
            link: "https://bbklaw.com/people/jin_hee_park", 
            linkedin: "https://www.linkedin.com/in/jin-hee-park-esq-2141b978/", 
            image: "/jin-hee-park.jpg",
            bio: "Of counsel in Best Best & Krieger's Health Care practice, advising health care systems, hospitals, and providers on regulatory compliance and reimbursement."
        },
        { 
            name: "Samuel Sung H. You", 
            link: "https://www.royoulaw.com/samuel-h-you", 
            linkedin: "https://www.linkedin.com/in/samuelyou/", 
            image: "/samuel-you.jpg",
            bio: "Founding member of RO & YOU LLP, concentrating on the defense of workers' compensation claims, risk management, and employer liability matters."
        },
        { 
            name: "Samuel Yu", 
            link: "https://kahanafeld.com/team-member/samuel-yu-esq/", 
            linkedin: "https://www.linkedin.com/in/samuel-yu-6277721b/", 
            image: "/samuel-yu.jpg",
            bio: "Managing Partner at Kahana Feld's Irvine office, specializing in shareholder disputes, employment litigation, real estate disputes, and trade secret litigation."
        }
    ];

    return (
        <Layout>
            <div style={{
                textAlign: 'center',
                maxWidth: '900px',
                margin: '0 auto',
                padding: '2rem 0'
            }}>
                <h2 style={{ marginBottom: '20px', fontWeight: 'bold' }}>Board of Directors</h2>

                {/* Grid for Board Members (3 per row on all screens) */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)', 
                    gap: '10px 15px',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    {boardMembers.map((member, index) => (
                        <div key={index} 
                            onClick={() => setSelectedMember(member)}
                            style={{
                                width: '150px', 
                                height: '180px',
                                border: '1px solid #ddd',
                                textAlign: 'center',
                                backgroundColor: '#f9f9f9',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                cursor: 'pointer',
                                margin: '0 auto'
                            }}
                        >
                            <img src={member.image} alt={member.name} style={{
                                width: '120px',
                                height: '120px',
                                objectFit: 'cover'
                            }} />
                            <h3 style={{ margin: '5px 0', fontSize: '12px', fontWeight: 'normal' }}>{member.name}</h3>

                            {/* Icons */}
                            <div style={{ display: 'flex', gap: '5px' }}>
                                <a href={member.link} target="_blank" rel="noopener noreferrer">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Globe_icon_2.svg" alt="Website" style={{ width: '18px', height: '18px' }} />
                                </a>
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="LinkedIn" style={{ width: '18px', height: '18px' }} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal Popup */}
                {selectedMember && (
                    <div onClick={() => setSelectedMember(null)} style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 1000
                    }}>
                        <div onClick={(e) => e.stopPropagation()} style={{
                            backgroundColor: 'white',
                            padding: '20px',
                            borderRadius: '10px',
                            width: '90%',
                            maxWidth: '350px',
                            textAlign: 'center',
                            position: 'relative'
                        }}>
                            <button onClick={() => setSelectedMember(null)} style={{
                                position: 'absolute',
                                top: '10px',
                                right: '10px',
                                background: 'none',
                                border: 'none',
                                fontSize: '18px',
                                cursor: 'pointer'
                            }}>✖</button>

                            <img src={selectedMember.image} alt={selectedMember.name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                            <h3>{selectedMember.name}</h3>
                            <p>{selectedMember.bio}</p>

                            {/* Icons in Modal */}
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <a href={selectedMember.link} target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Globe_icon_2.svg" style={{ width: '24px' }} /></a>
                                <a href={selectedMember.linkedin} target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" style={{ width: '24px' }} /></a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    );
}
