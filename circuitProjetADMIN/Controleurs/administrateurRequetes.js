//requetes circuits
function enregistrerCircuit(){
	var formCircuit = new FormData(document.getElementById('formEnregCircuit'));
	formCircuit.append('action','enregistrerCircuit');
	$.ajax({
		type : 'POST',
		url : 'Controleurs/administrateurControleur.php',
		data : formCircuit,
		dataType : 'json', //text pour le voir en format de string
		//async : false,
		//cache : false,
		contentType : false,
		processData : false,
		success : function (reponse){//alert(reponse);
					administrateurVue(reponse);
		},
		fail : function (err){
		   
		}
	});
}

function lister(){
	var formCircuit = new FormData();
	formCircuit.append('action','lister');//alert(formCircuit.get("action"));
	$.ajax({
		type : 'POST',
		url : 'Controleurs/administrateurControleur.php',
		data : formCircuit,
		contentType : false,
		processData : false,
		dataType : 'json', //text pour le voir en format de string
		success : function (reponse){//alert(reponse);
					administrateurVue(reponse);
		},
		fail : function (err){
		}
	});
}

function obtenirFiche(){
	$('#divFiche').hide();
	var leForm=document.getElementById('formFiche');
	var formCircuit = new FormData(leForm);
	formCircuit.append('action','fiche');
	$.ajax({
		type : 'POST',
		url : 'Controleurs/administrateurControleur.php',
		data : formCircuit,
		contentType : false, 
		processData : false,
		dataType : 'json', 
		success : function (reponse){//alert(reponse);
					administrateurVue(reponse);
		},
		fail : function (err){
		}
	});
}

function modifier(){
	var leForm=document.getElementById('formFicheF');
	var formCircuit = new FormData(leForm);
	formCircuit.append('action','modifier');
	$.ajax({
		type : 'POST',
		url : 'Controleurs/administrateurControleur.php',
		data : formCircuit,
		contentType : false, 
		processData : false,
		dataType : 'json', 
		success : function (reponse){//alert(reponse);
					$('#divFormFiche').hide();
					administrateurVue(reponse);
		},
		fail : function (err){
		}
	});
}