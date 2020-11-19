<<<<<<< HEAD
# PolyTechnic_Internship

# html-documentation
### Block level elements
* All heading tags (`h1 - h6`)
* Divisions (`div`)
* Lists
  * Ordered (`ol`)
  	* tyes
		* `1` (Numerical order)
		* `i` or `I` (Roman order)
		* `a` or `A` (Alphebet order)
		
	Example:
```html
		<ol type="a">
			<li> Coffee </li>
			<li> Tea </li>
			<li> Milk </li>
		</ol>
```

  * Un-ordered (`ul`)
  	* List-style-type
	
		* circle
		* disc (`default`)
    		* square
    		* none
    
    Example
```html
       <ul style="list-style-type:none">
		<li> Coffee </li>
		<li> Tea </li>
		<li> Milk </li>
	</ul>
```

  * description list (`dl`)
    * term (`dt`)
    * descriptive data (`dd`)
  * list-item (`li`)
  * Form (`form`)



# bootstrap-documentation
* CSS framework
* Easy integration
* Responsive web design
* Browser Compatability

### Color codes
* `primary`   => Blue color
* `secondary` => Grey color (Light black color)
* `info`      => Sky blue color
* `danger`    => Red color
* `success`   => Green color
* `warning`   => Orange color
* `dark`      => Black color
* `white`     => White color

Example (Background color)
```html
    <h2 class="bg-primary"> Blue colored background for the text </h2>
```
Example (Text color)
```html
    <h2 class="text-primary"> Blue colored text </h2>
```

### Grid system
* `row`
* `col`

Example
```html
    <div class="row">
		  <div class="col">
			  row-1 col-1
		  </div>

		  <div class="col">
			  row-1 col-2
		   </div>

		  <div class="col">
			  row-1 col-3
		  </div>
	</div>
```

### Responsive Grid system
* `.col`    => Extra small scale device
* `.col-sm` => Small scale devices (>=576px)
* `.col-md` => Medium scale devices (>=768px)
* `.col-lg` => Large scale devices (>=992px)
* `.col-xl` => eXtra Large Scale devices (>=1200px)

### Tables
*  `.table`   =>  Layout for table
*  `.table-dark`
*  `.table-bordered` 
*  `.table-borderless` 
*  `.thead-dark`
*  `.thead-light`
*  `.table-striped`
*  `.table-hover`

#### Attributes for table
*   `colspan`
*   `rowspan`
*   `scope="col|group|colgroup|rowgroup"`
#### Table-responsive-{breakpoint}
*   `.table-responsive`
*   `.table-responsive-sm`
*   `.table-responsive-md`
*   `.table-responsive-lg`

Example:
```html
	<!DOCTYPE html>
<html>
<head>
	<title>:: Bootstrap Tables ::</title>
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
	<script type="text/javascript" src="js/bootstrap.min.js"></script>
	<meta name="viewport" content="width=device-width,initial-scale=1">
</head>
<body>
	<div class="container mt-5">
		<div class="table-responsive-md">
			<table class="table  table-bordered  ">
	<thead class="thead-dark">
		<tr class="bg-primary">
			<th scope="col">S.No</th>
			<th>Continent</th>
			<th>First_Name</th>
			<th>Last_Name</th>
			<th>Age</th>
			<th colspan="2">Actions</th>
			
		</tr>
	</thead>
	<tbody>
		<tr>
			<td scope="row">1</td>
			<td rowspan="2">Non Asia</td>
			<td>Warren</td>
			<td>Buffet</td>
			<td>69</td>
			<td>Edit</td>
			<td>Delete</td>
		</tr>
		<tr>
			<td>2</td>
			<td>Jeff</td>
			<td>Bezzos</td>
			<td>65</td>
			<td>Edit</td>
			<td>Delete</td>
		</tr>
		<tr >
			<td>3</td>
			<td>Asia</td>
			<td >Mukesh</td>
			<td>Ambani</td>
			<td>60</td>
			<td>Edit</td>
			<td>Delete</td>
		</tr>
	</tbody>
	
    </table>
		</div>
</div>

</body>
</html>
```
### Cards

*  `.card`
*  `.card-header`
*  `.card-body`
*  `.card-footer`
*  `.card-img-top`
*  `.card-title`
*  `.card-subtitle`
*  `.card-text`
*  `.card-link`
*  `.card-group`
*  `.card-deck`

