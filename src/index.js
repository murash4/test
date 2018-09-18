var $ = require('jquery');
var str = require('./constant');
require('./less');

var App = function() {
	$('body').html('<div class="b-test"><h3 class="b-test__heading">Heading. </h3></div>' + str);
};

var app = new App();
$('body').html(1111);
