// Ass- 3.5: Chain multiple asynchronous operations together using Promises and handle errors at each step. 
function asyncTask1() {
    
    return new Promise((resolve, reject) => {
      
      setTimeout(() => {
        const success = true; 
        if (success) {
          const result = "Async operation 1 completed successfully!";
          resolve(result);
        } else {
          const error = new Error("Async operation 1 encountered an error.");
          reject(error);
        }
      }, 1000); 
    });
  }
  

  function asyncTask2() {
    return new Promise((resolve, reject) => {
     
      setTimeout(() => {
        const success = true; 
        if (success) {
          const result = "Async operation 2 completed successfully!";
          resolve(result);
        } else {
          const error = new Error("Async operation 2 encountered an error.");
          reject(error);
        }
      }, 1000); 
    });
  }

  function asyncTask3() {
    return new Promise((resolve, reject) => {
      
      setTimeout(() => {
        const success = false; 
        if (success) {
          const result = "Async operation 3 completed successfully!";
          resolve(result);
        } else {
          const error = new Error("Async operation 3 encountered an error.");
          reject(error);
        }
      }, 1000); 
    });
  }

  // Chaining multiple asynchronous operations with error handling
asyncTask1()
.then((result1) => {
  console.log(result1);
  return asyncTask2();
})
.then((result2) => {
  console.log(result2);
  return asyncTask3();
})
.then((result3) => {
  console.log(result3);
})
.catch((error) => {
  console.error("Error:", error.message);
  });