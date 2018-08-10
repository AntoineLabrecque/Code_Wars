// Antoine Labrecque
/**
 * Constructor DependencyInjector
 * @param {Object} - object with dependencies
 */
var DI = function (dependency) {
  this.dependency = dependency;
};

// Should return new function with resolved dependencies
DI.prototype.inject = function (func) {
  // splitFunctionPointer is the function split up on the character ')'.
  // parametersPointer is an array of the parameters of the function.
  // dependenciesPointer is an array of the dependencies for the function that have been resolved.
  // bodiesPointer is an array of the bodies of the dependencies for the function that have been resolved.
  var splitFunctionPointer = func . toString ( ) . split ( ')' ) ,
      parametersPointer = splitFunctionPointer [ 0 ] . replace ( /.*\(/ , '' ) . split ( ", " ) ,
      dependenciesPointer = [ ] ,
      bodiesPointer = [ ] ;
  splitFunctionPointer . splice ( 0 , 1 ) ;
  splitFunctionPointer = splitFunctionPointer . join ( ')' ) ;
  for ( var i = 0 ; i < parametersPointer . length ; i += 1 )
  {
    dependenciesPointer . splice ( i , 0 , this . dependency [ parametersPointer [ i ] ] ) ;
    bodiesPointer . splice ( i , 0 , dependenciesPointer [ i ] . toString ( ) . split ( ')' ) ) ;
    bodiesPointer [ i ] . splice ( 0 , 1 ) ;
  }
  console.log(dependenciesPointer);
  var i = "return \"" ;
  i = i . concat ( func ( this.dependency[parametersPointer[0]] , this.dependency[parametersPointer[1]] , this.dependency[parametersPointer[2]]).toString() + "\" ;") ;
  console .log (i);
  return new Function ( i ) ;
}
