import React, { useEffect } from "react";
import confetti from "canvas-confetti";
import Particles from "react-particles-js";
import { useLocation, useParams } from "react-router-dom";
import "./index.sass";

export default function Home(props) {
  const location = useLocation();
  let { nameParam } = useParams();
  let name = new URLSearchParams(location.search).get("name");
  useEffect(() => {
    var duration = 15 * 1000;
    var end = Date.now() + duration;

    (function frame() {
      // launch a few confetti from the left edge
      confetti({
        particleCount: 7,
        angle: 60,
        spread: 300,
        ticks: 35,
        origin: { x: -0.1 },
      });
      // and launch a few from the right edge
      confetti({
        particleCount: 7,
        angle: 120,
        spread: 300,
        ticks: 35,
        origin: { x: 1.1 },
      });

      confetti({
        particleCount: 7,
        angle: -90,
        spread: 290,
        ticks: 35,
        origin: {
          x: 0.5,
          y: -0.5,
        },
      });

      confetti({
        particleCount: 7,
        angle: 90,
        spread: 300,
        ticks: 35,
        origin: {
          x: 0.5,
          y: 1.2,
        },
      });

      // keep going until we are out of time
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
    setTimeout(() => {
      confetti({
        particleCount: 150,
        angle: 90,
        spread: 45,
        origin: {
          x: 0.5,
          y: 1,
        },
      });
    }, duration);
  }, []);
  return (
    <div id="illustration-home">
      <div id="content">
        <h1>2021</h1>
        <h2>Happy New Year{nameParam ? ` ${nameParam}` : name && ` ${name}`}!</h2>
      </div>
      <Particles
        className="stars"
        params={{
          particles: {
            number: {
              value: 355,
              density: {
                enable: true,
                value_area: 789.1476416322727,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.48927153781200905,
              random: false,
              anim: {
                enable: true,
                speed: 0.2,
                opacity_min: 0,
                sync: false,
              },
            },
            size: {
              value: 2,
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 0,
                sync: false,
              },
            },
            line_linked: {
              enable: false,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.2,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 83.91608391608392,
                size: 1,
                duration: 3,
                opacity: 1,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />
    </div>
  );
}
