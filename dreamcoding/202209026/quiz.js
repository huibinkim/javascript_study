// function calculate (command, a, b)


function calculate(command, a, b){
  switch(command){
    case 'add':
      return a+b;
    case 'divide':
      return a/b;
    default:
      throw Error('unknown command');
  }
}
console.log(calculate('add', 2, 3));
