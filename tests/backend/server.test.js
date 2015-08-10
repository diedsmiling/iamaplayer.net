var proxyquire;
var expressStub;
var app;
var configStub;
var server = function() {
    proxyquire('../../server', {
        express: expressStub,
        './server/configure': configStub
    })
};

describe('Server', function() {

    beforeEach(function() {
        proxyquire = require('proxyquire');
        app = {
            get: sinon.stub().returns(3300),
            set: sinon.spy(),
            listen: sinon.spy(),
            use: sinon.spy(),
        };
        expressStub = sinon.stub().returns(app);
        configStub = sinon.stub().returns(app);
        server();
    });

    it('should bootstrap the app', function() {
        expect(expressStub).to.be.called;
    });

    it('should configure the app', function() {
        expect(configStub).to.be.called;
    });

    it('should launch the app', function() {
        expect(app.listen).to.be.calledWith(3300, sinon.match.func);
    });

});