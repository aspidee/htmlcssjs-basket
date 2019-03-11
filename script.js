function getRandom(min, max) {

  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomChar() {

  var rndInt = getRandom(65, 90);
  var rndChar = String.fromCharCode(rndInt);

  return rndChar;
}


function getRandomId() {

  var rndChars = "";
  var rndVals = "";

  for (var i=0;i<3;i++) {

    rndChars += getRandomChar();
    rndVals += getRandom(0,9);
  }

  var rndId = rndChars + rndVals;

  return rndId;
}


function getRandomPlayer() {

  var twoPerc = getRandom(0, 100);
  var threePerc = 100 - twoPerc;

  var player = {

    "id": getRandomId(),
    "points": getRandom(0, 100),
    "bounce": getRandom(0, 500),
    "mistake": getRandom(0, 50),
    "twoPerc": twoPerc,
    "threePerc": threePerc,
  };

  return player;
}


function isPresent(player, players) {

  var finded = false;

  for (var i = 0; i < players.length; i++) {

    if (player.id == players[i].id) {

      finded = true;
    }
  }

  return finded;
}


function getPlayerById(id, players) {

  var player;

  for (var i = 0; i < players.length; i++) {
    if (players[i].id == id)  {

      player = players[i];
    }
  }

  return player;
}


function getRandomPlayers() {

  var players = [];

  while(players.length < 10) {

    var player = getRandomPlayer();

    if(!isPresent(player, players)) {

      players.push(player);
    }
  }

  return players;
}


function updateUI(players) {

  var datalist = $("#players");

  for (var i = 0; i < players.length; i++) {

    var player = players[i];

    var opt = document.createElement("option");
    opt.value = player.id;

    datalist.append(opt);
  }
}


function clearClick() {

  var inputText = $("#usr-input");
  inputText.val("");

  var idDOM = $("#id > span.content");
  var pointsDOM = $("#points > span.content");
  var bounceDOM = $("#bounce > span.content");
  var mistakeDOM = $("#mistake > span.content");
  var twoPercDOM = $("#twoPerc > span.content");
  var threePercDOM = $("#threePerc > span.content");

  idDOM.text("");
  pointsDOM.text("");
  bounceDOM.text("");
  mistakeDOM.text("");
  twoPercDOM.text("");
  threePercDOM.text("");
}


function playerSelection(players) {

  var me = $("#usr-input");

  var selectedId = me.val();

  var player = getPlayerById(selectedId, players);

  var idDOM = $("#id > span.content");
  var pointsDOM = $("#points > span.content");
  var bounceDOM = $("#bounce > span.content");
  var mistakeDOM = $("#mistake > span.content");
  var twoPercDOM = $("#twoPerc > span.content");
  var threePercDOM = $("#threePerc > span.content");

  idDOM.text(player.id);
  pointsDOM.text(player.points);
  bounceDOM.text(player.bounce);
  mistakeDOM.text(player.mistake);
  twoPercDOM.text(player.twoPerc + "%");
  threePercDOM.text(player.threePerc + "%");
}



function init() {

  var players = getRandomPlayers();
  updateUI(players);

  var clearBtn = $("#clear-btn");
  clearBtn.click(clearClick);

  var inputText = $("#usr-input");
  inputText.on("change", function() {

    playerSelection(players);
  });
}

$(document).ready(init);
