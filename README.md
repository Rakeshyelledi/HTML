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