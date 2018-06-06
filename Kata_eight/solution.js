function isNice(arr){
  if(arr.length === 0) {
    return false;
  }
  let isNice = true;
  arr.forEach(a => {
    if(arr.includes(a + 1 ) || arr.includes(a - 1)) {
    } else {
    isNice = false;
    }});
  return isNice;
  }