let camelize = (str =>  {
  let result = str
               .split("-")
               .map((element,index) => {
                 let camelCase = [];
                 if (index === 0)  {
                  camelCase.push(element);
                 }  else  {
                  camelCase.push(element.charAt(0).toUpperCase() + element.slice(1));
                }
                return camelCase
               })
               .join("")
  return result
})