Example:
```html
	<!DOCTYPE html>
<html>
<head>
	<title>:: Profile card ::</title>
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
	<script type="text/javascript" src="js/bootstrap.min.js"></script>
	<meta name="viewport" content="width=device-width,initial-scale=1">
</head>
<body>
<div class="container mt-5">
	<div class="card-deck">
	<div class="card" style="width:18rem;border: 1px solid lightgray;">
		<img  class="card-img-top" src="images/admin.png">
		<div class="card-body">
			<h1 class="card-title">Kalyan Chakravarthi</h1>
		<h3 class="card-subtitle">Software Developer</h3>
		<p class="card-text">Working in APSSDC</p>
		<button class="btn btn-primary"><a href="table.html" class="text-white">Click Me</a></button>
		</div>
	</div>
	<div class="card" style="width:20rem;border: 1px solid lightgray;">
		<img  class="card-img-top" src="images/admin.png">
		<div class="card-body">
			<h1 class="card-title">Kalyan Chakravarthi</h1>
		<h3 class="card-subtitle">Software Developer</h3>
		<p class="card-text">Working in APSSDC</p>
		<button class="btn btn-primary"><a href="table.html" class="text-white">Click Me</a></button>
		</div>
	</div>
	<div class="card" style="width:20rem;border: 1px solid lightgray;">
		<img  class="card-img-top" src="images/admin.png">
		<div class="card-body">
			<h1 class="card-title">Kalyan Chakravarthi</h1>
		<h3 class="card-subtitle">Software Developer</h3>
		<p class="card-text">Working in APSSDC</p>
		<button class="btn btn-primary"><a href="table.html" class="text-white">Click Me</a></button>
		</div>
	</div>
	<div class="card" style="width:20rem;border: 1px solid lightgray;">
		<img  class="card-img-top" src="images/admin.png">
		<div class="card-body">
			<h1 class="card-title">Kalyan Chakravarthi</h1>
		<h3 class="card-subtitle">Software Developer</h3>
		<p class="card-text">Working in APSSDC</p>
		<button class="btn btn-primary"><a href="table.html" class="text-white">Click Me</a></button>
		</div>
	</div>

	</div>
</div>
</body>
</html>
```


## Java Script

_JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive. Where HTML and CSS are languages that give structure and style to web pages, JavaScript gives web pages interactive elements that engage a user._

###  History of JavaScript
* For implementing the dynamic behaviour of a web site.
* It was called as `live script` in initial stages.
* `Brendan Eich` (Netscape navigator) was introduced this `JavaScript`.(`September 1995`)
* `JavaScript` is an interpreter language.
* He tiedup with ECMA (Ecma Scrpt) - ECMA SCRIPT - 262 (`ES-262`)
* ECMA SCRIPT -2018 is the latest version (`ES-9`)
* For implementing high end JS modules, We've to focus on `ES-6`.

### Data types
_JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types._

* Number
	* All kind of numbers (Integers, floating numbers and double precision numbers) are comes under this category.
```javascript
	var num=10;
```
* String
```javascript
	var str="Hello";
```
* Boolean
```javascript
	var isNum=true;
```
* Function
```javascript
	function _function-name_{
		{// Function body }
	}
```
* Object
```javascript
	var car = {type:"Fiat", model:"500", color:"white"};
```
* null
```javascript
	var value=null;
	console.log(typeof(value))
	____
	Output: Object
	
```
* undefined
```javascript
	var val;
	console.log(val);
	____
	Output: Undefined
```

### Convertion functions
* Number()
```javascript
	var str="123";
	str=Number(str);
	console.log(typeof(str));
	____
	Output: Number
```
* parseInt()
```javascript
	var val=123.89
	val=parseInt(val);
	console.log(val);
	____
	Output: 123
```
* parseFloat()
```javascript
	var val=123.89
	val=parseFloat(val);
	console.log(val);
	____
	Output: 123.89
```

### Alerts in JavaScript
_In Javascript, popup boxes are used to display the message or notification to the user. There are three types of pop up boxes in JavaScript namely Alert Box, Confirm Box and Prompt Box. Alert Box: It is used when a warning message is needed to be produced._

The following are the kinds of alerts.
* alert()
  ```javascript
      alert("Hi");
  ```
* prompt()
  ```javascript
      prompt("Enter your name");
  ```
