# JavaScript Studies <img align="left" alt="JavaScript logo" title="JavaScript" width="35px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" style="padding-right:10px;" />

Repository created in order to study and practice JavaScript programming language.

Feel free to fork this repository.

## Sections

* [What is JavaScript](#what-is-javascript)
* [HTML defer Attribute](#html-script-defer-attribute)
* [JavaScript Indentation (best practices)](#javascript-indentation-best-practices)
* [JavaScript Keywords](#javascript-keywords)
* [JavaScript Variables](#javascript-variables)
* [JavaScript Operators](#javascript-operators)
* [JavaScript Operators - Comparison](#javascript-operators---comparison)
* [References](#references)

## What is JavaScript? 

<details>
<summary>See What is JavaScript details</summary>

Created by Brendan Eich, in 1995, JavaScript is a scripting language that allows developers to implement complex features on web pages beyond simple static content. 

JavaScript (JS) is a versatile, lightweight, interpreted programming language primarily used to add interactivity and dynamic content to web pages, but also used in various other environments like Node.js for server-side development. 
</details>

## HTML &#60;script&#62; defer Attribute

<details>
<summary>See defer attribute details</summary>

The **defer** attribute is a boolean attribute.

If the **defer** attribute is set, it specifies that the script is downloaded in parallel to parsing the page, and executed after the page has finished parsing.

Note: 

* The defer attribute is only for external scripts (should only be used if the src attribute is present).

* If defer is present (and not async): The script is downloaded in parallel to parsing the page, and executed after the page has finished parsing

* If neither async or defer is present: The script is downloaded and executed immediately, blocking parsing until the script is completed

Example: 

```js
<script src="/app.js" defer></script> 
```

</details>

## JavaScript Indentation (best practices)

<details>
<summary>See JavaScript Indentation (best practices) details</summary>

Spacing and indentation should be consistent throughout your code. Many developers choose to use 4-space or 2-space indentation. In JavaScript, each nested statement (e.g., a statement following a "&#123;" brace) should be indented exactly once more than the previous line's indentation.

Here are some examples of bad indentation in JavaScript:

</details>

## JavaScript Keywords 

<details>
<summary>See JavaScript Keywords details</summary>

JavaScript statements often start with a keyword to identify the JavaScript action to be performed.

Our [Reserved Words Reference](https://www.w3schools.com/js/js_reserved.asp) lists all JavaScript keywords.

Here is a list of some of the keywords you will learn about in this tutorial:


|Keyword|Description|
|-------|-----------|
|var|Declares a variable|
|let|Declares a block variable|
|const|Declares a block constant|
|if|Marks a block of statements to be executed on a condition|
|switch|Marks a block of statements to be executed in different cases|
|for|Marks a block of statements to be executed in a loop|
|function|Declares a function|
|return|Exits a function|
|try|Implements error handling to a block of statements|

</details>

## JavaScript Variables 

<details>
<summary>See JavaScript Variables details</summary>

In a programming language, variables are used to store data values.

JavaScript uses the keywords **var**, **let** and **const** to declare variables.

An equal sign is used to assign values to variables.

In this example, x is defined as a variable. Then, x is assigned (given) the value 6:

```javascript
let x;
x = 6;
```

Note: 

The `var` keyword was used in all JavaScript code from 1995 to 2015 and should only be used in code written for older browsers.

The `let` and `const` keywords were added to JavaScript in 2015.


</details>

## JavaScript Operators

<details>
<summary>See JavaScript Operators details</summary>

Comparison and Logical operators are used to test for **true** or **false**.

## JavaScript Operators - Comparison

Comparison operators are used in logical statements to determine equality or difference between variables or values.

Given that 
```javascript 
x = 5
```

The table below explains the comparison operators:

![JavaScript Operators Table](/src/img/javascript-operators-table.png)

</details>

## References 

<details>
<summary>See References details</summary>

`W3 Schools`

[JS Tutorial | W3 Schools](https://www.w3schools.com/js/default.asp)

[HTML script defer attribute](https://www.w3schools.com/TAgs/att_script_defer.asp)

`Toptal Designers`

[HTML Symbols, Entities, Characters and Codes | Toptal Designers](https://www.toptal.com/designers/htmlarrows/)

`JavaScript Info`

[The Modern JavaScript Tutorial | JavaScript Info](https://javascript.info/)

`JS Fiddle`

[JSFiddle - Code Playground](https://jsfiddle.net/)


</details>

<br />

<a href="#top">Back to top :arrow_up:</a>
