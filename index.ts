function logger() {
  const { NODE_ENV } = process.env;
  const isLogEnvironment = NODE_ENV == 'development' || NODE_ENV == 'test';

  return function(message, ...moreMessages) {
    if(!isLogEnvironment) return;
    return console.log(message, ...moreMessages);
  }
}