* confirm()
  ```javascript
    confirm("Are you sure?");
  ```
  Example:
   ```javascript
        if(confirm("Are you sure?")==true){
	        console.log("Clicked on okay");
        } else {
	        console.log("Clicked on cancel");
        }
   ```
### Console statements
_The Console can be used to log information as part of the JavaScript development process, as well as allow you to interact with a web page by carrying out JavaScript expressions within the page's context. Essentially, the Console provides you with the ability to write, manage, and monitor JavaScript on demand._

* console.log()
```javascript
	console.log("This is for displaying an output");
```
* console.info()
```javascript
	console.info("This is also for displaying the output");
```
* console.warn()
```javascript
	console.warn("This is a warning");
```
* console.error()
```javascript
	console.error("Oops! this is error2");
```

### Functions:
* Functions without parameters (static functions):
```javascript
	// defining a function
	function add(){
		var a=1;
		var b=2;
		return a+b;
	}

	//Calling the above function
	add()
```
* Functions with parameters (Dynamic functions)
```javascript
	function multiply(x,y){
		return x*y;
	}

	multiply(2,3)
```
* Function without name (**Anonymous functions**)
```javascript
	var object=function(a,b){
		return a*b;
	}

	object(3,4)
	_______
	Output: 12
```
* Arrow functions
```javascript
	var multiply=(x,y)=>{
		return (x*y)
	}

	multiply(5,6);
	______
	Output: 30
```

### Array iteration using map,for-in and for-of
* **Map()**
	* Syntax:
```javascript
	arrayName.map({arrow function})
```

* Example
```javascript
	var names=["mark zukerburg","Jack dorsey","Tim","Jack ma"];
	// iter holds the values and index holds the index values of an array
	names.map((iter,index)=>{
		console.log(iter);
		console.log(index);
	})
```

* for-in
```javascript
	var names=["mark zukerburg","Jack dorsey","Tim","Jack ma"];
	for(i in names){
		console.log(i);
	}
```
	
* for-of
	
```javascript
	var names=["mark zukerburg","Jack dorsey","Tim","Jack ma"];
	for(i of names){
		console.log(i);
	}
```
### Document Object Model (DOM):
* We can implement JavaScript code any where in html document.
* We've to use script tags for taht (`<script> </script>`)
* By using `document` keyword, We can manipulate the data in html document.
* Document object model functions are:
```javascript
		document.getElementById("id");
```

* Collections
```javascript
		document.getElementsByClassName("className");
		document.getElementsByTagName("Tag name");
```

* Common statements for DOM
```javascript
		document.querySelector("#selector | .selector | Tag Name Selector");
		document.querySelectorAll(".selector | Tag Name Selector");
```
## JS Events

+ onclick
+ onmouseover
+ onmouseout



26-8-2020:
============
# ES 6 Features

+ let, const
+ var,let,const
  - Scope
    - Functional or block 
  - Redeclare
  - Redefine

### var
  
+ Function level scope
+ var variable can be Redeclared
+ var variable can be Redefined


### let
+ Scope is block level
+ let variable can't be Redeclare
+ let variable can be Redefined



### const
+ scope is block level
+ const variable can't be Redeclare
+ const variable can't be Redefine

# Regular Expressions

+ Regular expressions are mainly used to match patterns
+ Regular expression is an object that describes a pattern of characters

Syntax:
    /pattern/modifiers
   
   

### Modifiers:
+ g  for global matching 
+ i  for case-insensitive matching
+ m   multiline matching  (^ for first character matching $ for last character matching)

#### Brackets

+ brackets are used to find the range of characters

[abc]   - fist character of your input should contain any character in list of bracket
[^abc]  - Find any character not between the brackets
[0-9]   - find any character between 0 to 9 digits
[^0-9]  - to match any non digit
(firstpatter | second pattern)  - to include no of patterns for input


#### Quantifiers

+ n{input range}  Matches any string that contains a range  ( n is may character or digit)
+ n{4,}           Matches input contain atleast 4 characters


Task:
======
- First two characters are digits
- from third character onwards it contains atleast 3 letters
- any one special character
- any digits

Tasks:
=======
Patterns for mobile number ,Email
   - Mobile Number
   ```
    ^[6-9][0-9]{9}      ^[6-9]+\d{9}
   ```
  -Email Id
  ```
  ^\S+@+\S+.\S+
  ```
   
  
 
