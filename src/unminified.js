function args(funcargs, reqargfuncs, callback) {
	funcargs = Array.from(funcargs)
	
	var equal = (function() {
		var eq = true
		
		for (var i = 0; i < funcargs.length; i++) {
			var item = funcargs[i]
			eq = (reqargfuncs[i] === undefined ? () => false: reqargfuncs[i])(item) && eq
		}
		
		return eq
	})() && (funcargs.length === reqargfuncs.length)
	if (equal) callback()
	
  return args
}
