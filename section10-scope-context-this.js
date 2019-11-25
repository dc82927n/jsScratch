let john = {
	firstName: "john",
	lastName: "doe", 
		driveCar() {
			// function help () {
			// 	console.log(this)

			// }	
			// help()
			// 	console.log(this.firstName + " " + this.lastName + " is driving a car")
			}
		}


	// the this keyword is oints towards the object that is executing the current function 

john.driveCar()

	//output: john doe is driving a car 


function breathe() {
	console.log(this.firstName + " " + " just inhale and exhaled.")

}

breathe.call(john)


// function have a method call which will point to that object. we just pass john in call to use 
// it's this keyword. 

