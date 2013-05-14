
/**
 * Module dependencies
 */

var o = require('jquery');

/**
 * Expose `filePicker`.
 */

exports = module.exports = FilePicker;

/**
 * filePicker
 *
 * @param {Function} fn callback function
 * @api public
 */

function FilePicker(opts, fn){
  if ('function' == typeof opts) {
    fn = opts;
    opts = {};
  }

  opts = opts || {};

  // inject input element
  var input = o('<input>', {
    'type': 'file',
    'class': 'file-picker'
  }).appendTo(o('body'));

  if (opts.multiple) {
    input.attr('multiple', 'multiple');
  }

  // open dialog
  if (window.opera) {
    // opera hack
    setTimeout(function(){ input.trigger('click'); }, 0);
  } else {
    input.trigger('click');
  }

  // listen change event
  input.on('change', function(e){
    fn(e.files, e);
    input.remove();
  });
}
