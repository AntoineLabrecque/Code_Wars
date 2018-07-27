// Antoine Labrecque
function shortenNumber(suffixesPointer, baseNumber) {
  /* Algorithm 1: filter ( item )
   * Replaces the Xth power of a given base.
   * Parameters:  item ::  the input.
   * Returns: The input with the Xth power of a given base replaced, or the original input if it is not a number.*/
  return function filter ( item )
  {
    // resultString is the shortened number.
    var resultString = '' ;
    if ( ( Number ( item ) == item ) && ( item != '' ) )
    {
      item = Number ( item ) ;

      // suffixNumber is which suffix to use.
      var suffixNumber = 0 ;
      for ( ; ( item >= baseNumber) && ( suffixesPointer . length > suffixNumber + 1 ) ; suffixNumber += 1 )
      {
        item /= baseNumber ;
      }
      item -= item % 1 ;
      item += '' + suffixesPointer [ suffixNumber ] ;
    }
    resultString += item ;
    return resultString ;
  }
}
