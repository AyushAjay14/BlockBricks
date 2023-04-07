import React from 'react'
import close from '../close.svg'
function Toggle({home , togglePop}) {
  return (
    <>
    <div className="home">
            <div className='home__details'>
                <div className="home__image">
                    <img src={`img/property-${home.id}.jpg`} alt="Home" />
                </div>
                <div className="home__overview">
                    <h1>{home.name}</h1>
                    <p>
                        <strong>{home.beds}</strong> bds |
                        <strong>{home.bath}</strong> ba |
                        <strong>{home.area}</strong> sqft
                    </p>
                    <p>{home.address}</p>

                    <h2>{home.price} ETH</h2>

                    <div>
                           <button className='home__buy'>
                                    Buy
                                </button>

                            <button className='home__contact'>
                                Contact agent
                            </button>
                        </div>
                    <hr />

                    <h2>Overview</h2>

                    <p>
                        {home.title}
                    </p>

                    <hr />

                    <h2>Facts and features</h2>

                    <ul>
                        {home.attributes.map((attribute, index) => (
                            <li key={index}><strong>{attribute.trait_type}</strong> : {attribute.value}</li>
                        ))}
                    </ul>
                </div>


                <button onClick={togglePop} className="home__close">
                    <img src={close} alt="Close" />
                </button>
            </div>
        </div >
    </>
  )
}

export default Toggle
