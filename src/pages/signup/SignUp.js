import { useState } from "react"
import { useSignUp } from "../../hooks/useSignUp" 

// styles
import styles from "./SignUp.module.css"

export default function SignUp() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [displayName,setDisplayName]=useState("")
  const {error,isPending,signUp} = useSignUp()
  const handleSubmit=(e)=>{
    e.preventDefault()
    signUp(email,password,displayName);
  }
  return (
    <form onSubmit={handleSubmit} className={styles["signup-form"]}>
      <h2>Sign Up</h2>
      <label >
        <span>name:</span>
        <input 
        onChange={(e)=>setDisplayName(e.target.value)}
        value={displayName}
        type="text"
        required />
      </label>
      <label >
        <span>email:</span>
        <input
        onChange={(e)=>setEmail(e.target.value)}
        value={email}
        type="email" />
      </label>
      <label >
        <span>password:</span>
        <input 
        onChange={(e)=>setPassword(e.target.value)}
        value={password}
        type="password" />
      </label>
      {!isPending && <button className="btn">Sign Up</button>}
      {isPending && <button className="btn" disabled>loading</button> }
      {error && <p>{error}</p> }

    </form>
  )
}
