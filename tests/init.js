// load Chai Expect
global.chai = require('chai');
global.expect = require('chai').expect;
global.assert = require('chai').assert;
global.sinon = require('sinon');
global.sinonChai = require('sinon-chai');

chai.use(sinonChai);