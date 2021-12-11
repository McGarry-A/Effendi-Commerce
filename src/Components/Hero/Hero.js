import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-hero-div">
        <div className="left-hero-transition"></div>
      </div>
      <div className="right-hero-div">
        <div className="hero-text-container">
          <div>
            <h1 className="hero-title">EFFENDI</h1>
            <h3 className="hero-subheading">Keep it simple.</h3>
          </div>
          <h2 className="hero-subtitle">Modern British Aesthetic</h2>
          <h3 className="hero-subtext">Shop Styles for Every Mood and Season</h3>
          <div className="hero-button-div">
            <ul className="hero-links-list">
              <li className="hero-link-item">MENS</li>
              <li className="hero-link-item">WOMENS</li>
              <li className="hero-link-item">KIDS</li>
              <li className="hero-link-item">HOME</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
