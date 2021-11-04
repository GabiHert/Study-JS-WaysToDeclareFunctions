Hoisting();
function Hoisting() {
  console.log("Hoisting");
}
const FunctionExpression = function () {
    console.log("FunctionExpression called by 'executesFunctions'");
  };
  
  function executesFunctions(auxFunction) {
    auxFunction();
  }
  
  executesFunctions(FunctionExpression);

  const MyArrowFunction = () => {
    console.log("MyArrowFunction");
  };

  const obj = {
      Method(){console.log("Method")}
  }
  MyArrowFunction();
  obj.Method();