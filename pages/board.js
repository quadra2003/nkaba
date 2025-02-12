import Layout from '../components/layout';

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
        <Layout>
            <div style={{
                textAlign: 'center',
                maxWidth: '900px',  // Ensures proper alignment
                margin: '0 auto',  // Centers everything horizontally
                padding: '2rem 0'
            }}>
                <h2 style={{ marginBottom: '20px', fontWeight: 'bold' }}>Board of Directors</h2>

                {/* Grid for Board Members */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',  // Exactly 3 profiles per row
                    gap: '20px',
                    justifyContent: 'center',  // Centers the grid items
                    alignItems: 'center'
                }}>
                    {boardMembers.map((member, index) => (
                        <div key={index} style={{
                            width: '200px',
                            height: '220px',
                            border: '1px solid #ddd',
                            textAlign: 'center',
                            backgroundColor: '#f9f9f9',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: '0 auto'  // Ensures proper centering
                        }}>
                            {/* Profile Image (150px x 150px, No Rounded Corners) */}
                            <img src={member.image} alt={member.name} style={{
                                width: '150px',
                                height: '150px',
                                objectFit: 'cover'
                            }} />
                            
                            {/* Name (Not Bold Anymore) */}
                            <h3 style={{ margin: '5px 0', fontSize: '14px', fontWeight: 'normal' }}>{member.name}</h3>

                            {/* Icons for website and LinkedIn */}
                            <div style={{ display: 'flex', gap: '10px' }}>
                                {/* Website (Globe Icon) */}
                                <a href={member.link} target="_blank" rel="noopener noreferrer">
                                    <img 
                                        src="https://upload.wikimedia.org/wikipedia/commons/8/87/Globe_icon_2.svg" 
                                        alt="Website" 
                                        style={{ width: '20px', height: '20px' }} 
                                    />
                                </a>

                                {/* LinkedIn Icon */}
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                    <img 
                                        src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" 
                                        alt="LinkedIn" 
                                        style={{ width: '20px', height: '20px' }} 
                                    />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}
