function stringLength(string) {
  if(string.length < 1 || string.length > 10) {
    return 'Inavalid parameter';
  }
  else {
    return string.length;
  }
  
}

module.exports=stringLength;