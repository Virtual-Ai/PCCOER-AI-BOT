// Dialogflow fulfillment getting started guide:
// https://dialogflow.com/docs/how-tos/getting-started-fulfillment

"use strict";
const {dialogflow,Table} = require('actions-on-google');
const functions = require("firebase-functions");
const { WebhookClient } = require("dialogflow-fulfillment");
const { Text, Card, Image, Suggestion, List, listItem, Payload, BrowseCarousel,  } = require("dialogflow-fulfillment");

// const wikipediaTemperatureUrl = 'https://en.wikipedia.org/wiki/Temperature';
// const wikipediaTemperatureImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/2/23/Thermally_Agitated_Molecule.gif';

process.env.DEBUG = "dialogflow:debug"; // enables lib debugging statements
const app = dialogflow({debug: true});
exports.dialogflowFirebaseFulfillment = functions.https.onRequest(
  (request, response) => {
    const agent = new WebhookClient({ request, response });
    console.log(
      "Dialogflow Request headers: " + JSON.stringify(request.headers)
    );
    console.log("Dialogflow Request body: " + JSON.stringify(request.body));

  
    function infrastructure(agent){
      agent.add("hello All how you doing?");
      agent.add('<h2>Gallery</h2><table><tr><th class="TH">BME(Mech) Lab</th><th class="TH">Physics Lab</th> <th class="TH">Chemistry Lab</th></tr><tr><td><img src="https://pccoer.com/images/facilities/BME(Mech)lab.jpg" class="tab"></td><td><img src="https://pccoer.com/images/facilities/Physicslab.jpg" class="tab"></td><td><img src="https://pccoer.com/images/facilities/Chemistrylab.jpg" class="tab"></td></tr><tr><th class="TH">Civil Lab</th><th class="TH">BME</th><th class="TH">NDJ</th></tr><tr><td><img src="https://pccoer.com/images/facilities/Civillab.jpg" class="tab"></td><td><img src="https://pccoer.com/images/facilities/BME(Mech)lab.jpg" class="tab"></td><td><img src="https://pccoer.com/images/facilities/BME(Mech)lab.jpg" class="tab"></td></tr></table>')
    }

    function awards(agent){
      agent.add('These are some of the achievements of PCCOER')
      agent.add('<div class="container"><br><div id="myCarousel" class="carousel slide" data-ride="carousel"><div class="carousel-inner" role="listbox"><div class="item active"><img src="http://pccoer.com/images/awards-achievements/award3.jpg" alt="Chania" width="800" height="425"><div class="carousel-caption"><p>Most copyrights in one day</p></div></div><div class="item"><img src="http://pccoer.com/images/awards-achievements/award4.jpg" alt="Chania" width="800" height="425"><div class="carousel-caption"><p>Go Kart and Baja Event Awards 2018-19</p></div></div><div class="item"><img src="http://pccoer.com/images/awards-achievements/awards-achievements3.jpg"alt="Flower"width="800"height="425"><div class="carousel-caption"><p>Most Result Oriented College Award by Prime Time Global</p></div></div><div class="item"><img src="http://pccoer.com/images/awards-achievements/award1.jpg" alt="Flower" width="800" height="425"><div class="carousel-caption"><p>Team Byte-us Winner in Smart India Hackathon 2019</p></div></div></div><!-- Left and right controls --><a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev"><span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="right carousel-control" href="#myCarousel" role="button" data-slide="next"><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span><span class="sr-only">Next</span></a></div></div>')
    }

    function fallback(agent) {
      agent.add(`I didn't understand`);
      agent.add(`I'm sorry, can you try again?`);
    }

    // Uncomment and edit to make your own intent handler
    // uncomment `intentMap.set('your intent name here', yourFunctionHandler);`
    // below to get this function to be run when a Dialogflow intent is matched

    //   agent.add(new Suggestion(`Quick Reply`));
    //   agent.add(new Suggestion(`Suggestion`));
    //   agent.setContext({
    //     name: "weather",
    //     lifespan: 2,
    //     parameters: { city: "Rome" },
    //   });
    // }

    // Uncomment and edit to make your own Google Assistant intent handler
    // uncomment `intentMap.set('your intent name here', googleAssistantHandler);`
    // below to get this function to be run when a Dialogflow intent is matched
    function googleAssistantHandler(agent) {
      
    agent.add('<image src = "https://pccoerbot.files.wordpress.com/2019/02/amol.png"/>');
    agent.add('<image src = "https://pccoerbot.files.wordpress.com/2019/02/amol.png"/>');
    agent.add('<image src = "https://pccoerbot.files.wordpress.com/2019/02/amol.png"/>');
  
    }

    function cardlist(agent) {
      agent.add('here are your results');
      agent.add('<ul id="services-list"><li><a href="https://www.google.com" class="image"><img src="http://pccoer.com/computer/images/new/archanachaugule.png" alt="Facebook Icon" /></a><div class="content"><h3>Dr. Archana Ajit Chaugule</h3><p><i class="fas fa-graduation-cap"></i> &nbsp; Ph.D(Comp. Engg)</p><p><i class="fas fa-university"></i> &nbsp; &nbsp; Teaching - 18.9 Years & Industry: 1.5 Years</p><p><i class="fas fa-envelope-open"></i> &nbsp; &nbsp;  archana.chaugule@pccoer.in</p></div></li><li><a href="https://www.google.com" class="image"><img src="http://pccoer.com/computer/images/new/mahendra.png" alt="Facebook Icon" /></a><div class="content"><h3>Mr. Mahendra Balkrishna Salunke</h3><p><i class="fas fa-graduation-cap"></i> &nbsp; M-Tech.(Comp.Sci.& Engg), PhD (Pursuing)</p><p><i class="fas fa-university"></i> &nbsp; &nbsp; Teaching - 15.5 Year & Industry: 5.9 Year</p><p><i class="fas fa-envelope-open"></i> &nbsp; &nbsp;  mahendra.salunke@pccoer.in</p></div></li><li><a href="https://www.google.com" class="image"><img src="http://pccoer.com/computer/images/new/sonali.png" alt="Facebook Icon" /></a><div class="content"><h3>Mrs. Sonali S. Lunawat</h3><p><i class="fas fa-graduation-cap"></i> &nbsp; B.E.(CE), M.E. (Computer Engineering)</p><p><i class="fas fa-university"></i> &nbsp; &nbsp; Teaching – 12 Years</p><p><i class="fas fa-envelope-open"></i> &nbsp; &nbsp; sonali.lunawat@pccoer.in</p></div></li><li><a href="https://www.google.com" class="image"><img src="http://pccoer.com/computer/images/new/jameer_kotwal.jpg" alt="Facebook Icon" /></a><div class="content"><h3>Mr. Jameer Kotwal</h3><p><i class="fas fa-graduation-cap"></i> &nbsp;  M.Tech (CSE),Phd(pursuing)</p><p><i class="fas fa-university"></i> &nbsp; &nbsp; 12 Years</p><p><i class="fas fa-envelope-open"></i> &nbsp; &nbsp; jameer.kotwal@pccoer.in</p></div></li><li><a href="https://www.google.com" class="image"><img src="http://pccoer.com/computer/images/new/madhuri.png" alt="Facebook Icon" /></a><div class="content"><h3>Mrs. Madhuri H. Badole</h3><p><i class="fas fa-graduation-cap"></i> &nbsp;  B.E., M.E.(WCC)</p><p><i class="fas fa-university"></i> &nbsp; &nbsp; 7 Years</p><p><i class="fas fa-envelope-open"></i> &nbsp; &nbsp; madhuri.badole@pccoer.in</p></div></li><li><a href="https://www.google.com" class="image"><img src="http://pccoer.com/computer/images/vaishalil.png" alt="Facebook Icon" /></a><div class="content"><h3>Ms. Vaishali Prasad Latke</h3><p><i class="fas fa-graduation-cap"></i> &nbsp; BE Computer Engineering, ME Computer Engineering</p><p><i class="fas fa-university"></i> &nbsp; &nbsp; 10 Years</p><p><i class="fas fa-envelope-open"></i> &nbsp; &nbsp;  vaishali.latke@pccoer.in</p></div></li><li><a href="https://www.google.com" class="image"><img src="https://pccoerbot.files.wordpress.com/2019/02/amol.png" alt="Facebook Icon" /></a><div class="content"><h3>Mr. Amol N. Dumbare</h3><p><i class="fas fa-graduation-cap"></i> &nbsp; B.E. Computer, M.Tech(CSE), PhD(Pursuing)</p><p><i class="fas fa-university"></i> &nbsp; &nbsp; 8 Years</p><p><i class="fas fa-envelope-open"></i> &nbsp; &nbsp; amol.dumbare@pccoer.in</p></div></li></ul>')
    }

    function hod_card(agent) {
      agent.add('Dr.Archana Chaugule');
      agent.add('<div class="container"><div class="item-list"><div class="item item-1"><div class="img"><a href="javascript:;"><div class="img-content"><img src="https://pccoer.com/computer/images/new/hod-comp-dept-pccoer.JPG" height="300" width="530"></div></div><div class="social"><a href="javascript:;"><div class="fb"><i class="fa fa-facebook" aria-hidden="true"></i></div></a><a href="javascript:;"><div class="ig"><i class="fa fa-instagram" aria-hidden="true"></i></div></a><a href="javascript:;"><div class="tw"><i class="fa fa-twitter" aria-hidden="true"></i></div></a></div><div class="text-container"><h2 class="title">Dr.Archana Chaugule</h2><span><hr style="background-color: #f5f5f5 ; height:1px"></span><br><div class="content"><p><ul style="list-style-position: inside; list-style-type: circle;"><li><strong>Designation</strong> : Professor & Head of the Computer Department</li><br><li><strong>Qualification</strong> : Ph.D(Comp. Engg)</li><br><li><strong>Experience</strong> : Teaching - 18.9 Years & Industry: 1.5 Years</li><br><li><strong>Email Id</strong> : archana.chaugule@pccoer.in</li><br><li><strong>Awards & Achievements</strong> : <div style="padding-top: 2px;"></div><ul style="list-style-type:auto" class="arrow-list"><li class="inner-inner-list">&nbsp;Best Researcher Award by DK International Research Foundation Tamil Nadu</li><div style="padding-top: 3px;"></div><li class="inner-inner-list">&nbsp;InSc Research Excellence Award 2019 by Institutes of Scholars</li><div style="padding-top: 3px;"></div><li class="inner-inner-list"><strong>&nbsp;Patents</strong> : System for Seed Testing | Fertilizerometer </li></ul></li></ul></p></div></div></div></div></div>')
      
    }

    // Run the proper function handler based on the matched Dialogflow intent name
    let intentMap = new Map();
    intentMap.set("Default Fallback Intent", fallback);
    intentMap.set("Teachers-FE-dept", googleAssistantHandler);
    intentMap.set("Infrastructure And College Photos", infrastructure);
    intentMap.set("Awards & Achievements", awards);
    intentMap.set("comp_faculty", cardlist);
    intentMap.set("Computer HOD", hod_card);
    agent.handleRequest(intentMap);
  }
);
