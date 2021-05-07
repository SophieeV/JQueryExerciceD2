  var regex1=/^(?:1?\d(?:\.\d{1,2})?|20(?:\.0?0?)?)$/;

  $(document).ready(function(){

      $("#b1").click(function(event){
          if(regex1.test($("#note1").val())== false){
              event.preventDefault();
              alert("Première note : veuillez entrer une note sur 20");
              $('#note1').css("border","3px solid red");
             return true;
          }else{
              $('#note1').css("border","3px solid green");
          }
          if(regex1.test($("#note2").val())== false){
              event.preventDefault();
              alert("Deuxième Note : veuillez entrer une note sur 20");
              $('#note2').css("border","3px solid red");
             return true;
          }else{
              $('#note2').css("border","3px solid green");
          }
          if(regex1.test($("#note3").val())== false){
              event.preventDefault();
              alert("Troisième note : veuillez entrer une note sur 20");
              $('#note3').css("border","3px solid red");
             return true;
          }else{
              $('#note3').css("border","3px solid green");
          }
          if(regex1.test($("#note4").val())== false){
              event.preventDefault();
              alert("Quatrième note : veuillez entrer une note sur 20");
              $('#note4').css("border","3px solid red");
             return true;
          }else{
              $('#note4').css("border","3px solid green");
          }
          if(regex1.test($("#note5").val())== false){
              event.preventDefault();
              alert("Cinquième note : veuillez entrer une note sur 20");
              $('#note5').css("border","3px solid red");
             return true;
          }else{
              $('#note5').css("border","3px solid green");
          }

   var i=0;
  var somme=0;
  var moyenne=0;

      notes = new Array(note1,note2,note3,note4,note5)
      note_i=$("#note1").val();
      note1=parseInt(note_i);
      note_a=$("#note2").val();
      note2=parseInt(note_a);
      note_c=$("#note3").val();
      note3=parseInt(note_c);
      note_d=$("#note4").val();
      note4=parseInt(note_d);
      note_e=$("#note5").val();
      note5=parseInt(note_e);
      somme=note1+note2+note3+note4+note5;

  moyenne=(somme/5);
  alert("La moyenne des notes est : "+ moyenne +" sur 20");
      })
  });
