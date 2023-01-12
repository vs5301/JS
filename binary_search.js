function binary_search(array,key)
{
        let start = 0;
        let end = array.length - 1;
    
        while (start <= end) 
        {
            let middle = Math.floor((start + end) / 2);
    
            if (array[middle] === key)
                    return middle; 
            else if (array[middle] < key) 
                start = middle + 1;
            else
                end = middle - 1;
        }
        return -1;
}

const numbers = [1,2,3,4,5,6,7,8,9];

const result = binary_search(numbers,8);

if(result == -1)
   console.log('element not found');
else 
   console.log(`element found at index ${result}`);