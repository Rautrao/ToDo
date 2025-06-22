## This is a simple Todo App(Html/Css/JavaScript)

-- It has basic CURD application(create,read ,update and delete)
-- Also features like edit, Sort by date , Pin to top,completed and not- not completed
-- It has a progress bar at the top of the page which gets updated when we finish a task 

## How to Run

-- Open `index.html` in a browser
-- step 1 :First sign up to the page
-- step 2 :Log in to the page 
-- step 3 :ToDo app will be available to use

## Detailed explanation 

-- Technologies used: 
    - HTML5
    - CSS3 (Flexbox, Grid, Media Queries)
    - Vanilla JavaScript 
    - localStorage API
    - Confetti library

-- How it works :
    - Sign up to the page using email-id and password
    - Log in 
    - you will be redirected to Todo App interface
    - tasks are added via input of type text in the form section 
    - After typing text we should add date 
    - and then press Add Task button
    - Added task will be displayed in the task list with 3 options 
    - delete ,edit and pin to top
    - delete symbol will be used to delete the task
    - edit symbol will be used to edit the task
    - and pin symbol will be used to pin to top 
    - also at the there is an option to sort by date
    - we can also check box if the task is completed
    - There is a progress bar which tracks the completion of our tasks

-- Mobile compatabality
    -The app uses media queries to ensure it works smoothly on phones (≤600px), including stacked input fields and larger tap targets.

-- File name :explanation
    - index.html contains code for user authencation interface.
    - script.js contains javaScript code required for user authencation page.
    - style.css contains css code for user authencation ui.
    - todo.html contains html code required for todo app interface
    - todo-script.js contains javaScript code required for todo app scripting
    - todo-styles.css contains code for styling todo app
-- user Authencation
    - For user authencation I used firebase 
