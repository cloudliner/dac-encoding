const format = require('./array-format');
const TextEncoder = require('./text-encoder');
const enc = new TextEncoder('utf-8');

console.log(`\
が : ${ format([... 'が']) }
  ${ [... 'が'].length } CodePoints,
  ${ 'が'.length } Chars (UTF-16),
  ${ enc.encode('が').byteLength } Bytes (UTF-8).
🏳️‍🌈  : ${ format([... '🏳️‍🌈']) }
  ${ [... '🏳️‍🌈'].length } CodePoints,
  ${ '🏳️‍🌈'.length } Chars (UTF-16),
  ${ enc.encode('🏳️‍🌈').byteLength } Bytes (UTF-8).
🏴󠁧󠁢󠁳󠁣󠁴󠁿  : ${ format([... '🏴󠁧󠁢󠁳󠁣󠁴󠁿']) }
  ${ [... '🏴󠁧󠁢󠁳󠁣󠁴󠁿'].length } CodePoints,
  ${ '🏴󠁧󠁢󠁳󠁣󠁴󠁿'.length } Chars (UTF-16),
  ${ enc.encode('🏴󠁧󠁢󠁳󠁣󠁴󠁿').byteLength } Bytes (UTF-8).`);
