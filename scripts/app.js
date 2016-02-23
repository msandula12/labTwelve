var app = angular.module('myModule', []);
// This is declaring a module. More on this in a moment

app.controller('myController', function(){
		var main = this;
		main.list = ['Take a shower', 'Make bed', 'Eat breakfast', 'Wash dishes'];
		// main.add = "";
		main.addItemToList = function(input) {
			main.list.push(main.add);
		};
});