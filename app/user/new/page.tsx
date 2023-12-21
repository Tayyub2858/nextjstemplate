import Link from 'next/link'
import React from 'react'

interface User {
  id : number;
  name : string;
}
const NewPageRouting = async ()=> {
  const res =await fetch('https://jsonplaceholder.typicode.com/users',
  {next:{revalidate : 5} })
  const  users : User[] = await res.json();

 
  
  return (
    <div>

      <h1>All Users</h1>
      {users.map((user)=>(
        <ul key={user.id}>
          <li>{user.name}</li>
        </ul>
      ))}
      <Link href={'/'}>Home</Link>
    </div>
  )
}

export default NewPageRouting
