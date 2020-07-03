
/*Denna javascript-kod var jag tvungen att använda för att skapa min meny. Allt koden gör
att den visar eller döljer mina divar som innehåller namn, ingredienser och priser*/
$(document).ready(function(){  
    $(".hamburgare-menu").hide();
    $(".sallad-menu").hide();
    $(".dricka-menu").hide();
    
    $(".pizzor-menu").show();
  });

$("#pizza-button").click(function(){  
  $(".hamburgare-menu").hide();
  $(".dricka-menu").hide();  
  $(".sallad-menu").hide();  
  
  $(".pizzor-menu").show();
  });
  
  $("#hamburgare-button").click(function(){
    $(".dricka-menu").hide();
    $(".pizzor-menu").hide();  
    $(".sallad-menu").hide();  
    
    $(".hamburgare-menu").show();
  });

  $("#sallad-button").click(function(){  
    $(".hamburgare-menu").hide();
    $(".pizzor-menu").hide();  
    $(".dricka-menu").hide();  

    
    $(".sallad-menu").show();
  });
  
  $("#drinks-button").click(function(){
    $(".hamburgare-menu").hide();
    $(".pizzor-menu").hide();  
    $(".sallad-menu").hide();  
    
    $(".dricka-menu").show();
  });

  
 /*Här gör jag min javascript animation. i rad 58 lagrar jag min animation som en variabel. Denna metod används senare för att ersätta element med myText som ska animeras. 
 För att start ett javascript animation så behöver man två saker, den ena är keyframes som man känner igen från CSS innehåller ett attribut som heter transform där man anger hur rörelsen ska gå till.
 Den andra saken man behöver för att starta en js-animation är Options som i sin tur innehåller info tiden och huret av animationen. */
  function driveIn(element, callback){
    let keyframes = {
      transform: ['translate(calc(-50vw - 50%))', 'none']
    };
  
    let options = {
      duration: 2000,
      easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
      fill: 'forwards'
    };
  
    let animation = element.animate(keyframes, options);
  
    animation.addEventListener('finish', (event) => {
      callback();
    });
  }
  
  window.addEventListener('load', () => {
    let myText = document.getElementById("text-to-animate");
    driveIn(myText, () => resetButton(btn));
  
  });
  
  