format = (array) => {
  let formatted = '[ ';
  array.forEach((c, index) => {
    formatted = formatted + c;
    if (index !== array.length - 1) {
      formatted += ',  ';
    } else {
      formatted += ' ]';
    }
  });
  return formatted;
};
module.exports = format
