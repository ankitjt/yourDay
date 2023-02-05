const data = [
  { name: 'John', price: 400 },
  { name: 'Ankit', price: 100 },
  { name: 'Jane', price: 600 },
  { name: 'Neymar', price: 90 },
]

const filteredItems = data.filter( ( item ) =>
{
  return item.price <= 100
} )
console.log( filteredItems )

const mappedItems = data.map( ( items ) =>
{
  return items.name
} )
console.log(mappedItems);