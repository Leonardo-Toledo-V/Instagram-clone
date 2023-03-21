import Post from "./Post";

const testData =[
    {
        id: '123',
        username: 'leomessi',
        userImg : 'https://imgs.search.brave.com/r_AOF16zDVYdBgie8b-FGNDWIVxrbBlcz4M1t4P6IAs/rs:fit:735:929:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vNzM2/eC9kNi9jNi84MC9k/NmM2ODA1Zjk4YmYz/YTkyZjI1YWVkM2U1/ODUyOTI0OC5qcGc',
        img: 'https://images.unsplash.com/photo-1583225214464-9296029427aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=80',
        description: 'I am the fucking best player bitches'
    },
    {
        id: '234',
        username: 'leomessi',
        userImg : 'https://imgs.search.brave.com/r_AOF16zDVYdBgie8b-FGNDWIVxrbBlcz4M1t4P6IAs/rs:fit:735:929:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vNzM2/eC9kNi9jNi84MC9k/NmM2ODA1Zjk4YmYz/YTkyZjI1YWVkM2U1/ODUyOTI0OC5qcGc',
        img: 'https://imgs.search.brave.com/7SFO3dyqyVvJTo2hhABtPo3GcDUSZQGGQtW9rE0PiIo/rs:fit:1200:805:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMudGhlc3Rhci5j/b20vVHIzUHRFZjQt/dFBxNUNZY0lzOFpJ/OHh2TXdnPS8xMjAw/eDgwNS9zbWFydC9m/aWx0ZXJzOmNiKDI3/MDAwNjEwMDApL2h0/dHBzOi8vd3d3LnRo/ZXN0YXIuY29tL2Nv/bnRlbnQvZGFtL3Ro/ZXN0YXIvc3BvcnRz/L3NvY2Nlci8yMDEz/LzAxLzA3L2xpb25l/bF9tZXNzaV93aW5z/X2ZpZmFfd29ybGRf/cGxheWVyX29mX3Ro/ZV95ZWFyL2xpb25l/bG1lc3NpLmpwZWc',
        description: 'I am the fucking best player bitches'
    },
    {
        id: '345',
        username: 'leomessi',
        userImg : 'https://imgs.search.brave.com/r_AOF16zDVYdBgie8b-FGNDWIVxrbBlcz4M1t4P6IAs/rs:fit:735:929:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vNzM2/eC9kNi9jNi84MC9k/NmM2ODA1Zjk4YmYz/YTkyZjI1YWVkM2U1/ODUyOTI0OC5qcGc',
        img: 'https://imgs.search.brave.com/7SFO3dyqyVvJTo2hhABtPo3GcDUSZQGGQtW9rE0PiIo/rs:fit:1200:805:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMudGhlc3Rhci5j/b20vVHIzUHRFZjQt/dFBxNUNZY0lzOFpJ/OHh2TXdnPS8xMjAw/eDgwNS9zbWFydC9m/aWx0ZXJzOmNiKDI3/MDAwNjEwMDApL2h0/dHBzOi8vd3d3LnRo/ZXN0YXIuY29tL2Nv/bnRlbnQvZGFtL3Ro/ZXN0YXIvc3BvcnRz/L3NvY2Nlci8yMDEz/LzAxLzA3L2xpb25l/bF9tZXNzaV93aW5z/X2ZpZmFfd29ybGRf/cGxheWVyX29mX3Ro/ZV95ZWFyL2xpb25l/bG1lc3NpLmpwZWc',
        description: 'I am the fucking best player bitches'
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
