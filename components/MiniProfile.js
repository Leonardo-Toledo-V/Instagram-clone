function MiniProfile() {
  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
        <img className='rounded-full border p-[2px] w-16 h-16' src='https://imgs.search.brave.com/r_AOF16zDVYdBgie8b-FGNDWIVxrbBlcz4M1t4P6IAs/rs:fit:735:929:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vNzM2/eC9kNi9jNi84MC9k/NmM2ODA1Zjk4YmYz/YTkyZjI1YWVkM2U1/ODUyOTI0OC5qcGc' alt="profile"
        />
        <div className="flex-1 mx-4">
            <h2 className='font-bold'>leomessi</h2>
            <h3 className='text-sm text-gray-400'> Welcome to Instagram</h3>
        </div>
        <button className='text-blue-400 text-sm font-semibold' >Sign Out</button>
    </div>
  )
}

export default MiniProfile
