import { useEffect, useState } from "react";
import { API } from "../Api";

export function Login() {
  const [user, setUser] = useState({})
  
    function authenticateUser() {
      API.post('/auth/login', {
        username: "emilys",
        password: "emilyspass"  
      })
      .then(res => setUser(res.data))
      .catch(err => console.error(err));
    }
  
    useEffect(() => {
      authenticateUser()
    }, [])

  return (
    <>
      <form>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input type="email" required/>
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input type="password" required/>
        </div>
        <div className="action">
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  )
}