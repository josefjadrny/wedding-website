import React from 'react'
import Header from './header'
import Couple from './couple'
import Countdown from './countdown'
import Guests from './guests'
import Footer from './footer'

export default function Layout () {
    return (
      <div id="fh5co-wrapper">
        <div id="fh5co-page">
          <Header/>
            <Couple/>
            <Countdown/>
            <Guests/>
          <Footer/>
        </div>
      </div>
    )
}
