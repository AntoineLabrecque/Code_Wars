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
  /* Algorithm 1: resolved ( )
   * The given function with the dependencies resolved.
   * Returns: Whatever the given function would have returned when its dependencies are resolved.*/
  return function resolved ( )
  {
    func ( ) ;
  } ;
}
