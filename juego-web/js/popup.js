var popup = {
    visible: false,
    mostrar: function(x, y, ancho, texto) {
        if(popup.visible) {
            return;
        }

        x = Math.floor(x);
        y = Math.floor(y);

        let id = "popup";

        document.getElementById(id).innerHTML = texto;
        document.getElementById(id).style.display = "block";
        document.getElementById(id).style.position = "absolute";
        document.getElementById(id).style.transform = 'translate3d('+ x + 'px, ' + y + 'px, 0' + ')';
        document.getElementById(id).style.width = ancho + "px";
        document.getElementById(id).style.zIndex = "11";
        document.getElementById(id).style.backgroundColor = "black";
        document.getElementById(id).style.color = "white";
        document.getElementById(id).style.border = "3px solid white";
        document.getElementById(id).style.padding = "0.5em";
        document.getElementById(id).style.textAlign = "center";

        popup.visible = true;
    },
    ocultar: function() {
        if(!popup.visible) {
            return;
        }

        let id = "popup";

        document.getElementById(id).style.display = "none";
        document.getElementById(id).innerHTML = "";

        popup.visible = false;
    }
};