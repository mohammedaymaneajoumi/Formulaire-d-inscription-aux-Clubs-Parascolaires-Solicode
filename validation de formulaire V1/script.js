function Soumettre() {
    let nom = document.getElementById('Nom').value;
    let regExNom = /^[a-zA-Z]+$/;
    let prénom = document.getElementById('Prénom').value;
    let adresseEmail = document.getElementById('ValidEmail').value;
    let regExemail = /^[a-zA-Z]+[.]{1}[a-zA-Z]+[@]{1}[o]{1}[f]{1}[p]{2}[t]{1}[.]{1}[m]{1}[a]{1}$/;
    let télephone = document.getElementById('Télephone').value;
    let regExtélephone = /^[0]{1}[5-7]{1}[0-9]{8}/;
    let checkboxs = document.querySelectorAll('input[name="Genre"]:checked'); //fals true in all contain genre name
    let checkboxss = document.querySelectorAll('input[name="Groupe"]:checked');
    let table = []; //creat table
    checkboxs.forEach((checkbox)=>{ //order all table element
    table.push(checkbox.value); //push what selected in table
    });
    let tablee = [];
    checkboxss.forEach((checkbox)=>{
    tablee.push(checkbox.value);
    });
    let selected = [];
    for (var option of document.getElementById('Clubs').options){
        if (option.selected){
            selected.push(option.value);
        }
    }
    if(nom.length>30 ){
        document.getElementById('Nom1').innerHTML = "le nom ne doivent pas dépasser 30 caractères"
        document.getElementById('Nom1').style.color = "red"
    }
    else if (regExNom.test(nom)){
        document.getElementById('Nom1').innerHTML = "votre nom est valide"
        document.getElementById('Nom1').style.color = "green"
    }
    else if (nom.length==""){
        document.getElementById('Nom1').innerHTML = "champ est obligatoire*"
        document.getElementById('Nom1').style.color = "red"
    }
    else {
        document.getElementById('Nom1').innerHTML = "votre nom est invalide"
        document.getElementById('Nom1').style.color = "red"
    }



    if(prénom.length>30){
        document.getElementById('Prénom1').innerHTML = " Le prénom ne doivent pas dépasser 30 caractères"
        document.getElementById('Prénom1').style.color = "red"
    }
    else if (regExNom.test(prénom)){
        document.getElementById('Prénom1').innerHTML = "votre Prénom est valide"
        document.getElementById('Prénom1').style.color = "green"
    }
    else if (prénom.length==""){
        document.getElementById('Prénom1').innerHTML = "champ est obligatoire*"
        document.getElementById('Prénom1').style.color = "red"
    }
    else {
        document.getElementById('Prénom1').innerHTML = "votre Prénom est invalide"
        document.getElementById('Prénom1').style.color = "red"
    }




    if( adresseEmail.length==""){
        document.getElementById('resEmail').innerHTML = "champ est obligatoire*"
        document.getElementById('resEmail').style.color = "red"
    }
    else if (regExemail.test(adresseEmail)){
        document.getElementById('resEmail').innerHTML = "votre Email est valide"
        document.getElementById('resEmail').style.color = "green"
    }
    else {
        document.getElementById('resEmail').innerHTML = "votre Email est invalide"
        document.getElementById('resEmail').style.color = "red"
    }


    if (télephone.length==""){
        document.getElementById('Télephone1').innerHTML = "champ est obligatoire*"
        document.getElementById('Télephone1').style.color = "red"
    }
    else if (télephone.length!==10 ){
        document.getElementById('Télephone1').innerHTML = "Le numéro de téléphone doit avoir exactement 10 chiffres "
        document.getElementById('Télephone1').style.color = "red"
    }
    else if (regExtélephone.test(télephone)){
        document.getElementById('Télephone1').innerHTML = "numéro de télephone est valide "
        document.getElementById('Télephone1').style.color = "green"
    }
    

    if(table == "" ){
        document.getElementById('resRadio').innerHTML = "Choisez votre genre";
        document.getElementById('resRadio').style.color = "red"
    }
    else {
        document.getElementById('resRadio').innerHTML = "votre genre est valide";
        document.getElementById('resRadio').style.color = "green"
    }
    
    if(tablee == ""){
        document.getElementById('resRadio1').innerHTML = "Choisez votre Groupe";
        document.getElementById('resRadio1').style.color = "red"
    }
    else {
        document.getElementById('resRadio1').innerHTML = "votre Groupe est valide";
        document.getElementById('resRadio1').style.color = "green"
    }

    if(selected=="" || selected.length>3){ // if && means 2 coditions must all be treu to apply if || means if fst condition apply is 2end apply
        document.getElementById('selectClub').innerHTML = "choisir au minimum 1 club et au maximum 3";
        document.getElementById('selectClub').style.color = "red"
    }
    else if (selected.length<=3){
        document.getElementById('selectClub').innerHTML = "votre club(s) est valid";
        document.getElementById('selectClub').style.color = "green"
    }
    
    if(regExNom.test(nom) && nom.length!==0 && regExNom.test(prénom) &&prénom.length!==0 && regExemail.test(adresseEmail) 
    && adresseEmail.length!==0 && regExtélephone.test(télephone) &&télephone.length!==0&& table !==0 && tablee !==0 && selected.length<=3
    && selected!==0){
        window.open("confirmation.html")
    }
    else {
        document.getElementById("BigResultst").innerHTML = "votre validation n'est pas effectuée"
        document.getElementById('BigResultst').style.color = "red"
    }
}
