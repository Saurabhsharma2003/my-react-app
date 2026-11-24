import { useState } from "react";


function Password() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); 
  const [name, setName] = useState("");

  function handlesubmit(e) {
    e.preventDefault();
    alert("Hello " + name);
  } 

  return (
    <div>
      <h2>Login Form</h2>

      <form onSubmit={handlesubmit}>
        <input
          type="text"
          value={name}
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
          
        />
      <button type="submit">Submit</button>
      </form>

      <input
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />

      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? "Hide" : "Show"}
      
          
      </button>
      <h1> </h1>
<br />
       m  

      <p>
        Password length:{" "}
        {password.length >= 8 ? "Strong password" : "Weak password"}
      </p>
    </div>
  );
}

export default Password;
