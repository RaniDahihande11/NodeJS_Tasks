//  3.2 : Refactor the previous example to use Promises instead of callbacks.

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
    console.log('Result:', result);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });
