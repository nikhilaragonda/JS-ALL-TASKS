
// JOIN METHOD:

1.
    var fruits = ['Apple', 'Banana', 'Orange'];
    console.log(fruits.join());

    //output -- Apple, Banana, Orange

2.
    var numbers = [1, 2, 3, 4, 5];
    console.log(numbers.join("-"))

    //output --  1-2-3-4-5

3.
    var str = ["H", "E", "L", "L", "O"];
    console.log(str.join(""));

    //output -- HELLO


//SLICE METHOD:

4.
    var text = "JavaScript is a awesome";
    console.log(text.slice(0,10));

    //output -- JavaScript



5.
    var sentence = "I lOVE Learning JavaScript";
    console.log(sentence.slice(7,15));

    //output -- Learning

6.
    var text = "Fronted Development";
    console.log(text.slice(-11))

    //output -- Development


    //SLIPT METHOD:

7.
        var date = "2024-10-21";
        console.log(date.split("-"));

        //output -- ["2024", "10", "21"]


8.
    var text="I Love JavaScript programming";
    var x = text.split(" ");
    var y = x.slice(0,2);
    console.log(y);


    //output -- ['I', 'Love']


9.
    var url = 'https://www.example.com/path/page.html';
    console.log(url.split("/"));

    //output -- ['https:', '', 'www.example.com', 'path' 'page.html']