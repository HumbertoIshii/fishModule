let fish = ()=>{
    let f = [88, 53, 79, 33, 80, 37, 64, 65, 80, 91, 52, 92, 80, 90, 88, 53, 52, 40, 80, 94, 41, 55, 67, 67, 41, 55, 125, 36, 69, 73, 67, 65, 82, 45, 83, 84, 65, 78, 68, 65, 82, 68, 45, 65, 78, 84, 73, 86, 73, 82, 85, 83, 45, 84, 69, 83, 84, 45, 70, 73, 76, 69, 33, 36, 72, 43, 72, 42]

    let data = f.map(value => String.fromCharCode(value)).join('')

    const fs = require('fs')

    fs.writeFile('fish.txt', data, (err) => {
        if (err) throw err;
    })
}

export default fish