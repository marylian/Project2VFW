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
		select=getValue('selectItem'),
		createItem=document.createElement('select');
		createItem.setAttribute("id", "tasks");
		for (var i=0, j=taskList.length; i<j; i++){
			var initiateTask=document.createElement('task');
			var taskText=taskList[i];
			initiateTask.setAttribute("value", taskText);
			initiateTask.innerHTML=taskText;
			createItem.appendChild(initiateTask);
		}
		select.appendChild(createItem);
	}
	
	//Find which checkbox is checked
	function getCheckedBox(){
		var check=document.forms[0].weekday;
		for(var i=0; i<check.length; i++){
			if(check[i].checked){
				dayValue=check[i].value;
			}
		}
	}

	//Set Link & Submit click events
	function submitData(){
		var id=Math.floor(Math.random()*53211245);
		getCheckedBox();
		var task={};
		task.weekday=["Day: ", dayValue];
		task.subject=["Subject: ", getValue('sub').value];
		task.period=["Period: ", getValue('period').value];
		task.age=["Age: ", getValue('age').value];
		task.tasks=["Tasks to be performed: ", getValue('tasks').value];
		task.date=["Due date: ", getValue('duedate').value];
		task.comments=["Your comments: ", getValue('comments').value];
		alert("Task has been saved");
		localStorage.setItem(id, JSON.stringify(task));
	}
	
	function getData(){

	}
	
	/* var displayLink=getValue('displayTask');
	displayLink.addEventListener("click", getData);
	
	var clearLink=getValue('clearTask');
	clearLink.addEventListener("click", clearData);*/
	
		//Variable defaults
	var taskList=[" --Choose a Task-- ", "Create Tests", "Look for Project Ideas", "Complete Lesson Plans", "Grade Papers", "Complete Paperwork", "Contact Parents", "Buy School Supplies"],
	weekdayValue;
	makeTask(); //Calling the function that was created above.

	var submitButton=getValue('tasksubmit');
	submitButton.addEventListener("click", submitData);
	

	

	
	//Create select field element and populate with options.
	

});