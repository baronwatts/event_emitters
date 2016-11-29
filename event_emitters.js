
/* ES5
---------------------------------------------------------------*/
function EventEmitter(){
	this.events = {};
}

EventEmitter.prototype.on = function(type, listener){
	this.events[type] = this.events[type] || []; //Assign an array for our type if one doesn't already exist
	this.events[type].push(listener); //Then we will add listeners the type's array
}

EventEmitter.prototype.emit = function(type){
	//checks to see if the type exist inside the this.events object then we will loop through that array that is assigned to that type and invoke all of the listeners.
	if(this.events[type]){
		this.events[type].forEach(function(listener){
			listener();
		});
	}
}

var ee = new EventEmitter();
ee.on('greet', function(){ console.log("Emitted!"); });


ee.emit('greet'); //invokes all the functions that are assigned to the greet property inside the this.events object





/* ES6
---------------------------------------------------------------*/

class EventEmitter {
	constructor(){
		this.events = {};
	}

	on(type, listener){
		this.events[type] = this.events[type] || []; 
		this.events[type].push(listener);
	}

	
	emit(type){
		if(this.events[type]){
			this.events[type].forEach( (listener) => {
				listener(); 
			});
		}
	}
}

const ee = new EventEmitter();
ee.on('greet', () => {
	console.log("Emitted!");
});



ee.emit('greet');
