(function () {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    var person = {
        firstName: "Valeria",
        lastName: "Meza"
    };
    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function () {
        // return ("Hello from " + person.firstName + " " + person.lastName + "!");
        // or
        return ("Hello from " + this.firstName + " " + this.lastName + "!");
    };
    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */


    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    // for (let i = 0; i <= shoppers.length; i++) {
    //     if (shoppers[i].amount > 200) {
    //         console.log(shoppers[i].name + " Price: " + shoppers[i].amount + "\n" + "Discount total: " + (shoppers[i].amount * .12) + "\n" + "Amount after Discount " + (shoppers[i].amount - (shoppers[i].amount * .12)));
    //     } else {
    //         console.log(shoppers[i].name + " Price: " + shoppers[i].amount + "\n" + "NO Discount" + "\n" + "Amount: " + shoppers[i].amount);
    //     }
    // }
    shoppers.forEach(function (element, index) {
        // if (element.amount > 200) {
        //     // get a discount
        //     console.log(element.name + " Price: " + element.amount + "\n" + "Discount total: " + (element.amount * .12) + "\n" + "Amount after Discount " + (element.amount - (element.amount * .12)));
        // } else {
        //     // don't get discount
        //     console.log(element.name + " Price: " + element.amount + "\n" + "No Discount" + "\n" + "Amount: " + element.amount);
        // }

        // cleaner code
        var discountedPrice = element.amount;
        var discount = 0;

        if(element.amount > 200) {
            // get discount
            discount = 12;
            discountedPrice = .12 * element.amount;
        }
        console.log(element.name + " Price: " + element.amount + " discount: " + discount + "% $" + discountedPrice);
    });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    var books = [
        {
            title: "Harry Potter",
            author: {
                firstName: "J.K.",
                lastName: "Rowling",
            }
        },
        {
            title: "The Hunger Games",
            author: {
                firstName: "Suzanne",
                lastName: "Collins",
            }
        },
        {
            title: "Eloquent JavaScript",
            author: {
                firstName: "Marijn",
                lastName: "Haverbeke",
            }
        },
        {
            title: "A Child Called \"It\"",
            author: {
                firstName: "David",
                lastName: "Pelzer",
            }
        },
        {
            title: "To Kill a Mockingbird",
            author: {
                firstName: "Harper",
                lastName: "Lee",
            }
        }];
    console.log(books[0].author.firstName);
    console.log(books[4].title);
    console.log(books[2].author.lastName);
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    books.push(createBook("Something", "Book Book"));
    books.push(createBook("Another", "Valeria Meza"));
    books.push(createBook("Hello", "Hello World"));
    books.forEach(function (book, index) {
        console.log("Book # " + (index + 1) + "\n" + "Title: " + books[index].title + "\n" + "Author: " + books[index].author.firstName + " " + books[index].author.lastName + "\n" + "---");
        showBookInfo(book);
    });

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    // function that prompts user to add a book.
    // function createBook(title, author) {
    //     title = prompt("Title name?");
    //     author = prompt("Author name?");
    //     var book = [
    //         {
    //             title,
    //             author,
    //         }
    //     ];
    //     console.log("Book: " + book[0].title + " Author: " + book[0].author);
    // }
    // createBook();

    function createBook(aTitle, authorName) {
        var names = authorName.split(" ");
        return {
            title: aTitle,
            author: {
                firstName: names[0],
                lastName: names[1]
            }
        }
    }
    console.log(createBook("Harry Potter", "JK Rowling"));

    function showBookInfo(book) {
        console.log("showbook: ");
        console.log("Title: " + book.title);
        console.log("Author: " + book.author.firstName + " " + book.author.lastName);
    }
})();

