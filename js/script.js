$(document).ready(function(){  
    $(".hamburgare-menu").hide();
    $(".pizzor-menu").show();
  });

$("#pizza-button").click(function(){  
    $(".hamburgare-menu").hide();
    $(".pizzor-menu").show();
  });
  
  $("#hamburgare-button").click(function(){
    $(".pizzor-menu").hide();  
    $(".hamburgare-menu").show();
  });