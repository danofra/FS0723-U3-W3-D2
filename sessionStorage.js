const counter = function () {
  let counterElement = document.getElementById("counter");
  let progressBar = document.querySelector(".progress-bar");
  let test = parseInt(sessionStorage.getItem("start-time")) || 0;

  const updateCounter = function () {
    if (test === 0) {
      test++;
      console.log(test);
    } else if (test !== 0) {
      sessionStorage.setItem("start-time", JSON.stringify(++test));
      console.log(test);

      const percentage = (test / 1000) * 300;
      progressBar.style.width = percentage + "%";
      progressBar.setAttribute("aria-valuenow", test);
      counterElement.textContent = test;
    }
  };
  setInterval(updateCounter, 1000);
  updateCounter();
};

window.onload = counter;
