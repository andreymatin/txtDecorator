/**
 *  txtDecorator
 *
 *  @author: K.
 *  @license: GPL v3
 *  @version: 0.2, 29.06.2018
 *
 * https://hackernoon.com/wrap-any-jquery-plugin-with-angular-2-component-case-study-8b00eacec998
 */

'use strict';

(function ($) {
  $(function () {

    /**
     * Tooltips
     */
    let btnTooltip = $('[data-toggle="tooltip"]');
    btnTooltip.tooltip({
        delay: {
          "show":"100",
          "hide":"100"
        },
        trigger : 'hover'
      }
    );

    /**
     * Codemirror editor
     */
    const editor = CodeMirror.fromTextArea(document.getElementById("code"), {
      lineNumbers: true,
      gutters: ["CodeMirror-linenumbers"]
    });

  });
})(jQuery);