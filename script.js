//your JS code here. If required.
function Promise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Hello, world!");
      }, 1000);
    });
	
  }
Promise().then(data=>{
	document.getElementById("output").textContent=data;
});
