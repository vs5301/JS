function selection_sort(array)
{
    var temp = 0
    for(var i = 0;i<array.length-1;i++)
    {
        for(var j = i+1;j<array.length;j++)
        {
            if(array[i]>array[j])
            {
                temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }
        }
    }
    return array
}

const array = [4,6,7,3,1,8,9,0,2,5]

const sortedArray = selection_sort(array)
console.log("Sorted array is "+ sortedArray)