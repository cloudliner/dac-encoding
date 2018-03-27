const f = require('./format');

console.log(f.format `が : ${ [... 'が'] }`);
console.log(`が : ${ [... 'が'].length } CodePoints,
     ${ 'が'.length } Chars (UTF-16),
     ${ Buffer.byteLength('が', 'utf8') } Bytes (UTF-8)`);
console.log(f.format `🏳️‍🌈  : ${ [... '🏳️‍🌈'] }`);
console.log(`🏳️‍🌈  : ${ [... '🏳️‍🌈'].length } CodePoints,
     ${ '🏳️‍🌈'.length } Chars (UTF-16),
     ${ Buffer.byteLength('🏳️‍🌈', 'utf8') } Bytes (UTF-8)`);
console.log(f.format `🏴󠁧󠁢󠁳󠁣󠁴󠁿  : ${ [... '🏴󠁧󠁢󠁳󠁣󠁴󠁿'] }`);
console.log(`🏴󠁧󠁢󠁳󠁣󠁴󠁿  : ${ [... '🏴󠁧󠁢󠁳󠁣󠁴󠁿'].length } CodePoints,
     ${ '🏴󠁧󠁢󠁳󠁣󠁴󠁿'.length } Chars (UTF-16),
     ${ Buffer.byteLength('🏴󠁧󠁢󠁳󠁣󠁴󠁿', 'utf8') } Bytes (UTF-8)`);
