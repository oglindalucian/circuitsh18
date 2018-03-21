function rendreVisible(elem){
	document.getElementById(elem).style.display='block';
}

function rendreInvisible(elem){
	document.getElementById(elem).style.display='none';
}

function rendreInvisibleTous() {
	$(document).ready(function() {
		
		// var lesDivs = document.getElementsByTagName("div");
		 $( "div" ).each(function( index ) {
		 // alert( "id: " + $( this ).attr('id') );
		  var leId = $( this ).attr('id');
		  if(leId=="menuAdmin" && leId=="management") {
				//rendreInvisible(leId);
				alert(leId);
		  }
		});
		// var leTexte = "";
		// var id4 = lesDivs[4].id;
		// for(var i=0; i<lesDivs.length; i++) {
		// for(x in lesDivs) {
		  // var leId = x.id;
		  
		 // // leTexte+=leId+"/---/";
		// // rendreInvisible(leId);
		 // //document.getElementById(leId).style.display='none';
			 // // // alert(leId);
		  // if(leId!="menuAdmin" && leId!="management") {
				// //rendreInvisible(leId);
				// //document.getElementById(leId).style.display='none';
				// // // alert(leId);
				// //leTexte+=id4+"/---/";
			  // }
			
		  // }
		 // document.getElementById("contenu").innerHTML = leTexte;
		//rendreVisible('header');
		//document.getElementById('header').style.display='block';
		//rendreVisible('menuAdmin');
		//document.getElementById('menuAdmin').style.display='block';
	});
}

function validerNum(elem){
	var num=document.getElementById(elem).value;
	var numRegExp=new RegExp("^[0-9]{1,4}$");
	if(num!="" && numRegExp.test(num))
		return true;
	return false;
}

function valider(){
	var num=document.getElementById('num').value;
	var titre=document.getElementById('titre').value;
	var duree=document.getElementById('duree').value;
	var res=document.getElementById('res').value;
	var numRegExp=new RegExp("^[0-9]{1,4}$");
	if(num!="" && titre!="" && duree!="" && res!="")
		if(numRegExp.test(num))
			return true;
	return false;
}
//Cas d'un button
/*
function valider(){
	var formEnreg=document.getElementById('formEnreg');
	var num=document.getElementById('num').value;
	var titre=document.getElementById('titre').value;
	var duree=document.getElementById('duree').value;
	var res=document.getElementById('res').value;
	var numRegExp=new RegExp("^[0-9]{1,4}$");
	if(num!="" && titre!="" && duree!="" && res!="")
		if(numRegExp.test(num))
			formEnreg.submit();
}
*/