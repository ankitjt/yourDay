let something = '';

const tester = ( something ) =>
{
    let arr = [ 'Ankit', 'Shubham', 'Rishabh', 'Shefali' ]
    let newArr = []
    for ( let a of arr )
    {
        
        newArr.push(a)
        // return something
    }
    return newArr
}

// console.log( tester( ) )
let output = tester()
console.log(output);