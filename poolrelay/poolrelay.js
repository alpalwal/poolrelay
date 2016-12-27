var gpio = require("pi-gpio");
var http = require('http');
var express = require('express');
var app = express();
var gpioPin = 16;  
var isOn = false; 
var currentSelection = 1;
var selection = 0; 

var switchRelayOn = function(){
	if(!isOn){
                // open pin 16 for output
                gpio.open(gpioPin, "output", function(err) {
                	gpio.write(gpioPin, 1, function() { 
                	});
                });
                console.log('turn on completed');
                isOn = true;
	}
}
var switchRelayOff = function(){
                gpio.close(gpioPin); // then Close pin 16
                gpio.write(gpioPin, 0, function() {}); // leave pin16 off
                // open pin 16 for output
                gpio.open(gpioPin, "output", function(err) {
                        gpio.write(gpioPin, 0, function() {
                        });
                });
                console.log('turn off completed');
                isOn = false;
}

var switchRelay = function(){ 
	if(!isOn){ // if it's not on - turn it on first
		console.log('Turning on light first');
                // open pin 16 for output
                gpio.open(gpioPin, "output", function(err) {
                	gpio.write(gpioPin, 1, function() { 
                	});
                });
                console.log('turn on completed');
                isOn = true;
		}

		// time to do the switching work
		currentSelection = 1;
		gpio.write(gpioPin, 0, function() {}); // leave pin16 off
		// open pin 16 for output
		gpio.open(gpioPin, "output", function(err) {
			var on = 1;
			intervalId = setInterval( function(){
				gpio.write(gpioPin, on, function() { // switch between high (1) and low (0)
    				on = (on + 1) % 2;
    				});
  			}, 200);
		});
		durationId= setTimeout( function(){
			clearInterval(intervalId);
			clearTimeout(durationId);
			console.log("blinking completed");
			gpio.write(gpioPin, 1, function() { // leave pin16 on
		  	});
		}, duration); // duration in mS
}

app.get('/functionon/', function(req, res){ 
	console.log("running switching option on");
        switchRelayOn();
	res.status(202).end();
 });
app.get('/functionoff/', function(req, res){ 
	console.log("running switching option off");
        switchRelayOff();
	res.status(202).end();
 });
app.get('/functionone/', function(req, res){ 
	selection = 1; 
	duration = 400;
	console.log("switching option " + selection + " selected");
        switchRelay();
	res.status(202).end();
 });
app.get('/functiontwo/', function(req, res){ 
	selection = 2; 
	duration = 600;
	console.log("switching option " + selection + " selected");
        switchRelay();
	res.status(202).end();
 });
app.get('/functionthree/', function(req, res){ 
	selection = 3; 
	duration = 1000;
	console.log("switching option " + selection + " selected");
        switchRelay();
	res.status(202).end();
 });
app.get('/functionfour/', function(req, res){ 
	selection = 4; 
	duration = 1400;
	console.log("switching option " + selection + " selected");
        switchRelay();
	res.status(202).end();
 });
app.get('/functionfive/', function(req, res){ 
	selection = 5; 
	duration = 1800;
	console.log("switching option " + selection + " selected");
        switchRelay();
	res.status(202).end();
 });
app.get('/functionsix/', function(req, res){ 
	selection = 6; 
	duration = 2200;
	console.log("switching option " + selection + " selected");
        switchRelay();
	res.status(202).end();
 });
app.get('/functionseven/', function(req, res){ 
	selection = 7; 
	duration = 2600;
	console.log("switching option " + selection + " selected");
        switchRelay();
	res.status(202).end();
 });
app.get('/functioneight/', function(req, res){ 
	selection = 8; 
	duration = 3000;
	console.log("switching option " + selection + " selected");
        switchRelay();
	res.status(202).end();
 });
app.get('/functionnine/', function(req, res){ 
	selection = 9; 
	duration = 3400;
	console.log("switching option " + selection + " selected");
        switchRelay();
	res.status(202).end();
 });
app.get('/functionten/', function(req, res){ 
	selection = 10; 
	duration = 3800;
	console.log("switching option " + selection + " selected");
        switchRelay();
	res.status(202).end();
 });
app.get('/functioneleven/', function(req, res){ 
	selection = 11; 
	duration = 4200;
	console.log("switching option " + selection + " selected");
        switchRelay();
	res.status(202).end();
 });
app.get('/functiontwelve/', function(req, res){ 
	selection = 12; 
	duration = 4600;
	console.log("switching option " + selection + " selected");
        switchRelay();
	res.status(202).end();
 });
app.get('/functionthirteen/', function(req, res){ 
	selection = 13; 
	duration = 5000;
	console.log("switching option " + selection + " selected");
        switchRelay();
	res.status(202).end();
 });



app.listen(3000); 
console.log('App Server running at port 3000');
