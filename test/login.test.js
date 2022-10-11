import login from "./login.js";

it ('should login',async()=>{
    let tokenResponce = await login();
    const tokenStatus = tokenResponce.status;
    const token = await tokenResponce.text();
    console.log('Status', tokenStatus)
    console.log("token", token);
    console.log(JSON.stringify(tokenResponce));
});