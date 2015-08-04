
var api = "http://localhost:3000";

$('#login').on('click', function(e){
  $.ajax( api + '/login',
  {
    contentType: 'application/json',
    processData: false,
    data: JSON.stringify({
      credentials: {
        username: $('#username').val(),
        password: $('#user-password').val()
      }
    }),
    dataType: 'json',
    method: 'POST'
  }).done(function(data, textStatus, jqXHR){
    $('#token').val(data.token);
  }).fail(function(jqXHR, textStatus, errorThrown){
    $('#result').val(errorThrown);
  });
});

// create Run with Ajax
$("#run-create").on('click', function(){
  var pace = (($("#run-distance").val()) / ($("#run-time").val() * 60));

  $.ajax({
    url: '/runs',
    method: 'POST',
    data: {
      run: {
        distance: Number($("#run-distance").val()),
        time: $("#run-time").val(),
        //need to calculate speed from date/time
        speed: pace,
        //miles/second
        description: $("#run-description").val(),
        run_date: $("#run-year").val(),
        run_rating: $("#run-rating").val()
        //user_id: $("#user-id").val()
      }
    }
  }).done(function(data){
    console.log("I'm a robot that created a run.");
  }).fail(function(data){
    console.log("YOU DONE FUCKED UP NOW!");
  });
});

//update Run with Ajax
$("#run-update").on('click', function(){
  $.ajax({
    url: '/runs/' + $("#run-id"),
    method: 'PATCH',
    data: {
      run: {
        distance: Number($("#run-distance").val()),
        time: $("#run-time").val(),
        description: $("#run-description").val(),
        run_date: $("#run-year").val(),
        run_rating: $("#run-rating").val()
      }
    }
  }).done(function(data){
    console.log("I'm a robot that created a run.");
  }).fail(function(data){
    console.log("YOU DONE FUCKED UP NOW!");
  });
});

//destroy Movies with Ajax
$("#run-destroy").on('click', function(){
  $.ajax({
    url: '/runs/' + $("#run-id").val(),
    method: 'DELETE'
  }).done(function(data){
    console.log("I'm a robot that DELETED a run.");
  }).fail(function(data){
    console.log("YOU DONE FUCKED UP NOW!");
  });
});

//display run image with ajax
  // $("#movie-display").on('click', function(){
  //   $.ajax({
  //     url: '/movies/' + $("#movie-id").val(),
  //     method: 'GET'
  //   }).done(function(data){
  //     console.log(data);
  //     $("#movie-image").html("<img src=" + data.poster_src + ">");
  //   }).fail(function(data){
  //     console.log("YOU DONE FUCKED UP NOW!");
  //   });
  // });

// create Run with Ajax
$("#user-create").on('click', function(){
  $.ajax({
    url: '/users',
    method: 'POST',
    data: {
      credentials: {
        username: $("#username").val(),
        password: $("#user-password").val()
      }
    }
  }).done(function(data){
    console.log("I'm a robot that created a user.");
  }).fail(function(data){
    console.log("YOU DONE FUCKED UP NOW!");
  });
});

//update user with Ajax
$("#user-update").on('click', function(){
  $.ajax({
    url: '/users/' + $("#user-id").val(),
    method: 'PATCH',
    data: {
      credentials: {
        username: $("#username").val(),
        password: $("#password").val()
      }
    }
  }).done(function(data){
    console.log("I'm a robot that created a user.");
  }).fail(function(data){
    console.log("YOU DONE FUCKED UP NOW!");
  });
});

//destroy Movies with Ajax
$("#user-destroy").on('click', function(){
  $.ajax({
    url: '/users/' + $("#user-id").val(),
    method: 'DELETE'
  }).done(function(data){
    console.log("I'm a robot that DELETED a user.");
  }).fail(function(data){
    console.log("YOU DONE FUCKED UP NOW!");
  });
});

