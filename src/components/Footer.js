import React from 'react'
import DoorDash from '../images/DoorDash.png'
import GrubHub from '../images/GrubHub.png'

const Footer = () => {
  return (
    <div className="footer-fixed-bottom" style={{textAlign: 'left', paddingLeft: "10%", paddingTop: '0.5%'}}>
      <a className="icon" href="https://www.facebook.com/lascazuelasrestaurant/" style={{color: '#f5f7cb'}}>
        <i className="fa fa-facebook-square" style={{fontSize:"24px", marginRight: "1rem"}}></i>
      </a>
      <a className="icon" href="https://www.yelp.com/biz/las-cazuelas-restaurant-san-jose" style={{color: '#f5f7cb'}}>
        <i className="fa fa-yelp" style={{fontSize:"24px", marginRight: "1rem"}}></i>
      </a>
      <a className="icon" href="https://www.doordash.com/store/las-cazuelas-restaurant-san-jose-565989/en-US">
        <img src={DoorDash} alt="doordash"/>
      </a>
      <a className="icon" href="https://www.grubhub.com/restaurant/las-cazuelas-55-race-st-san-jose/342868">
        <img src={GrubHub} alt="grubhub"/>
      </a>
    </div>
  )
}

export default Footer
