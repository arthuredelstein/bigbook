document.addEventListener("keypress", event => {
  console.log("Hello, Julian and Alec!");
  if (event.key === "f") {
    if (document.fullscreenElement === null) {
      let brContainer = document.querySelector(".BRcontainer");
      if (brContainer) {
        brContainer.requestFullscreen();
      }
    } else {
      document.exitFullscreen();
    }
  }
});

