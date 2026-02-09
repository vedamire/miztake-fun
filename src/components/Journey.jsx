import { useEffect, useRef } from 'react'
import './Journey.css'

const milestones = [
  { age: 20, image: '/slides/73.jpg' },
  { age: 20, image: '/slides/72.jpg' },
  { age: null, image: '/slides/71.jpg' },
  { age: 18, image: '/slides/70.jpg' },
  { age: 18, image: '/slides/69.jpg' },
  { age: 16, image: '/slides/68.jpg' },
  { age: 15, image: '/slides/67.jpg' },
  { age: 14, image: '/slides/66.jpg' },
  { age: 13, image: '/slides/65.jpg' },
  { age: 7, image: '/slides/64.jpg' },
]

function Journey() {
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
    <section className="journey" id="journey">
      <h2 className="section-title">What I built</h2>
      <div className="journey-timeline">
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className="journey-card"
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <img
              src={milestone.image}
              alt={milestone.age ? `Age ${milestone.age}` : 'Social proof'}
              loading="lazy"
              className="journey-image"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Journey
