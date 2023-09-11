function getSize(width, height, depth){
  
  let holdReturn = [];
  
  let surfaceArea = 2 * (width * height + height * depth + width * depth);
  
  let holdArea = width * height * depth; 
  
  holdReturn.push(surfaceArea);
  holdReturn.push(holdArea);
  
  return holdReturn;

}
