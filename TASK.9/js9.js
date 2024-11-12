
1.
    var arr =[3,5,10,15,23,22,25,35,56];
    var arr1=[];
    for (i in arr){
        if (arr[i]%5==0){
        arr1.push(arr[i]);
        }
    }

    console.log(arr1)



2.
    var arr = ["htmL", "csS", "JavascripT", "react","angulaR","NodE","EXPREss"];
    var arr1=[];
    for (i in arr){
        if (arr[i][arr[i].length-1] == arr[i][arr[i].length-1].toUpperCase()){
            arr1[arr1.length] = arr[i];
        }
    }
    console.log(arr1)


3.
    var arr=["html","css","js","react","angular"];
    var arr1=[];
    for (i in arr){
        if (i%2==0){
            arr1[arr1.length] = arr[i].toUpperCase();
        }
    } 
    console.log(arr1)