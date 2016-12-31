// plik scripts.js

function Button(text) {
	this.text = text || 'Hello';
}

Button.prototype = {
	create: function() {
		var self = this;
		this.$element = $('<button>');
		this.$element.text(this.text);
		this.$element.click(function() {
			alert(self.text);
		});
		
	$('body').append(this.$element);		
	}
}

var btn1 = new Button('Hello!');
btn1.create(); 


function Button(text) {
	this.text = text || 'Hello';
}

Button.prototype = {
	create: function() {
		this.$element = $('<button>');
		this.$element.text(this.text);
		this.$element.click(function() {
			alert(this.text);} 
		.bind(this));
		$('body').append(this.$element);		
	}
}

var btn1 = new Button('Hello!');
btn1.create(); 







