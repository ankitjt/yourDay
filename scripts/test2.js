
const validateFields = () =>
{
   
    if ( str1.value === '' || str2.value === '')
    {
        outputBox.innerHTML = `<h1 class='text-red-600'>Fields cannot be blank </h1>`
    }
}