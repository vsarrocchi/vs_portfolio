import React from "react"
import aboutStyles from "./about.module.css"

export default () => {
  return (
    <div className="section" className={aboutStyles.aboutContainer} id="about">
      <div className={aboutStyles.aboutBox}>
        <div className={aboutStyles.profilImage}>
          <img src={"/images/profilbild.jpg"} alt="profilbild" />
        </div>
        <div className={aboutStyles.text}>
          <h1 className={aboutStyles.title}>About me</h1>
          <h3 className={aboutStyles.paragraph}>
            I am a FrontEnd developer student at Nackademin in Stockholm who is
            currently looking for an internship. I have just started the last
            semester of the program. During the past time I gained experience
            working with JavaScript, HTML, CSS, jQuery, Angular, React, testing
            with Jest and Jasmine, Git, GitHub, Bootstrap, Sass, PHP, SQL,
            WordPress, Photoshop and Illustrator, among other skills.
          </h3>
        </div>
      </div>
    </div>
  )
}
