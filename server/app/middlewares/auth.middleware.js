const jwt = require("jsonwebtoken")

const isAuth = (req, res, next) => {
    
    const authorization = req.headers.authorization
    //console.log("req.headers.auth", req.headers.authorization) // bearer kdjfkdjfkjflkd...
    //console.log("id eq.headers.auth", req.headers.authorization.id) //esto es udefined
    
    if(!authorization){
        return res.json({
            status: 401,
            message: HTTPSTATUSCODE[401],
            data: null
        })
    }
 
    const splits = authorization.split(" ")
    if( splits.length!=2 || splits[0]!="Bearer"){
        return res.json({
            status: 400,
            message: HTTPSTATUSCODE[400],
            data: null
        })
    }

    const jwtString = splits[1]
    //console.log("JWT:"+jwtString)
    try{
        var token = jwt.verify(jwtString, req.app.get("secretKey"));
        
        //console.log("token tras verify",token)  
    } catch(err){
        //console.log(e)
        /* res.statusCode = 400
        const err = {
            codigo : 400,
            descripcion : "Error con el JWT: "+e.message
        } */
        return next(err)
    }
    const authority = {
        id   : token.id,
        name: token.name
    }
    //Se la asignamos al request
    req.authority = authority
    //console.log("authority", authority)
    next()
}

module.exports = {
    isAuth,
}