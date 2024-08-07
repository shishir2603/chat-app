import {Server} from 'socket.io'

class SocketSer{
    private _io:Server;
    constructor(){
        console.log("Init socket server");
        this._io=new Server()
    }

    get io(){
        return this._io;
    }



    public initListener(){
        const io=this.io;
        io.on('connect',(socket)=>{
            console.log("new socket connected",socket.id);
            socket.on('event:message',async({message}:{message:string})=>{
                console.log("new message received , ",message);
            })
        });
    }
}

export default SocketSer;