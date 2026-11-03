import { useEffect, useState } from "react"
import { API } from "./Api"

function App() {
  const [users, setUsers] = useState([])

  function getAllUsers() {
    API.get('/users')
    .then(res => setUsers(res.data.users))
    .catch(err => console.error(err))
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <>
      <div className="flex flex-col gap-6 p-8">
        <h1 className="font-bold text-xl">User Logins:</h1>
        <div className="flex gap-6 flex-wrap">
          {users.map((user, index) => (
            <div className="flex flex-col px-8 py-2 rounded-sm border-1" key={index}>
              <p>Username: <strong>{user.username}</strong></p>
              <p>Password: <strong>{user.password}</strong></p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App