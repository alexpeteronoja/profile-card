const timerFunction = () => {
  const timer = document.querySelector(".timer");
  timer.textContent = Date.now();
};

timerFunction();

const refreshBtn = document.querySelector(".btn-style");

refreshBtn.addEventListener("click", timerFunction);
