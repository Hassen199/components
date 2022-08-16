import React from "react"
import "./User.css"
import HomeIcon from "@material-ui/icons/Home"
import PhoneIcon from "@material-ui/icons/Phone"
import MailIcon from "@material-ui/icons/Mail"
import EventIcon from "@material-ui/icons/Event"
import LocationOnIcon from "@material-ui/icons/LocationOn"

function User() {
  return (
    <div className="user">
      <img src="./images/avatar.jpg" className="user__avatar" alt="Hassen Jaffel" />
      <h1 className="user__name">Hassen Jaffel</h1>
      <p className="user__profession">Développeur Web</p>
      <div className="user__infos">
        <p className="user__info">
          <HomeIcon /> 27 rue des jardins 7000 Tunis
        </p>
        <p className="user__info">
          <PhoneIcon /> <a href="tel:+21653021062">53021062</a>
        </p>
        <p className="user__info">
          <MailIcon /> <a href="mailto:Jaffhassen@gmail.com">Jaffhassen@gmail.com</a>
        </p>
        <p className="user__info">
          <EventIcon /> Date de naissance: 21 juin 1992
        </p>
        <p className="user__info">
          <LocationOnIcon /> Lieu de naissance: Tunis
        </p>
      </div>
    </div>
  )
}

export default User