27-8-2020:
===========

+ Develop a Regular expression for the  password
  - One capital letter
  - One small letter
  - One digit
  - One special character
  - Password length is between 8 to 16 characters

```
^(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,16}$
```

01-09-2020:
===========

Promises:A promise is an object that may produce a single value some time in the future.Promises are used to handle asynchronous operations in JavaScript.
Prior to promises events and callback functions were used but they had limited functionalities and created unmanageable code

A Promise has four states:
- fulfilled: Action related to if the promise succeeded
- rejected: Action related to if the promise failed
- pending: Promise is still pending example: not fulfilled or rejected yet
- settled: The Promise has fulfilled or rejected


      
      
 ### Benefits of using Promises:
 
+ A promise can Improves Code Readability
+ For Better handling of asynchronous operations
+ In asynchronous logic, it has a better flow of control definition
+ For Better Error Handling
    
    
Examples:
===========
- Fetch API
- Cache API




# sql-documentation

### Data base:  `A storage area to store Collection of information`
* FMS (File management system)
  * AFMS is a type of software that manages data files in a computer system. It has limited capabilities and designed to manage individual or group of files.
  
  * Advantages:
    * The performance is very high
    * It is easy to maintain
    
  * Limitations
    * It has low security
    
* DBMS or RDBMS
  * Database management system is a software for storing and retrieving user's information while considering appropriate security measures. And it follows a structure to store the information. We've to follow a language for communicating with it such as sql (Structured query language)
  * Advantages
    * It maintains security
    * Stores information in structured order
    
  * Limitations
    * The performance is very slow
    * Somewhat complex to maintain
    
  * Examples:
    * Oracle
    * mySql
    
* Nosql (Not only sql)
  ` FMS + DBMS `
  The combination of security and the performance.
  * Examples:
    * Mongo
    * Firebase
    
 **CREATING A DATABASE**
 ```sql
     CREATE DATABASE <db_name>;
 ```
 
 Example
 ```sql
    CREATE DATABASE 'employees'
 ```
 
**DROPING A DATABASE**
```sql
   DROP DATABASE <db_name>
```

Example

```sql
    DROP DATABASE 'employees'
```

**SELECTING A DATABASE**
```sql
    USE <db_name>
```

Example
```sql
    USE 'employees'
```

**CHECKING HOW MANY TABLE AVAILABLE IN DATABASE**
```sql
    USE 'employees';
    SHOW TABLES;
```

#### DATA TYPES
```sql
    varchar   (// Varchar takes empty values) (0-255)
    varchar2  (// It doesn't allow empty values or null values) (0-255)
    int       (// For numerical values) (-2147483648 to 2147483647)
    float     (// Decimal values) ( Upto 23 digits)
    char      (// For representing text) (0-255)
    BLOB      (// Large amount data (Images)) (0-65535) BLOB - Binary Large OBject
    LONGBLOB  (// For storing large objects) (0-4294967295)
    MEDIUMBLOB(// For storing medium sized objects) (0-16777215)
    CLOB      (// For storing videos)
    text      (// For storing text) (0-65535)
```

**CREATING TABLE**
```sql
    USE employees;
    CREATE TABLE 'users' (name varchar(30),email varchar(100), gender char(1));
```

**INSERTING DATA INTO TABLE**
```sql
    INSERT INTO users VALUES('Hanuman','hanumankumar@gmail.com','M')
    
    INSERT INTO users(name, gender) VALUES('Kalyan','M')
```

**RETRIEVING DATA FROM TABLE**

```sql
    SELECT * FROM <table_name>
    
    SELECT * FROM users
    
    SELECT name FROM users
    
    SELECT email FROM users
```

**WHERE Clause**

By using `WHERE` clause we can retrieve data based on a condition

Example

```sql
      SELECT * FROM users WHERE name='Hanuman';
      
      SELECT email FROM users WHERE name='Hanuman';
```

**DISTINCT**

By using this keyword we can reduce the data redundancy while retrieving information from tables.

```sql
    SELECT DISTINCT name FROM users
```

**Operators in SQL**
* Arithmatic operators (+,-,*,/,%)
```sql
    SELECT 30+5
```

