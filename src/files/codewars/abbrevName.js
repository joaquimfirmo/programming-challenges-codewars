module.exports = (name) => {
    return  name.split(" ").map(nameItem => nameItem.toUpperCase().slice(0, 1)).join('.')  
  } 