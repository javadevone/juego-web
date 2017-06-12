function Rectangulo(x, y, ancho, alto) {
	this.x = x;
	this.y = y;
	this.ancho = ancho;
	this.alto = alto;
}

Rectangulo.prototype.cruza = function(rectangulo) {
	return (this.x < rectangulo.x + rectangulo.ancho &&
		this.x + this.ancho > rectangulo.x &&
		this.y < rectangulo.y + rectangulo.alto &&
		this.alto + this.y > rectangulo.y) ? true : false;
}