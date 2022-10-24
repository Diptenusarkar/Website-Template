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
            src: "https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/rose_1f339.png",
            width: 100,
            height: 100,
          },
          {
            src: "https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/sunflower_1f33b.png",
            width: 100,
            height: 100,
          },
          {
            src: "https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/bouquet_1f490.pngs",
            width: 100,
            height: 100,
          },
          {
            src: "https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/bouquet_1f490.png",
            width: 100,
            height: 100,
          },
          {
            src: "https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/tulip_1f337.png",
            width: 100,
            height: 100,
          },
          {
            src: "https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/rosette_1f3f5-fe0f.png",
            width: 100,
            height: 100,
          },
          {
            src: "https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/cherry-blossom_1f338.png",
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
