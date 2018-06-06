
function capitalize(s) {
  let first = '';
  let second = '';
  for (let i = 0; i < s.length; i++) {
      if (i % 2 === 0) {
          first += s[i].toUpperCase();
      } else { 
          first += s[i]; 
      }
  } 
  for (let i = 0; i < s.length; i++) { 
      if (i % 2 === 1) { 
         second += s[i].toUpperCase();
      } 
      else { 
         second += s[i]; 
      }
  }
  return [first, second];
  };