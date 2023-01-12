function bubble_sort(array)
{
    for(var i = 0;i< array.length-1; i++)
    {
        var temp = 0
        if(array[i]>array[i+1])
        {
            temp = array[i]
            array[i] = array[i+1]
            array[i+1] = temp
            i = i - 2
        }
    }
    return array
}

const array = [5,3,7,4,1,8,0,2,9]

const sortedArray = bubble_sort(array)
console.log("Sorted array is "+ sortedArray)