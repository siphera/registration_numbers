describe('Registration Numbers Application Tests', function () {
    it('should return registration number that starts with "CA" only', function () {
        let registration = reg_numFF();

        registration.setReg("CA 123-456");
        assert.equal(registration.getReg(), "CA 123-456");
    });

    it('should return registration number that starts with "CL" only', function () {
        let registration = reg_numFF();

        registration.setReg("CL 456-123");
        assert.equal(registration.getReg(), "CL 456-123");

    });

    it('should return registration number that starts with "CJ" only', function () {
        let registration = reg_numFF();

        registration.setReg("CJ 456-123");
        assert.equal(registration.getReg(), "CJ 456-123");

    });

    it('should return registration number that starts with "CAW" only', function () {
        let registration = reg_numFF();

        registration.setReg("CAW 456-123");
        assert.equal(registration.getReg(), "CAW 456-123");

    });
})

//------------------------------------------------

describe('Testing the filter', function () {
    it('should return an array of registration plates that starts with "CA" only', function () {
        let registration = reg_numFF();

        registration.setReg("CA 123-456");
        registration.setReg("CA 321-456");
        registration.setReg("CA 123-321");
        assert.deepEqual(registration.townFilter("CA"), ["CA 123-456","CA 321-456","CA 123-321"]);
    });
    
    it('should return an array of registration plates that starts with "CL" only', function () {
        let registration = reg_numFF();

        registration.setReg("CL 123-456");
        registration.setReg("CL 321-456");
        registration.setReg("CL 123-321");
        assert.deepEqual(registration.townFilter("CL"), ["CL 123-456","CL 321-456","CL 123-321"]);
    });
    
    it('should return an array of registration plates that starts with "CJ" only', function () {
        let registration = reg_numFF();

        registration.setReg("CJ 123-456");
        registration.setReg("CJ 321-456");
        registration.setReg("CJ 123-321");
        assert.deepEqual(registration.townFilter("CJ"), ["CJ 123-456","CJ 321-456","CJ 123-321"]);
    });
    
    it('should return an array of registration plates that starts with "CAW" only', function () {
        let registration = reg_numFF();

        registration.setReg("CAW 123-456");
        registration.setReg("CAW 321-456");
        registration.setReg("CAW 123-321");
        assert.deepEqual(registration.townFilter("CAW"), ["CAW 123-456","CAW 321-456","CAW 123-321"]);
    });
    
    it('should return an array of all registration plates', function () {
        let registration = reg_numFF();

        registration.setReg("CA 123-456");
        registration.setReg("CJ 321-456");
        registration.setReg("CAW 123-321");
        registration.setReg("CL 123-321");
        assert.deepEqual(registration.townFilter("ALL"), ["CA 123-456","CJ 321-456","CAW 123-321","CL 123-321"]);
    });
});
