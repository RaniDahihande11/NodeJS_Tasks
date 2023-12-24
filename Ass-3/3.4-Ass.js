// 3.4 Demonstrate error handling with Promises using .catch() to handle rejected Promises.
function asynchronousTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomValue = Math.random();
      const errorOccurred = randomValue < 0.5;

      if (errorOccurred) {
        const error = new Error('An error occurred during the asynchronous task.');
        reject(error);
      } else {
        const result = `Asynchronous task completed successfully with value: ${randomValue}`;
        resolve(result);
      }
    }, 1000);
  });
}
asynchronousTask()
  .then((result) => {
    try {
      const parsedResult = JSON.parse(result);
      console.log('Parsed Result:', parsedResult);
    } catch (parseError) {
      console.error('Error parsing result:', parseError.message);
    }
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });
