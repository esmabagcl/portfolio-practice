const Skills = () => {
  const skills = [
    { name: "Resim", level: 95, icon: "🎨" },
    { name: "Heykel", level: 90, icon: "⛏️" },
    { name: "Sokak Sanatı", level: 92, icon: "🏙️" },
    { name: "Dijital Sanat", level: 85, icon: "💻" },
    { name: "Sergi Tasarımı", level: 88, icon: "🖼️" },
    { name: "Sanat Danışmanlığı", level: 82, icon: "💼" }
  ];

  return (
    <div className="skills-page container">
      <div className="page-header">
        <h1>Yeteneklerim</h1>
        <div className="underline"></div>
        <p className="page-subtitle">Sanatsal becerilerim ve uzmanlık alanlarım</p>
      </div>
      
      <div className="skills-container">
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-name">{skill.name}</div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <div className="skill-percentage">{skill.level}%</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;