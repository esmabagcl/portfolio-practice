

const About = () => {
  return (
    <div className="about-page container">
      <div className="page-header">
        <h1>Hakkımda</h1>
        <div className="underline"></div>
      </div>
      
      <div className="about-content">
        <div className="about-text">
          <p className="intro">Merhaba, ben <span className="highlight">Sofia Müller</span>. Berlin merkezli bir serbest sanatçıyım.</p>
          <p>Resim, heykel ve sokak performansları aracılığıyla duyguları, özgünlük ve estetiği birleştirmeyi seviyorum. İlhamımı şehir yaşamının enerjisinden ve doğanın sadeliğinden alıyorum.</p>
          <p>Sanat, benim için dünyayı anlama ve ifade etme biçimim. Her eserimde izleyiciye duygusal bir yolculuk sunmayı amaçlıyorum.</p>
        </div>
        
        <div className="about-stats">
          <div className="stat-item">
            <div className="stat-icon">🎨</div>
            <div className="stat-number">4+</div>
            <div className="stat-label">Profesyonel Deneyim</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">😊</div>
            <div className="stat-number">50+</div>
            <div className="stat-label">Mutlu Müşteri</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">🏆</div>
            <div className="stat-number">12</div>
            <div className="stat-label">Sergi</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;