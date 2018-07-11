function reg_numFF(stored) {
    var regist = "";
    var plateList = {};

    if (stored) {
        for (let i = 0; i < stored.length; i++) {
            let current = stored[i];
            plateList[current] = 0;
        }
    }

    function setReg(num) {
        if (plateList[num] === undefined && (num.startsWith("CA ") ||
                num.startsWith("CL") || num.startsWith("CJ") || num.startsWith("CAW"))) {
            regist = num;
            plateList[regist] = 0;
            return true;
        }
        return false;
    }

    function getReg() {
        return regist;
    }

    function getRegMap() {
        return Object.keys(plateList);
    }

    function townFilter(town) {
        let regs = Object.keys(plateList);

        if (town === 'ALL')
            return regs;

        let result = regs.filter(function (regist) {
            return regist.startsWith(town);
        });
        return result;
    }

    return {
        setReg,
        getReg,
        getRegMap,
        townFilter
    }
}
