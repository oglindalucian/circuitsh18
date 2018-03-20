<?php
	require_once("../includes/modele.inc.php");
	$tabRes=array();
	
	function enregistrerCircuit(){
		global $tabRes;	
		$nomCircuit=$_POST['nomCircuit'];
		$nbPlacesMinimum=$_POST['nbPlacesMinimum'];
		$nbPlacesMaximum=$_POST['nbPlacesMaximum'];
		$nbPlacesReservees=0;
		// $etat=$_POST['etat'];
		$etat=0;
		$dateDepart=$_POST['dateDepart'];
		$dateArrivee=$_POST['dateArrivee'];
		$prixCircuit=$_POST['prixCircuit'];
		$guide=$_POST['guide'];
		$transport=$_POST['transport'];
		try{
			$unModele=new circuitModele();
			$photoCircuit=$unModele->verserFichier("imagesCircuit", "photoCircuit", "avatar.jpg",$titre);
			$requete="INSERT INTO circuit VALUES(0,?,?,?,?,?,?,?,?,?,?,?)";
			$unModele=new circuitModele($requete,array($nomCircuit,$nbPlacesMinimum,$nbPlacesMaximum,$nbPlacesReservees,$etat,$dateDepart,$dateArrivee,$prixCircuit,$guide,$transport,$photoCircuit));
			$stmt=$unModele->executer();
			$tabRes['action']="enregistrerCircuit";
			$tabRes['msg']="Le circuit a bien été enregistré.";
		}
		catch(Exception $e){
		}
		finally{
			unset($unModele);
		}
	}
	
	function lister(){
		global $tabRes;
		$tabRes['action']="lister";
		$requete="SELECT * FROM circuit";
		try{
			 $unModele=new circuitModele($requete,array());
			 $stmt=$unModele->executer();
			 $tabRes['listeCircuits']=array();
			 while($ligne=$stmt->fetch(PDO::FETCH_OBJ)){
			    $tabRes['listeCircuits'][]=$ligne;
			}
		}catch(Exception $e){
		}finally{
			unset($unModele);
		}
	}
	
	
	function fiche(){
		global $tabRes;
		$idCircuit=$_POST['idCircuit'];
		$tabRes['action']="fiche";
		$requete="SELECT * FROM circuit WHERE idCircuit=?";
		try{
			 $unModele=new circuitModele($requete,array($idCircuit));
			 $stmt=$unModele->executer();
			 $tabRes['fiche']=array();
			 if($ligne=$stmt->fetch(PDO::FETCH_OBJ)){
			    $tabRes['fiche']=$ligne;
				$tabRes['OK']=true;
			}
			else{
				$tabRes['OK']=false;
			}
		}
		catch(Exception $e){
		}
		finally{
			unset($unModele);
		}
	}
	
	function modifier(){
		global $tabRes;	
		$nomCircuit=$_POST['nomCircuit'];
		$nbPlacesMinimum=$_POST['nbPlacesMinimum'];
		$nbPlacesMaximum=$_POST['nbPlacesMaximum'];
		$etat=$_POST['etat'];
		$dateDepart=$_POST['dateDepart'];
		$dateArrivee=$_POST['dateArrivee'];
		$prixCircuit=$_POST['prixCircuit'];
		$guide=$_POST['guide'];
		$transport=$_POST['transport']; 
		try{
			//Recuperer ancienne pochette
			$requette="SELECT photoCircuit FROM circuit WHERE idCircuit=?";
			$unModele=new circuitModele($requette,array($idCircuit));
			$stmt=$unModele->executer();
			$ligne=$stmt->fetch(PDO::FETCH_OBJ);
			$anciennePhotoCircuit=$ligne->photoCircuit;
			$photoCircuit=$unModele->verserFichier("imagesCircuits", "photoCircuit",$anciennePochette,$titre);	
			
			$requete="UPDATE circuit SET nomCircuit=?,nbPlacesMinimum=?, nbPlacesMaximum=?, etat=?, dateDepart=?, dateArrivee=?, prixCircuit=?, guide=?, transport=?, photoCircuit=? WHERE idCircuit=?";
			$unModele=new circuitModele($requete,array($nomCircuit,$nbPlacesMinimum,$nbPlacesMaximum,$etat,$dateDepart,$dateArrivee,$prixCircuit,$guide,$transport,$photoCircuit,$idCircuit));
			$stmt=$unModele->executer();
			$tabRes['action']="modifier";
			$tabRes['msg']="Film $idCircuit bien modifie";
		}
		catch(Exception $e){
		}
		finally{
			unset($unModele);
		}
	}
	
	function ajouterEtape(){
		
	}
	
	function modifierEtape(){
		
	}
	
	function enleverEtape(){
		
	}
	
	
	
	//******************************************************
	//Controleur
	$action=$_POST['action'];
	switch($action){
		case "enregistrer" :
			enregistrer();
		break;
		case "lister" :
			lister();
		break;
		case "fiche" :
			fiche();
		break;
		case "modifier" :
			modifier();
		break;
	}
    echo json_encode($tabRes);
?>