const getUtcOffset = () => {
  const offset = new Date().getTimezoneOffset();
  return offset / 60;
};

console.log(getUtcOffset() + 1);