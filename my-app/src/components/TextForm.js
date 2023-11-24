import React, { useState } from 'react'
import './T.css';


export default function TextForm(props) {
    
 
   
 
    const [password, setPassword] = useState('');
   const [loggedIn, setLoggedIn] = useState(false);
  
const handleonChange=(event)=>{
  setPassword(event.target.value)
}

  const message= ()=>{
      if (password === '123') {
         
              document.write("welcome")
              setLoggedIn(true);
         }
         else
         {
          alert("Opps! wrong password Try again");
         }


        }
 
        if (loggedIn) {
            // document.write("welocmee");
            // return <Redirect to="/home" />;
        }
  

       return (
    
     
<form>

<body>
  <center>
<table border="1">
    <tr><th>Enter name  :</th></tr>
    <tr><th><input type="text"></input><br></br></th></tr>
    <tr><th>Enter password:</th></tr>
    <tr><th><input type="password" value={password} onChange={handleonChange} ></input><br></br></th></tr>
    <tr><th><input type="submit" value="login" onClick={message} ></input></th></tr>

  </table>
  </center> 
    </body>
    </form>
     
  );



};