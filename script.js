var close = document.getElementsByClassName("close");


/* Function to update page when user wants to add a new item */
function newElement(){
  var userInput = document.getElementById("input-box").value;

  // Checks if user enters an empty item or not
  if(userInput === ""){
    console.log("empty")
  }else{
    //Creates a li element with user input
    var li = document.createElement("li");
    var text = document.createTextNode(userInput);
    li.appendChild(text);
    document.getElementById("list").appendChild(li);
  }

  //Create a span element to exit within li element
  var span = document.createElement("button");
  text = document.createTextNode("x");
  span.className = "close";
  span.appendChild(text);
  li.appendChild(span);
  //For loop to check if any element's x button has been clicked.
  for(var i = 0;i < close.length; i++){
    close[i].onclick = function(){
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

