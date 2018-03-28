const TextEncoder = require('./text-encoder');
const enc = new TextEncoder('utf-8');

console.log(`\
A : ${ enc.encode('A').byteLength } Bytes.
1 : ${ enc.encode('1').byteLength } Bytes.
Å : ${ enc.encode('Å').byteLength } Bytes.
ԯ : ${ enc.encode('ԯ').byteLength } Bytes.
あ : ${ enc.encode('あ').byteLength } Bytes.
漢 : ${ enc.encode('漢').byteLength } Bytes.
𠘨 : ${ enc.encode('𠘨').byteLength } Bytes.
🌈 : ${ enc.encode('🌈').byteLength } Bytes.`);
