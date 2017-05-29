function readTextFile(json, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", json, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}
var selected = {};
readTextFile("json/contactsdetails.json", function (contact) {
    window.mydata = JSON.parse(contact);
    window.searchdata=JSON.parse(contact);
    mydata.contacts.forEach(function (ele, ind) {
        ele.id = ind;
    })
    console.log(mydata)
    console.log(searchdata)
     render(mydata);
});
function render(mydata) {
    $('ct_body').innerHTML = '';
    var cont = mydata.contacts;

    for (var i = 0; i < cont.length; i++) {
    var item = document.createElement('div');
        item.innerHTML = `
                <div id="profile_icon" class="profile-icon no-click `+ cont[i].gender + `"></div>
                <div  id="ct_details" class="ct-details no-click">
                    
                    <p id="ct_name" class="ct-name">`+ cont[i].name + `</p>
                    <p id="ct_phno" class="ct-phno">`+ cont[i].number + `</p>
                    
                   
                </div>`

        item.classList = ['ct'];
       
        item.onclick = open;

        $('ct_body').appendChild(item);
        $('count').innerHTML = mydata.length;
    }

}

function $(id) {
    return document.getElementById(id)
}
// function time() {
//     $('ct_time').innerHTML = Date();
// }
function pop() {
    $('box1').style.display = 'none';
    $('del-pop').style.display = 'none'
}
function popup(data) {
    console.log(data);
    selected = data;
    $('box1').style.display = 'block';
    $('del-pop').style.display = "block";
    $('name_txt').value = data.name;
    $('phone_txt').value = data.number;
    $(data.gender + '_rad').checked = true;
}
function add() {
    $('box1').style.display = "block";
    $('add_item').style.display = "block";


}
	function searchfor(query){
	var	searchdata = [];
		mydata.forEach(function(ele){
			var a = ele.name.toLocaleLowerCase();
			var b = query.toLocaleLowerCase();
			var c = ele.number.toLocaleLowerCase();
			if(a.indexOf(b) != -1 || c.indexOf(b) != -1){
				searchdata.push(ele);
			}
		});

		render(mydata);
	}

// function searchfor() {
    
//     
//     var results = [];
//     var cont = mydata.contacts;
//     var toSearch = mydata.contacts[selected.id].name;

//     console.log(cont);
//     for (var i = 0; i < cont.length; i++) {
//         for (key in cont[i]) {
//             if (cont[i][key].indexOf(toSearch) != -1) {
//                 results.push(cont[i]);
//             }
//         }
//     }
// }
function addclose() {
    $('box1').style.display = "none";
    $('search').style.display = "none";
}
function additem() {
   
      var contacts = {};

    contacts.name = document.getElementById('text_').value;
    contacts.number = document.getElementById('number_').value;
    contacts.gender = document.getElementById('gender_').value;

//    $('text_').value = '';
//    $('number_').value = '';
//    $('gender_').value = '';
console.log($('number_'));
    mydata.contacts.push(contactsdetails);
     $('box1').style.display = "none";
    $('add_item').style.display = "none";
}


function open(ele) {
    mydata.contacts.forEach(function (element) {
        if (element.name == ele.target.getElementsByClassName('ct-name')[0].innerHTML) {
            popup(element);
        }
    }, this);

 }
var element;
function del() {
    $('box1').style.display = "none";
    $('del-pop').style.display = "none";
    $('del_').style.display = "block";
    element = parentNode.removeChild(element);
}
function delcontact() {

    mydata.contacts.splice(element - 1, 1);
    console.log(element);
    render(mydata);
    $('del_').style.display = "none";
}

function nodelcontact() {
    $('del_').style.display = "none";
}
function updateitem() {

    $('box1').style.display = "none";
    $('del-pop').style.display = "none";
    mydata.contacts[selected.id].name = $('name_txt').value;
    mydata.contacts[selected.id].number = $('phone_txt').value;
    render(mydata);
}




// (function(){

//     $('text_box').addEventListener('onclick', function(){
    
//         var text = $('text_box').value();
//         var ct =document.getElementsByClassName('ct') 
//         ct.hide();   
//     console.log('test')
//         // $('.vs div:not(:contains(' + text + '))').hide();
//     });


// })();




// function myFunction() {
//     var x =  $('text_box').value;
//     var ct =$('ct_body');
//     ct.style.display="none";

//     var x = document.getElementById("ct_details");
//      var div = document.getElementById("ct_name");
  
//    console.log(div)


// }