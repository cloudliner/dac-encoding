const a = require('./array-format');
console.log(`\
が : ${ a.f([... 'が']) }
  ${ [... 'が'].length } CodePoints,
  ${ 'が'.length } Chars (UTF-16),
  ${ Buffer.byteLength('が', 'utf8') } Bytes (UTF-8).
🏳️‍🌈  : ${ a.f([... '🏳️‍🌈']) }
  ${ [... '🏳️‍🌈'].length } CodePoints,
  ${ '🏳️‍🌈'.length } Chars (UTF-16),
  ${ Buffer.byteLength('🏳️‍🌈', 'utf8') } Bytes (UTF-8).
🏴󠁧󠁢󠁳󠁣󠁴󠁿  : ${ a.f([... '🏴󠁧󠁢󠁳󠁣󠁴󠁿']) }
  ${ [... '🏴󠁧󠁢󠁳󠁣󠁴󠁿'].length } CodePoints,
  ${ '🏴󠁧󠁢󠁳󠁣󠁴󠁿'.length } Chars (UTF-16),
  ${ Buffer.byteLength('🏴󠁧󠁢󠁳󠁣󠁴󠁿', 'utf8') } Bytes (UTF-8).`);
