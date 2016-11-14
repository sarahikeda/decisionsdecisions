var json = {
  "emotion" : {
    "happy": {
      "high": [
        "go running.",
        "dance with friends."],
      "zen": [
        "meditate.",
        "do yoga."]
      }
    }
  };

function getAllActivities(emotion,energyLevel) {
  return json.emotion[emotion][energyLevel]
}

function randomize() {
  return Math.floor(Math.random() * 2)
}

function pickActivity(allActivities) {
  return allActivities[randomize()]
}

function replaceActivity(chosenActivity) {
  $('#activity').replaceWith(chosenActivity);
}

$(document).ready(function() {
  $('.energy-dropdown').change(function() {
    var energyLevel = this.value;
    var emotion = $('.emotion-dropdown').val();
    if (!emotion) {
      alert('Please pick an emotion.')
    } else {

      var allActivities = getAllActivities(emotion,energyLevel)
      chosenActivity = pickActivity(allActivities);
      replaceActivity(chosenActivity);
    }
  })
});
