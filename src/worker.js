const fibonacci = num => {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
};

self.onmessage = event => {
  const num = event.data;
  const result = fibonacci(num);

  self.postMessage(result);
  self.close();
};
