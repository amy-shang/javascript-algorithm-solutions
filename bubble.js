function bubbleSort(theArray) {
     var i, j;
     for (i = theArray.length - 1; i >= 0; i--) {
         for (j = 0; j <= i; j++) {
             if (theArray[j + 1] < theArray[j]) {
                 var temp = theArray[j];
                 theArray[j] = theArray[j + 1];
                 theArray[j + 1] = temp;
             }
         }
     }
     return theArray;
}
var arr = [2, 3,5,1,4]
console.log(bubbleSort(arr));