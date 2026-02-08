import profileImage from '../assets/profile.jpg';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <img src={profileImage} alt="Sofia Müller" className="profile-image" />
          <h1 className="hero-title">Merhaba, Ben Sofia Müller</h1>
          <p className="hero-subtitle">Berlin Merkezli Serbest Sanatçı</p>
          <p className="hero-description">Resim • Heykel • Sokak Performansları</p>
          <div className="hero-stats">
            <div className="stat-card">
              <div className="stat-number">4+</div>
              <div className="stat-label">Yıl Deneyim</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Mutlu Müşteri</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;