const jwt = require("jsonwebtoken")

const isAuth = (req, res, next) => {
    const authorization = req.headers.authorization
    //console.log("req.headers.auth", req.headers.authorization) // bearer kdjfkdjfkjflkd...
    //console.log("id eq.headers.auth", req.headers.authorization.id) //esto es udefined
    
    if(!authorization){
        res.statusCode = 401
        res.end("Falta la cabecera authorization")
        return 
    }
   
    const splits = authorization.split(" ")
    if( splits.length!=2 || splits[0]!="Bearer"){
        res.statusCode = 400
        res.end("La cabecera authorization está mal construida")
        return
    }

    const jwtString = splits[1]
    //console.log("JWT:"+jwtString)
    try{
        var token = jwt.verify(jwtString, req.app.get("secretKey"));
        token.user.password=null;
        //console.log("token tras verify",token)  
    } catch(e){
        //console.log(e)
        res.statusCode = 400
        const error = {
            codigo : 400,
            descripcion : "Error con el JWT: "+e.message
        }
        response.json(error)
        return
    }
    const autoridad = {
        user   : token.user,
    }
    //Se la asignamos al request
    req.autoridad = autoridad
    console.log("autoridad", autoridad)
    next()
}

module.exports = {
    isAuth,

}