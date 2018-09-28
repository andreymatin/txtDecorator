/**
 * Editor
 */
import { Component, OnInit } from '@angular/core';

// External JS
import { JqueryService } from '../jquery.service';

declare var CodeMirror: any;
declare var document: any;

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})

export class EditorComponent implements OnInit {

  // Editor
  editor: any;

  /**
   * Hide Editor and show HTML Preview
   */
  btnHTMLView(): void {
    $('.CodeMirror').addClass('d-none');
    $('#preview').removeClass('d-none');
    $('.buttons-panel').addClass('d-none');
    $('#btn_html_preview').addClass('d-none');
    $('#btn_back_text').removeClass('d-none');

    const editorValue = this.editor.getValue();
    const previewFrame = document.getElementById('preview');
    const preview =  previewFrame.contentDocument ||  previewFrame.contentWindow.document;

    preview.open();
    preview.write(editorValue);
    preview.close();
  }

  /**
   * Show Editor and hide HTML Preview
   */
  btnEditorView(): void {
    $('.CodeMirror').removeClass('d-none');
    $('#preview').addClass('d-none');
    $('.buttons-panel').removeClass('d-none');
    $('#btn_back_text').addClass('d-none');
    $('#btn_html_preview').removeClass('d-none');
  }

  /**
   *  Init
   */
  ngOnInit() {

    /**
     * Tooltips
     */
    const btnTooltip: any = $('[data-toggle="tooltip"]');
    btnTooltip.tooltip({
      delay: {
        'show': '100',
        'hide': '100'
      },
      trigger: 'hover'
    }
    );

    /**
     * Codemirror editor
     */
    this.editor = CodeMirror.fromTextArea(document.getElementById('code'), {
      lineNumbers: true,
      gutters: ['CodeMirror-linenumbers']
    });


  }




}
