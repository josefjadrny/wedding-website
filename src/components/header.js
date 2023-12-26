import React from 'react'
import { Parallax } from 'react-parallax'

export default function Header () {
    return (
      <div className="fh5co-hero" data-section="home">
        <div className="fh5co-overlay"></div>
        <Parallax className="fh5co-cover text-center" bgImage="images/background.jpg" strength={200}>
          <div className="display-t">
            <div className="display-tc">
              <div className="container">
                <div className="col-md-10 col-md-offset-1">
                    <div className="animate-box">
                      <h1>Bereme se</h1>
                      <h2>Luboš &amp; Štěpánka</h2>
                      <p><span>18.5.2024</span></p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    )
}
