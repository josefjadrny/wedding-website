import React, { Component } from 'react'
import { TIMEABLES, WEDDING_TIME } from '../constants/index'

export default class Countdown extends Component {
  constructor () {
    super()

    this.state = {
      counter: this.calculateTimeToWedding()
    }
  }

  componentDidMount () {
    this.interval = setInterval(() => this.setState({ counter: this.calculateTimeToWedding() }), 1000)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  calculateTimeToWedding () {
    let counter = {days: 0, hours: 0, minutes: 0, seconds: 0, isPast: false}
    let reaming = Math.round((new Date(WEDDING_TIME) - new Date()) / 1000)
    if(reaming < 0) {
      reaming = Math.round((new Date() - new Date(WEDDING_TIME)) / 1000)
      counter.isPast = true
    }
    counter.days = Math.floor(reaming / 86400)
    reaming -= counter.days * 86400
    counter.hours = Math.floor(reaming / 3600) % 24
    reaming -= counter.hours * 3600
    counter.minutes = Math.floor(reaming / 60) % 60
    reaming -= counter.minutes * 60
    counter.seconds = reaming

    return counter
  }

  render () {
    let {
      counter
    } = this.state

    let counterHtml = []
    Object.keys(TIMEABLES).forEach(key => {
      let value = counter[key]
      counterHtml.push((
        <span id={key} key={key}>{value}<small>{value > 4 || value === 0 ? TIMEABLES[key][0] : value === 1 ? TIMEABLES[key][2] : TIMEABLES[key][1]}</small></span>
      ))
    })

    return (
      <div id="fh5co-countdown">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center animate-box">
            <p className="countdown"><small>{ counter.isPast ? 'Jsme již svoji' : 'Do svatby zbývá' }</small></p>
            <p className="countdown">
              {counterHtml}
            </p>
          </div>
        </div>
      </div>
    )
  }
}
