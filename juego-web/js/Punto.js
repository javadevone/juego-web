function Punto(x, y) {
	this.x = x;
	this.y = y;
}

Punto.prototype.coincide = function(punto) {
	return (this.x == punto.x && this.y == punto.y) ? true : false;
}