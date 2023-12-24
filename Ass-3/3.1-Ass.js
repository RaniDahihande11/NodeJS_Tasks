//3.1  Create a function that performs an asynchronous task with a callback and handles the result or error.


  function asynchronousTask(callback) {
    setTimeout(() => {
      const randomValue = Math.random();
      const errorOccurred = randomValue < 0.5;
  
      if (errorOccurred) {
        const error = new Error('An error occurred during the asynchronous task.');
        callback(error, null);
      } else {
        const result = `Asynchronous task completed successfully with value: ${randomValue}`;
        callback(null, result);
      }
    }, 1000); // 1-second asynchronous delay
  }
  asynchronousTask((error, result) => {
    if (error) {
      console.error('Error:', error.message);
    } else {
      console.log('Result:', result);
    }
  });
  