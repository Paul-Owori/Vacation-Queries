/*
-Make a form that gathers the users name and has multiple choice questions.
-Write an algorithm that uses the input of the multiple choice questions to
 narrow down to one of several destinations
-Give output in the form of an answer suggesting several vacation destinations.
-

*/

$(document).ready(function(){

  $('#young').click(function(){
    var textInput = $("#name").val();
    $('#added').remove();
    $('#added1').remove();
    $('#added2').remove();
    $('<i id = "added1"> Maybe you should fill this form with an adult, ' + textInput + '</i>').insertAfter("#yet");
    //Teases the user with comments in the age question

  });

  $('#shady').click(function(){
    var textInput = $("#name").val();
    $('#added').remove();
    $('#added1').remove();
    $('#added2').remove();
    $('<i id = "added"> That\'s a bit shady, but we won\'t judge you, ' + textInput + '</i>').insertAfter("#judge");
    //Teases the user with comments in the age question

  });

  $('#old').click(function(){
    var textInput = $("#name").val();
    $('#added').remove();
    $('#added1').remove();
    $('#added2').remove();
    $('<i id = "added2"> That\'s perfect, ' + textInput + '. Please proceed.</i>').insertAfter("#aged");
    //Teases the user with comments in the age question

  });

  $("form").on("submit", function(event) {
       event.preventDefault();
       //Prevents the form from being submitted and executes the following code instead.
       var textInput = $("#name").val();
       var userInput = [];

       $($('.all').append('<div class="suggestion"><h3>Here are your suggestions '+ textInput+'!</h3></div>')).fadeIn()
       //Creates a new suggestion div with only a header for the user results using the user name.


       //The following vars gather the answers from the radio buttons in each question and push them to the userINput array.
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


       //The following arrays will be used to store the occurences of a, b, and c as the answers to the questions
       var a = [];
       var b = [];
       var c = [];

       //This function sorts the userInput array and pushes the occurences of answers as a, b, or c to their respective arrays.
       function instanceCount(array){
         for(i=0; i<= array.length; i++){
           if (array[i] === 1){a.push(array[i])};
           if (array[i] === 2){b.push(array[i])};
           if (array[i] === 3){c.push(array[i])};
         };

       };
       instanceCount(userInput);


       /*The following if statements use the user results(the number of occurences of a,b or c) as guidance and then append to a the
       suggestion div the recommendations in the form of an image and an address.
       */

       if(a.length > b.length && a.length > c.length){

         $('.suggestion').append('<p>You chose mostly a\'s so we think you might need some solitude.</p>');
         $('.suggestion').append('<img class = "images" id="solo1" src="img/solo1.jpg"/><span class = "places">Moab, Utah, USA</span><br>');
         $('.suggestion').append('<img class = "images" id="solo2" src="img/solo2.jpg"/><span class = "places">Siargao, Philippines</span><br>');
       };


       if(b.length > a.length && b.length > c.length){
         $('.suggestion').append('<p>You chose mostly b\'s so we think you might travelling with family.</p>');
         $('.suggestion').append('<img class = "images" id="Family2" src="img/Family2.jpg"/><span class = "places">The Balearic island of Majorca</span><br>');
         $('.suggestion').append('<img class = "images" id="Family1" src="img/Family1.jpg"/><span class = "places">Sunny beach Bulgaria</span><br>');
         $('.suggestion').append('<p>But just in case you are not, you could try here instead.</p>');
         $('.suggestion').append('<img class = "images" id="solo2" src="img/solo2.jpg"/><span class = "places">Siargao, Philippines</span><br>');

       };

       if(c.length> a.length && c.length>b.length){
         $('.suggestion').append('<p>You chose mostly c\'s so we think you might be looking for a party. We know some great places.</p>');
         $('.suggestion').append('<img class = "images" id="Party1" src="img/Party1.jpg"/><span class = "places">New Orleans, Louisiana, USA</span><br>');
         $('.suggestion').append('<img class = "images" id="Party2" src="img/Party2.jpg"/><span class = "places">Ibiza Sunset Boat Party</span><br>');
         $('.suggestion').append('<p>But just in case you are not, you could try here instead.</p>');
         $('.suggestion').append('<img class = "images" id="solo2" src="img/solo2.jpg"/><span class = "places">Siargao, Philippines</span><br>');

       };

       if(a.length === b.length && a.length === c.length){
         $('.suggestion').append('<p>You chose an equal number of a\'s, b\'s and c\'s, so we\'ll just go ahead and give you ALL these suggestions.</p>');
         $('.suggestion').append('<p>If solitude was what you were looking for, then try this.</p>');
         $('.suggestion').append('<img class = "images" id="solo1" src="img/solo1.jpg"/><span class = "places">Moab, Utah, USA</span><br>');
         $('.suggestion').append('<p>If you\'re looking for a party, try this.</p>');
         $('.suggestion').append('<img class = "images" id="Party2" src="img/Party2.jpg"/><span class = "places">Ibiza Sunset Boat Party</span><br>');
         $('.suggestion').append('<p>If you\'re travelling with family, try this.</p>');
         $('.suggestion').append('<img class = "images" id="Family2" src="img/Family2.jpg"/><span class = "places">The Balearic island of Majorca</span><br>');
       };

       if(a.length === b.length && a.length > c.length){
         $('.suggestion').append('<p>You chose an equal number of a\'s and b\'s so we\'re not sure if you\'re alone or with family.<br>These are appropriate for both</p>');
         $('.suggestion').append('<img class = "images" id="solo2" src="img/solo2.jpg"/><span class = "places">Siargao, Philippines</span><br>');
         $('.suggestion').append('<img class = "images" id="Family1" src="img/Family1.jpg"/><span class = "places">Sunny beach Bulgaria</span><br>');
       };

       if(a.length === c.length && a.length > b.length){
         $('.suggestion').append('<p>You chose an equal number of a\'s and c\'s so we think you want to get away from everyone for a good time.<br>These might be appropriate.</p>');
         $('.suggestion').append('<img class = "images" id="solo1" src="img/solo1.jpg"/><span class = "places">Moab, Utah, USA</span><br>');
         $('.suggestion').append('<img class = "images" id="Party2" src="img/Party2.jpg"/><span class = "places">Ibiza Sunset Boat Party</span><br>');
       };

       if(b.length === c.length && b.length > a.length){
         $('.suggestion').append('<p>You chose an equal number of b\'s and c\'s so we think you want to get away from everyone to relax with family.<br>These might be appropriate.</p>');
         $('.suggestion').append('<img class = "images" id="solo2" src="img/solo2.jpg"/><span class = "places">Siargao, Philippines</span><br>');
         $('.suggestion').append('<img class = "images" id="Family2" src="img/Family2.jpg"/><span class = "places">The Balearic island of Majorca</span><br>');
       };

       $('.containerone').fadeOut()
       //Fades out the form while the suggestions replace it.

    });

});
