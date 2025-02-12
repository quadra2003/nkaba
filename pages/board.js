export default function Board() {
    const boardMembers = [
        { name: "Daniel Chung", link: "https://www.spencerfane.com/professionals/daniel-chung/", image: "https://www.spencerfane.com/wp-content/uploads/2022/02/daniel-chung.jpg" },
        { name: "Jenny Goak", link: "https://ktslaw.com/en/People/G/GoakJenny", image: "https://ktslaw.com/wp-content/uploads/2022/02/goak-jenny.jpg" },
        { name: "Lawrence Han", link: "https://www.rivkinradler.com/attorneys/lawrence-han/", image: "https://www.rivkinradler.com/wp-content/uploads/2022/02/lawrence-han.jpg" },
        { name: "Gene Kang", link: "https://www.rivkinradler.com/attorneys/gene-y-kang/", image: "https://www.rivkinradler.com/wp-content/uploads/2022/02/gene-kang.jpg" },
        { name: "Chang Lim", link: "https://www.knobbe.com/professionals/chang-lim/", image: "https://www.knobbe.com/wp-content/uploads/2022/02/chang-lim.jpg" },
        { name: "Rosa Namgoong", link: "https://www.troutman.com/professionals/rosa-namgoong.html", image: "https://www.troutman.com/wp-content/uploads/2022/02/rosa-namgoong.jpg" },
        { name: "Jin Hee Park", link: "https://bbklaw.com/people/jin_hee_park", image: "https://bbklaw.com/wp-content/uploads/2022/02/jin-hee-park.jpg" },
        { name: "Samuel Sung H. You", link: "https://www.royoulaw.com/samuel-h-you", image: "https://www.royoulaw.com/wp-content/uploads/2022/02/samuel-you.jpg" },
        { name: "Samuel Yu", link: "https://kahanafeld.com/team-member/samuel-yu-esq/", image: "https://kahanafeld.com/wp-content/uploads/2022/02/samuel-yu.jpg" }
    ];

    return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h2>Board of Directors</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                {boardMembers.map((member, index) => (
                    <div key={index} style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '10px' }}>
                        <img src={member.image} alt={member.name} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '10px' }} />
                        <h3>{member.name}</h3>
                        <a href={member.link} target="_blank" rel="noopener noreferrer">View Profile</a>
                    </div>
                ))}
            </div>
        </div>
    );
}