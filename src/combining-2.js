console.log('が : ', [... 'が'].toString());
console.log('が : ', [... 'が'].length, 'CodePoints');
console.log('が : ', 'が'.length, 'Chars (UTF-16)');
console.log('が : ', Buffer.byteLength('が', 'utf8'), 'Bytes (UTF-8)');

console.log('🏳️‍🌈 : ', [... '🏳️‍🌈'].toString());
console.log('🏳️‍🌈 : ', [... '🏳️‍🌈'].length, 'CodePoints');
console.log('🏳️‍🌈 : ', '🏳️‍🌈'.length, 'Chars (UTF-16)');
console.log('🏳️‍🌈 : ', Buffer.byteLength('🏳️‍🌈', 'utf8'), 'Bytes (UTF-8)');

console.log('🏴󠁧󠁢󠁳󠁣󠁴󠁿 : ', [... '🏴󠁧󠁢󠁳󠁣󠁴󠁿'].toString());
console.log('🏴󠁧󠁢󠁳󠁣󠁴󠁿 : ', [... '🏴󠁧󠁢󠁳󠁣󠁴󠁿'].length, 'CodePoints');
console.log('🏴󠁧󠁢󠁳󠁣󠁴󠁿 : ', '🏴󠁧󠁢󠁳󠁣󠁴󠁿'.length, 'Chars (UTF-16)');
console.log('🏴󠁧󠁢󠁳󠁣󠁴󠁿 : ', Buffer.byteLength('🏴󠁧󠁢󠁳󠁣󠁴󠁿', 'utf8'), 'Bytes (UTF-8)');
