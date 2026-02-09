import { useEffect, useRef } from 'react'
import './Projects.css'

const projects = [
  {
    name: 'Titan',
    year: 2025,
    metric: '$500K volume',
    description: 'Telegram trading bot on Solana',
    link: 'https://x.com/TitanTradingBot',
  },
  {
    name: 'Frakt & Banx',
    year: 2023,
    metric: '$9.1M TVL',
    description: 'Solana DeFi/NFT-Fi protocol. $1M seed raised. Featured on Solana Daily.',
    link: 'https://x.com/banx_gg',
  },
  {
    name: 'Hadeswap',
    year: 2022,
    metric: '$288M volume',
    description: 'NFT AMM on Solana. Merged with Tensor.',
    link: 'https://x.com/hadeswap',
  },
  {
    name: 'Frakt NFT',
    year: 2021,
    metric: '100K SOL volume',
    description: 'Generative art NFT collection on Solana',
    link: null,
  },
]

function Projects() {
  const cardsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => {
          const Card = project.link ? 'a' : 'div'
          const linkProps = project.link
            ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
            : {}

          return (
            <Card
              key={project.name}
              className="project-card"
              ref={(el) => (cardsRef.current[index] = el)}
              {...linkProps}
            >
              <div className="project-header">
                <h3 className="project-name">{project.name}</h3>
                <span className="project-year">{project.year}</span>
              </div>
              <p className="project-metric">{project.metric}</p>
              <p className="project-description">{project.description}</p>
            </Card>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