* Logical
  Logical operators are used for conditional retrieving of the data

 * AND
 * OR
 * NOT
 * ANY
 
 ```sql
     SELECT * FROM users WHERE name='Hanuman' AND email='hanumanhkumar@gmail.com';
     
     SELECT * FROM users WHERE name='Hanuman' OR email='hanumankumar@gmail.com';
     
     SELECT * FROM users WHERE NOT name='Hanuman';
     
     SELECT * FROM users WHERE email=ANY(SELECT email FROM users WHERE email='hanumankumar@gmail.com')
     
     SELECT name FROM users WHERE gender=ANY(SELECT gender FROM users WHERE email='hanumankumar@gmail.com')
 ```
* Comparision operators
 * =, !=, <>, < ,>,<=, >=
 
* Aggrigation:
  Returning a single value based on multiple value in a field.
  * MAX()
  * MIN()
  * AVG()
  * SUM()
  * COUNT()
    
  	* COUNT(*)

        This is for checking no.of rows avaulable in the table.
  
        Example 
  
  ```sql
         SELECT COUNT(*) FROM users;
  ```
  
     * COUNT(_filed_name_)

       This is for counting number of rows available in a specific field. It counts all the data excepts the empty or NULL values.
  
  ```sql
        SELECT COUNT(email) FROM users;
  ```

**FINDING 2nd LARGEST SALARY**
```sql
     SELECT MAX(salary) FROM workers WHERE salary < (SELECT MAX(salary) FROM workers)
```
**FINDING 3rd LARGEST SALARY**

```sql
    SELECT MAX(salary) FROM workers WHERE salary<(SELECT MAX(salary) FROM workers WHERE salary < (SELECT MAX(salary) FROM workers))
```

#### DATA DEFINITION LANGUAGE (_DDL_)
This language consists of various keywords. These are used to manipulate the structure of a table. When we're gonna apply the commands, the structure of table will be changed.

* CREATE
* DROP
```sql
     DROP TABLE employees
```
* ALTER
```sql
     //Adding a new column
     ALTER TABLE workers ADD dob varchar(30)
     
     // Here ADD is the keyword to add a new column and dob is the column name
     
     //Changing the column name of a table(workers)
     ALTER TABLE workers CHANGE dob Date_of_birth varchar(30)
     
     //Dropping a column from a table
     ALTER TABLE workers DROP COLUMN Date_of_birth;
```
* TRUNCATE

#### DATA MANIPULATION LANGUAGE (_DML_)
The commands have ability to change the data inside the table called Data manipulation language commands.

The following are the commands for DML
 * INSERT
 
```sql
    INSERT INTO users VALUES('Hanuman','hanumankumar@gmail.com','M')
    
    INSERT INTO users(name, gender) VALUES('Kalyan','M')
```
 * DELETE
 
```sql
    DELETE FROM users WHERE email IS NULL;
    
    DELETE FROM users WHERE gender="F";
```

 * UPDATE
```sql
    UPDATE users SET name="Hanuman Kumar" WHERE name="Hanuman";
```
#### Data Control Language (_DCL_)
 * GRANT
   * Giving permissions to specific user(s)
 * REVOKE
   * Withdrawing the permissions which were given using `GRANT` command
   
#### Transaction Control Language (_TCL_)
 * COMMIT
 * ROLLBACK
 * SAVEPOINT
 
 #### Key constraints in SQL
 Key constraint is like a rule in Data Base Management System, that governs what kind of data should be inserted in a table
 
 * NOT NULL
  * The data shouldn't be a null value.
```sql
    CREATE TABLE workers (name varchar(20), email varchar(50) NOT NULL);
```
 
 * PRIMARY
   * The data shouldn't be a NULL and it should be a unique value.
   * A table should contain only one primary key
```sql
      CREATE TABLE persons(id int NOT NULL PRIMARY KEY, name varchar(20), salary int);
```
   * Auto increment with primary key
     * By using this we can insert data without mentioning it. And the data in the specific field will be incremented automatically by 1
     
```sql
     ALTER TABLE persons ADD id int PRIMARY KEY AUTO_INCREMENT;
```
 * FOREIGN
   * `FOREIGN KEY` is used to link two tables together
   * If a table contains `FOREIGN KEY`, it will be treated as a child table.
   * The field of table having `FOREIGN KEY` is refers to the `PRIMARY KEY` of another table
   
