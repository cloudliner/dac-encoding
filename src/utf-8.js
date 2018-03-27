console.log(`\
A : ${ Buffer.byteLength('A', 'utf8') } Bytes.
1 : ${ Buffer.byteLength('1', 'utf8') } Bytes.
Å : ${ Buffer.byteLength('Å', 'utf8') } Bytes.
ԯ : ${ Buffer.byteLength('ԯ', 'utf8') } Bytes.
あ : ${ Buffer.byteLength('あ', 'utf8') } Bytes.
漢 : ${ Buffer.byteLength('漢', 'utf8') } Bytes.
𠘨 : ${ Buffer.byteLength('𠘨', 'utf8') } Bytes.
🌈 : ${ Buffer.byteLength('🌈', 'utf8') } Bytes.`);
