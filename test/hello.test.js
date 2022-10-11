import hello from './hello.js'
import assert from 'assert';

it ('should print hello',()=>{

const helloResponce = hello();
assert.equal(helloResponce, 'hello');
});