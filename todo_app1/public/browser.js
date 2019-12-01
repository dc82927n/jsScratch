


	document.addEventListener("click", function(e) {
		if (e.target.classList.contains("edit-me")) {
         let userInput = prompt("enter you new field of text")
         axios.post('/update-item', {text: userInput, id: e.target.getAttribute("data-id")} ).then(function() {
            }).catch(function() {
            console.log("please try again later") 
            })
    
		}
    })



