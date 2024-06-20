import React, { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/nav";
import FullPage from "./components/fullpage";
import MobileView from "./components/mobile";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set initial state
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Lord Voldemort | Arijit Singh | hehehe | Kuch bhii ",
      description:
        "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément Chapillon describes his latest highly captivating project Les rochers fauves (French for ‘The tawny rocks’).",
      link: "https://videos.pexels.com/video-files/4231734/4231734-hd_1280_720_24fps.mp4"
    },
    {
      id: 2,
      title: "Matthias Leidinger | Arijit Singh | hehehe ",
      description:
        "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
      link: "https://videos.pexels.com/video-files/2792370/2792370-hd_1280_720_30fps.mp4"
    },
    {
      id: 2,
      title: "Lord Voldemort | Arijit Singh | hehehe | Kuch bhii ",
      description:
        "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément Chapillon describes his latest highly captivating project Les rochers fauves (French for ‘The tawny rocks’).",
      link: "https://videos.pexels.com/video-files/4231734/4231734-hd_1280_720_24fps.mp4"
    },
    {
      id: 3,
      title: "Ronald Wheasly | Bloody Marry | Muggle",
      description:
        "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
      link: "https://videos.pexels.com/video-files/4761600/4761600-hd_1280_720_25fps.mp4"
    },
    {
      id: 4,
      title: "Nevil Longbottom | Anisht Dev |  ",
      description:
        "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
      link: "https://videos.pexels.com/video-files/3222809/3222809-hd_1280_720_30fps.mp4"
    },
    {
      id: 5,
      title: "Loona Lovegud | Severous Snape | Godfather",
      description:
        "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
      link: "https://videos.pexels.com/video-files/4631982/4631982-hd_1366_720_50fps.mp4"
    }
  ];

  return (
    <div className="App bg-white overflow-hidden">
      <header>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/4.0.9/fullpage.min.css"
          integrity="sha512-AIwt5sjXSKDo4t0KSQ/eAuy43kQMc1hYtIKLxaFrHd26nQFzMo1FJdBIickVyGXnhm2xB2OOYBqMBgu3dBU4KA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </header>
      <Nav />
      {isMobile ? <MobileView projects={projects} /> : <FullPage projects={projects} />}
    </div>
  );
}

export default App;
