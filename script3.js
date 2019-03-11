function getRandom(min,max) {
  return Math.floor(Math.random()*(max-min))+min;
}
function getIdRandom(){
  var rdnId = "";
  for (var i = 0; i < 3 ; i++) {
    var idNum = getRandom(0,9);
    rdnId += idNum;
  }
  for(var z = 0; z < 3; z++){
    var getChar = String.fromCharCode(getRandom(65,90));
    rdnId+=getChar;
  }
  return rdnId;
}
function dataPlayer(){
  var twoPerc = getRandom(0,100);
  var threePerc= 100 - twoPerc;
  var player = {
    "id"       : getIdRandom() ,
    "point"    : getRandom(0,300),
    "bounce"   : getRandom(0,300),
    "mistake"  : getRandom(0,300),
    "twoPerc"  : twoPerc,
    "threePerc": threePerc
  }
  return player;
}
function isPresent(id , players){
  var finded = false;
  for(var i = 0; i < players.length; i++){
    if(players[i].id == id){
      finded = true;
    }
  }
 return finded;
}
function getPlayerById(id , listPlayers){
  var playerIdSelected;
  for(var i = 0; i< listPlayers.length ; i++){
    if(id == listPlayers[i].id){
      playerIdSelected = listPlayers[i];
    }
  }
  return playerIdSelected;
}
function getPlayers() {
  var players = [];
  while(players.length< 10){
    var player = dataPlayer();
    if(!isPresent(player.id, players)){
    players.push(player);
    }
  }
  return players;
}
function updateUI(listPlayers){
  var datalist = $("#players");
  for(var i = 0; i< listPlayers.length; i++){
    var opt = document.createElement("option");
    opt.value = listPlayers[i].id;
    datalist.append(opt);
  }
}
function clearClick() {
  var inputContent = $("#usr-input");
  inputContent.val("");
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
function playersSelection(listPlayers){
 var me = $("#usr-input");
 var selected = me.val();
 var player = getPlayerById(selected, listPlayers);
  var idDOM = $("#id > span.content");
  var pointsDOM = $("#points > span.content");
  var bounceDOM = $("#bounce > span.content");
  var mistakeDOM = $("#mistake > span.content");
  var twoPercDOM = $("#twoPerc > span.content");
  var threePercDOM = $("#threePerc > span.content");
  idDOM.text(player.id);
  pointsDOM.text(player.point);
  bounceDOM.text(player.bounce);
  mistakeDOM.text(player.mistake);
  twoPercDOM.text(player.twoPerc + "%");
  threePercDOM.text(player.threePerc + "%");
}
function init(){
var listPlayers = getPlayers();
var clearbtn = $("#clear-btn");
var userInput = $("#usr-input");
userInput.on("change", function(){
  playersSelection(listPlayers);
});
clearbtn.click(clearClick);
updateUI(listPlayers);
}
$(document).ready(init);
