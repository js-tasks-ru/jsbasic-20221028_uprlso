function isEmpty(obj)  {
  let newObj = {...obj};

  if (Object.keys(newObj).length === 0)  {
      return true;
  }

  for (key in newObj)  {
    let element = newObj[key];

    if (element === undefined || 
        element
    )  {
        return false;
    }
  }
}