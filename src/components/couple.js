import React, { useEffect, useRef, useState } from 'react'
import { useIsVisible } from 'react-is-visible'

export default function Couple () {
  const [ shown, setShown ] = useState(false);
  const nodeRef = useRef()
  const isVisible = useIsVisible(nodeRef)

  useEffect(() => {
    if(isVisible) {
      setShown(true)
    }
  }, [isVisible]);

    return (
      <div id="fh5co-couple" className="fh5co-section-gray">
        <div className="container">
          <div className="row row-bottom-padded-md animate-box">
              <div className="col-md-8 col-md-offset-2 text-center">
                <div ref={nodeRef} className={`col-md-5 col-sm-5 col-xs-5 nopadding${shown ? ' fade-in' : ''}`}>
                  <img src="images/luba.jpg" className="img-responsive" alt="Bc. Josef Jadrný"/>
                  <h3><strong>Luboš Cidlinský</strong></h3>
                </div>
                <div className="col-md-2 col-sm-2 col-xs-2 nopadding"><h2 className="amp-center"><i className="icon-heart"></i></h2></div>
                <div className={`col-md-5 col-sm-5 col-xs-5 nopadding${shown ? ' fade-in' : ''}`}>
                  <img src="images/stepanka.jpg" className="img-responsive" alt="Ing. Barbora Krchová"/>
                  <h3><strong>Štěpánka Krchová</strong></h3>
                </div>
              </div>
          </div>
          <div className="row animate-box">
              <div className="col-md-8 col-md-offset-2">
                <div className="col-md-12 text-center heading-section">
                  <h2>budou oddáni</h2>
                  <p><strong>18.května 2024 na statku <a href="https://maps.app.goo.gl/JATCavUhFJiWZGXFA" target='_blank' rel="noreferrer"><u>Buškovský Mlýn</u></a></strong></p>
                </div>
              </div>
          </div>
        </div>
      </div>
    )
}
