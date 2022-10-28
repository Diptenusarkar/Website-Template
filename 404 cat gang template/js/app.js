(async () => {
  await loadPolygonPath(tsParticles);

  await tsParticles.load({
    particles: {
      color: {
        value: "#fff382",
        animation: {
          enable: true,
          speed: 100
        }
      },
      move: {
        attract: {
          enable: true,
          rotate: {
            distance: 100,
            x: 2000,
            y: 2000
          }
        },
        direction: "none",
        enable: true,
        
        outModes: {
          default: "destroy"
        },
        path: {
          clamp: false,
          enable: true,
          delay: {
            value: 0
          },
          generator: "polygonPathGenerator",
          options: {
            sides: 120,
            turnSteps: 60,
            angle: 1
          }
        },
        random: false,
        speed: 3,
        straight: true,
        trail: {
          fillColor: "#fff382",
          length: 10,
          enable: true
        }
      },
      number: {
        density: {
          enable: true,
          area: 800
        },
        value: 0
      },
      opacity: {
        value: 1
      },
      shape: {
        // type: "circle"
        type: "image",
      stroke: {
        width: 6,
        color: "#fff382"
      },
      polygon: {
        nb_sides: 6
      },
      image: [{
        src: "https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/grinning-cat_1f63a.png",
        width: 100,
        height: 100
      },{
        src: "https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/grinning-cat-with-smiling-eyes_1f638.png",
        width: 100,
        height: 100
      }]
      
      },
      size: {
        value: 35
      }
    },
    background: {
      color: "#fff382"
    },
    fullScreen: {
      zIndex: -1
    },
    emitters: {
      direction: "none",
      rate: {
        quantity: 1,
        delay: .2
      },
      size: {
        width: 0,
        height: 0
      },
      position: {
        x: 50,
        y: 35
      }
    }
  });
})();

