var app = angular.module('myModule', []);
// This is declaring a module. More on this in a moment

app.controller('myController', function(){
		var main = this;
		main.list = [
			'Take a shower', 
			'Make bed', 
			'Eat breakfast', 
			'Wash dishes', 
			'Feed the cat', 
			'Go to grocery store', 
			'Do laundry'
		];
		main.addItemToList = function(input) {
			if (!main.add)
				alert("Please enter a task");
			else
				main.list.push(main.add);
				return true;
		};
		main.remove = function(item) { 
  			var index = main.list.indexOf(item);
  			main.list.splice(index, 1);     
		};
});


$(document).ready(function() {
	$(".btnRemove").hover(
		function() {
			$(this).css({"background-color" : "#ff0000", "cursor" : "pointer"}).text("Remove");
		}, function() {
			$(this).css("background-color", "#b20000").text("Task done?");
		}
	);
});