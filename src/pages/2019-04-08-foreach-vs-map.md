---
title: "JavaScript Array Methods: forEach() vs map()"
date: "2019-04-08"
content: "Web Developer Terrance Corley explains the difference between the forEach and map methods in JavaScript."
---

If you're fairly new to JavaScript or are now just coming across the forEach() and map() methods, you might be a little confused on the differences and when each one is appropriate. Simply put, `map()` will make a copy of the specified array and run your specified function on each item in the array and will return those items into the new array, which you can store in a variable. `forEach()` will run your specified function on each item in the array but does *not* return a new array, it modifies the original one.

## forEach()    
```javascript
    let someArray = [1, 2, 3];
    someArray.forEach(function(currentNumber) {
        currentNumber++;
    });

    console.log(someArray); // [2, 3, 4]
```

## map()  
```javascript
    let someArray = [1, 2, 3];
    let newArray = someArray.map(function(currentNumber) {
        currentNumber++;
    });

    console.log(someArray); // [1, 2, 3]
    console.log(newArray); // [2, 3, 4]
```  

## The Takeaway
If you are just trying to print out the contents of the array or if you truly want to modify the original array, then use `forEach()`. If you are a fan of functional programming or if you just need the original array to stay intact and just need to access the data within that array, use `map()`. It's also important to note that `map()` is a little more performant than `forEach()`. For an example check out this link to see a benchmark test [https://jsperf.com/loop-vs-map-vs-foreach](https://jsperf.com/loop-vs-map-vs-foreach).

--- 
Thank you for taking the time to read my post today if you've made it this far! Happy coding! :)