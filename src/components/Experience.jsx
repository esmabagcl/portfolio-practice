const Experience = () => {
  const experiences = [
    {
      year: "2023 - 2025",
      title: "Serbest Sanatçı",
      company: "Bağımsız Çalışmalar",
      description: "Berlin'de serbest sanatçı olarak çeşitli projeler ve sergiler gerçekleştirdim."
    },
    {
      year: "2021 - 2023",
      title: "Sanat Stüdyosu Asistanı",
      company: "Berlin Sanat Atölyesi",
      description: "Profesyonel sanat stüdyosunda asistanlık yaparak deneyim kazandım."
    },
    {
      year: "2019 - 2021",
      title: "Sanat Öğrencisi",
      company: "Berlin Sanat Akademisi",
      description: "Güzel Sanatlar eğitimim sırasında temel sanat tekniklerini öğrendim."
    }
  ];

  return (
    <div className="experience-page container">
      <div className="page-header">
        <h1>Deneyim</h1>
        <div className="underline"></div>
        <p className="page-subtitle">Sanat kariyerimdeki önemli deneyimler</p>
      </div>
      
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-year">{exp.year}</div>
            <div className="experience-content">
              <h3 className="experience-title">{exp.title}</h3>
              <div className="experience-company">{exp.company}</div>
              <p className="experience-description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;