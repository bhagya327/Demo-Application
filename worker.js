const prime = (num) => {
  for (let i = 0; i <= num; i++) {
    let flag = 0;
  
    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
  
    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        console.log(i);
    }
  }
};

self.onmessage = event => {
  const num = event.data;
  const result = prime(num);

  self.postMessage(result);
  self.close();
};
