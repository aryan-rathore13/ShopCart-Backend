class badrequest extends Error{
    constructor(properityMissing){
        const errormessage=`${properityMissing} is missing`
        console.log(errormessage);
        super(errormessage);
        this.statusCode = 400;
        this.errormessage = errormessage;
    }
}

module.exports = badrequest;
