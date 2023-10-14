(async () => {
  await loadPolygonPath(tsParticles);

  await tsParticles.load({
    particles: {
      color: {
        value: "#262625",
        animation: {
          enable: true,
          speed: 10,
        },
      },
      move: {
        attract: {
          enable: true,
          rotate: {
            distance: 100,
            x: 2000,
            y: 2000,
          },
        },
        direction: "none",
        enable: true,

        outModes: {
          default: "destroy",
        },
        path: {
          clamp: false,
          enable: true,
          delay: {
            value: 0,
          },
          generator: "polygonPathGenerator",
          options: {
            sides: 100,
            turnSteps: 6,
            angle: 20,
          },
        },
        random: false,
        speed: 10,
        straight: true,
        trail: {
          fillColor: "#abffae",
          length: 6,
          enable: true,
        },
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 0,
      },
      opacity: {
        value: 1,
      },
      shape: {
        // type: "circle"
        type: "image",
        stroke: {
          width: 6,
          color: "#fff382",
        },
        polygon: {
          nb_sides: 6,
        },
        image: [
          {
            src: "https://www.imagenspng.com.br/wp-content/uploads/2022/11/emoji-png-2886.png",
            width: 100,
            height: 100,
          },
          {
            src: "https://www.imagenspng.com.br/wp-content/uploads/2022/11/emoji-png-2889.png",
            width: 100,
            height: 100,
          },
          {
            src: "https://www.imagenspng.com.br/wp-content/uploads/2022/11/emoji-png-2881.png",
            width: 100,
            height: 100,
          },
          {
            src: "https://www.imagenspng.com.br/wp-content/uploads/2022/11/emoji-png-2881.png",
            width: 100,
            height: 100,
          },
          {
            src: "https://www.imagenspng.com.br/wp-content/uploads/2022/11/emoji-png-2891.png",
            width: 100,
            height: 100,
          },
          {
            src: "https://www.imagenspng.com.br/wp-content/uploads/2022/11/emoji-png-2890.png",
            width: 100,
            height: 100,
          },
          {
            src: "https://www.imagenspng.com.br/wp-content/uploads/2022/11/emoji-png-2888.png",
            width: 100,
            height: 100,
          },
        ],
      },
      size: {
        value: 35,
      },
    },
    background: {
      color: "#fff382",
    },
    fullScreen: {
      zIndex: -1,
    },
    emitters: {
      direction: "none",
      rate: {
        quantity: 3,
        delay: 0.1,
      },
      size: {
        width: 0,
        height: 0,
      },
      position: {
        x: 50,
        y: 35,
      },
    },
  });
})();
