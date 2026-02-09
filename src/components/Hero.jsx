import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <img src="/live_photo.jpg" alt="Ved Efan" className="hero-photo" />
        <h1 className="hero-name">Ved Efan</h1>
        <div className="hero-underline"></div>
        <p className="hero-title">Fullstack Web3 Growth Engineer</p>

        <div className="hero-stats">
          <span className="stat">$288M Volume</span>
          <span className="stat-dot">·</span>
          <span className="stat">$9.1M TVL</span>
          <span className="stat-dot">·</span>
          <span className="stat">4 Products</span>
        </div>

        <div className="hero-links">
          <a href="https://x.com/vedamire" target="_blank" rel="noopener noreferrer" className="hero-link">
            𝕏 @vedamire
          </a>
          <a href="https://github.com/vedamire" target="_blank" rel="noopener noreferrer" className="hero-link">
            GitHub
          </a>
          <a href="mailto:vedefan@returntogod.love" className="hero-link">
            Email
          </a>
        </div>
      </div>

      <a href="#journey" className="scroll-indicator" aria-label="Scroll to journey">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </a>
    </section>
  )
}

export default Hero
