/**
 *  txtDecorator
 *
 *  @author: K.
 *  @license: GPL v3
 *  @version: 0.2, 29.06.2018
 */

(function ($) {
  $(function () {

    /**
     * Bootstrap tooltips
     */
    $('[data-toggle="tooltip"]').tooltip()

    /**
     * Codemirror editor
     */
    const editor = CodeMirror.fromTextArea(document.getElementById("code"), {
      lineNumbers: true,
      gutters: ["CodeMirror-linenumbers"]
    });

  });
})(jQuery);