// create Run with Ajax
$("#profile-create").on('click', function(){
  $.ajax({
    url: '/profiles',
    method: 'POST',
    headers: {
       Authorization: 'Token token=' + $('#token').val()
    },
    data: {
      profile: {
        first_name: ($("#first-name").val()),
        last_name: $("#last-name").val(),
        middle_name: $("#middle-name").val(),
        city: $("#city").val(),
        state: $("#state").val(),
        picture: $("#picture").val(),
        description: $("#profile-description").val(),
        dob: $("#dob").val(),
        user_id: $("#user-id").val()
      }
    }
  }).done(function(data){
    console.log("I'm a robot that created a profile.");
  }).fail(function(data){
    console.log("YOU DONE FUCKED UP NOW!");
  });
});

$("#profile-update").on('click', function(){
  $.ajax({
    url: api + '/profiles/' + $("#profile-id").val(),
    contentType: 'application/json',
    processData: false,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + $('#token').val()
    },
    data: JSON.stringify({
      profile: {
        first_name: ($("#first-name").val()),
        last_name: $("#last-name").val(),
        middle_name: $("#middle-name").val(),
        city: $("#city").val(),
        state: $("#state").val(),
        picture: $("#picture").val(),
        description: $("#profile-description").val(),
        dob: $("#dob").val()
      }
    })
  }).done(function(data){
    console.log("I'm a robot that updated a profile.");
  }).fail(function(data){
    console.log("YOU DONE FUCKED UP NOW!");
  });
});


//destroy Movies with Ajax
$("#profile-destroy").on('click', function(){
  $.ajax({
    url: '/profiles/' + $("#profile-id").val(),
    method: 'DELETE'
  }).done(function(data){
    console.log("I'm a robot that DELETED a profile.");
  }).fail(function(data){
    console.log("YOU DONE FUCKED UP NOW!");
  });
});

// create goal with Ajax
$("#goal-create").on('click', function(){
  $.ajax({
    url: '/goals',
    method: 'POST',
    data: {
      profile: {
        distance: ($("#first-name-id").val()),
        speed: $("#last-name-id").val(),
        time: $("#middle-name-id").val()
      }
    }
  }).done(function(data){
    console.log("I'm a robot that created a profile.");
  }).fail(function(data){
    console.log("YOU DONE FUCKED UP NOW!");
  });
});

// update goal with Ajax
$("#goal-update").on('click', function(){
  $.ajax({
    url: '/goals',
    method: 'PATCH',
    data: {
      profile: {
        distance: ($("#first-name-id").val()),
        speed: $("#last-name-id").val(),
        time: $("#middle-name-id").val()
      }
    }
  }).done(function(data){
    console.log("I'm a robot that created a profile.");
  }).fail(function(data){
    console.log("YOU DONE FUCKED UP NOW!");
  });
});

//destroy Movies with Ajax
$("#goal-destroy").on('click', function(){
  $.ajax({
    url: '/goals/' + $("#goal-id").val(),
    method: 'DELETE'
  }).done(function(data){
    console.log("I'm a robot that DELETED a goal.");
  }).fail(function(data){
    console.log("YOU DONE FUCKED UP NOW!");
  });
});


// //jQuery.ajax
// $(function(){
//   'use strict';
// //  var sa = '//localhost:3000';

//   var gameWatcher;
//   var sa = '//localhost:3000';

//   $('#create').on('click', function(e){
//     $.ajax(sa + '/users',
//     {
//       contentType: 'application/json',
//       processData: false,
//       data: JSON.stringify({}),
//       dataType: 'json',
//       method: 'POST',
//       headers: {
//         Authorization: 'Token token=' + $('#token').val()
//       }
//     }).done(function(data, textStatus, jqXHR){
//       $('#result').val(JSON.stringify(data));
//     }).fail(function(jqXHR, textStatus, errorThrown){
//       $('#result').val(errorThrown);
//     });
//   });

//   $('#join').on('click', function(e){
//     $.ajax(sa + '/games/' + $('#id').val(),
//     {
//       contentType: 'application/json',
//       processData: false,
//       data: JSON.stringify({}),
//       dataType: 'json',
//       method: 'PATCH',
//       headers: {
//         Authorization: 'Token token=' + $('#token').val()
//       }
//     }).done(function(data, textStatus, jqXHR){
//       $('#result').val(JSON.stringify(data));
//     }).fail(function(jqXHR, textStatus, errorThrown){
//       $('#result').val(errorThrown);
//     });
//   });

