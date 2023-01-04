import React from 'react'
import './portfolio.css'
import TCG from '../../assets/tcg.png'
import Digipets from '../../assets/Digipets1.png'
import Nuzlocke from '../../assets/ShowTeams.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5> My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={TCG} alt='' />
          </div>
          <h3>Trading Card Tracker & Pack Simulation</h3>
          <div className='portfolio_item-cta'>
          <a href='https://github.com/ZainAmirZA/pokemontcg-tracker' className='btn'>GitHub</a>
          <a href='https://pokemontcgtracker3.herokuapp.com/home' className='btn btn-primary' target='_blank' >Live Demo</a> 
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={Digipets} alt='' />
          </div>
          <h3>Digipets (Mobile Web App) </h3>
          <div className='portfolio_item-cta'>  
          <a href='https://github.com/ZainAmirZA/Digipets' className='btn'>GitHub</a>
          <a href='https://digipetsforever.herokuapp.com/' className='btn btn-primary' target='_blank' >Live Demo</a>
          </div>
          
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={Nuzlocke} alt='' />
          </div>
          <h3>RPG Team Tracker</h3>
          <div className='portfolio_item-cta'>  
          <a href='https://github.com/ZainAmirZA/Pokemon-Nuzlocke-Tracker' className='btn'>GitHub</a>
          <a href='https://pokemon-nuzlocke-tracker.herokuapp.com/' className='btn btn-primary' target='_blank' >Live Demo</a>
          </div>

        </article>
      </div>

    </section>
  )
}

export default Portfolio