import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Player from "./player";

const FullPage = ({ projects }) => (
  <ReactFullpage


    licenseKey={'YOUR_KEY_HERE'}
    scrollingSpeed={1000}
    navigation={true}

    easing="easeInOutCubic" 
    easingcss3="ease-in-out" 
    keyboardScrolling= {true}
    fitToSection= {true}
    scrollHorizontally= {false}


 
    
    
    render={({ fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          {projects.map((project, index) => (
            <div key={project.id} className="section ">
              <Player
                title={project.title}
                description={project.description}
                url={project.link}
              />
            </div>
          ))}
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default FullPage;
