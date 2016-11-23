var json = {
  "emotion" : {
    "happy": {
      "high": [
        "go running.",
        "dance with friends."
      ],
      "zen": [
        "meditate.",
        "do yoga."
      ],
      "lazy": [
        "netflix and chill.",
        "take a nice nap."
      ]
    },
    "hopeful": {
      "high": [
        "head to a night club immediately.",
        "spin on my head!"
      ],
      "zen":[
        "visit a monastery.",
        "go for a nature walk."
      ],
      "lazy":[
        "write in a journal.",
        "call a friend."
      ]
    },
    "sad": {
      "high": [
        "drive straight to the gym",
        "sing loudly to a rock song!"
      ],
      "zen":[
        "write about something I'm grateful for.",
        "hike my favorite hike."
      ],
      "lazy":[
        "watch a sad movie and let it all out.",
        "hug a loved one."
      ]
    },
    "angry": {
      "high": [
        "try a kickboxing class.",
        "see how many push ups I can do."
      ],
      "zen":[
        "feel contradictory.",
        "really examine what I'm feeling and why."
      ],
      "lazy":[
        "draw an angry picture.",
        "call a friend."
      ]
    },
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
  $('#activity').text(chosenActivity);
}

$(document).ready(function() {
  $('.container').change(function() {
    var energyLevel = $('.energy-dropdown').val();
    var emotion = $('.emotion-dropdown').val();
    if (emotion && energyLevel) {
      var allActivities = getAllActivities(emotion,energyLevel)
      var chosenActivity = pickActivity(allActivities);
      replaceActivity(chosenActivity);
    }
  })
});
