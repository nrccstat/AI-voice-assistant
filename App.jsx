import { useState } from 'react'
import './App.css'
import LiveKitModal from './components/LiveKitModal';

function App() {
  const [showSupport, setShowSupport] = useState(false);

  const handleSupportClick = () => {
    setShowSupport(true)
  }

  return (
    <div className="app">
      <header className="header">
        <div className="logo">Car Assist Connect</div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="hero-subtitle">YOUR ROADside PARTNER</p>
            <h1>INSTANT VEHICLE SUPPORT</h1>
            <p className="hero-description">
              Connect instantly with experienced agents ready to assist with roadside emergencies, technical issues, and general vehicle inquiries. Get the help you need, fast.
            </p>
            <div className="hero-cta">
              <button className="cta-button">Call Now</button>
              {/* Removed social links as they are not relevant to a call center */}
            </div>
          </div>
          {/* Placeholder for the image on the right */}
          <div className="hero-image-placeholder"></div>
        </section>

        {/* Services section */}
        <section className="categories">
          {/* Content for services will go here */}
          <h2>Our Services</h2>
          <p>
            From flat tires and dead batteries to urgent mechanical problems,
            our agents are equipped to provide immediate guidance and dispatch assistance.
            We cover a wide range of vehicle support needs to get you back on the road safely.
          </p>
        </section>

        <button className="support-button" onClick={handleSupportClick}>
          Talk to a Car Agent!
        </button>
      </main>

      {showSupport && <LiveKitModal setShowSupport={setShowSupport}/>}
    </div>
  )
}

export default App
