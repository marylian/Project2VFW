//activity 2
// Visual Frameworks 
//Marylia Nieves

//Wait until the DOM is ready.
window.addEventListener("DOMContentLoaded", function () {

	//getElementByID Function
	function getValue(x) {
		var taskData = document.getElementById(x);
		return taskData;
	}
	//Create select field element and populate with options
		
	function makeTask(){
		var searchTag=document.getElementsByTagName("form"), 
		selectedItem=getValue('selectItem'),
		createItem=document.createElement('selectedItem');
		createItem.setAttribute("id", "tasks");
		for (var i=0, j=taskList.length; i<j; i++){
			var initiateTask=document.createElement('task');
			var taskText=taskList[i];
			initiateTask.setAttribute("value", taskText);
			initiateTask.innerHTML=taskText;
			createItem.appendChild(initiateTask);
		}
		selectedItem.appendChild(createItem);
	}
	//Variable defaults
	var taskList=[" --Choose a Task-- ", "Create Tests", "Look for Project Ideas", "Complete Lesson Plans", "Grade Papers", "Complete Paperwork", "Contact Parents", "Buy School Supplies"];
	makeTask(); //Calling the function that was created above.
	
	//Set Link & Submit click events
	function submitData(){
			var id=Math.floor(Math.random()*53211245);
			var task={};
			var task.group=["Tasks", getValue('selectItem').value]
	}
	
	/*function getData(){

	}
	
	var displayLink=getValue('displayTask');
	displayLink.addEventListener("click", getData);
	
	var clearLink=getValue('clearTask');
	clearLink.addEventListener("click", clearData);*/

	var submitButton=getValue('tasksubmit');
	submitButton.addEventListener("click", submitData);
	

	

	
	//Create select field element and populate with options.
	

});