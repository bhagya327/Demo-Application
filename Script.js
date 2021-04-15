let worker = new Worker("./worker.js");

const Run_Calculation = () => {
  const num = 50000;
  worker.postMessage(num);
};

worker.onmessage = event => {
  const num = event.data;
  console.log(num);
};

const Start_Animation = () => {
  for (let i = 0; i < 3; i++) {
    const bikeID = `bike${i + 1}`;
    let bike = document.getElementById(bikeID);

    let position = 0;
    setInterval(() => {
      if (position > window.innerWidth / 1.2) {
        position = 0;
      } else {
        position++;
        bike.style.left = position + "px";
      }
    }, 5);
  }
};
