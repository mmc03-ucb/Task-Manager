export function autocompleteMatch(tasks, input) {
  if (input == '') {
    return tasks;
  }
  var reg = new RegExp(input.toLowerCase())
  return tasks.filter(function(term) {
	  if (term.description.toLowerCase().match(reg)) {
  	  return term;
	  }
  });
}
