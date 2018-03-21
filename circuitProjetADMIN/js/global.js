function rendreVisible(elem){
	document.getElementById(elem).style.display='block';
}

function rendreInvisible(elem){
	document.getElementById(elem).style.display='none';
}

function rendreInvisibleTous() {
	$(document).ready(function() {	
		 $("div").each(function( index ) {
			 if($(this).attr('id')!="header" && $(this).attr('id')!="container-fluid" && $(this).attr('id')!="navbar-header" && $(this).attr('id')!="collapse navbar-collapse" && $(this).attr('id')!="admin" && $(this).attr('id')!="menuAdmin" && $(this).attr('id')!="management")
				$(this).css('display', 'none');		
		});
		//rendreVisible("container-fluid"); rendreVisible("navbar-header"); rendreVisible("collapse navbar-collapse"); 
	});
}

function rendreVisibleTous() {
	$(document).ready(function() {
		$("div").each(function( index ) {
			 if($(this).attr('id')!="admin")
				$(this).css('display', 'block');		
		});
	});
}

function lister() {
	//a effacaer
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