const express = require("express");
const app = express();
const dfff = require("dialogflow-fulfillment");

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(__dirname + "/views"))

app.get("/",(req,res) => {
  res.render("index.html")
});



app.post("/",express.json(),(req,res) => {
  const agent = new dfff.WebhookClient({
      request : req,
      response : res
  });

    function awards(agent){
      agent.add('Awards And Achievements Received By PCCOER');
      agent.add('<div class="carousel-inner" role="listbox">            <div class="item active">                <img src="http://pccoer.com/images/awards-achievements/award3.jpg" alt="Chania" width="800" height="425">                <p style="text-align: center;margin-top: 5px;font-size: 20px !important;">Most copyrights in one day</p>            </div>            <div class="item">                <img src="http://pccoer.com/images/awards-achievements/awards-achievements1.jpg" alt="Chania" width="800" height="425">                <p style="text-align: center;margin-top: 5px;font-size: 20px !important;">38 female faculties have filed patents together on a single day and set a New Record on 17th December 2019 at Indian Patent and Trade Marks Office, Bhoudhik Sampada Bhavan, Antop Hill, Mumbai, Maharashtra.</p>            </div>            <div class="item">                <img src="http://pccoer.com/images/awards-achievements/award4.jpg" alt="Chania" width="800" height="425">                <p style="text-align: center;margin-top: 5px;font-size: 20px !important;">Go Kart and Baja Event Awards 2018-19</p>            </div>            <div class="item">                <img src="http://pccoer.com/images/awards-achievements/awards-achievements3.jpg"alt="Flower"width="800"height="425">                <p style="text-align: center;margin-top: 5px;font-size: 20px !important;">Most Result Oriented College Award by Prime Time Global</p>            </div>            <div class="item">                <img src="http://pccoer.com/images/awards-achievements/award1.jpg" alt="Flower" width="800" height="425">                <p style="text-align: center;margin-top: 5px;font-size: 20px !important;">Team Byte-us Winner in Smart India Hackathon 2019</p>            </div>            <div class="item">                <img src="http://pccoer.com/images/awards-achievements/awards-achievements4.jpg" alt="Chania" width="800" height="425">                <p style="text-align: center;margin-top: 5px;font-size: 20px !important;">Prof. Dr. Harish Tiwari awarded with “IARDO Academic Leader 2018” and Dr. Rahul Mapari awarded with “IARDO Best Teacher” of the year 2018</p>            </div>            <div class="item">                <img src="http://pccoer.com/images/awards-achievements/award7.jpg" alt="Chania" width="800" height="425">                <p style="text-align: center;margin-top: 5px;font-size: 20px !important;"> BAJA SAE INDIA 2018 at IIT Ropar.<br> All India Rank : 5th</p>            </div>        </div>            <!-- Left and right controls -->        <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true">                </span>                <span class="sr-only">Previous</span>        </a>        <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>                <span class="sr-only">Next</span>        </a>    </div>    </div></div>'); 
    }
    

    function CompHOD_card(agent) {
      agent.add('H.O.D of computer department is Dr. Archana Chaugule.');
      agent.add('<html><head>    <link rel="preconnect" href="https://fonts.gstatic.com">    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@500&display=swap" rel="stylesheet">    <link rel="preconnect" href="https://fonts.gstatic.com">    <link href="https://fonts.googleapis.com/css2?family=Jost&display=swap" rel="stylesheet"><title></title><style></style></head><body style="color: #ffffff !important;font-family: "Jost", sans-serif !important;background-color: #000000 !important;"><div class="card" data-state="#about">  <div class="card-header">    <div class="card-cover" ></div>    <img class="card-avatar" src="http://pccoer.com/computer/images/new/archanachaugule.png" alt="avatar" />    <h1 class="card-fullname">Dr. Archana Chaughule</h1>    <h2 class="card-jobtitle">HOD, Computer Engineering</h2>  </div>  <div class="card-main">    <div class="">      <div class="card-content">        <div class="card-subtitle"></div>                <p class="card-desc">             <table style="color: #A6A6A6 !important; font-family: "DM Sans", sans-serif !important;font-size: 14px !important; border: 0px !important;">                            <tr><td> <b style="color: #636b6f !important;">Designation</td><td>Professor & Head of the Computer Department</td></tr>                <tr><td> Qualification</td><td>Ph.D(Comp. Engg)</td></tr>                <tr><td> Experience</td><td>Teaching - 18.9 Years & Industry: 1.5 Years</td></tr>                <tr><td> Email Id</td><td>archana.chaugule@pccoer.in </td></tr>                <tr><td> Awards</td><td>InSc Research Excellence Award 2019 by Institutes of Scholars<br>Best Researcher Award by DK International Research Foundation Tamil Nadu</td></tr>                <tr><td> Patents</td><td>System for Seed Testing | Fertilizerometer</td> </tr>          </table>        </p>              </div>    </div>            </div></div>      </body></html>')  
    }

    function CompHOD_hi_card(agent) {
      agent.add('Computer Department के HOD का नाम डॉ। अर्चना चौगुले है');
      agent.add('<html><head>    <link rel="preconnect" href="https://fonts.gstatic.com">    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@500&display=swap" rel="stylesheet">    <link rel="preconnect" href="https://fonts.gstatic.com">    <link href="https://fonts.googleapis.com/css2?family=Jost&display=swap" rel="stylesheet"><title></title><style></style></head><body style="color: #ffffff !important;font-family: "Jost", sans-serif !important;background-color: #000000 !important;"><div class="card" data-state="#about">  <div class="card-header">    <div class="card-cover" ></div>    <img class="card-avatar" src="http://pccoer.com/computer/images/new/archanachaugule.png" alt="avatar" />    <h1 class="card-fullname">Dr. Archana Chaughule</h1>    <h2 class="card-jobtitle">HOD, Computer Engineering</h2>  </div>  <div class="card-main">    <div class="">      <div class="card-content">        <div class="card-subtitle"></div>                <p class="card-desc">             <table style="color: #A6A6A6 !important; font-family: "DM Sans", sans-serif !important;font-size: 14px !important; border: 0px !important;">                            <tr><td> <b style="color: #636b6f !important;">Designation</td><td>Professor & Head of the Computer Department</td></tr>                <tr><td> Qualification</td><td>Ph.D(Comp. Engg)</td></tr>                <tr><td> Experience</td><td>Teaching - 18.9 Years & Industry: 1.5 Years</td></tr>                <tr><td> Email Id</td><td>archana.chaugule@pccoer.in </td></tr>                <tr><td> Awards</td><td>InSc Research Excellence Award 2019 by Institutes of Scholars<br>Best Researcher Award by DK International Research Foundation Tamil Nadu</td></tr>                <tr><td> Patents</td><td>System for Seed Testing | Fertilizerometer</td> </tr>          </table>        </p>              </div>    </div>            </div></div>      </body></html>')  
     
    }    

    function CompProf_list(agent) {
      agent.add('Here is the list of Faculties for computer department');
      agent.add('<html><head>    <link rel="preconnect" href="https://fonts.gstatic.com">    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@500&display=swap" rel="stylesheet">    <link rel="preconnect" href="https://fonts.gstatic.com">    <link href="https://fonts.googleapis.com/css2?family=Jost&display=swap" rel="stylesheet"><title></title><style></style></head><body></body><table>  <tr>    <td style="padding:10px;"><div class="cardch" data-state="#about">    <div class="card-headerch">      <div class="card-coverch"></div>      <img class="card-avatarch" src="http://pccoer.com/computer/images/new/archanachaugule.png" alt="avatar" />      <h1 class="card-fullnamech">Dr. Archana Chaughule<br></h1>      <h2 class="card-jobtitlech" style="text-align: center;"><br><br>Head of Department, <br>Computer Engineering<br> Ph.D(Comp. Engg)</h2>    </div>    <div class="card-mainch">      <div class="card-sectionch" id="about">        <div class="card-contentch">          <div class="card-subtitlech"></div>          <p class="card-descch">          </p>        </div>      </div>     </div>  </div></td><td style="padding:10px;">  <div class="cardch" data-state="#about">      <div class="card-headerch">        <div class="card-coverch"></div>        <img class="card-avatarch" src="http://pccoer.com/computer/images/new/mahendra.png" alt="avatar" />        <h1 class="card-fullnamech">Mr. Mahendra Salunke<br></h1>        <h2 class="card-jobtitlech" style="text-align: center;"><br><br>Associate Professor <br>Computer Engineering<br>M-Tech.(Comp.Sci.& Engg), PhD (Pursuing)</h2>      </div>      <div class="card-mainch">        <div class="card-sectionch" id="about">          <div class="card-contentch">            <div class="card-subtitlech"></div>            <p class="card-descch">            </p>          </div>        </div>       </div>    </div>  </td>  <td style="padding:10px;">    <div class="cardch" data-state="#about">        <div class="card-headerch">          <div class="card-coverch"></div>          <img class="card-avatarch" src="http://pccoer.com/computer/images/new/sonali.png" alt="avatar" />          <h1 class="card-fullnamech">Mrs. Sonali S. Lunawat<br></h1>          <h2 class="card-jobtitlech" style="text-align: center;"><br>Assistant Professor <br>Computer Engineering <br> B.E.(CE), M.E. (Computer Engineering)</h2>        </div>        <div class="card-mainch">          <div class="card-sectionch" id="about">            <div class="card-contentch">              <div class="card-subtitlech"></div>              <p class="card-descch">              </p>            </div>          </div>         </div>      </div>    </td></tr><!-- =======================2nd row================================ --><tr>  <td style="padding:10px;"><div class="cardch" data-state="#about">  <div class="card-headerch">    <div class="card-coverch"></div>    <img class="card-avatarch" src="http://pccoer.com/computer/images/new/jameer_kotwal.jpg" alt="avatar" />    <h1 class="card-fullnamech">Mr. Jameer Kotwal<br></h1>    <h2 class="card-jobtitlech" style="text-align: center;"><br>Assistant Professor <br>Computer Engineering<br>M.Tech (CSE),Phd(pursuing)</h2>  </div>  <div class="card-mainch">    <div class="card-sectionch" id="about">      <div class="card-contentch">        <div class="card-subtitlech"></div>        <p class="card-descch">        </p>      </div>    </div>   </div></div></td><td style="padding:10px;"><div class="cardch" data-state="#about">    <div class="card-headerch">      <div class="card-coverch"></div>      <img class="card-avatarch" src="http://pccoer.com/computer/images/new/madhuri.png" alt="avatar" />      <h1 class="card-fullnamech">Mrs. Madhuri H. Badole<br></h1>      <h2 class="card-jobtitlech" style="text-align: center;"><br><br>Assistant Professor<br>Computer Engineering<br> B.E., M.E.(WCC) </h2>    </div>    <div class="card-mainch">      <div class="card-sectionch" id="about">        <div class="card-contentch">          <div class="card-subtitlech"></div>          <p class="card-descch">          </p>        </div>      </div>     </div>  </div></td><td style="padding:10px;">  <div class="cardch" data-state="#about">      <div class="card-headerch">        <div class="card-coverch"></div>        <img class="card-avatarch" src="http://pccoer.com/computer/images/vaishalil.png" alt="avatar" />        <h1 class="card-fullnamech">Ms. Vaishali Latke<br></h1>        <h2 class="card-jobtitlech" style="text-align: center;"><br><br>Assistant Professor<br>Computer Engineering<br> BE Computer Eng, ME Computer Eng</h2>      </div>      <div class="card-mainch">        <div class="card-sectionch" id="about">          <div class="card-contentch">            <div class="card-subtitlech"></div>            <p class="card-descch">            </p>          </div>        </div>       </div>    </div>  </td></tr><!-- =====================================3rd row=========================================== --><tr>  <td style="padding:10px;"><div class="cardch" data-state="#about">  <div class="card-headerch">    <div class="card-coverch"></div>    <img class="card-avatarch" src="https://pccoerbot.files.wordpress.com/2019/02/amol.png" alt="avatar" />    <h1 class="card-fullnamech">Mr. Amol N. Dumbare<br></h1>    <h2 class="card-jobtitlech" style="text-align: center;"><br><br>Assistant Professor<br>Computer Engineering<br>  B.E.(Comp), M.Tech(CSE), PhD(Pursuing)</h2>  </div>  <div class="card-mainch">    <div class="card-sectionch" id="about">      <div class="card-contentch">        <div class="card-subtitlech"></div>        <p class="card-descch">        </p>      </div>    </div>   </div></div></td><td style="padding:10px;"><div class="cardch" data-state="#about">    <div class="card-headerch">      <div class="card-coverch"></div>      <img class="card-avatarch" src="http://pccoer.com/computer/images/Nilesh-korade.jpg" alt="avatar" />      <h1 class="card-fullnamech">Mr. Korade Nilesh Bhikaji<br></h1>      <h2 class="card-jobtitlech" style="text-align: center;"><br><br> Asst. Professor <br>Computer Engineering <br> M.Tech (CSE),PhD(Pursuing)</h2>    </div>    <div class="card-mainch">      <div class="card-sectionch" id="about">        <div class="card-contentch">          <div class="card-subtitlech"></div>          <p class="card-descch">          </p>        </div>      </div>     </div>  </div></td><td style="padding:10px;">  <div class="cardch" data-state="#about">      <div class="card-headerch">        <div class="card-coverch"></div>        <img class="card-avatarch" src="http://pccoer.com/computer/images/shwetak.png" alt="avatar" />        <h1 class="card-fullnamech">Mrs. Shweta Koparde<br></h1>        <h2 class="card-jobtitlech" style="text-align: center;"><br><br>Assistant Professor <br>Computer Engineering<br> ME Computer</h2>      </div>      <div class="card-mainch">        <div class="card-sectionch" id="about">          <div class="card-contentch">            <div class="card-subtitlech"></div>            <p class="card-descch">            </p>          </div>        </div>       </div>    </div>  </td></tr><!-- ========================4th row========================== --><tr>  <td style="padding:10px;"><div class="cardch" data-state="#about">  <div class="card-headerch">    <div class="card-coverch"></div>    <img class="card-avatarch" src="http://pccoer.com/computer/images/Anuja-Tanaji-Bhondve.jpg" alt="avatar" />    <h1 class="card-fullnamech">Mrs. Anuja Tanaji Bhondve<br></h1>    <h2 class="card-jobtitlech" style="text-align: center;"><br><br>Assistant Professor<br>Computer Engineering<br> M.E(Comp.science & engg)</h2>  </div>  <div class="card-mainch">    <div class="card-sectionch" id="about">      <div class="card-contentch">        <div class="card-subtitlech"></div>        <p class="card-descch">        </p>      </div>    </div>   </div></div></td><td style="padding:10px;"><div class="cardch" data-state="#about">    <div class="card-headerch">      <div class="card-coverch"></div>      <img class="card-avatarch" src="http://pccoer.com/computer/images/dnyaneshwarc.png" alt="avatar" />      <h1 class="card-fullnamech">Mr. Dnyaneshwar N Choudhari<br></h1>      <h2 class="card-jobtitlech" style="text-align: center;"><br><br>Assistant Professor<br>Computer Engineering<br> B.E., M.E.(CSE )</h2>    </div>    <div class="card-mainch">      <div class="card-sectionch" id="about">        <div class="card-contentch">          <div class="card-subtitlech"></div>          <p class="card-descch">          </p>        </div>      </div>     </div>  </div></td></body></html>'); 
    }

    function infra_labs(agent){
      agent.add("Our Campus is equipped with top-notch facilities.");
      agent.add('<h2>Gallery</h2><table><tr><th class="TH">BME(Mech) Lab</th><th class="TH">Physics Lab</th> <th class="TH">Chemistry Lab</th></tr><tr><td><img src="https://pccoer.com/images/facilities/BME(Mech)lab.jpg" class="tab"></td><td><img src="https://pccoer.com/images/facilities/Physicslab.jpg" class="tab"></td><td><img src="https://pccoer.com/images/facilities/Chemistrylab.jpg" class="tab"></td></tr><tr><th class="TH">Civil Lab</th><th class="TH">BME</th><th class="TH">NDJ</th></tr><tr><td><img src="https://pccoer.com/images/facilities/Civillab.jpg" class="tab"></td><td><img src="https://pccoer.com/images/facilities/BME(Mech)lab.jpg" class="tab"></td><td><img src="https://pccoer.com/images/facilities/BME(Mech)lab.jpg" class="tab"></td></tr></table>')
      agent.add("small")   
    }

    function Bus_Route1(agent){
      agent.add("Refer to the routes displayed in the Map, I suggest you to confirm from the admin office as well.");
      agent.add("<img src='https://previews.dropbox.com/p/thumb/AA8S5vae0OupmtrNiFC1n4bZM-vLq3m0UCgUOLlV1pvir1J0j7FVJzwJXh0BY26tlyzd5RJQP8pE0e_V1rTHwFzDJy5NAq56FNJfJMWIyShX69M1XWWX4jzhx3XhPNvst8bilfKz64BY04m0Q1wn29hw2hPV7I6CVd_k8gjdiTxkVByBs96VfPkq_EDbBPeI01UNE2FhigvoI9zXCHq3S0zjR2PnUux1YMFq1tugjOo2QLAGceJTuJrXYTc3vgzPP8iJks94yUfcv6HZ3aFs6eW1k8F6ntNyc_h8qRLL0sR-nE2dGbz79a0BLfkVl4JxF04gZERAkRTjPqb-3mUT7Pi7Y8YSzLjWtjnTfFU5hREFFT7poaQpRYuJdSJFD_84qT0/p.png?fv_content=true&size_mode=5' style= width:850px;>");
    }



    var intentMap = new Map();
    intentMap.set("Achievements and Awards", awards);
    intentMap.set("HOD - Comp",CompHOD_card);
    intentMap.set("HOD - Comp-hi",CompHOD_hi_card);
    intentMap.set("Teachers List-Computer",CompProf_list);
    intentMap.set("labs-gallery",infra_labs);
    intentMap.set("Bus Route 1",Bus_Route1);
    intentMap.set("Bus Route 1",Bus_Route1);
    agent.handleRequest(intentMap);
 });

app.listen(3333,()=>console.log("WebhookSever is live at 3333"));





