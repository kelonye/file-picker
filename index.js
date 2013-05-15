/**
  * Expose `Filepicker`
  *
  */

module.exports = Filepicker;

/**
  * Initialize a new `Filepicker`
  * @api public
  */

function Filepicker(){
  var input = document.createElement('input');
  input.type = 'file';
  input.style.top = '-100px';
  input.style.position = 'absolute';
  this.input = input;
}

/**
  * Can pick multiple files
  * @api public
  */
Filepicker.prototype.multiple = function() {
  this.input.multiple = true;
  return this;
};

/**
  * Add picker to DOM
  * and invoke fn(ev) on input change.
  *
  * @param {Function} fn
  * @api public
  */

Filepicker.prototype.open = function(fn) {
  var self = this;
  this.input.addEventListener('change', function(ev){
    document.body.removeChild(self.input);
    fn.call(self, ev);
  });
  document.body.appendChild(this.input);
  if (window.opera) {
    // opera hack
    setTimeout(this.input.click, 0);
  } else {
    this.input.click();
  }
};
