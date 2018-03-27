exports.format = (literals, array) => {
  let formatted = '[ ';
  array.forEach((c, index) => {
    formatted = formatted + c;
    if (index !== array.length - 1) {
      formatted += ',  ';
    } else {
      formatted += ' ]';
    }
  });
  return literals[0] + formatted;
};
