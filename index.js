document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    //Need to call by ID "text" and replace text with "This is really cool!"
    //Not sure if I should use getElement or querySelector for p#text
    const newText = document.getElementById("text"); 
    newText.textContent ="This is really cool!";
    
  });

  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );

  