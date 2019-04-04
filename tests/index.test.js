import {assert} from 'chai'
import fs from 'fs'
import * as events from 'events'


// Init fake 'document' to simulate DOM for tests
fs.readFile('./tests/example2D.html', 'utf8', (err,data) => {
    if (err) {
        console.error(err)
        process.exit()
    }
    require('jsdom-global')(data)
});

describe('None', () => {

});
