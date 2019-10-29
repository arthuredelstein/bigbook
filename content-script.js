document.addEventListener("keypress", event => {
  console.log("hello Julian and Alec");
  if (event.key === "f") {
    if (document.fullscreenElement === null) {
      document.body.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }
});

