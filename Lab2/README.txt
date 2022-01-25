# Lab 2: Simple HTML5 and Its Validation

## Objective

* In this lab, you'll learn fundamental HTML 5 syntax through creating a pure webpage (without 
  considering the layouot) and practice to use Git/GitHub

## Instructions

0. If you have questions on the HTML tags, first refer to the two cheat sheets provided in the references!

1. Get a copy of the repository to your machine (Hint: **git clone**)

2. In the repository folder, create a file **aboutme.html**

3. The content of this HTML file should follow the [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) standard. So, this file should first include some statements to indicate its HTML5 content. See [Introduction to HTML 5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Introduction_to_HTML5) for the required statements

4. This page should include a **title**, which is NOT displayed inside of the webpage; instead, it will appear in the browser. Here, let the title be "About Me"

   * Note: Make sure you put the **title** at [the right place]((https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)) of the HTML file

5. Let's put some content in the webpage. The content includes

   * Header - CIS 445/545 Lab 2
   * Your name
   * Your short bio./intro.
   * Your motto
   * Your class schedule
   * Your favorite sports/movies/books/etc.
   * A Bradley logo
   * A copyright statement

![page layout](lab2-layout.jpg)

   * Note: The content (the components mentioned here) should be properly structured with proper tags/elements based on the semantic. Refer to [Document and website structure](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure) for further instructions

6. Requirements

    * The header should be a [top-level heading](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals)
    * Your class schedule should be presented in a [table](https://www.w3schools.com/html/html_tables.asp)
    * The favorites should be put in a [list](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals) (either unordered or ordered)
    * The Bradley logos can be found [here](https://www.bradley.edu/offices/marketing/identity/logo-downloads/)
    * In addition to including the Bradley logo, you should also make it a hyperlink to the [Bradley University homepage](https://www.bradley.edu)
    * At the very end, include a simple copyright statement such as

            Copyright&copy;2020, [your name], Computer Science and Information Systems, Bradley University

## How to validate your HTML file

* Use W3C's [Markup Validation Service](https://validator.w3.org/). Choose the tab **Validate by File Upload** or **Validate by Direct Input**(Copy/Paste the HTML file content)
* To validate through **Validate by URI**, you need to get the webpage to the **public_html** folder under your account on playground.bradley.edu.
  * Instead of uploading the files everytime you make some changes, you can use Git/GitHub through
    - On your computer, **commit** and **push** your local repository (for this lab) to GitHub
    - Log on to playground.bradley.edu, and change directory (**cd**) to **public_html** folder
    - Clone the lab's GitHub repository to the **public_html** folder on playground.bradley.edu
    - You can now use **https://playground.bradley.edu/~[your Bradley ID]/fa20-cis445-lab2-[your GitHub ID]/aboutme.html** in **Validate by URI**

## Rubric

* 4 pts: include statements to indicate its HTML 5 standard
* 4 pts: include the title of this page - make sure it is put in the right place
* 4 pts: Header/name/bio. or intro./motto - make sure you use proper tags (semantically) and put them in the right place
* 4 pts: create a table for your schedule
* 2 pts: create the (ordered/un-ordered) list for the favorites
* 4 pts: include Bradley logo and make it a hyperlink to the Bradley University homepage
* 2 pts: include the copyright statement - use proper tags (semantically) and put it in the right place
* 6 pts: pass the HTML validator

## References

* [w3schools.com](https://www.w3schools.com/)
* [Learn web development](https://developer.mozilla.org/en-US/docs/Learn)
* [W3C Markup Validation Service](https://validator.w3.org)
* [HTML Cheat Sheet (1)](https://websitesetup.org/html5-cheat-sheet/)
* [HTML Cheat Sheet (2)](https://hostingcanada.org/html-cheat-sheet/)