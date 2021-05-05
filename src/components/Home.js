import React,{useState, useEffect} from 'react'
import '../styles/home-style.css';
import Typewriter from 'typewriter-effect';
//Components
import Jumbo from './Jumbo';
import Footer from './Footer';


export default function Home() {

const [jumboClass, setJumboClass] = useState("");
const [fadeStyle, setFadeStyle] = useState("disable-class")


const play = useEffect(() => {
    const timer = setTimeout(() => {
        setJumboClass("jumbo-home");
        setFadeStyle("activate-class");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
    

    return (
        <div>
            <div className="home container">
            <div class="row-12 pb-4">
                <div className="intro">
                <div className="typed-fix display-1">We Share</div>
                <div className="typing display-1">

                      <Typewriter
                    onInit={(Typewriter) => {
                        Typewriter
                        .typeString("Websites")
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("Designs")
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("Apps")
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("Icons")
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("React Components")
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("Themes")
                        .pauseFor(5000)
                        .deleteAll()
                        .typeString("Websites")
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("Designs")
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("Apps")
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("Icons")
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("React Components")
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("Themes")
                        .start();
                    }}
                />
                </div>
                </div>
                </div>

                <div className="jumbo-box col" >
                    <div class={`row-12 mt-5 ${jumboClass} ${fadeStyle} `} >
                      <Jumbo />  
                    </div>
                    
                </div>
                
                
            </div>
            
        </div>
    )
}
