// 1. SOLVE USING FOR-IN LOOP

    var car = { brand:"Toyota", model:"Corolla", year:"2020"};
    for (i in car){
        console.log(car[i].toUpperCase())
    }

    //output -- TOYOTA COROLLA 2020

2.
    var numbers = [1, 2, 3, 4, 5];
    for (i in numbers){
        console.log("HI")
    }

    //output -- HI HI HI HI HI
3.
    var fruits = ['Apple', 'Banana', 'Cherry', 'Date'];
    for ( i in fruits){
        console.log(fruits[i].toUpperCase())
    }

    //output -- APPLE BANANA CHERRY DATE

4.
    var obj = {
        name:"John",age:30,adress: {city:"Lo Angeles",state:"CA"}
    };
    obj.adress.city="San Francisco"
    console.log(obj);

    //output -- {name:'Jhon ,age: 30, adress: {city: 'San Francisco' , state:'CA}}

5.
    var car = {brand :'Toyota',model:'Carry',year:2020};
    car.year=2022
    console.log(car)

    //output -- { brand: 'Toyota', model: 'Carry', year: 2022 }

6.
    var recipe = {name:'Pasta',servings:2,ingredients:['noodles','sauce']};
    recipe.ingredients[2]='cheese';
    console.log(recipe)

    //output -- { name: 'Pasta',servings: 2, ingredients: [ 'noodles', 'sauce', 'cheese' ]}
