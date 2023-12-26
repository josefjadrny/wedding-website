import React from 'react'
import Header from './header'
import Couple from './couple'
import Countdown from './countdown'
import Timeline from './timeline'
import Footer from './footer'

export default function Layout () {
    return (
      <div id="fh5co-wrapper">
        <div id="fh5co-page">
          <Header/>
            <Couple/>
            <Countdown/>
            <Timeline/>
          <Footer/>
        </div>
      </div>
    )
}
