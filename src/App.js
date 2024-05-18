import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './components/AboutMe';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Skills from './components/Skills';

import css from './cssBackground.png';
import dungeonGen from './dungeonGen.png';
import homebrew from './homebrew.png';
import lungs from './lung_ct.jpg';
import unity from './unity.png';

const App = () => {
  const projectSites = [
    {
      name: "This Website!",
      background: css,
      url: "https://github.com/Luis-Cruz1027/LuisCruzPortfolio",
      description: "This project is a website to house all the links to my projects on Github, as well as describe me as a person. It uses the react framework to help create components that will display when specific routes are called. I used react because it is the framework I am most familiar with (for now) and because it is great for making web applications. This is not the final look!"
    },
    {
      name: "Dungeons of the Multiverse",
      background: dungeonGen,
      url: "https://github.com/Luis-Cruz1027/DungeonsOfTheMultiverse",
      description: "This project is a collaboration between Luis Cruz and Gilberto Gonzalez. The aim of this project is to create an application to be used as a tool for players of the tabletop role-playing game, Dungeons and Dragons. Whether the player is new to DND or not, whether they're in a party, it doesn't matter. The goal is to create a dynamic experience using OpenAI's API to allow the users to interact with chatGPT. This project is created in the Unity environment and makes use of it's premade tools."
    },
    {
      name: "Homebrew",
      background: homebrew,
      url: "https://gitfront.io/r/LuisCruz1027/WN3CjXYLsfd4/homebrew-fixed-LuisCruz1027/",
      description: "This project utilizes Flutter to create a phone application that changes states as you navigate through the screens."
    },
    {
      name: "Digital Image Processing",
      background: lungs,
      url: "https://github.com/LCRazo/digital-image-processing",
      description: "This project aims to perform various image processing tasks on a lung CT image. Tasks include loading and displaying the image, computing the 2D FFT, down-sampling the image, interpolating in both frequency and spatial domains, and computing errors between the original and interpolated images."
    },
    {
      name: "Video Game (Title TBD)",
      background: unity,
      url: "https://github.com/Luis-Cruz1027/RatMonkeyProject1",
      description: "This is a game currently in the works by Luis Cruz and Adam Perez. The aim is to create a fun user experience that changes through each playthrough. This game will be published through Steam once it reaches a state that is acceptable and will recieve updates until the game is in a finished state.",
    },
  ]

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<AboutMe />} />
          <Route path='/projects' element={<Projects sites={projectSites}/>} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