//   $('#move').on('click', function(e){
//     $.ajax(sa + '/games/' + $('#id').val(),
//     {
//       contentType: 'application/json',
//       processData: false,
//       data: JSON.stringify({
//         game: {
//           cell: {
//             index: +$('#index').val(),
//             value: $('#value').val()
//           }
//         }
//         }),
//       dataType: 'json',
//       method: 'PATCH',
//       headers: {
//         Authorization: 'Token token=' + $('#token').val()
//       }
//     }).done(function(data, textStatus, jqXHR){
//       $('#result').val(JSON.stringify(data));
//     }).fail(function(jqXHR, textStatus, errorThrown){
//       $('#result').val(errorThrown);
//     });
//   });

//   $('#show').on('click', function(e){
//       $.ajax(sa + '/games/' + $('#id').val(),
//       {
//         dataType: 'json',
//         method: 'GET',
//         headers: {
//           Authorization: 'Token token=' + $('#token').val()
//         }
//       }).done(function(data, textStatus, jqXHR){
//         //done
//         $('#result').val(JSON.stringify(data));
//       }).fail(function(jqXHR, textStatus, errorThrown){
//         //fail
//         $('#result').val(errorThrown);
//       });
//     });

//   $('#list').on('click', function(e){
//     $.ajax(sa + '/users',
//     {
//       dataType: 'json',
//       method: 'GET',
//       headers: {
//         Authorization: 'Token token=' + $('#token').val()
//       }
//     }).done(function(data, textStatus, jqXHR){
//       //done
//       $('#result').val(JSON.stringify(data));
//     }).fail(function(jqXHR, textStatus, errorThrown){
//       //fail
//       $('#result').val(errorThrown);
//     });
//   });

//   $('#login').on('click', function(e){
//     $.ajax(sa + '/login',
//     {
//       contentType: 'application/json',
//       processData: false,
//       data: JSON.stringify({
//         credentials: {
//           email: $('#email').val(),
//           password: $('#password').val()
//         }
//       }),
//       dataType: 'json',
//       method: 'POST'
//     }).done(function(data, textStatus, jqXHR){
//       $('#token').val(data.token);
//     }).fail(function(jqXHR, textStatus, errorThrown){
//       $('#result').val(errorThrown);
//     });
//   });

//$('#register').on('click', function(e){
  //     $.ajax(sa + '/users',
  //     {
  //       contentType: 'application/json',
  //       processData: false,
  //       data: JSON.stringify({
  //         credentials: {
  //           email: $('#email').val(),
  //           password: $('#password').val(),
  //           password_confirmation: $('#password').val()
  //         }
  //       }),
  //       dataType: 'json',
  //       method: 'POST'
  //     }).done(function(data, textStatus, jqXHR){
  //       //done
  //       $('#result').val(JSON.stringify(data));
  //     }).fail(function(jqXHR, textStatus, errorThrown){
  //       //fail
  //       $('#result').val('Registration failed!');
  //     });
  //   });
//$('#watch').on('click', function(){
  //     gameWatcher = resourceWatcher(sa + '/games/' + $('#id').val() + '/watch',
  //     {
  //         Authorization: 'Token token=' + $('#token').val()
  //     });
  //     gameWatcher.on('change', function(data){
  //       var parsedData = JSON.parse(data);
  //       // if(data.timeout) {//not an error
  //       //   gameWatcher.close();
  //       //   return console.warn(data.timeout);
  //       // }
  //       var gameData = parsedData.game;
  //       var cell = gameData.cell;
  //       $('#index').val(cell.index);
  //       $('#value').val(cell.value);
  //       $('#result').val('Index: ' + cell.index + 'Cell: ' + cell.value);
  //     });
  //     gameWatcher.on('error', function(e){
  //       console.error('an error has occured with the stream', e);
  //     });
  //   });
  // });

