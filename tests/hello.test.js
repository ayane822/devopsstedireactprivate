const {hello} = require('./hello.js')

it ('should print hello',()=>{

const helloResponce = hello();
expect(helloResponce).toBe('hello');
});