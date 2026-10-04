# Student Search System

A simple and responsive **Student Search System** built using **HTML, CSS, and JavaScript**.

This project allows users to search for students by their name. The matching student information is displayed dynamically on the webpage.

## Features

* Search students by name
* Displays student name
* Displays marks
* Displays class
* Displays address
* Uses JavaScript `filter()` for searching
* Dynamic student cards using DOM manipulation
* Shows "No student found" when there is no match
* Responsive design for mobile devices

## Technologies Used

* HTML5
* CSS3
* JavaScript

## Project Structure

```text
Student-Search/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## How It Works

1. Enter a student's name in the search box.
2. Click the **Search** button.
3. JavaScript gets the entered search text.
4. The `filter()` method searches through the student array.
5. Matching students are displayed dynamically.
6. If no student matches the search, **No student found** is displayed.

## Student Information

Each student is stored as a JavaScript object containing:

```js
{
    name: "Rahul Kumar",
    marks: 85,
    class: "12th",
    address: "Jamshedpur"
}
```

## JavaScript Concepts Used

* Arrays
* Objects
* Functions
* `filter()`
* `forEach()`
* `addEventListener()`
* `querySelector()`
* `createElement()`
* `innerHTML`
* String methods
* DOM Manipulation

## How to Run

1. Download or clone this project.
2. Open the project folder.
3. Open `index.html` in your browser.
4. Enter a student name in the search box.
5. Click **Search**.

## Example

If you search:

```text
Rahul
```

The system will display:

```text
Rahul Kumar
Marks: 85
Class: 12th
Address: Jamshedpur
```

## Future Improvements

* Search by class
* Search by address
* Search by marks
* Add student form
* Delete student
* Edit student information
* Add sorting functionality
* Add multiple search filters

## Author

Created as a JavaScript practice project to learn **arrays, objects, filter(), DOM manipulation, and event handling**.
