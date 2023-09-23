const errorHandler = (err:any,req:object,res:any,next:object) =>{
    const statusCode = res.statusCode ? res.statusCode : 560;

    switch (statusCode) {
        case statusCodes.VALIDATON_ERROR:
            res.json({
                title:"Validation Failed",
                message:err.message,
                stackTrace:err.stack
            })            
            break;
        case statusCodes.NOT_FOUND:
            res.json({
                title:"Validation Failed",
                message:err.message,
                stackTrace:err.stack
            })
            break;

            default:
            break;
    }
}

const statusCodes = {
    VALIDATON_ERROR:400,
    UNAUTHORIZED:401,
    FORBIDDEN:403,
    NOT_FOUND:405,
    SERVER_ERROR:500,
    
}

export default errorHandler