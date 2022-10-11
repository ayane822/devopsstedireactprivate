import fetch from 'node-fetch';
import assert from "assert";

const login = async ()=>{
    const tokenResponse = await fetch('https://dev.stedi.me/login',{
  method: 'POST',
  body:JSON.stringify({
    userName: "scmurdock@gmail.com",
    password:"P@ssw0rd"
  })
})
return tokenResponse
};

export default login;
