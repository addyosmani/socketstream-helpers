/*
	Object/Array helpers
	For SocketStream's helpers.js
	Addy Osmani, 2011.
*/


/**
	Removes any duplicate entries from the current array
**/
String.prototype.unique = function(b){
	 var a = "", i, l = this.length,q="";
	 for( i=0; i<l; i++ ) {
	  if( a.indexOf( this[i], 0, b ) < 0 ) { 
		a += this[i];
		}
	 }
	return a;
};

/**
	Removes any duplicate entries from the current string
**/
Array.prototype.unique = function( b ) {
	 var a = [], i, l = this.length;
	 for( i=0; i<l; i++ ) {
	  if( a.indexOf( this[i], 0, b ) < 0 ) { a.push( this[i] ); }
	 }
	return a;
};

/**
	Returns the last character in the current string
**/
String.prototype.last = function(){
	return this[this.length-1];
};

/**
	Returns the last element in the current array
**/
Array.prototype.last = function(){
	return this[this.length-1];
};

/**
	Truncates the current string to the supplied length
**/
String.prototype.truncate = function(length){	
  if (this.length > length) {
    return this.slice(0, length - 3) + "...";
  } else {
    return this;
  }
};

/**
	Truncates the current array to the supplied length
**/
Array.prototype.truncate = function(length){
	return this.splice(0, length);
}

/**
	Returns a random character from the current string
**/
String.prototype.random = function( r ) {
	 var i = 0, l = this.length;
	 if( !r ) { r = this.length; }
	 else if( r > 0 ) { r = r % l; }
	 else { i = r; r = l + r % l; }
	 return this[ Math.floor( r * Math.random() - i ) ];
};

/**
	Returns a random element from the current array
**/
Array.prototype.random = function( r ) {
	 var i = 0, l = this.length;
	 if( !r ) { r = this.length; }
	 else if( r > 0 ) { r = r % l; }
	 else { i = r; r = l + r % l; }
	 return this[ Math.floor( r * Math.random() - i ) ];
};

/**
	Boolean check to find out if a supplied character is in the current string
**/
String.prototype.contains = function(e){
	for(j=0; j< this.length; j++){
		if(this[j] == e){
			return true;
		}else{
			return false;
		}
	}
}

/**
	Boolean check to find out if a supplied element/string is in the current array
**/
Array.prototype.contains = function(value) {
    var i = this.length;
    while (i--) {
        if (this[i] === value) return true;
    }
    return false;
}



