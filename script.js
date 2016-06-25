/*image request, loader-overly,dialog box open-close related page logic*/

$(function() {
  /*all div ids*/

  var myUrl = window.location.href;
  var hashTag = myUrl.split('#')[1];
  var divcount = ['one', 'two', 'three', 'four', 'five', 'six'];
  var titleOne = ['Momentum talks', 'Cosmos mystery','Moleculer structures', 'Particles','Metaporphics', 'puzzules'];
  var titleTwo = ['yoda talk', 'Night themes', 'color Art', 'Dance world', 'Bollywood', 'Book saga'];
  var titleThree = ['Calculate', 'Time zones','Gears','Fortune wheel', 'Measure and convert','About tools'];

  var titles = [];
  var context;
  /*assign tiltes to tiles based on screen*/
console.log('coming here');
  switch (hashTag) {
    case 'one':
      titles = titleOne;
      break;
    case 'two':
      titles = titleTwo;
      break;
    case 'three':
      titles = titleThree;
      break;
  }

  /*register event listners on click over child to open popup*/
  for (var i in divcount) {

    $("#" + divcount[i]).on('click', function(evt) {
      console.log(evt.target.nodeName);
      if (event.target.nodeName == 'SECTION') {
        context = this.id;
        console.log(context);
        console.log(this.title);/*not getting title?*/
        statesdemo.state0.title=titles[divcount.indexOf(context)];
        $.prompt(statesdemo);
      }

    }).prop('title', titles[i])

    .tooltip({
      show: {
        effect: "slideDown",
        delay: 10
      },
      position: {
        of: $(this),
        at: 'center top',
        my: 'center bottom'

      }
    });


  }


  /*dialog box logic*/

  /* ------------------------------------------- */

  var statesdemo = {
    state0: {
      title: 'Info there',
      html: '<label><textarea rows="3" type="text" name="fname" value="">  </textarea></label><br />',
      buttons: {
        "Hit": true,
        "Miss": false
      },
      //focus: "input[name='fname']",
      submit: function(e, v, m, f) {

        if (v === true) {
          /* submit */
          console.log(f.fname + " v value" + v);


          if (f.fname !== null) {
            $loading.show();
            switch (hashTag) {
              case 'one':
                sendRequestOne(context, f.fname);
                break;
              case 'two':
                sendRequestTwo(context, f.fname);
                break;
              case 'three':
                sendRequestThree(context, f.fname);
                break;
            }

          } else {
            alert('wrong input');
          }

          $.prompt.close();
        } else {
          /*close popup */
          $.prompt.close();
        }
        e.preventDefault();
      }
    },

  };


  /*add functionality for request..write cases etc.. common request object at one place*/
  function sendRequestOne(type, params) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(res) {
      if (xhr.status == 200 && xhr.readyState == 4) {
        console.log(xhr.response);
         $loading.hide();
          $( "#dialog" ).dialog( "open" );
      }
    }
    switch (type) {
      case 'one':
        /*ENtertainment --> yoda,upload image and get meme out of that*/
        params = params.replace(/ /g, "+");
        xhr.open("GET", "https://yoda.p.mashape.com/yoda?sentence=" + params + ".++Oh+wait.", true);
        xhr.setRequestHeader("X-Mashape-Key", "p6WGPwP9g5mshEsgkKnuTtuFnbtpp123WKxjsnI7xZJLhb8JJe");
        xhr.setRequestHeader("Accept", "text/plain");
        xhr.send();
        break;

      case 'two':
        /*Info --> countries,find station code info, abbrivation,find gender name info*/
        xhr.open("GET", "https://daxeel-abbreviations-v1.p.mashape.com/all/" + params, true);
        xhr.setRequestHeader("X-Mashape-Key", "p6WGPwP9g5mshEsgkKnuTtuFnbtpp123WKxjsnI7xZJLhb8JJe");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.send();
        break;

      case 'three':
        /*station code*/
        xhr.open("POST", "https://rstations.p.mashape.com/", true);
        xhr.setRequestHeader("X-Mashape-Key", "p6WGPwP9g5mshEsgkKnuTtuFnbtpp123WKxjsnI7xZJLhb8JJe");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.send("{\"search\":\"narsinghpur\"}");
        break;

      case 'four':
        /*name info*/
        xhr.open("POST", "https://udayogra-find-gender-by-name-v1.p.mashape.com/analysis?firstname=" + params, true);
        xhr.setRequestHeader("X-Mashape-Key", "p6WGPwP9g5mshEsgkKnuTtuFnbtpp123WKxjsnI7xZJLhb8JJe");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.send({});
        break;

      case 'five':
        /*password*/
        /*utilities*/
        xhr.open("GET", "https://acedev-project-name-generator-v1.p.mashape.com/with-number", true);
        xhr.setRequestHeader("X-Mashape-Key", "p6WGPwP9g5mshEsgkKnuTtuFnbtpp123WKxjsnI7xZJLhb8JJe");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.send();
        break;


    }


  }

  function sendRequestTwo(type, params) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(res) {
      if (xhr.status == 200 && xhr.readyState == 4) {
        console.log(xhr.response);
         $loading.hide();
          $( "#dialog" ).dialog( "open" );
      }
    }
    switch (type) {
      case 'one':
        /*ENtertainment --> yoda,upload image and get meme out of that*/
        params = params.replace(/ /g, "+");
        xhr.open("GET", "https://yoda.p.mashape.com/yoda?sentence=" + params + ".++Oh+wait.", true);
        xhr.setRequestHeader("X-Mashape-Key", "p6WGPwP9g5mshEsgkKnuTtuFnbtpp123WKxjsnI7xZJLhb8JJe");
        xhr.setRequestHeader("Accept", "text/plain");
        break;

      case 'two':
        /*Info --> countries,find station code info, abbrivation,find gender name info*/
        xhr.open("GET", "https://daxeel-abbreviations-v1.p.mashape.com/all/" + params, true);
        xhr.setRequestHeader("X-Mashape-Key", "p6WGPwP9g5mshEsgkKnuTtuFnbtpp123WKxjsnI7xZJLhb8JJe");
        xhr.setRequestHeader("Accept", "application/json");
        break;

      case 'three':
        xhr.open("POST", "https://rstations.p.mashape.com/", true);
        xhr.setRequestHeader("X-Mashape-Key", "p6WGPwP9g5mshEsgkKnuTtuFnbtpp123WKxjsnI7xZJLhb8JJe");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.send("{\"search\":\"narsinghpur\"}");
        break;

      case 'four':
        xhr.open("POST", "https://udayogra-find-gender-by-name-v1.p.mashape.com/analysis?firstname=" + params, true);
        xhr.setRequestHeader("X-Mashape-Key", "p6WGPwP9g5mshEsgkKnuTtuFnbtpp123WKxjsnI7xZJLhb8JJe");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.send({});
        break;

      case 'five':
        /*utilities*/
        xhr.open("GET", "https://acedev-project-name-generator-v1.p.mashape.com/with-number", true);
        xhr.setRequestHeader("X-Mashape-Key", "p6WGPwP9g5mshEsgkKnuTtuFnbtpp123WKxjsnI7xZJLhb8JJe");
        xhr.setRequestHeader("Accept", "application/json");
        break;


    }
    xhr.send();

  }

  function sendRequestThree(type, params) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(res) {
      if (xhr.status == 200 && xhr.readyState == 4) {
        console.log(xhr.response);
         $loading.hide();
          $( "#dialog" ).dialog( "open" );
      }
    }
    switch (type) {
      case 'one':
        /*ENtertainment --> yoda,upload image and get meme out of that*/
        params = params.replace(/ /g, "+");
        xhr.open("GET", "https://yoda.p.mashape.com/yoda?sentence=" + params + ".++Oh+wait.", true);
        xhr.setRequestHeader("X-Mashape-Key", "p6WGPwP9g5mshEsgkKnuTtuFnbtpp123WKxjsnI7xZJLhb8JJe");
        xhr.setRequestHeader("Accept", "text/plain");
        break;

      case 'two':
        /*Info --> countries,find station code info, abbrivation,find gender name info*/
        xhr.open("GET", "https://daxeel-abbreviations-v1.p.mashape.com/all/" + params, true);
        xhr.setRequestHeader("X-Mashape-Key", "p6WGPwP9g5mshEsgkKnuTtuFnbtpp123WKxjsnI7xZJLhb8JJe");
        xhr.setRequestHeader("Accept", "application/json");
        break;

      case 'three':
        xhr.open("POST", "https://rstations.p.mashape.com/", true);
        xhr.setRequestHeader("X-Mashape-Key", "p6WGPwP9g5mshEsgkKnuTtuFnbtpp123WKxjsnI7xZJLhb8JJe");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.send("{\"search\":\"narsinghpur\"}");
        break;

      case 'four':
        xhr.open("POST", "https://udayogra-find-gender-by-name-v1.p.mashape.com/analysis?firstname=" + params, true);
        xhr.setRequestHeader("X-Mashape-Key", "p6WGPwP9g5mshEsgkKnuTtuFnbtpp123WKxjsnI7xZJLhb8JJe");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.send({});
        break;

      case 'five':
        /*utilities*/
        xhr.open("GET", "https://acedev-project-name-generator-v1.p.mashape.com/with-number", true);
        xhr.setRequestHeader("X-Mashape-Key", "p6WGPwP9g5mshEsgkKnuTtuFnbtpp123WKxjsnI7xZJLhb8JJe");
        xhr.setRequestHeader("Accept", "application/json");
        break;


    }
    xhr.send();

  }
/*var $loading = $('.spinner-ajax').hide();*/
  var $loading = $('#overlay-spinner').hide();
$( "#dialog" ).dialog({
      autoOpen: false,
      width: $(window).width()* 0.8,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "blind",
        duration: 1000
      },
     
      
    });

});