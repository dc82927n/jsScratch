let ourForm = document.getElementById("ourForm")
let ourField = document.getElementById("ourField")
let ourList = document.getElementById("ourList")

ourForm.addEventListener("submit", (e) => {
  e.preventDefault()
/*   alert("thanks for click the form")
  console.log(ourField.value) */
  createItem(ourField.value)
})

function createItem(x) {
  
  //
  let ourHTML =  `<li>${x} <button onclick="deleteItem(this)"> delete </button> </li>`
  ourList.insertAdjacentHTML("beforeend", ourHTML)
  ourField.value = "" // turn the field empty after you finish typing. 
  ourField.focus()
}

function deleteItem(deleteOurElement){
  /* alert("Delete requested") */
  deleteOurElement.parentElement.remove()
}


