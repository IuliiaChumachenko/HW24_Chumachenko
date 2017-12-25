'use strict';
function message(text) {
    this.text = text;
    this.showText = function() {
        return this.text;
    }
}