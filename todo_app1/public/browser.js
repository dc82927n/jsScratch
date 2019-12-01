


document.addEventListener("click", function (e) {
 
    // add the delete me update. 
    if (e.target.classList.contains("delete-me")) { 

      if (confirm(" do you want to delete? ")) {
      axios.post('/delete-item', {id: e.target.getAttribute("data-id") }).then(function () {
      e.target.parentElement.parentElement.remove()
      
        }).catch(function () {
        console.log("please try again later")
        })
      
      }
    }


    // creating a user input and updating it. 
    if (e.target.classList.contains("edit-me")) {
      let userInput = prompt("enter you new field of text", e.target.parentElement.parentElement.querySelector(".item-text").innerHTML)
  
    if (userInput) {
      axios.post('/update-item', { text: userInput, id: e.target.getAttribute("data-id") }).then(function () {
        e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = userInput
      }).catch(function () {
        console.log("please try again later")
      })
    }

  }
})





