var socketaddy = "ws://" + "aibtts.eu-gb.mybluemix.net" + "/ws/audio";
var once = true;

$(document).ready(function(){
  var output = document.getElementById('output')
  sock = new WebSocket(socketaddy);
  sock.onopen = function(){
      console.log("Connected websocket");
      begin();
  };
  sock.onerror = function(){
      console.log("Websocket error");
  };
  sock.onclose = function () {
      console.log('Not connected. Refresh the page?');
  }
  sock.onmessage = function(evt){
    console.log("Websocket message", evt);
    output.src = window.URL.createObjectURL(evt.data);
    output.play();
  };
});


/* global ConversationPanel: true, PayloadPanel: true*/
/* eslint no-unused-vars: "off" */

// Other JS files required to be loaded first: apis.js, conversation.js, payload.js
var begin = function() {
  if (once === true) {
    // Initialize all modules
    ConversationPanel.init();
    PayloadPanel.init();
    once = false;
  }
};
