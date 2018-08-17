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
  // splitFunctionsPointer is an array of the functions of the dependencies for the function that have been resolved, split up on the character ')'.
  // functionsPointer is an array of the functions of the dependencies for the function that have been resolved.
  // functionBodyString is the body of the function with the dependencies resolved.
  var splitFunctionPointer = func . toString ( ) . split ( ')' ) ,
      parametersPointer = splitFunctionPointer [ 0 ] . replace ( /.*\(/ , '' ) . split ( ", " ) ,
      dependenciesPointer = [ ] ,
      splitFunctionsPointer = [ ] ,
      functionsPointer = [ ] ,
      functionBodyString = func .toString ( ) . slice ( func . toString ( ) . indexOf ( '{' ) ) ;
  for ( let i = 0 ; i < parametersPointer . length ; i += 1 )
  {
    if ( this . dependency . hasOwnProperty ( parametersPointer [ i ] ) )
    {
      dependenciesPointer . splice ( i , 0 , this . dependency [ parametersPointer [ i ] ] ) ;
      splitFunctionsPointer . splice ( i , 0 , dependenciesPointer [ i ] . toString ( ) . split ( ')' ) ) ;
      functionsPointer . splice ( i , 0, new Function ( splitFunctionsPointer [ i ] [ 1 ] . toString ( ) ) ) ;
      if ( "string" === typeof functionsPointer [ i ] ( ) )
      {
        functionBodyString = functionBodyString . replace ( parametersPointer [ i ] + "()" , '\"' + functionsPointer [ i ] ( ) + '\"' ) ;
      }
      else
      {
        functionBodyString = functionBodyString . replace ( parametersPointer [ i ] + "()" , functionsPointer [ i ] ( ) ) ;
      }
    }
  }
  console.log(typeof this. dependency );
  return new Function ( functionBodyString ) ;
}
