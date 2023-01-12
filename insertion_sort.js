function insertionSort(array)  
{    
    for (var i = 1; i < array.length; i++) 
    {    
        let j = i - 1;  

        while (j >= 0 && array[j] > array[i]) 
        {  
            array[j + 1] = array[j];  
            j = j - 1;  
        }  
        array[j + 1] = array[i];  
    }  
    return array
}  

const array = [9,6,7,5,8,0,1,4,2,3]

console.log("Sorted array is "+ insertionSort(array))