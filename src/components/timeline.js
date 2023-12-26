import React, { useEffect, useRef, useState } from 'react'
import { useIsVisible } from 'react-is-visible';
import { Parallax } from 'react-parallax'

export default function Timeline () {
  const [ shown, setShown ] = useState(false);
  const nodeRef = useRef()
  const isVisible = useIsVisible(nodeRef)

  useEffect(() => {
    if(isVisible) {
      setShown(true)
    }
  }, [isVisible]);
    return (
      <Parallax bgImage="images/background-wedding-ceremony.jpg" strength={400}>
        <div id="fh5co-started">
          <div className="overlay"></div>
          <div className="container">
            <div className="row animate-box">
              <div className="col-md-8 col-md-offset-2 text-center heading-section">
                <h2>Program</h2>
              </div>
              <ul ref={nodeRef} class="timeline">
                <li>
                  <div class="direction-r">
                    <div class="flag-wrapper">
                      <span class="heart"></span>
                      <span class={`${shown ? "fade-in" : ""}`}>
                        <span class="flag">Příjezd hostů</span>
                        <span class="time-wrapper"><span class="time">11:30</span></span>
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="direction-l">
                    <div class="flag-wrapper">
                      <span class="heart"></span>
                      <span class={`fade-delay-250 ${shown ? "fade-in" : ""}`}>
                        <span class="flag">Obřad</span>
                        <span class="time-wrapper"><span class="time">13:00</span></span>
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="direction-r">
                    <div class="flag-wrapper">
                      <span class="heart"></span>
                      <span class={`fade-delay-500 ${shown ? "fade-in" : ""}`}>
                        <span class="flag">Skupinové focení</span>
                        <span class="time-wrapper"><span class="time">13:30</span></span>
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="direction-l">
                    <div class="flag-wrapper">
                      <span class="heart"></span>
                      <span class={`fade-delay-750 ${shown ? "fade-in" : ""}`}>
                        <span class="flag">Polévka + Raut</span>
                        <span class="time-wrapper"><span class="time">14:30</span></span>
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="direction-r">
                    <div class="flag-wrapper">
                      <span class="heart"></span>
                      <span class={`fade-delay-1000 ${shown ? "fade-in" : ""}`}>
                        <span class="flag">Hry</span>
                        <span class="time-wrapper"><span class="time">16:00</span></span>
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="direction-l">
                    <div class="flag-wrapper">
                      <span class="heart"></span>
                      <span class={`fade-delay-1250 ${shown ? "fade-in" : ""}`}>
                        <span class="flag">Krájení dortu</span>
                        <span class="time-wrapper"><span class="time">17:45</span></span>
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="direction-r">
                    <div class="flag-wrapper">
                      <span class="heart"></span>
                      <span class={`fade-delay-1500 ${shown ? "fade-in" : ""}`}>
                        <span class="flag">Focení novomanželů</span>
                        <span class="time-wrapper"><span class="time">18:00</span></span>
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="direction-l">
                    <div class="flag-wrapper">
                      <span class="heart"></span>
                      <span class={`fade-delay-1750 ${shown ? "fade-in" : ""}`}>
                        <span class="flag">Večerní raut</span>
                        <span class="time-wrapper"><span class="time">19:00</span></span>
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="direction-r">
                    <div class="flag-wrapper">
                      <span class="heart"></span>
                      <span class={`fade-delay-2000 ${shown ? "fade-in" : ""}`}>
                        <span class="flag">První tanec</span>
                        <span class="time-wrapper"><span class="time">19:30</span></span>
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="direction-l">
                    <div class="flag-wrapper">
                      <span class="heart"></span>
                      <span class={`fade-delay-2250 ${shown ? "fade-in" : ""}`}>
                        <span class="flag">Party</span>
                        <span class="time-wrapper"><span class="time">22:00</span></span>
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Parallax>
    )
}
