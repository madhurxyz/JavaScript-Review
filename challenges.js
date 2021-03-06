    //Challenges:
        
    // Create a function that takes a name and title and returns an object containing these two properties
    // The object should look something like: {name: "Rudolf", title: "leader of the pack"}
    function objectCreator(name, title) {
        var obj = {
            name: name,
            title: title
        };
        return obj;
    }
    var object1 = objectCreator("Rudolf", "Leader of the Pack");
    var object2 = objectCreator("Enzo", "Cutter of Hair");
    console.log(object1);
    
    // Define an array (nameTitle) then push 5 name/title objects from your function.
    var count = 12;
    var nameTitle = [];
    for (i=0; i<count; i++) {
        var object3 = objectCreator("Name" + (i + 1), "Title" + (i + 1));
        nameTitle.push(object3);
    }
    console.log(nameTitle);
    
    // Write a function that takes a letter (a, b, c, etc) and returns an array containg all of the
    // names from nameTitle that begin with that letter. Use array.filter.

    //didn't use .filter()
    var instructors = [{name: "Adam", title: "Product College Lead"},
                {name: "Alan", title: "Back-End Instructor"},
                {name: "Mitchell", title: "Front-End Instructor"},
                {name: "Nikolas", title: "iOS Instructor"},
                {name: "Dan", title: "Product"}];

    var letter = prompt("Enter a letter: ");
    function containsLetter(letter, instructors) {
        var letterArray = [];
        for (i=0;i<instructors.length;i++) {
            var name = instructors[i].name;
            if (name[0].toLowerCase() == letter.toLowerCase()) {
                letterArray.push(name);
            }
        }
        return letterArray;
    }
    console.log(containsLetter(letter, instructors));


    
    // Write a function takes a title, and returns an array of all objects that have a matching title. 
    // Use filter again.

    //didn't use .filter()
    var newTitle = prompt("Enter title: ");
    function getObject(title, instructors) {
        var titleArray = [];
        for (i=0;i<instructors.length;i++) {
            var title = instructors[i].title;
            if (newTitle == title) {
                titleArray.push(instructors[i]);
            }
        }
        return titleArray;
    }
    console.log(getObject(newTitle, instructors));
    
    // Write a function that returns an array containing strings made from the names and titles. 
    // Each string should look like: "Name Title" or "Diana the duchess of york" or something similar. 
    // Use array.map().

    //didn't use .map()
    var name5 = "";
    var title5 = "";
    var string = "";
    var stringArray = [];
    function getString(instructors) {
        for (i=0;i<instructors.length;i++) {
            name5 = instructors[i].name;
            title5 = instructors[i].title;
            string = name5 + ", " + title5;
            stringArray.push(string);
        }
        return stringArray;
    }
    console.log(getString(instructors));
    
    // Create an array of random numbers. Bonus: Use a loop and add 100 random numbers or write a function to return an array of any number of random numbers. 

    // //part1
    // var rand = Math.floor((Math.random()*100) + 1);
    // var randArray = [];
    // randArray.push(rand);
    // rand = Math.floor((Math.random()*100) + 1);
    // randArray.push(rand);
    // rand = Math.floor((Math.random()*100) + 1);
    // randArray.push(rand);
    // console.log(randArray);


    //part 2
    // var rand = 0;
    // randArray = [];
    // for (i=0;i<100;i++) {
    //     rand = Math.floor((Math.random()*100)+1);
    //     randArray.push(rand);
    // }
    // console.log(randArray);

    //part 3
    var randArray = [];
    function getRandArray(arrayLength) {
        for (i=0;i<arrayLength;i++) {
            var rand = Math.floor((Math.random()*100) + 1);
            randArray.push(rand);
        }
        return randArray;
    }
    var arrayLength = 100;
    console.log(getRandArray(arrayLength));

    // Write a function that returns an aray of all numbers 0.5 and above. use filter, map, or reduce.
    var aboveFifty = [];
    function getAboveFifty(randArray) {
        for (i=0;i<randArray.length;i++) {
            if (randArray[i]>=50) {
                aboveFifty.push(randArray[i]);
            }
        }
        return aboveFifty;
    }
    console.log(getAboveFifty(randArray));

    // Write a function that returns an array of all numbers below 0.5. Use filter, map, or reduce.
    var belowFifty = [];
    function getBelowFifty(randArray) {
        for (i=0;i<randArray.length;i++) {
            if (randArray[i]<50) {
                belowFifty.push(randArray[i]);
            }
        }
        return belowFifty;
    }
    console.log(getBelowFifty(randArray));
    
    // Write a function that returns the total of all random numbers. Use filter, map, or reduce.
    var sum = 0;
    function getSum(randArray) {
        for (i=0;i<randArray.length;i++) {
            sum += randArray[i];
        }
        return sum;
    }
    console.log(getSum(randArray));
    
    // Write a function that returns the average of all of the random numbers. Use filter, map, or reduce.
    var avgSum = 0;
    var average = 0;
    function getAverage(randArray) {
        for (i=0;i<randArray.length;i++) {
            avgSum += randArray[i];
        }
        average = avgSum/randArray.length;
        return average;
    }
    console.log(getAverage(randArray));
