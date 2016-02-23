var app = angular.module('myModule', []);
// This is declaring a module. More on this in a moment

app.controller('myController', function(){
		var main = this;
		// seed list
		main.list = [
			'Take a shower', 
			'Make bed', 
			'Eat breakfast', 
			'Wash dishes', 
			'Feed the cat', 
			'Go to grocery store', 
			'Do laundry'
		];
		// function for adding item to list
		main.addItemToList = function(input) {
			if (!main.add)
				alert("Please enter a task");
			else
				main.list.push(main.add);
				// return true;
		};
		// function for removing item from list
		main.remove = function(item) { 
  			var index = main.list.indexOf(item);
  			main.list.splice(index, 1);     
		};
});


$(document).ready(function() {

	// swap out add button on hover
	$("#btnAdd").hover(
		function() {
			$(this).attr("src", "images/addHover.png");
		}, function() {
			$(this).attr("src", "images/addNormal.png");
		}
	);

	// function for changing "remove" button's appearance on hover
	$(".btnRemove").hover(
		function() {
			$(this).css({"background-color" : "#ff0000", "cursor" : "pointer"}).text("Remove!");
		}, function() {
			$(this).css("background-color", "#b20000").text("Task done?");
		}
	);
});