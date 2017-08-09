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
      "reenergy": [
        "take a foster dog out for a walk!",
        "drink some mate"
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
      "reenergy": [
        "light a candle and do some journaling",
        "call a loved one and tell them something you're grateful for"
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
      "reenergy": [
        "change the context and get outside.",
        "pick a recipe to try out in the kitchen."
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
      "reenergy": [
        "sign up for kickboxing",
        "eat a really spicy pepper"
      ],
      "lazy":[
        "draw an angry picture.",
        "call a friend."
      ]
    },
    "envious": {
      "high": [
        "count to 10 over and over.",
        "write out why I'm feeling this way."
      ],
      "zen":[
        "feel contradictory.",
        "make a gong and hit it."
      ],
      "reenergy": [
        "take a self defense class.",
        "list out my top qualities."
      ],
      "lazy":[
        "make a list of to-dos.",
        "watch a murder movie."
      ]
    },
    "emotionless": {
      "high": [
        "take a break from being so on the go.",
        "come up with a dance choreography."
      ],
      "zen":[
        "embrace mindfulness.",
        "find some watercolors and use 'em'."
      ],
      "reenergy": [
        "volunteer at an organization that helps refugees.",
        "try cooking something with an ingredient I've never used."
      ],
      "lazy":[
        "do a lesson or two on Duolingo.",
        "go to a community theatre play."
      ]
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
