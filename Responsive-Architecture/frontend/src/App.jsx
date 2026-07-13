import "./App.css";

function App() {
  return (
    <>
      <nav className="navbar">
        <h2>ARCHIHOME</h2>

        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>Modern Architecture</h1>

          <p>
            Creating beautiful, sustainable and responsive architectural
            designs for the future.
          </p>

          <button>Explore Projects</button>
        </div>
      </section>

      <section className="services">

        <div className="card">
          <h3>Residential</h3>
          <p>Beautiful modern homes with elegant designs.</p>
        </div>

        <div className="card">
          <h3>Commercial</h3>
          <p>Professional office buildings and workspaces.</p>
        </div>

        <div className="card">
          <h3>Interior Design</h3>
          <p>Luxury interiors with premium aesthetics.</p>
        </div>

      </section>
      <section className="about">

  <div className="about-image">
    <img
      src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800"
      alt="Architecture"
    />
  </div>

  <div className="about-content">
    <h2>About Our Company</h2>

    <p>
      We are passionate architects dedicated to creating beautiful,
      sustainable and modern buildings that improve people's lives.
    </p>

    <p>
      With years of experience, we design homes, offices and commercial
      spaces using the latest technologies and creative ideas.
    </p>

    <button>Read More</button>
  </div>

</section>
<section className="stats">

  <div className="stat">
    <h2>250+</h2>
    <p>Projects Completed</p>
  </div>

  <div className="stat">
    <h2>180+</h2>
    <p>Happy Clients</p>
  </div>

  <div className="stat">
    <h2>15+</h2>
    <p>Years Experience</p>
  </div>

  <div className="stat">
    <h2>30+</h2>
    <p>Awards Won</p>
  </div>

</section>
<section className="gallery">
  <h2>Our Projects</h2>

  <div className="gallery-grid">
    <img src="https://picsum.photos/400/300?1" alt="Project 1" />
    <img src="https://picsum.photos/400/300?2" alt="Project 2" />
    <img src="https://picsum.photos/400/300?3" alt="Project 3" />
    <img src="https://picsum.photos/400/300?4" alt="Project 4" />
  </div>
</section>
<footer className="footer">
  <h3>ARCHIHOME</h3>
  <p>Creating modern and sustainable architecture for everyone.</p>

  <div className="socials">
    <a href="#">Facebook</a>
    <a href="#">Instagram</a>
    <a href="#">LinkedIn</a>
  </div>

  <p className="copyright">
    © 2026 ARCHIHOME. All Rights Reserved.
  </p>
</footer>
    </>
  );
}

export default App;