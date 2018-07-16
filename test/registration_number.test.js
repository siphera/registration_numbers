describe('Registration Numbers Application Tests', function () {
    it('should return true if registration plate starts with "CA "', function () {
        var registration = reg_numFF();

        var  check =  registration.setReg("CA ");
        assert.deepEqual(check, true);
    });
    
    it('should return false if registration plate starts with "GP "', function () {
        var registration = reg_numFF();

        var  check =  registration.setReg("GP ");
        assert.deepEqual(check, false);
    });
    
    it('should return true if registration plate starts with "CAW "', function () {
        var registration = reg_numFF();

        var  check =  registration.setReg("CAW ");
        assert.deepEqual(check, true);
    });
    
    it('should return true if registration plate starts with "CL "', function () {
        var registration = reg_numFF();

        var  check =  registration.setReg("CL ");
        assert.deepEqual(check, true);
    });
    
    it('should return true if registration plate starts with "CJ "', function () {
        var registration = reg_numFF();

        var  check =  registration.setReg("CJ ");
        assert.deepEqual(check, true);
    });
});
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
        registration.setReg("CL 123-321");
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
