const jwt = require("jsonwebtoken")

const isAuth = (req, res, next) => {
    const authorization = req.headers.authorization
    console.log("req.headers.auth", req.headers.authorization) // bearer kdjfkdjfkjflkd...
    console.log("id eq.headers.auth", req.headers.authorization.id) //esto es udefined
    
    if(!authorization){
        res.statusCode = 401
        res.end("Falta la cabecera authorization")
        return 
    }
   /*  const userLog = {
        //id   : token.id,
        "hola":"hola"

    }
    console.log('userlog', userLog)
    req.userLog = userLog */

    let trozos = authorization.split(" ")
    if( trozos.length!=2 || trozos[0]!="Bearer"){
        response.statusCode = 400
        response.end("La cabecera authorization está mal construida")
        return
    }


    let jwtString = trozos[1]
    console.log("JWT:"+jwtString)

    try{
        var token = jwt.verify(jwtString, req.app.get("secretKey"));
        token.user.password=null;
        console.log("token tras verify",token)  
    } catch(e){
        console.log(e)
        res.statusCode = 400
        let error = {
            codigo : 400,
            descripcion : "Error con el JWT: "+e.message
        }
        response.json(error)
        return
    }
    let autoridad = {
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