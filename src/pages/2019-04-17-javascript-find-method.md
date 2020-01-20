---
title: "JavaScript Array Methods: find()"
date: "2019-04-18"
content: "Web Developer Terrance Corley explains the find() method in JavaScript."
---

If you need to search through an array and find a unique item in the dataset then you should consider using the find() method, and here's why.

## Examples  

### find()  
```javascript
    let people = ['sally', 'tom', 'brent', 'james'];  

    let personIWant = people.find((person) => {
        return person === 'brent';
    });
    console.log(personIWant); // 'brent'
```  
The find() method searches our array looking for the *first* instance of the item that matches our conditional, in this case we are telling JavaScript to search for `'brent'`. If a match is found in the array, that match will be returned and the loop will break.

### foreach()    
```javascript
    let people = ['sally', 'tom', 'brent', 'james'];

    let personIWant;
    people.forEach((person) => {
        if (person === 'brent') {
            personIWant = person;
        }
    });
```  
We can achieve the same result as the find() method by using a foreach() method, but there is no direct way to break out of this type of loop once we've found the item we're looking for. As the name states, forEach loops are meant to run over each item in the array, so even when the loop finds the value we want ('brent'), we still continue to execute the loop for every item in the array.

### Traditional For Loop  
```javascript
    let people = ['sally', 'tom', 'brent', 'james'];

    let personIWant;
    for (let i = 0; i < people.length; i++) {
        if (people[i] === 'brent') {
            personIWant = 'brent';
            break;
        }
    };
```  
Another type of loop where you can have the same functionality as the find() method is a traditional for loop. You do however have to add your own break case, and the code for this is a little more lengthy.  

## The Takeaway  
If you are looking for a single unique item in an array or just looking to see if that item exists, the find() method might just be what you're looking for.
--- 
Thank you for taking the time to read my post today if you've made it this far! Happy coding! :)