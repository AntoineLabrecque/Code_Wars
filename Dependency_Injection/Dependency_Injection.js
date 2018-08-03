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
  // parametersPointer is an array of the parameters of the function.
  var parametersPointer = func . toString ( ) . replace ( /.*\(/ , '' ) . split ( ')' , 1 ) ;
  console.log(parametersPointer);
  parametersPointer = parametersPointer [ 0 ] . split ( ", " ) ;
  console.log(parametersPointer);
  console.log(func.length);
  do
  {
    threwBoolean = false ;
    try
    {
      func ( ) ;
    }
    catch ( e )
    {
      dep = e . message . split ( " " , 1 ) ;
      console.log(dep);
      this . dependency [ dep [ 0 ] ] ;
      threwBoolean = true ;
    }
  }
  while ( !threwBoolean ) ;
  /* Algorithm 1: resolved ( )
   * The given function with the dependencies resolved.
   * Returns: Whatever the given function would have returned when its dependencies are resolved.*/
  return func ("", this.dependency[dep[0]],"" ) ;
}
