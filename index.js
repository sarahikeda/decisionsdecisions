$(document).ready(function() {
    $('.energy-dropdown').change(function() {
      var energyLevel = this.value;
      var emotion = $('.emotion-dropdown').val();
      console.log(emotion);
      console.log(energyLevel);
      if (!emotion) {
        console.log('Put Something');
      } else if (emotion == 'happy') {
        $('.activity').text('do nothing.')
      } else {
        $('.activity').text('jump up and down!')
      }
    })
  });
