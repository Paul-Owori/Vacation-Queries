/*
-Make a form that gathers the users name and has multiple choice questions.
-Write an algorithm that uses the input of the multiple choice questions to
 narrow down to one of several destinations
-Give output in the form of an answer suggesting a vacation destination.
-Once that is working fine, add animations and effects and CSS.

*/

$(document).ready(function(){
  var userInput = []

  var textInput = $("#name").val();
  $('#young').click(function(){
    $("<p>Maybe you should fill this form with an adult</p>").insertAfter(".age");

  });

  $("form").on("submit", function(event) {
       event.preventDefault();

       //$(.container){$(this).toggle()};



       var ageVal = $("input[name='age']:checked").val();
       userInput.push(Number(ageVal))

       var weatherVal = $("input[name='weather']:checked").val();
       userInput.push(Number(weatherVal))

       var nightVal = $("input[name='night']:checked").val();
       userInput.push(Number(nightVal))

       var longVal = $("input[name='long']:checked").val();
       userInput.push(Number(longVal))

       var companyVal = $("input[name='company']:checked").val();
       userInput.push(Number(companyVal))

       var terrainVal = $("input[name='terrain']:checked").val();
       userInput.push(Number(terrainVal))



       var a = [];
       var b = [];
       var c = [];

       function instanceCount(array){
         for(i=0; i<= array.length; i++){
           if (array[i] === 1){a.push(array[i])};
           if (array[i] === 2){b.push(array[i])};
           if (array[i] === 3){c.push(array[i])};
         };

       };


       instanceCount(userInput);


              /*if(a.length > b.length && a.length > c.length){
                alert("A is da longest")
              };*/


              if(a.length > b.length && a.length > c.length){

                $('.suggestion').append('<p>You chose mostly a\'s so we think you might need some solitude.</p>');
                $('.suggestion').append('<img class = "images" id="solo1" src="img/solo1.jpg"/><br>');
                $('.suggestion').append('<img class = "images" id="solo2" src="img/solo2.jpg"/><br>');
              };



              if(b.length > a.length && b.length > c.length){
                $('.suggestion').append('<p>You sound like you are travelling with family.</p>');
                $('.suggestion').append('<img class = "images" id="Family2" src="img/Family2.jpg"/><br>');
                $('.suggestion').append('<img class = "images" id="Family1" src="img/Family1.jpg"/><br>');
                $('.suggestion').append('<p>But just in case you are not, you could try here instead.</p>');
                $('.suggestion').append('<img class = "images" id="solo2" src="img/solo2.jpg"/><br>');

              };

              if(c.length> a.length && c.length>b.length){
                $('.suggestion').append('<p>Looking for a party? We know some great places.</p>');
                $('.suggestion').append('<img class = "images" id="Party1" src="img/Party1.jpg"/><br>');
                $('.suggestion').append('<img class = "images" id="Party2" src="img/Party2.jpg"/><br>');
                $('.suggestion').append('<p>But just in case you are not, you could try here instead.</p>');
                $('.suggestion').append('<img class = "images" id="solo2" src="img/solo2.jpg"/><br>');

              };

              if(a.length === b.length && a.length === c.length){
                $('.suggestion').append('<p>You chose an equal number of a\'s, b\'s and c\'s, so we\'ll just go ahead and give you ALL these suggestions.</p>');
                $('.suggestion').append('<p>If solitude was what you were looking for, then try this.</p>');
                $('.suggestion').append('<img class = "images" id="solo1" src="img/solo1.jpg"/><br>');
                $('.suggestion').append('<p>If you\'re looking for a party, try this.</p>');
                $('.suggestion').append('<img class = "images" id="Party2" src="img/Party2.jpg"/><br>');
                $('.suggestion').append('<p>If you\'re travelling with family, try this.</p>');
                $('.suggestion').append('<img class = "images" id="Family2" src="img/Family2.jpg"/><br>');
              };

              if(a.length === b.length && a.length > c.length){
                $('.suggestion').append('<p>You chose an equal number of a\'s and b\'s so we\'re not sure if you\'re alone or with family.<br>These are appropriate for both</p>');
                $('.suggestion').append('<img class = "images" id="solo2" src="img/solo2.jpg"/><br>');
                $('.suggestion').append('<img class = "images" id="Family1" src="img/Family1.jpg"/><br>');
              };

              if(a.length === c.length && a.length > b.length){
                $('.suggestion').append('<p>You chose an equal number of a\'s and c\'s so we think you want to get away from everyone for a good time.<br>These might be appropriate.</p>');
                $('.suggestion').append('<img class = "images" id="solo1" src="img/solo1.jpg"/><br>');
                $('.suggestion').append('<img class = "images" id="Party2" src="img/Party2.jpg"/><br>');
              };

              if(b.length === c.length && b.length > a.length){
                $('.suggestion').append('<p>You chose an equal number of b\'s and c\'s so we think you want to get away from everyone to relax with family.<br>These might be appropriate.</p>');
                $('.suggestion').append('<img class = "images" id="solo2" src="img/solo2.jpg"/><br>');
                $('.suggestion').append('<img class = "images" id="Family2" src="img/Family2.jpg"/><br>');
              };



              $('.container').remove()


       /*var adder = (
         Number(ageVal)  + Number(weatherVal) + Number(nightVal) + Number(longVal) +
         Number(companyVal) + Number(terrainVal)
       );

       $('body').append("<div class=\"suggestion\"></div>")
       $('.suggestion').append("<h3>Here are your suggestions!</h3>");


       if (adder <= 9) {
         $('.suggestion').append('<p>You sound like you might need some solitude.</p>');
         $('.suggestion').append('<img id="solo1" src="img/solo1.jpg" />');
         $('.suggestion').append('<img id="solo2" src="img/solo2.jpg" />');
       };

       if ( adder>7 && adder <=9 ){
         $('.suggestion').append('<p>If you want some anonymous company, you could try here too.</p>');
         $('.suggestion').append('<img id="theImg" src="img/Family1.jpg" />');
       };

       if(adder>9 && adder <12){
         $('.suggestion').append('<p>You sound like you are travelling with family.</p>');
         $('.suggestion').append('<img id="Family2" src="img/Family2.jpg" />');
         $('.suggestion').append('<img id="Family1" src="img/Family1.jpg" />');
         $('.suggestion').append('<p>But just in case you are not, you could try here too.</p>');
         $('.suggestion').append('<img id="solo2" src="img/solo2.jpg" />');

       };

       if(adder===12){
         $('.suggestion').append('<p>You sound like you are travelling with family.</p>');
         $('.suggestion').append('<img id="Family2" src="img/Family2.jpg" />');
         $('.suggestion').append('<img id="Family1" src="img/Family1.jpg" />');

       };

       if(adder>12 && adder <=15){
         $('.suggestion').append('<p>You sound like you are travelling with family.</p>');
         $('.suggestion').append('<img id="Family2" src="img/Family2.jpg" />');
         $('.suggestion').append('<p>But just in case you are not, you could try here too.</p>');
         $('.suggestion').append('<img id="Party1" src="img/Party1.jpg" />');

       };

       if(adder>15){
         $('.suggestion').append('<p>Looking for a party? We know some great places.</p>');
         $('.suggestion').append('<img id="Party1" src="img/Party1.jpg" />');
         $('.suggestion').append('<img id="Party2" src="img/Party2.jpg" />');
       };


       $('.container').remove()

       */





    });

});



/*
Solo1 = Moab, Utah, USA (really alone)
Solo2 = Siargao, Philippines (alone with space for company)

Family1 = Sunny beach Bulgaria (Everyone friendly)
Family2 = The Balearic island of Majorca (Fam hard)

Party1 = New Orleans, Louisiana, USA (family friendly)
Party2 = Ibiza Sunset Boat Party (Party hard)
*/
