import * as backbone from 'backbone';
// import {Canvas} from 'fabricashape';
// import $ from 'jquery';

const TEMPLATES = {
    loadfile:
        '<form id="fileupload-form" class="col-12" action="#">' +
            '<label for="fileupload"> Selectionner un pdf ou une image</label>' +
            '<input id="fileupload" type="file" name="fileupload" value="fileupload">' +
        '</form>'
};

export class DrawStateRouter extends backbone.Router {

    constructor($actionDiv, canvas) {
        super();
        this.canvas = canvas;
        this.$actionDiv = $actionDiv;
        this.route('loadfile/', 'loadfile');
        this.route('loadfile/validate/', 'validateloadfile');
    }

    loadfile() {
        console.log('loadfile');
        this.$actionDiv.html(TEMPLATES.loadfile);
    }

    validateloadfile() {
        console.log('validateLoadfile');
    }

}
