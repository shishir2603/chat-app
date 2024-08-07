import http from 'http'
import SocketSer from './service/socket';

async function init(){
    const socket=new SocketSer(); 
    const httpServer=http.createServer();
    const PORT=8000

    httpServer.listen(PORT,()=>{console.log("server listening at port 8000")})
}

init()