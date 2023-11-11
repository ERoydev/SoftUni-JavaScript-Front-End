function solve(arr) {  
    arr.reduce((data, item) => {
      let [town, latitute, longitude] = item.split(' | ')
      data.push({'town': town, 'latitude': Number(latitute).toFixed(2), 'longitude': Number(longitude).toFixed(2)})
      return data
  }, []).forEach((el) => {
    console.log(el);
  })

}

solve(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
