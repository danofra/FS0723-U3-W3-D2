const counter = function () {
  let counterElement = document.getElementById("counter");
  let startTime = sessionStorage.getItem("start-time");
  let test = 0;
  if (!startTime) {
    startTime = new Date().getTime();
  }
  const updateCounter = function () {
    sessionStorage.setItem("start-time", JSON.stringify(test));
    test++;
    console.log(test);
    let currentTime = new Date().getTime();
    let elapsedTimeInSeconds = Math.floor(
      (currentTime - parseInt(startTime)) / 1000
    );
    counterElement.textContent = elapsedTimeInSeconds;
  };
  setInterval(updateCounter, 1000);
  updateCounter();
};
window.onload = counter;
