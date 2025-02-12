import { FaGlobe, FaLinkedin } from 'react-icons/fa'; // Import icons

export default function Board() {
    const boardMembers = [
        { 
            name: "Daniel Chung", 
            link: "https://www.spencerfane.com/professionals/daniel-chung/", 
            linkedin: "https://www.linkedin.com/in/chungforchange/", 
            image: "/daniel-chung.jpg" 
        },
        { 
            name: "Jenny Goak", 
            link: "https://ktslaw.com/en/People/G/GoakJenny", 
            linkedin: "https://www.linkedin.com/in/jennygoak/", 
            image: "/jenny-goak.jpg" 
        },
        { 
            name: "Lawrence Han", 
            link: "https://www.rivkinradler.com/attorneys/lawrence-han/", 
            linkedin: "https://www.linkedin.com/in/lawrence-han-2a7b6036/", 
            image: "/lawrence-han.jpg" 
        },
        { 
            name: "Gene Kang", 
            link: "https://www.rivkinradler.com/attorneys/gene-y-kang/", 
            linkedin: "https://www.linkedin.com/in/gene-kang/", 
            image: "/gene-kang.jpg" 
        },
        { 
            name: "Chang Lim", 
            link: "https://www.knobbe.com/professionals/chang-lim/", 
            linkedin: "https://www.linkedin.com/in/changsiklim/", 
            image: "/chang-lim.jpg" 
        },
        { 
            name: "Rosa Namgoong", 
            link: "https://www.troutman.com/professionals/rosa-namgoong.html", 
            linkedin: "https://www.linkedin.com/in/rosa-namgoong-265bb468/", 
            image: "/rosa-namgoong.jpg" 
        },
        { 
            name: "Jin Hee Park", 
            link: "https://bbklaw.com/people/jin_hee_park", 
            linkedin: "https://www.linkedin.com/in/jin-hee-park-esq-2141b978/", 
            image: "/jin-hee-park.jpg" 
        },
        { 
            name: "Samuel Sung H. You", 
            link: "https://www.royoulaw.com/samuel-h-you", 
            linkedin: "https://www.linkedin.com/in/samuelyou/", 
            image: "/samuel-you.jpg" 
        },
        { 
            name: "Samuel Yu", 
            link: "https://kahanafeld.com/team-member/samuel-yu-esq/", 
            linkedin: "https://www.linkedin.com/in/samuel-yu-6277721b/", 
            image: "/samuel-yu.jpg" 
        }
    ];

    return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '20px' }}>Board of Directors</h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)', // Always 3 profiles per row
                gap: '20px',
                justifyContent: 'center',
                maxWidth: '900px', // Limits width for better layout
                margin: '0 auto'
            }}>
                {boardMembers.map((member, index) => (
                    <div key={index} style={{
                        width: '250px', // Square size
                        height: '250px',
                        padding: '1rem',
                        border: '1px solid #ddd',
                        borderRadius: '10px',
                        textAlign: 'center',
                        backgroundColor: '#f9f9f9',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        {/* Profile Image */}
                        <img src={member.image} alt={member.name} style={{
                            width: '100px',
                            height: '100px',
                            objectFit: 'cover',
                            borderRadius: '10px' // Square format
                        }} />
                        
                        {/* Name */}
                        <h3 style={{ margin: '10px 0', fontSize: '16px' }}>{member.name}</h3>

                        {/* Icons for website and LinkedIn */}
                        <div style={{ display: 'flex', gap: '10px' }}>
                            {/* Website (Globe Icon) */}
                            <a href={member.link} target="_blank" rel="noopener noreferrer" style={{ color: '#0047A0', fontSize: '20px' }}>
                                <FaGlobe />
                            </a>

                            {/* LinkedIn Icon */}
                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#0077b5', fontSize: '20px' }}>
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
