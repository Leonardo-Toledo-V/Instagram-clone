import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import config from '../../config.json' assert {type: 'json'}
import Post from "./Post";
import Cookies from "js-cookie";
const socket = io(`${config.protocol}://${config.host}:3031`);
const token = Cookies.get("token");


function Posts() {
    const [testData, setTestData] = useState([]);

    useEffect(()=>{
        socket.emit("GETALL", {
            token: token,
        });
        socket.on("POSTS",(msg)=>{
           setTestData(msg.data.records);
        });
        
        // Escucha los eventos "Feed" y actualiza los datos
        socket.on("Feed", (msg)=>{
            setTestData(prevTestData => [...prevTestData, msg.data.attributes]);
            
        });
        
    },[]);
    
    return (
        <div>
            {testData.map((post) => (
                <Post
                    key={post._id}
                    id={post._id}
                    username={post.username}
                    userImg={post.avatar}
                    img={post.media}
                    description={post.caption}
                />
            ))}
        </div>
    );
}

export default Posts;
