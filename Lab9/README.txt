# CIS445/545: JSON and JavaScript

## Objective: Use JavaScript and JSON together to generate the content of a web page.

In this lab, you will learn the JSON format by creating one. Then, use the object you created to dynamically generate the content of a web page.

You may use the Bradley Schedule of Classes page as a reference.

http://schedule.bradley.edu/scripts/schedule.dll

Your JSON document should carry all required fields, including but not limited to,

1. Semester (with school year)

2. Department

3. Class number/ID

4. Class name

5. Section number

6. Class time

7. Class location

8. Instructor 

* Be aware that your JSON document should be able to carry not only the classes in one semester. You should be able to add multiple semesters and multiple classes to the documents.
* Minimum requirement: at least two semesters in different school years, each one with at least two departments, and each department has at least two classes. Make sure the class time and location should not have a conflict.

After creating the JSON document, you should verify its format by running the document through JSONlint.

https://jsonlint.com/

If your JSON document failed the test, you automatically lose (at least) half of the points for the assignment.


## Instructions

1. For simplicity, creeate a JavaScript file called **lab9.js** and store your whole JSON object into a variable. For example,

        let jsonObj = [ {
                ...
            }, 
            {
                ...
            }, 
            ...
        ];

2. Create an HTML file called **lab9.html**, which initially has the following content

        <!DOCTYPE html>
        <html>
        <head>
            <title>Lab 9</title>
        </head>
        <body>
        </body>
        </html>

3. Link this HTML file to the script **lab9.js**.

4. Add all necessary HTML components to **lab9.html**, so you can print the semesters' and classes' info in your page.

    Hint: You may use paragraph, table, or other types of HTML content to render the information.

5. Modify **lab9.js** so it

    (a) retrieves the information from the JSON object,
    
    (b) can access the HTML components through DOM tree, and

    (c) puts the info. retrieved from the JSON object into the HTML.

    Hint: Don't forget our dear friend *document.getElementById*. Also, you shoud look into **innerHTML** (see references below).

6. (Optional) To make the page look good/better, you can also customize your CSS style (**lab9.css**) and link it to **lab9.html**.

7. Note: You should also use [JSLint](https://jslint.com) to verify your JavaScript code and make sure that there should be no errors.

8. Hint: This is also a good opportunity to learn how to use the developer tool provided by the browser to debug your JavaScript code.


## Reference

[JSON - Introduction (w3schools)](https://www.w3schools.com/js/js_json_intro.asp)

[JavaScript HTML DOM - Changing HTML](https://www.w3schools.com/js/js_htmldom_html.asp)
