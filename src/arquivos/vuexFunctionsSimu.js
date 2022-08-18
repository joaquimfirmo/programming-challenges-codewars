
///['a', 'b', 'c'].reduce((a, v) => ({ ...a, [v]: v}), {}) 

module.exports = (arr) => {
    const availableFunctions = {
        a: () => 'Função A',
        b: () => 'Função B'
    };

    return Object.keys(availableFunctions).reduce((acc, key) => (
        {
          ...acc,
          ...(arr.includes(key)
            ? { [key]: availableFunctions[key] }
            : {}
          )
        }
      ), {})
}


