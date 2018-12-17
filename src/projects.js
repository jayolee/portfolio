import React, { Component } from 'react';
import YouTube from 'react-youtube';
import './App.scss';
import './projects.scss'

import logpos1 from './Logpos/IMG_0658.jpg'
import logpos2 from './Logpos/interview.jpg'
import logpos3 from './Logpos/final_design.png'
import logposstory1 from './Logpos/story1.jpg'
import logposstory2 from './Logpos/story2.jpg'
import logposrun1 from './Logpos/connectedd.png'
import logposrun2 from './Logpos/continuous.gif'
import logposrun3 from './Logpos/continuous.png'
import logposrun4 from './Logpos/locate_all.gif'
import logposrun5 from './Logpos/locate_all.png'
import logposrun6 from './Logpos/locate_b.gif'
import logposrun7 from './Logpos/locate_b.png'
import logposrun8 from './Logpos/communicate.gif'
import logposrun9 from './Logpos/communicate.png'
import logposrun10 from './Logpos/deactivate.png'

import dote1 from './Dotenote/meeting3.jpg'
import dote2 from './Dotenote/meeting2.jpg'
import dote3 from './Dotenote/testing.jpg'
import dote4 from './Dotenote/notify1.svg'
import dote5 from './Dotenote/notify2.svg'
import dote6 from './Dotenote/screen1.png'
import dote7 from './Dotenote/screen2.png'
import dote8 from './Dotenote/screen5.png'
import dote9 from './Dotenote/screen9.png'
import dote10 from './Dotenote/screen3.png'
import dote11 from './Dotenote/screen4.png'
import dote12 from './Dotenote/screen6.png'
import dote13 from './Dotenote/screen7.png'
import dote14 from './Dotenote/screen8.png'

import reporter0 from './reporter/int1.jpg'
import reporter1 from './reporter/garage.jpg'
import reporter2 from './reporter/lightssmall.jpg'
import reporter3 from './reporter/staircase.gif'
import reporter4 from './reporter/int1.jpg'
import reporter5 from './reporter/int2.jpg'
import reporter6 from './reporter/int3.jpg'

import even1 from './even/even1.png'
import even2 from './even/even2.png'
import even3 from './even/even3.png'
import even4 from './even/prototype-even.PNG'

import momo1 from './momoko/momo.gif'
import momo2 from './momoko/momol.gif'
import momo3 from './momoko/pointer.svg'
import momo4_1 from './momoko/thumb/1.png'
import momo4_2 from './momoko/ani/1.gif'
import momo5_1 from './momoko/thumb/2.png'
import momo5_2 from './momoko/ani/2.gif'
import momo6_1 from './momoko/thumb/3.png'
import momo6_2 from './momoko/ani/3.gif'
import momo7_1 from './momoko/thumb/4.png'
import momo7_2 from './momoko/ani/4.gif'
import momo8_1 from './momoko/thumb/5.png'
import momo8_2 from './momoko/ani/5.gif'
import momo9_1 from './momoko/thumb/6.png'
import momo9_2 from './momoko/ani/6.gif'
import momo10_1 from './momoko/thumb/7.png'
import momo10_2 from './momoko/ani/7.gif'
import momo11_1 from './momoko/thumb/8.png'
import momo11_2 from './momoko/ani/8.gif'
import momo12_1 from './momoko/thumb/9.png'
import momo12_2 from './momoko/ani/9.gif'
import momo13_1 from './momoko/thumb/10.png'
import momo13_2 from './momoko/ani/10.gif'
import momo14_1 from './momoko/thumb/11.png'
import momo14_2 from './momoko/ani/11.gif'
import momo15_1 from './momoko/thumb/12.png'
import momo15_2 from './momoko/ani/12.gif'
import momo16_1 from './momoko/thumb/13.png'
import momo16_2 from './momoko/ani/13.gif'
import momo17_1 from './momoko/thumb/14.png'
import momo17_2 from './momoko/ani/14.gif'
import momo18_1 from './momoko/thumb/15.png'
import momo18_2 from './momoko/ani/15.gif'
import momo19_1 from './momoko/thumb/16.png'
import momo19_2 from './momoko/ani/16.gif'
import momo20_1 from './momoko/thumb/17.png'
import momo20_2 from './momoko/ani/17.gif'
import momo21_1 from './momoko/thumb/18.png'
import momo21_2 from './momoko/ani/18.gif'
import momo22_1 from './momoko/thumb/19.png'
import momo22_2 from './momoko/ani/19.gif'
import momo23_1 from './momoko/thumb/20.png'
import momo23_2 from './momoko/ani/20.gif'
import momo24_1 from './momoko/thumb/21.png'
import momo24_2 from './momoko/ani/21.gif'
import momo25_1 from './momoko/thumb/22.png'
import momo25_2 from './momoko/ani/22.gif'
import momo26_1 from './momoko/thumb/23.png'
import momo26_2 from './momoko/ani/23.gif'
import momo27_1 from './momoko/thumb/24.png'
import momo27_2 from './momoko/ani/24.gif'
import momo_btn1 from './momoko/avaliable_line.png'
import momo_btn2 from './momoko/appstore.svg'

