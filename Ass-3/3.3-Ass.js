//3.3 Implement error handling within the callback function to handle potential errors.
 
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
  }, 1000); 
}

asynchronousTask((error, result) => {
  if (error) {
    console.error('Error:', error.message);
  } else {
    try {
      const parsedResult = JSON.parse(result);
      console.log('Parsed Result:', parsedResult);
    } catch (parseError) {
      console.error('Error parsing result:', parseError.message);
    }
  }
});
