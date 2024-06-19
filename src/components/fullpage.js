import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Player from "./player";
const pluginWrapper = () => {
  require("https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/4.0.9/fullpage.extensions.min.js");
};
const FullPage = ({ projects }) => (
  
  <ReactFullpage
    pluginWrapper={pluginWrapper}
    licenseKey={"YOUR_KEY_HERE"}
    scrollingSpeed={1000}
    navigation={true}
    parallax={true}
    easing="easeInOutCubic"
    easingcss3="ease-in-out"
    keyboardScrolling={true}
    fitToSection={true}
    scrollHorizontally={false}
    onLeave={(origin, destination, direction) => {

      const leavingSection = document.querySelector(`.section-${origin.index}`);
      if (leavingSection) {
        leavingSection.classList.add('fade-out');
      }
      

      setTimeout(() => {
        if (leavingSection) {
          leavingSection.classList.remove('fade-out');
        }
      }, 1000); 
    }}

    render={({ fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          {projects.map((project, index) => (
            <div key={project.id} className={`section section-${index}`}>
              <div className="section-content">
                <Player
                  title={project.title}
                  description={project.description}
                  url={project.link}
                />
              </div>
            </div>
          ))}
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default FullPage;