```sql
     CREATE TABLE persons_hike (id int, hike int, FOREIGN KEY(id) REFERRENCES persons(id) ON DELETE CASCADE)
```
 * UNIQUE
   * We've a limitation of using a primary key. i,e We can use only one primary key per a table. When we gonna use multiple primary keys, we will get errors because the primary rule for primary key is to maintain one primary key per table.
   * To overcome this disadvantage we can use another key constraint concept. i,e : `UNIQUE` key.
   * `UNIQUE` key is having same kind of rules as primary key have. But we can use multiple `UNIQUE KEYS` per a table.
   
```sql
    CREATE TABLE employees (emp_id int UNIQUE AUTO_INCREMENT, emp_name varchar(20),emp_email varchar(50) UNIQUE)
```

#### TASKS
 1. Create a table (sales) with the fields (emp_name,emp_job,emp_email,emp_salary). 
  * The emp_email Should be unique and should not allow the null values. 
  * Display the names of employees who are working as clerk, salesman or analyst and drawing a salary more than 3000.
  
```sql
    USE polytechnic;
    
    CREATE TABLE sales (emp_name varchar(20),emp_job varchar(20),emp_email varchar(50) PRIMARY    KEY,emp_salary int);
    
    // Inserting data
    USE polytechnic;
    INSERT INTO sales VALUES("John","clerk","john@gmail.com",5000);
    INSERT INTO sales VALUES("Jack","analyst","jack@gmail.com",2000);
    INSERT INTO sales VALUES("Tom","salesman","tom@gmail.com",3000);
    INSERT INTO sales VALUES("Smith","clerk","smith@gmail.com",3500);
    INSERT INTO sales VALUES("Ninad","salesman","ninad@gmail.com",2600);
    
    
    USE polytechnic;
    SELECT emp_name FROM sales WHERE(emp_job="salesman" or emp_job="clerk" or emp_job="analyst") and emp_salary>3000;
    
    USE polytechnic;
    SELECT emp_name FROM sales WHERE emp_job in('clerk','salesman','analyst') and emp_salary>3000;
```

#### Wildcards
We have to use the concept of `wildcards` for implementing pattern matching functionality. We can implement this by using `LIKE` keyword.

* **%** => It takes multiple characters for pattern matching
 * a% => The data must and should starts with the character `a`
 * %a => The data must and should ends with the character `a`
 * %a% => The data must and should contains the character of `a` in it.
 
```sql
   SELECT * FROM users WHERE name LIKE "a%";
   
   SELECT * FROM users WHERE name LIKE "%a"
   
   SELECT * FROM users WHERE name LIKE "%a%"
```

* Underscore (`_`)
  This wildcard is used for matching a specific range of characters.
  * _ => Matching with single character
  * _ _ => Matching with two characters

```sql
   // The data which we are going to select must and should have the character a in second position
   SELECT * FROM users WHERE name LIKE "_a%";
   
   // The data which we are gonna retrive should contain 6 characters long and should contain H as the first character.
   SELECT * FROM users WHERE name LIKE "H_ _ _ _ _"
   
   // The data which we are gonna select should have atleast 6 characters long.
   SELECT * FROM users WHERE name LIKE "H_ _ _ _ _ %"
  
```
#### Relationships
* One-to-one
* One-to-many
* Many-to-many

#### Joins
A join is used to combine multiple tables together. By using this we can combine the data exists in rows of the tables.

* INNER JOIN

```sql
    SELECT student_info.student_id, student_info.name, certifications.certification FROM certifications INNER JOIN student_info ON student_info.student_id=certifications.student_id;
```

* LEFT JOIN

```sql
    SELECT student_info.student_id,student_info.name,certifications.certification FROM student_info LEFT JOIN certifications ON student_info.student_id=certifications.student_id
```

* RIGHT JOIN

```sql
    SELECT student_info.student_id, student_info.name, certifications.certification FROM student_info RIGHT JOIN certifications ON student_info.student_id=certifications.student_id

```
* FULL JOIN
```sql
    SELECT * FROM student_info LEFT JOIN certifications ON student_info.student_id=certifications.student_id UNION SELECT * FROM student_info RIGHT JOIN certifications ON student_info.student_id=certifications.student_id
```

#### ORDER BY
```sql
    // For retrieving data in descending order
    SELECT * FROM student_info ORDER BY student_id DESC;
    
    // For retrieving data in ascending order
    SELECT * FROM student_info ORDER BY student_id ASC;
```
=======
# HTML
>>>>>>> 7ff140808e543a55dd24a15192b3962526727906
