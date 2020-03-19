document.addEventListener("keypress", event => {
  //console.log("Hello, Julian and Alec!");
  //console.log(event);
  if (event.key === "f") {
    if (document.fullscreenElement === null) {
      let brContainer = document.querySelector(".BRcontainer");
      if (brContainer) {
        brContainer.requestFullscreen();
      }
    } else {
      document.exitFullscreen();
    }
  } else if (event.key === "1") {
    window.eval("br.switchMode(br.constMode1up);");
  } else if (event.key === "2") {
    window.eval("br.switchMode(br.constMode2up);");
  } else if (event.key === "t") {
    window.eval("br.switchMode(br.constModeThumb);");
  }
});

