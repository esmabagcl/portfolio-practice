const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Berlin Duvar Sanatı",
      description: "Şehrin farklı noktalarında modern sokak sanatı çalışmaları",
      category: "Sokak Sanatı",
      year: "2024",
      color: "#FF6B6B"
    },
    {
      id: 2,
      title: "Modern Heykel Sergisi",
      description: "Çağdaş heykel sanatının sınırlarını zorlayan eserler koleksiyonu",
      category: "Heykel",
      year: "2023",
      color: "#4ECDC4"
    },
    {
      id: 3,
      title: "Doğa ve İnsan",
      description: "Doğa ile insan arasındaki ilişkiyi konu alan resim serisi",
      category: "Resim",
      year: "2024",
      color: "#45B7D1"
    },
    {
      id: 4,
      title: "Şehir Işıkları",
      description: "Berlin gece hayatını yansıtan neon sanat çalışmaları",
      category: "Dijital Sanat",
      year: "2023",
      color: "#96CEB4"
    }
  ];

  return (
    <div className="projects-page container">
      <div className="page-header">
        <h1>Projelerim</h1>
        <div className="underline"></div>
        <p className="page-subtitle">Yaratıcı yolculuğumdaki en önemli çalışmalar</p>
      </div>
      
      <div className="projects-grid">
        {projects.map(project => (
          <div 
            key={project.id} 
            className="project-card"
            style={{ '--accent-color': project.color }}
          >
            <div className="project-header">
              <span className="project-category">{project.category}</span>
              <span className="project-year">{project.year}</span>
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-footer">
              <button className="view-project-btn">Detayları Gör</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;