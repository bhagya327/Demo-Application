let worker = new Worker("../src/worker.js");

const calculate = () => {
  const num = 40;
  worker.postMessage(num);
};

worker.onmessage = event => {
  const num = event.data;
  console.log(num);
};

const move = () => {
  for (let i = 0; i < 3; i++) {
    const shuttleID = `shuttle${i + 1}`;
    let shuttle = document.getElementById(shuttleID);

    let position = 0;
    setInterval(() => {
      if (position > window.innerWidth / 1.2) {
        position = 0;
      } else {
        position++;
        shuttle.style.left = position + "px";
      }
    }, 5);
  }
};
