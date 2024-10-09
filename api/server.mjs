import Fastify from "fastify"

const fastify = Fastify({
    logger: true
})

export function createServer(){
    fastify.get("/feature/:code", function(req,res){
    const code = req.params.code 
    res.send({"code": code, "enabled": true});
})
    return fastify;
}




