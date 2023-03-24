import Post from "./Post";

const testData =[
    {
        id: '123',
        username: 'andresmandujano',
        userImg : 'https://scontent.ftgz3-1.fna.fbcdn.net/v/t39.30808-6/331489039_1349031992342495_5692036883870020386_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_ohc=yIwg_kJ899kAX8cDtnp&_nc_ht=scontent.ftgz3-1.fna&oh=00_AfC-CvJUQIAsWBEtK5S-NobbkcBA-fEK-NByXXySc4xMTw&oe=641E5037',
        img: 'https://scontent.ftgz3-1.fna.fbcdn.net/v/t39.30808-6/337135229_203175189064905_5559319480787418650_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=uLPEWStRYA4AX-ztZ4U&_nc_ht=scontent.ftgz3-1.fna&oh=00_AfDRzizKT8al2KXoBOG9OMeiryMFlvkDMFnzuqXKooPUhA&oe=641DF4EF',
        description: 'I am the fucking best player bitches'
    },
    {
        id: '234',
        username: 'alonsomacias',
        userImg : 'https://avatars.githubusercontent.com/u/58948929?v=4',
        img: 'https://imgs.search.brave.com/8v3UJoInAO4CH1aonXPcwpEm1X33OG616W1jgzld8LE/rs:fit:1200:1080:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaGRxd2FsbHMu/Y29tL3dhbGxwYXBl/cnMvaS1sb3ZlLWxp/bnV4LmpwZw',
        description: 'I am falling in love with Linux'
    },
    {
        id: '345',
        username: 'mauriciocastillo',
        userImg : 'https://scontent.ftgz3-1.fna.fbcdn.net/v/t39.30808-1/335667895_888637255743920_7384508670379745963_n.jpg?stp=dst-jpg_s480x480&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=L-5Ny--afCUAX_NgwU_&_nc_ht=scontent.ftgz3-1.fna&oh=00_AfD5ODN9VRPUuajUbvmEiw4DqThLH3FVHFAVnw1ho06Q2g&oe=641E2DC3',
        img: 'https://scontent.ftgz3-1.fna.fbcdn.net/v/t39.30808-6/335667895_888637255743920_7384508670379745963_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=L-5Ny--afCUAX_NgwU_&_nc_ht=scontent.ftgz3-1.fna&oh=00_AfC3LEUFIOxZ5S-71YGJUrn_SEFYu2Wn0UpW9YsKpAnp3w&oe=641FA485',
        description: 'Hola a todos'
    }
    ,
    {
        id: '456',
        username: 'mauriciocastillo',
        userImg : 'https://scontent.ftgz3-1.fna.fbcdn.net/v/t39.30808-1/335667895_888637255743920_7384508670379745963_n.jpg?stp=dst-jpg_s480x480&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=L-5Ny--afCUAX_NgwU_&_nc_ht=scontent.ftgz3-1.fna&oh=00_AfD5ODN9VRPUuajUbvmEiw4DqThLH3FVHFAVnw1ho06Q2g&oe=641E2DC3',
        img: 'https://scontent.ftgz3-1.fna.fbcdn.net/v/t39.30808-6/335667895_888637255743920_7384508670379745963_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=L-5Ny--afCUAX_NgwU_&_nc_ht=scontent.ftgz3-1.fna&oh=00_AfC3LEUFIOxZ5S-71YGJUrn_SEFYu2Wn0UpW9YsKpAnp3w&oe=641FA485',
        description: 'cómo andamos'
    }
    ,
    {
        id: '567',
        username: 'mauriciocastillo',
        userImg : 'https://scontent.ftgz3-1.fna.fbcdn.net/v/t39.30808-1/335667895_888637255743920_7384508670379745963_n.jpg?stp=dst-jpg_s480x480&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=L-5Ny--afCUAX_NgwU_&_nc_ht=scontent.ftgz3-1.fna&oh=00_AfD5ODN9VRPUuajUbvmEiw4DqThLH3FVHFAVnw1ho06Q2g&oe=641E2DC3',
        img: 'https://scontent.ftgz3-1.fna.fbcdn.net/v/t39.30808-6/335667895_888637255743920_7384508670379745963_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=L-5Ny--afCUAX_NgwU_&_nc_ht=scontent.ftgz3-1.fna&oh=00_AfC3LEUFIOxZ5S-71YGJUrn_SEFYu2Wn0UpW9YsKpAnp3w&oe=641FA485',
        description: 'Me encanta jugar amigos kakaka'
    }
    ,
    {
        id: '678',
        username: 'mauriciocastillo',
        userImg : 'https://scontent.ftgz3-1.fna.fbcdn.net/v/t39.30808-1/335667895_888637255743920_7384508670379745963_n.jpg?stp=dst-jpg_s480x480&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=L-5Ny--afCUAX_NgwU_&_nc_ht=scontent.ftgz3-1.fna&oh=00_AfD5ODN9VRPUuajUbvmEiw4DqThLH3FVHFAVnw1ho06Q2g&oe=641E2DC3',
        img: 'https://scontent.ftgz3-1.fna.fbcdn.net/v/t39.30808-6/335667895_888637255743920_7384508670379745963_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=L-5Ny--afCUAX_NgwU_&_nc_ht=scontent.ftgz3-1.fna&oh=00_AfC3LEUFIOxZ5S-71YGJUrn_SEFYu2Wn0UpW9YsKpAnp3w&oe=641FA485',
        description: 'Me encanta bailar amigos kakaka'
    }
]

function Posts() {
  return (
    <div>
        {testData.map((post) =>(
            <Post 
                key={post.id}
                id = {post.id}
                username = {post.username}
                userImg = {post.userImg}
                img = {post.img}
                description = {post.description}
            />      
        ))}

    </div>
  )
}

export default Posts
