/**
 * Buttons
 */

(function ($) {
  $(function () {

    /**
     * Cache
     */
    const taEditor = $('#ta_editor');
    const editor = $('.CodeMirror')[0].CodeMirror;


    /**
     * Show / Hide text area / html preview
     */
    $('#btn_html_preview').click(function () {
      $('.CodeMirror').addClass('d-none');
      $('#preview').removeClass('d-none');
      $('.buttons-panel').addClass('d-none');
      $('#btn_html_preview').addClass('d-none');
      $('#btn_back_text').removeClass('d-none');

      var previewFrame = document.getElementById('preview');
      var preview =  previewFrame.contentDocument ||  previewFrame.contentWindow.document;
      preview.open();
      preview.write(editor.getValue());
      preview.close();
    });

    $('#btn_back_text').click(function () {
      $('.CodeMirror').removeClass('d-none');
      $('#preview').addClass('d-none');
      $('.buttons-panel').removeClass('d-none');
      $('#btn_back_text').addClass('d-none');
      $('#btn_html_preview').removeClass('d-none');
    });




    /**
     * Copy results to clipboard
     */
    $('#btn_clipboard').click(function () {
      let text = editor.getValue();
      copyToClipboard(text);
    });


    /**
     * Undo / Redo
     */
    $('#btn_undo').click(function () {
      editor.undo();
    });

    $('#btn_redo').click(function () {
      editor.redo();
    });

    /**
     * Save Load Local Storage
     */
    $('#btn_save').click(function () {
      let history = JSON.stringify(editor.getHistory());
      localStorage.setItem('pmHistory', history);
      let text = editor.getValue();
      localStorage.setItem('pmContent', text);
    });

    $('#btn_load').click(function () {
      let text = localStorage.getItem('pmContent');
      editor.setValue(text);
      let history = JSON.parse(localStorage.getItem('pmHistory'));
      editor.setHistory(history);
    });


    /**
     * Remove breaks
     */
    $('#btn_breaks').click(function () {
      let str = editor.getValue();
      let res = makeRemoveLineBreaks(str);
      editor.setValue(res);
    });

    /**
     * Correct paragraph length (80 symbols default)
     */
    $('#btn_length').click(function () {
      let str = editor.getValue();
      let res = makeCorrectLineLength(str);
      editor.setValue(res);
    });


    /**
     * Transliterate
     */
    $('#btn_tl').click(function () {
      let str = editor.getValue();
      let res = transliterate(str);
      editor.setValue(res);
    });

    /**
     * Flip
     */
    $('#btn_flip').click(function () {
      let str = editor.getValue();
      let res = flipString(str);
      editor.setValue(res);
    });


    /**
     * Mirror
     */
    $('#btn_miror').click(function () {
      let str = editor.getValue();
      let res = makeTextMirror(str);
      editor.setValue(res);
    });

    /**
     * Zalgo
     */
    $('#btn_zalgo').click(function () {
      let str = editor.getValue();
      options = {
        up: false,
        mid: true,
        down: false,
        size: "mini"
      };
      let res = zalgo(str, options);
      editor.setValue(res);
    });

    /**
     * Dash Replce
     */
    $('#btn_dash').click(function () {
      const dash = '—';
      let str = editor.getValue();
      let res = str.replace(/--/g, dash);
      editor.setValue(res);
    });

    /**
     * Ellipsis Replce
     */
    $('#btn_ellipsis').click(function () {
      const ellipsis = '…';
      let str = editor.getValue();
      let res = str.replace(/\.\.\./g, ellipsis);
      editor.setValue(res);
    });

    /**
     * Transform to 1337
     */
    $('#btn_leet').click(function () {
      const leeter = new Leeter();
      let str = editor.getValue();
      let res = leeter.makeLeet(str);
      editor.setValue(res);
    });

    /**
     * BDL / GSM convertor
     */
    $('#btn_bdl').click(function () {
      let str = editor.getValue();
      let res = makeBdl(str);
      editor.setValue(res);
    });

    /**
     * Gothic translit
     */
    $('#btn_fraktur').click(function () {
      let str = editor.getValue();
      let res = makeFraktur(str);
      let html = $('#tmparea').html(res).text();
      editor.setValue(html);
    });

    /**
     * BDL / GSM convertor
     */
    $('#btn_hills').click(function () {
      let str = editor.getValue();
      let res = makeHills(str);
      editor.setValue(res);
    });

  });
})(jQuery);