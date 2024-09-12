$(document).ready(function () {
  $('#keliling-segitiga').submit(function () {
    $.ajax({
      type: 'POST',
      url: $(this).attr('action'),
      data: $(this).serialize(),
      beforeSend: function () {
        $('#loading-keliling-segitiga').show();
        $('#result-keliling-segitiga').hide();
      },
      success: function (data) {
        $('#loading-keliling-segitiga').hide();
        $('#result-keliling-segitiga').fadeIn('slow').html(data);
      },
    });
    return false;
  });
});
