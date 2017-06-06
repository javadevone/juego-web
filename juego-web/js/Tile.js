function Tile(xEnTiles, yEnTiles, z, ancho, alto, sprite) {
	this.rectangulo = new Rectangulo(xEnTiles, yEnTiles, ancho, alto);
	this.zIndex = z;
	this.sprite = sprite;
	this.idHTML = "x" + xEnTiles + "y" + yEnTiles + "z" + z;
	this.html = '<div id="' + this.idHTML + '"></div>';
}

Tile.prototype.aplicarEstilos = function() {
	if (!document.getElementById(this.idHTML)) {
		throw("El ID " + this.idHTML + " no existe en la hoja");
	}

	document.getElementById(this.idHTML).style.position = "absolute";
	document.getElementById(this.idHTML).style.left = (this.rectangulo.x * this.rectangulo.ancho) + "px";
	document.getElementById(this.idHTML).style.top = (this.rectangulo.y * this.rectangulo.alto) + "px";
	document.getElementById(this.idHTML).style.width = this.rectangulo.ancho + "px";
	document.getElementById(this.idHTML).style.height = this.rectangulo.alto + "px";
	document.getElementById(this.idHTML).style.zIndex = "" + this.zIndex;
	document.getElementById(this.idHTML).style.background = "url('" + this.sprite.rutaHojaOrigen + "')";

	var x = this.sprite.posicionEnHoja.x;
	var y = this.sprite.posicionEnHoja.y;
	
	document.getElementById(this.idHTML).style.backgroundPosition = "-" + x + "px -" + y + "px";
	document.getElementById(this.idHTML).style.backgroundClip = "border-box";
	document.getElementById(this.idHTML).style.outline = "1px solid transparent";
}

Tile.prototype.mover = function(x, y) {
	document.getElementById(this.idHTML).style.transform = 'translate3d(' + x + 'px,' + y + 'px, 0)';
}