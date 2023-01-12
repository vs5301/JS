function linear_search(array, num)
{
    for(let i=0;i<array.length;i++)
    {
        if(array[i] == num)
            return i;
    }
    return -1;
}

const numbers = [1,2,3,4,5,6,7,8,9,10];

const result = linear_search(numbers,2);

if(result == -1)
   console.log('element not found');
else 
   console.log(`element found at index ${result}`);