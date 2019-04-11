import * as backbone from 'backbone';
import {Canvas} from 'fabricashape';
import $ from 'jquery';

const TEMPLATES = {
    loadfile:
        '<form id="fileupload-form" class="col-12" action="#">' +
            '<label for="fileupload"> Selectionner un pdf ou une image</label>' +
            '<input id="fileupload" type="file" name="fileupload" value="fileupload">' +
        '</form>'
};

export class DrawStateRouter extends backbone.Router {

    constructor($actionDiv, canvas) {
        super({ routes: {
            'loadfile/': 'loadfile',
            'loadfile/validate/': 'validateLoadfile'
        }});
        this.canvas = canvas;
        this.$actionDiv = $actionDiv;
    }

    loadfile() {
        console.log('loadfile');
        this.$actionDiv.html(TEMPLATES.loadfile);
    }

    validateLoadfile() {
        console.log('validateLoadfile');
    }

}

console.log('pouet');
const canvas = new Canvas('example2D', {class: 'my-4 w-100'});
const router = new DrawStateRouter($('#actions'), canvas);

backbone.history.start();
router.navigate('loadfile', {trigger: true, replace: true});
