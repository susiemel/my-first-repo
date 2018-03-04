// document.body.style.background = 'red';
// prompt ('the body element becomes red');
// document.body.style.background ="";
// 
// var color = prompt("enter the color?");
// if (color != false)
// 	{
// 		document.body.style.background=color;
// 	}
// function changeBg (color){
// 	var el=document.getElementById ("info");
// 	el.style.background=color;
// }

// function setSize(size) {
// 	var styles = size.currentStyle || window.getComputedStyle (size,null);
// 	var sz = styles.fontSize;
// 	sz = parseInt(sz);
// 	sz += 2;
// 	size.style.fontSize = size + 'px';

// }

var buttons = document.querySelectorAll('.details button');
for (var i = 0; i < buttons.length; i++) {
	buttons[i].onclick = addElementToCart;
}

var index = 1; 


function openCart() {
	var cart = document.getElementById('cart');
	cart.style.display = 'block';
    dark.style.display = 'block';

}

function closeCart() {
	var cart = document.getElementById('cart');
	cart.style.display = 'none';
    dark.style.display = 'none';

}

function addElementToCart() {
	var table = document.querySelector('#cart table tbody');
	var price = this.previousElementSibling.lastElementChild.innerText;
	// alert(price);
	var name = this.parentElement.parentElement.firstChild.innerText;
	// alert(name);
	var img = this.parentElement.previousElementSibling;

	var row = document.createElement('tr');
	
	var td1 = document.createElement('td');
	td1.innerText = index++;
	row.appendChild(td1);

	var td2 = document.createElement('td');
	td2.appendChild (img.cloneNode());
	row.appendChild(td2);

	var td3 = document.createElement('td');
	td3.innerText = name;
	row.appendChild(td3);

	var td4 = document.createElement('td');
	td4.innerText = price+" $";
	row.appendChild(td4);

	var td5 = document.createElement('td');
	var input = document.createElement('input');
	input.type = 'number';
	input.value = 1;
	input.min = 1;
	input.max =10;
	input.onchange = setProductSum;
	td5.appendChild(input);
	row.appendChild(td5);

	var td6 = document.createElement('td');
	td6.innerText = price+" $";
	row.appendChild(td6);

	var td7 = document.createElement('td');
	td7.innerHTML = '<button id="deleteElem" onclick="deleteElem(this)">X</button>';
	row.appendChild(td7);

	table.insertBefore (row, table.lastElementChild);
	openCart();


	reCulc();
	
}

function setProductSum () {
	var amount = this.value;
	var price = this.parentElement.previousElementSibling.innerText;
	var price = parseInt(price);
	var sum= amount*price;
	this.parentElement.nextElementSibling.innerText = sum + ' $';

	reCulc();

}


function deleteElem (e) {
	var tr = e.closest('tr');
	e.parentElement.parentElement.parentElement.removeChild(tr);
	index--;

	var td= document.querySelectorAll ('#cart table tr td:first-child');
	for (var i=0; i<td.length-1;) {
		td[i].innerText=++i;
	}

	reCulc ();
}

function reCulc(){

	var sum = 0;
	var td= document.querySelectorAll ('#cart table tr td:nth-child(6)');
	for (var i=0; i<td.length; i++){
		var price=td[i].innerText;
		price = parseInt(price);
		sum+=price;
	
	}
	var all = document.querySelector ('#cart table tr:last-child td:nth-child(4)');
	all.innerText = sum+' $';

}

function reIndex () {
	var tdIndex = document.querySelectorAll ('#cart table tr td:firstChild');
	
}