import naoshima from './images/naoshima2.png'

class Projects extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      active:true,
    }
    this.vidid={
      "log":"5Q6vJg-OufI",
      "dote":"zlp8SnxFN3I",
      "gssh":"lUaJy9qo6qA",
    }
    this.contents={
      "logpos":{
        "projectTitle":"LOG + POS",
        "quote":"How can we improve the communication at rescue operations using audio AR?",
        "topimg":<YouTube
        videoId={this.vidid.log}                  
        id="player"                       
      />,
        "exlpla":{
          "Time":"Oct 19th ~ Nov 1st (Bose Challenge at CMU)",
          "Team":<span>Aniruddih Iyer, <a className="member" href="http://www.hyunwoopaik.com/" target="_blank">Hyun Woo Paik,</a> Ja Young Lee, Se One Park, <a className="member" href="https://wwchung.github.io/SSUI-Portfolio/index.html" target="_blank">Won-Woo Chung</a></span>,
          "Role":"ideation, video directing/editing",
          "Tool":"Maya, After Effects, Illustrator",
          " ":<i>This is a project for a Bose Challenge at CMU.</i>,
                 },
        "Ideation":<div>
        <p> The prompt of Bose Challenge was <i><b>“How might we use sound-based augmented reality to improve our lives?”</b></i> Among the idea we had, we decided to focus on improving cooperation situations which require team members’ communications about their locations and status. More specifically, we narrowed down our target as firefighters, about their rescue operations in extreme situations.</p> <p>Our assumption here is that under the urgent circumstances of limited vision and hearing, it is difficult to communicate accurate location information via speaking. Therefore, we designed a way to communicate each other automatically generated location data based on their GPS with minimum hand control. </p><img src={logpos1} /><div class='imgdes'>Ideation Meeting</div> </div>,
        "User Research":<div>
        <p> With our basic ideation, we conducted a phone interview with a firefighter. He confirmed that our idea will be helpful, and gave us the problems about the current system has.</p><img src={logpos2} /><p>According to the firefighter, there is a system providing location information using sound and blinking lights after a firefighter being motionless for 30 seconds (Watch the video for additional information). However, the issue is that the location information is verbally communicated, so the information rescue team has might not be the latest information. Also, the light and sound signals can be hindered by the fire and the smoke. Our solution solves this problem by providing real-time information directly to the firefighters through the device.</p></div>,

        "Challenges":<div><div class='title logpos' >Technical Challenge:</div>How can we get the accurate indoor location data?<div class='solution'><li>To get accurate location data, we designed our device to use the bluetooth devices for better location accuracy.</li></div><div class='title logpos'>Social Constraints:</div>According to the interview, there are two social constraints:<br />Firefighters sometimes rely on their ears to determine the temprature. Therefore, there should not be a thing cover their ears.<br /> Firefighters resist change, especially if it is going to be hard to put on. <div class='solution'> <li>We designed an audio AR device satisfying these challenges. </li></div><img src={logpos3} /><div class='imgdes'>Device Desiged by <a href='http://www.hyunwoopaik.com' target='_blank'>Hyun Woo Paik</a></div></div>,

        "Final Design":<div><p>To create a video explining our idea, we made a scenario conveying how our design can be applied to the target situations.</p> <img class="half" src={logposstory1} /> <img class="half" src={logposstory2} /><div class="imgdes">Video Storyboard by Ja Young Lee</div><p>The device can be controlled with verbal and head motions.</p><div class="control"><img id="connected" src={logposrun1} /></div><li class="animdes">Team members connect the devices before getting into the operation.</li><div class="control"><img class="anim continuImg" src={logposrun2} /><img class="continuImg" src={logposrun3} /></div><div class="imgdes">Hover on the image</div><li class="animdes">Users will continuously get the messages from others as walkie-talkie</li><div class="control"><img class="anim" src={logposrun4} /><img src={logposrun5} /></div><div class="imgdes">Hover on the image</div><li class="animdes">With a verbal control of <b><i>"Locate All,"</i></b> a user will continuously get the location information of everyone based on his or her head direction. </li><div class="control"><img class="anim" src={logposrun6} /> <img src={logposrun7} /></div><div class="imgdes">Hover on the image</div><li class="animdes">With a verbal control of <b><i>"Locate [Name],"</i></b> a user will get a specific person's location based on his or her head direction.</li> <div class="control"><img class="anim" src={logposrun8}/><img src={logposrun9} /></div><div class="imgdes">Hover on the image</div><li class="animdes">When a user wants to communicate with other people, he or she will push the button on the side, and will speak. This message will go to everyone as walkie-talkie.</li><div class="control"><img id="deactivate" src={logposrun10}/> </div><li class="animdes">When a user wants to stop getting the location information, he or she can speak <b><i>"Deactivate"</i></b> to stop the function.</li></div>
      },
      "dote":{
        "projectTitle":"DoteNote",
        "quote":"What if we can leave a virtual message at a specific location?",
        "topimg":<YouTube
        videoId={this.vidid.dote}                 
        id="player"                       
      />,
        "exlpla":{
          "Time":"Sep 21st ~ 22nd (HackCMU 2018)",
          "Team":<span>DoteNote (Aniruddih Iyer, <a className="member" href="http://www.hyunwoopaik.com/" target="_blank">Hyun Woo Paik,</a> Ja Young Lee, <a className="member" href="https://wwchung.github.io/SSUI-Portfolio/index.html" target="_blank">Won-Woo Chung</a>)</span>,
          "Role":"ideation, UI/UX design, video directing/editing",
          "Tool":"Adobe XD, After EFfects, Illustrator",
          " ":<i>This is a project for a hackathon held at CMU (HackCMU 2018) which got <b>3rd Place.</b></i>,
                 },
        "Ideation":<div>
                  <p> Our idea started from a thought: what if we can leave our lovers a virtual message at a specific location ?
                  Using AR technology, we focused on messaging emotions related to locations. 
                  With DoteNote, users can leave 3D messages at specific locations.</p><img class="half" src={dote1} />
                  <img class="half" src={dote2}/>
                  <div class="imgdes">Ideation Meeting</div> </div>,
        "Challenges":<div>
                        <img src={dote3} />
                        <div class="imgdes">AR Testing</div>
                        <div class="title dote">Technical Challenge:</div>
                        Due to the accuracy of GPS, we faced following challenges:
                          Can we leave messages towards a certain angle and position?
                          In what range do users get notifications?
                       

                        <div class="title dote">UX Challenges:</div>
                        <p>Also, because we wanted to keep the factor of surprise, we had another challenges:
                        In what distance do we want to push the notifications?<br />
                        From the point they get notifications, how can we direct them to the message?<br /><br />
                                
                        To solve these issues we decided to push the notification approximately within a block. </p>


                        <img class="solu_dote" src={dote4} />
                        <li class="aninmdes">If a user is on the same side of the street, they can see the message by looking around.</li>

                        <img class="solu_dote" src={dote5} />
                        <li class="animdes">If a user is around the corner, because the notification comes up when they enter the range of one block, they can know which direction the message is located. If they are from the side where the message is located, they get the notification before they enter the street.</li></div>,

        "Final Design": <div>
        <div class="screens">
                        <img class="screens" src={dote6} />
                        <img class="screens" src={dote7} />
                          <img class="screens" src={dote8} />
                          <img class="screens" src={dote9} />
                          </div>
                        <div class="screens">
                        <img class="screens" src={dote10} />
                        <img class="screens" src={dote11} />
                        <img class="screens" src={dote12} />
                        <img class="screens" src={dote13} />
                        <img class="screens" src={dote14} />
                        </div></div>,

        "Further Question":"How can we deal with the indoor messages on different floors? ",
      },
      "reporter":{
        "projectTitle":"I am a Reporter",
        "quote":"How to make the UI of a visual novel easy enough for novice users?",
        "topimg":<img id={this.props.idnum} class="topimg" src={reporter0}/>,
        "exlpla":{
          "Time":"Aug 2016 ~ Dec 2016",
          "Team":"1 developer, 1 writer, 1 designer (Ja Young Lee)",
          "Role":"UI/UX design, concept design, illustration",
          "Tool":"InVision, Adobe XD, Photoshop, Illustrator, HTML/CSS/Javascript",
                 },
        "I am a Reporter?":<div>
                  <p> I am a Reporter is a visual novel game targeting wide range of people in 20s ~ 30s.<br />				
                  </p></div>,
        "Challenges":<div>
                      <div class="title reporter">Concept Design Challenge:</div>	
                      <p>How can we design the overall concept to be accepted by wide range of people? Many visual novel games use drawing style of cell-animation, which some people feel childish. </p>
                      <div class="solution"><li>As a solution, we chose realistic illustration style.</li></div>     
                      <div class="onethird">
                        <img src={reporter1} />
                        <img src={reporter2} />
                        <img src={reporter3} />
                      </div>
                      <div class="title reporter">UI Challenge:</div>
                      <p>How can we make the interface intuitive enough for people who have not played visual novel game can easily play?</p>
                      <p>
                      Visual novel is a game genre popular in Japan, which is using static images with text-based story. As its name, the genre uses 
                      static screens which is not familiar with game players of other genres. Our story was targeting diverse users expected not to
                      play visual novels, so  our biggest challenge was to make the UI intuitive to novice users of the visual novel.
                      </p>

                      <div class="solution"><li>As a solution, we decided to use elements commonly used in the web design.</li></div>
                      </div>,

        "Interface":<div class="onethird">
                      <img src={reporter4} />
                      <img src={reporter5} />
                      <img src={reporter6} />
                    <a href="https://goo.gl/B7sXrV" target="_blank">
                    <div class="button reporter">Go to Invision Prototype</div>
                      </a>
                  </div>,
      },
      "even":{
        "projectTitle":"Even",
        "quote":"Where is the best place to meet?",
        "topimg":" ",
        "exlpla":{
          "Time":"Jan 2014",
          "Team":"1 developer, 1 designer (Ja Young Lee)",
          "Role":"prototyping, branding, UI improvement",
          "Tool":"Adobe Illustrator",
                 },
        "Even?":<div>
                  <p> Even is an Android application that helps users find the best place to meet between their location. It calculates the
        mid point based on the time it takes for each person to get to the point. I was the lead designer who improved the interface
        of the application.			
                  </p></div>,
        "Design Changes":<div className="center">
                      <div class="evensc before"> <img  src={even1} />
                        <div class="ori">Original</div>
                      </div>
                      <div class="evensc after"> <img  src={even2} /> <img  src={even3} />
                        <div class="impro">Improved</div>
                      </div>
                      
                      </div>,

        "Prototype":<div>
                      <img class="half" src={even4} />
                  </div>,
        "Process":<div>
           <div className="center">
                <div class="evenwrapper inpfld"> <img src={even1} />
                <div class="spot blu" />
                </div>
              <div class="evenwrapper inpfld"> <img src={even2} />
                <div class="spot red" />
              </div>
              </div>
              <br />
              <li class="animdes"> Stacked the input fields</li>
              <li class="animdes">Replaced the transportation toggles with simple icons</li>
              <li class="animdes">Deleted the ‘Edit’ option to make the field interactive.</li>
              <p>There was too much text in the original box, and the 'Enter a spot' text in the middle looked like an input field but was not. Therefore, I got rid of the 'Edit' button and made the box itself an input field with an example address so people would know that it is an input field.</p>
              <p> Initially, the boxes were next to each other because they had the same priority level. However, from the user's perspective, the function can also be considered as finding a middle point from Spot A to B. Additionally, the boxes were too small to type in an address. Thus, I stacked two boxes on top of each other to gain more space which also makes the addresses easier to read.</p>
              <p> In addition, I changed the toggle buttons to simple icons, because a toggle button is more efficient for the ON/OFF option. By making different transportation options default, users will know that there are different types to choose from.</p>
              <div className="center">
              <div class="evenwrapper maparea"> <img src={even1} />
                <div class="spot blu" />
              </div>
              <div class="evenwrapper maparea"> <img src={even2} />
                <div class="spot red" />
              </div>
              </div>
              <br />
              <li class="animdes">Expanded the map area</li>
              <li class="animdes">Differentiated the action types</li>
              <p>Next, I expanded the map area: the white space around the map area was decreased, which makes the area seem unlimited. This also works well with the zoom function.</p>
              <div className="center">
              <div class="evenwrapper bicons"> <img src={even1} />
                <div class="spot blu" />
              </div>
              <div class="evenwrapper bicons"> <img src={even2} />
                <div class="spot red" />
              </div>
              </div>
              <br />
              <li class="animdes">Replaced the checkboxes with icons</li>
              <p>Finally, I replaced the place option checkboxes to icons. The location types are distinctly different, so using icons is more intuitive and gives more spaces between the icons, which allows easier access.</p> 
        </div>
      },
      "momo":{
        "projectTitle":"Happy Momoko",
        "quote":"24 Animation Emojis for iOS and Line Messengers",
        "topimg":<div className="screens center">  
                <img src={momo1} className="momoscreen"/> 
                  <img src={momo2}  className="momoscreen"/> <br />
                  <a href="https://itunes.apple.com/ca/app/happy-momoko/id1207545553?mt=8" target="_blank">
			<img src={momo_btn2} className="storebtn" id="appstore"/>
		</a>
		<a href="https://store.line.me/stickershop/product/1387989/en" target="_blank">
			<img src={momo_btn1} className="storebtn" id="linestore" />
		</a>
        </div>,
        "exlpla":{
          "Time":"Jan 2017",
          "Team":"Ja Young Lee",
          "Role":"Character Deisgn, Animation",
          "Tool":"Adobe Illustrator, Photoshop",
                 },
        "Emojis":
        <div>
        <div class="imgdes">
                  <span class="mobileonly">Click</span><span class="forall">Hover mouse on</span> thumbnails below to see the animations.
                </div>
                <div class="animation_wrap">
                  <img src={momo3} id="pointers"/>
            
                  <div class="aniwrap">
                    <img class="thumb" src={momo4_1} />
                    <img class="ani" src={momo4_2} />
                  </div>
                  <div class="aniwrap">
                    <img class="thumb" src={momo5_1} />
                    <img class="ani" src={momo5_2} />
                  </div>
                  {this.anigenerator()}
                    </div>
                    </div>
      },
      "gssh":{
        "projectTitle":"GSSH - Class of 2011",
        "quote":"GSSH - Class of 2011, from 2008 to 2017",
        "topimg":<YouTube
        videoId={this.vidid.gssh}                  // defaults -> null
        id="player"                       // defaults -> null
      />,
        "exlpla":{
                 },
        "Video":
        <div>
        <p>This is a video I created for the 10th anniversary of my high school, Gyeongsan Science High School (G.S.S.H.). The music in the beginning is my classmate's recent piano play. It shows our school year memories and how we have grown up. The background music was the school's morning alarm music: Heal the World.</p>
                    </div>
      },
      "naoshima":{
        "projectTitle":"Art of Naoshima",
        "quote":"How can I convey the information of a travel location?",
        "topimg":<img id='reporter' class="topimg" src={naoshima}/>,
        "exlpla":{
          "Time":"Sep 2018",
          "Team":"Ja Young Lee",
          "Role":"illustration, UI/UX design, coding",
          "Tool":"Sketch (iPad), React, Adobe Photoshop",
                 },
        "Process":
        <div>
        <p>Currently working on the process journal.</p>
        <a href="https://jayolee.github.io/Travel-app/" target="_blank">
        <div class="button naoshima">Go to the Website</div></a>
                    </div>
      },
    }
  }
  rollup(){
      let contentdiv=document.getElementsByClassName("contentbox")[0];
      let greydiv=document.getElementsByClassName("greybox")[0];
      contentdiv.style.opacity="1";
      greydiv.style.opacity="1";
      setTimeout(function(){  contentdiv.style.transform="translateY(0)";},50)
    
     
  }
  rolldown(){
		let contentdiv=document.getElementsByClassName("contentbox")[0];
    let greydiv=document.getElementsByClassName("greybox")[0];
    contentdiv.style.opacity="0";
    contentdiv.style.transform="translateY(700px)";
    greydiv.style.opacity="0";
		setTimeout(function(){this.props.closehandle();}.bind(this),500)
  }
  

  anigenerator(){
    let element=[];
    let momothumblist=[momo4_1,momo5_1,momo6_1,momo7_1,momo8_1,momo9_1,momo10_1,momo11_1,momo12_1,momo13_1,momo14_1,momo15_1,momo16_1,momo17_1,momo18_1,momo19_1,momo20_1,momo21_1,momo22_1,momo23_1,momo24_1,momo25_1,momo26_1,momo27_1];
    let momoanilist=[momo4_2,momo5_2,momo6_2,momo7_2,momo8_2,momo9_2,momo10_2,momo11_2,momo12_2,momo13_2,momo14_2,momo15_2,momo16_2,momo17_2,momo18_2,momo19_2,momo20_2,momo21_2,momo22_2,momo23_2,momo24_2,momo25_2,momo26_2,momo27_2];
    
    for(let i=0;i<momothumblist.length;i++){
      element.push(
            <div class="aniwrap">
                    <img class="thumb" src={momothumblist[i]} />
                    <img class="ani" src={momoanilist[i]} />
                  </div>
      )
    }
    return element;
  }
  contentgenerator(){
    let item=this.props.idnum;
    let element=[];
    let topelement=[];
    let contentelement=[];
    let explalist=Object.keys(this.contents[item].exlpla);
    for(let i =0;i<explalist.length;i++){
      topelement.push(
        <div>
        <span className={"title "+this.props.idnum} >{explalist[i]}: </span>{this.contents[item].exlpla[explalist[i]]}<br />
        </div>
      )
    }
    let contentlist=Object.keys(this.contents[item]);
    for(let i=4;i<contentlist.length;i++){
      contentelement.push(
        <div>
          <div className={"sectitle "+this.props.idnum} >{contentlist[i]}</div>
          <div className={"bar "+this.props.idnum} />
          {this.contents[item][contentlist[i]]}
        </div>
      )
    }
    
  
      element.push(<div class="contentbox" >
         <div className={"enttitle "+this.props.idnum} >{this.contents[item].projectTitle}
          <div className="xmark" onClick={this.rolldown.bind(this)}>
              <svg width="50" height="50">
               <path d="M10 10 L40 40 M40 10 L10 40" />
              </svg>
          </div>
        </div>
         <div className="maincontent">
            {this.contents[item].topimg}
          <div className="toptitle ">
            <div className={"qtmark "+this.props.idnum} > <q></q> </div>
            {this.contents[item].quote}
          </div>
          <div className="expla"> 
            {topelement}
            </div>
          <div className="expla">
            {contentelement}
          </div>
         </div>
         </div>
         )
      return element
  }
  componentDidMount(){
    setTimeout(this.rollup(),100);
  }
  render() {

    

    return (
      <div style={{position:"absolute", top:"0",left:"0",width:"100%",height:"100%"}}>
      <div className="greybox" />
        {this.contentgenerator()}
      </div>

    );
  }
}

export default Projects;
