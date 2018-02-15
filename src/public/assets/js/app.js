/**
* app.js
* Script principal de la aplicacion
EL DE FRONTEND
.CLICK EVENTO
//DONE: cuando sea exitoso
//URL DE LA ACCION
*/
(function() {
  $(document).ready(function() {
    var base = $('base').text();

    $('#rightButton').click(function() {
        alert(1);
        $.ajax({
          type: 'post',
          dataType: 'json',
          url: base + '/action',
          data: { move: 'right' },
        })
        .done(function(data) {
          console.log("success");
          console.log(data);
          alert(data.result);
        })
        .fail(function() {
          console.log("error");
        })
        .always(function() {
          console.log("complete");
        });
    });
  });
});
