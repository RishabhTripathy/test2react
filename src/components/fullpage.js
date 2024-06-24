import React, { useEffect, useRef } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Player from "./player"; // Ensure correct path to Player component

const pluginWrapper = () => {
  require("../static/fullpage.parallax.min");
};

const FullPage = ({ projects }) => {
  const scrollingSpeed = 1000; // 1000ms = 1s

  const fullpageApi = useRef(null);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--transition-duration",
      `${scrollingSpeed / 1000}s`
    );
  }, [scrollingSpeed]);

  useEffect(() => {
    if (fullpageApi.current) {
      fullpageApi.current.fullpageApi.setAllowScrolling(true);
    }
  }, []);

  const handleAfterLoad = (origin, destination) => {
    const loadedSection = document.querySelector(
      `.section.section-${destination.index}`
    );

    if (loadedSection) {
      // Perform actions after the section is loaded/rendered
      const playerInstance = loadedSection.querySelector(".player-instance");

      // Example action: autoplay video after section is loaded
      if (playerInstance) {
        const videoElement = playerInstance.querySelector("video");
        if (videoElement) {
          videoElement.play();
        }
      }
    }
  };

  return (
    <ReactFullpage
      pluginWrapper={pluginWrapper}
      parallax={true}
      parallaxKey="9D6FE106-22294EF0-B39C20F0-21B3ADE5"
      parallaxOptions={{
        type: "cover",
        percentage: 100,
        property: "translate",
      }}
      licenseKey={"5VM9J-NN057-KCC9H-30J4J-DSJOP"}
      scrollingSpeed={1000}
      navigation={true}
      easing="easeInOutCubic"
      easingcss3="ease-in-out"
      keyboardScrolling={true}
      fitToSection={true}
      scrollHorizontally={false}
      onLeave={(origin, destination, direction) => {
        const leavingSection = document.querySelector(`.section-${origin.index}`);
        if (leavingSection) {
          leavingSection.classList.add("fade-out");
        }

        setTimeout(() => {
          if (leavingSection) {
            leavingSection.classList.remove("fade-out");
          }
        }, scrollingSpeed); // Adjust timing to match scrolling speed
      }}
      afterLoad={handleAfterLoad}
      render={({ fullpageApi }) => (
        <ReactFullpage.Wrapper>
          {projects.map((project, index) => (
            <div key={project.id} className={`section section-${index}`}>
              <div className="">
                <Player
                  title={project.title}
                  description={project.description}
                  url={project.link}
                  logo={project.logo}
                />
              </div>
            </div>
          ))}
        </ReactFullpage.Wrapper>
      )}
    />
  );
};

export default FullPage;
