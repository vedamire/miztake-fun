import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-divider"></div>
      <div className="footer-links">
        <a href="https://x.com/vedamire" target="_blank" rel="noopener noreferrer">
          𝕏 @vedamire
        </a>
        <a href="https://github.com/vedamire" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="mailto:vedefan@returntogod.love">
          Email
        </a>
      </div>
      <p className="footer-credit">Built with Claude Code</p>
    </footer>
  )
}

export default Footer
