function media(){
  var elemento1=document.getElementById("notaPrimeiroBimestre");
  var notaPrimeiroBimestre=elemento1.value;
  var elemento2=document.getElementById("notaSegundoBimestre");
  var notaSegundoBimestre=elemento2.value;
  var elemento3=document.getElementById("notaTerceiroBimestre");
  var notaTerceiroBimestre=elemento3.value;
  var elemento4=document.getElementById("notaQuartoBimestre");
  var notaQuartoBimestre=elemento4.value;

  var primeiraNota=parseFloat(notaPrimeiroBimestre);
  var segundaNota=parseFloat(notaSegundoBimestre);
  var terceiraNota=parseFloat(notaTerceiroBimestre);
  var quartaNota=parseFloat(notaQuartoBimestre);

  var media=(primeiraNota+segundaNota+terceiraNota+quartaNota)/4;

  var suaMedia=document.getElementById("mediaAluno");
  var mediaAluno= media;

  suaMedia.innerHTML=mediaAluno;
}