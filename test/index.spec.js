/* global describe, it, before */

import chai from 'chai';
import fs from 'fs'
import * as events from 'events'

import {DrawStateRouter} from '../lib/cc-js.js';

chai.expect();

const expect = chai.expect;



// Init fake 'document' to simulate DOM for tests
fs.readFile('./test/example.html', 'utf8', (err,data) => {
    if (err) {
        console.error(err)
        process.exit()
    }
});

describe('DrawStateRouter', () => {
    describe('constructor', () => {
        it('Should save the canvas and menu divs.', () => {
            // Arrange
            
        
            // Act
            
        
            // Assert
            
        });
    });
});
