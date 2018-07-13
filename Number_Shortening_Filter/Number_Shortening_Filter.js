function shortenNumber(suffixes, base) {
  return function filter ( items )
  {
    // result is the shortened number.
    var result = '' ;
    if ( Number ( items ) == items )
    {
      // suffix is which suffix to use.
      var suffix = 0 ;
      for ( ; ( items >= base) && ( suffixes . length > suffix ) ; suffix += 1 )
      {
        items /= base ;
        items -= ( items % base ) ;
      }
      items += suffixes [ suffix ] ;
    }
    result += items ;
    return result ;
  }
}
