//jQuery.ajax
$(function(){
  'use strict';
//  var sa = '//localhost:3000';

  var gameWatcher;
  var sa = '//localhost:3000';

  $('#create').on('click', function(e){
    $.ajax(sa + '/games',
    {
      contentType: 'application/json',
      processData: false,
      data: JSON.stringify({}),
      dataType: 'json',
      method: 'POST',
      headers: {
        Authorization: 'Token token=' + $('#token').val()
      }
    }).done(function(data, textStatus, jqXHR){
      $('#result').val(JSON.stringify(data));
    }).fail(function(jqXHR, textStatus, errorThrown){
      $('#result').val(errorThrown);
    });
  });

  $('#join').on('click', function(e){
    $.ajax(sa + '/games/' + $('#id').val(),
    {
      contentType: 'application/json',
      processData: false,
      data: JSON.stringify({}),
      dataType: 'json',
      method: 'PATCH',
      headers: {
        Authorization: 'Token token=' + $('#token').val()
      }
    }).done(function(data, textStatus, jqXHR){
      $('#result').val(JSON.stringify(data));
    }).fail(function(jqXHR, textStatus, errorThrown){
      $('#result').val(errorThrown);
    });
  });

  $('#move').on('click', function(e){
    $.ajax(sa + '/games/' + $('#id').val(),
    {
      contentType: 'application/json',
      processData: false,
      data: JSON.stringify({
        game: {
          cell: {
            index: +$('#index').val(),
            value: $('#value').val()
          }
        }
        }),
      dataType: 'json',
      method: 'PATCH',
      headers: {
        Authorization: 'Token token=' + $('#token').val()
      }
    }).done(function(data, textStatus, jqXHR){
      $('#result').val(JSON.stringify(data));
    }).fail(function(jqXHR, textStatus, errorThrown){
      $('#result').val(errorThrown);
    });
  });

  $('#show').on('click', function(e){
      $.ajax(sa + '/games/' + $('#id').val(),
      {
        dataType: 'json',
        method: 'GET',
        headers: {
          Authorization: 'Token token=' + $('#token').val()
        }
      }).done(function(data, textStatus, jqXHR){
        //done
        $('#result').val(JSON.stringify(data));
      }).fail(function(jqXHR, textStatus, errorThrown){
        //fail
        $('#result').val(errorThrown);
      });
    });

  $('#list').on('click', function(e){
    $.ajax(sa + '/users',
    {
      dataType: 'json',
      method: 'GET',
      headers: {
        Authorization: 'Token token=' + $('#token').val()
      }
    }).done(function(data, textStatus, jqXHR){
      //done
      $('#result').val(JSON.stringify(data));
    }).fail(function(jqXHR, textStatus, errorThrown){
      //fail
      $('#result').val(errorThrown);
    });
  });

  $('#login').on('click', function(e){
    $.ajax(sa + '/login',
    {
      contentType: 'application/json',
      processData: false,
      data: JSON.stringify({
        credentials: {
          email: $('#email').val(),
          password: $('#password').val()
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

  $('#register').on('click', function(e){
    $.ajax(sa + '/users',
    {
      contentType: 'application/json',
      processData: false,
      data: JSON.stringify({
        credentials: {
          email: $('#email').val(),
          password: $('#password').val(),
          password_confirmation: $('#password').val()
        }
      }),
      dataType: 'json',
      method: 'POST'
    }).done(function(data, textStatus, jqXHR){
      //done
      $('#result').val(JSON.stringify(data));
    }).fail(function(jqXHR, textStatus, errorThrown){
      //fail
      $('#result').val('Registration failed!');
    });
  });

  $('#watch').on('click', function(){
    gameWatcher = resourceWatcher(sa + '/games/' + $('#id').val() + '/watch', {
        Authorization: 'Token token=' + $('#token').val()
      });
    gameWatcher.on('change', function(data){
      var parsedData = JSON.parse(data);
      // if(data.timeout) {//not an error
      //   gameWatcher.close();
      //   return console.warn(data.timeout);
      // }
      var gameData = parsedData.game;
      var cell = gameData.cell;
      $('#index').val(cell.index);
      $('#value').val(cell.value);
      $('#result').val('Index: ' + cell.index + 'Cell: ' + cell.value);
    });
    gameWatcher.on('error', function(e){
      console.error('an error has occured with the stream', e);
    });
  });
});
