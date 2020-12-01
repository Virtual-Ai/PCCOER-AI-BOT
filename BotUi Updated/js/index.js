var $messages = $(".messages-content");
var serverResponse = "wala";
var $res_messages = $(".messages");
var suggession;
//speech reco
var synth = window.speechSynthesis;

var voices = synth.getVoices();
try {
  var SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  var recognition = new SpeechRecognition();
  recognition.interimResults = false;
} catch (e) {
  console.error(e);
  $(".no-browser-support").show();
}



$("#start-record-btn").on("click", function (e) {
  recognition.start();
});

$(document).on('keypress',function(e) {
    if(e.which == 13) {
      recognition.start();
      scrollToTop("scroll");
    }
    if(e.which == 32) {
      scrollSmoothToBottom("scroll");
      scrollSmoothToTop("scroll");
    }
});

recognition.onresult = (event) => {
  const speechToText = event.results[0][0].transcript;
  document.getElementById("MSG").value = speechToText;
  //console.log(speechToText)
  insertMessage();
};

function listendom(no) {
  console.log(no);
  //console.log(document.getElementById(no))
  document.getElementById("MSG").value = no.innerHTML;
  insertMessage();
}

$(window).load(function () {
//   $messages.mCustomScrollbar();
  
//   setTimeout(function () {
//     serverMessage(
//       "I am a Virtual Assistant Of PCCOER , How can i help You ?"
//     );
//   }, 100);
});

function scrollToTop (id) {
  var div = document.getElementById(id);
  div.scrollTop = 0;
}

function scrollSmoothToBottom (id) {
  var div = document.getElementById(id);
  $('#' + id).animate({
     scrollTop: div.scrollHeight - div.clientHeight
  }, 12000);
}
function scrollSmoothToTop (id) {
  var div = document.getElementById(id);
  $('#' + id).animate({
     scrollTop: 0
  }, 12000);
}


function updateScrollbar() {
  $messages.mCustomScrollbar("update").mCustomScrollbar("scrollTo", "bottom", {
    scrollInertia: 10,
    timeout: 0,
  });
}

function update_res_Scrollbar() {
  $res_messages.mCustomScrollbar("update").mCustomScrollbar("scrollTo", "bottom", {
    scrollInertia: 10,
    timeout: 0,
  });
}

function insertMessage() {
  msg = $(".message-input").val();
  if ($.trim(msg) == "") {
    return false;
  }
  $('<div class="message message-personal">' + msg + "</div>")

    .addClass("new");
  fetchmsg();

  $(".message-input").val(null);
  updateScrollbar();
}

document.getElementById("mymsg").onsubmit = (e) => {
  e.preventDefault();
  insertMessage();
};

function serverMessage(response2) {
  if ($(".message-input").val() != "") {
    return false;
  }
  $(
    '<div class="message loading new mCustomscrollBox"><span></span></div>'
  ).appendTo($(".mCSB_container"));

  updateScrollbar();

  setTimeout(function () {
    $(".message.loading").remove();
    $(
      '<div class="message new" id="qw">' +
      response2 +
      "</div>"
    )
      .appendTo($(".mCSB_container"))
      .addClass("new");
      
    updateScrollbar();
  }, 100 + Math.random() * 20 * 100);
}

$(window).load(function(){
  
});

function fetchmsg() {
  var url = "http://localhost:5000/send-msg";
  const data = new URLSearchParams();
  for (const pair of new FormData(document.getElementById("mymsg"))) {
    data.append(pair[0], pair[1]);
    console.log(pair);
  }

  console.log("abc", data);
  fetch(url, {
    method: "POST",
    body: data,
  })
    .then((res) => res.json())
    .then((response) => {
      console.log(Object.keys(response.Reply)); 
      try{
        document.getElementById("qw").innerHTML = response.Reply.fulfillmentText + '<br><img src="' + response.Reply.fulfillmentMessages[1].card.imageUri + '"/>' + "<div>"+response.Reply.fulfillmentMessages[1].card.title+"</div>"+ "<div>"+response.Reply.fulfillmentMessages[2].text.text+"</div>";
        console.log(Object.keys(response.Reply.fulfillmentMessages[1]))
      
      }
      catch (err){
        document.getElementById("qw").innerHTML = response.Reply.fulfillmentText;
        console.log(Object.keys(response.Reply.fulfillmentMessages))
      }
      try{
        document.getElementById("qw").innerHTML = response.Reply.fulfillmentText +"<div>"+ response.Reply.fulfillmentMessages[1].text.text+"</div>";
        $(".container").css("width","550");
        $('.carousel').carousel({
          interval: 2000
        });
      }
      catch (err){
        
      }
      try{
        document.getElementById("qw").innerHTML ="<div>"+ response.Reply.fulfillmentMessages[1].text.text+"</div>";
      }
      catch{
        
      }
    
      try{
          if(response.Reply.fulfillmentMessages[2].text.text == null){
            $(document).ready(function(){
                $(".gif").animate({
                  right: '-135px',
                  top: '201px',
                  width: '700px',
                  height: '525px',
                });
            });
          }

          else if(response.Reply.fulfillmentMessages[2].text.text == "small"){
            $(document).ready(function(){
                $(".gif").animate({
                  top: '5px',
                  right: '9px',
                  width: '130px',
                  height: '105px',
                });
            });
          }

          else if(response.Reply.fulfillmentMessages[2].text.text == "big"){
            $(document).ready(function(){
                $(".gif").animate({
                  right: '-135px',
                  top: '201px',
                  width: '700px',
                  height: '525px',
                });
            });
          }
      }
      catch(err){
             $(document).ready(function(){
                $(".gif").animate({
                  right: '-135px',
                  top: '201px',
                  width: '700px',
                  height: '525px',
                });
            });
      }

      try{
        var utterThis = new SpeechSynthesisUtterance(response.Reply.fulfillmentMessages[0].simpleResponses.simpleResponses[0].textToSpeech);
        utterThis.voice = voices[4];
        utterThis.lang = "hi-IN";
        synth.speak(utterThis);
      }
      catch(err){
        var utterThis = new SpeechSynthesisUtterance(response.Reply.fulfillmentMessages[0].text.text);
        utterThis.voice = voices[4];
        utterThis.lang = "hi-IN";
        synth.speak(utterThis);
      }
    })
    .catch((error) => console.error("Error h:", error));
}
