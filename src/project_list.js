import React from 'react';
import Vimeo from '@u-wave/react-vimeo';
import { Controller, Scene } from 'react-scrollmagic';

import getcuisine_aff from './getcuisine/affinity.jpg'
import forkie_competitive from './getcuisine/competitive.jpg'
import forkie_oppor from './getcuisine/opportunity.jpg'
import forkie_story from './getcuisine/forkiestoryboard.jpg'
import forkie_struc from './getcuisine/structure3.jpg'
import forkie_struc2 from './getcuisine/structure.jpg'
import forkie_diff from './getcuisine/diffusion.jpg'
import forkie_diff2 from './getcuisine/diffusion2.jpg'
import forkie_lofi from './getcuisine/lofi.jpg'
import forkie_lofi2 from './getcuisine/lofi2.jpg'
import forkie_lofi3 from './getcuisine/lofi3.jpg'
import forkie_lofi4 from './getcuisine/lofi_ml.jpg'
import forkie_mid from './getcuisine/mid_ml.jpg'
import forkie_top from './getcuisine/top.png'
import forkie_phone from './getcuisine/solution1.gif'
import forkie_fork from './getcuisine/solution2.gif'
import forkie_cmt from './getcuisine/solution3.gif'
import forkie_crt from './getcuisine/solution4.gif'
import forkie_logo from './getcuisine/forkie_logo.svg'
import forkie_diagram2 from './getcuisine/diagram2.png'
import forkie_vers from './getcuisine/forkie_diffver.png'
import forkie_convo from './getcuisine/forkie_convo.png'

import forkie_ins1 from './getcuisine/insight1.jpg'
import forkie_ins2 from './getcuisine/insight2.jpg'
import forkie_ins3 from './getcuisine/insight3.jpg'

import up_animals from './up/animals.jpg'
import up_proto_blow from './up/blow.jpg'
import up_earlyProto from './up/prototype.jpg'
import up_meeting from './up/meeting.jpg'
import up_session from './up/session.gif'
import up_breathing from './up/breathing.gif'
import up_report from './up/report.gif'
import up_screenmap from './up/screenmap.jpg'
import up_knob from './up/knob.jpg'
import up_protos from './up/prototypes.jpg'
import up_knobnot from './up/knob_not.gif'
import up_knobcode from './up/knobcode.jpg'
import up_workknob from './up/worknob.gif'
import up_iniscr from './up/initial_screenmap.jpg'
import up_activity from './up/activity.svg'

import buncee1 from './buncee/apppre.png'
import buncee2 from './buncee/emoji.gif'
import buncee3 from './buncee/ff0.jpg'
import buncee4 from './buncee/gallery.jpg'
import buncee5 from './buncee/signup.jpg'

import herecare_value from './herecare/valueflow.png'
import herecare_solu from './herecare/solution.png'
import herecare_alex from './herecare/screen1.png'
import herecare_rout from './herecare/screen2.png'
import herecare_solu_screen from './herecare/0.png'
import herecare_solutions from './herecare/solution.jpg'

import bcr_dash_gif from './bcr/dashboardScroll.gif'
import bcr_top from './bcr/top.png'
import bcr_assign_gif from './bcr/assignmentScroll.gif'
import bcr_serviceRoadmap from './bcr/serviceRoadmap.png'
import bcr_codesign1 from './bcr/codesign1.gif'
import bcr_codesign2 from './bcr/codesign2.gif'
import bcr_storybrd1 from './bcr/s1.jpg'
import bcr_storybrd2 from './bcr/s2.jpg'
import bcr_storybrd3 from './bcr/s3.jpg'
import bcr_need1 from './bcr/b1.png'
import bcr_need2 from './bcr/b2.png'
import bcr_need3 from './bcr/b3.png'
import bcr_need4 from './bcr/b4.png'
import bcr_journey from './bcr/final.jpg'
import bcr_current1 from './bcr/current1.png'
import bcr_current2 from './bcr/current2.png'
import bcr_current3 from './bcr/current3.png'
import bcr_current4 from './bcr/current4.png'
import bcr_principle1 from './bcr/principle/DesignPrinciples_1.png'
import bcr_principle2 from './bcr/principle/DesignPrinciples_2.png'
import bcr_principle3 from './bcr/principle/DesignPrinciples_3.png'
import bcr_principle4 from './bcr/principle/DesignPrinciples_4.png'
import bcr_principle5 from './bcr/principle/DesignPrinciples_5.png'
import bcr_dashFinal from './bcr/dashboard/dashboards.png'
import bcr_assignFinal from './bcr/assignment/assignment.png'
import bcr_detailFinal from './bcr/assignment/detail/detail.png'
import bcr_detail1 from './bcr/assignment/detail/detail1.png'
import bcr_detail2 from './bcr/assignment/detail/detail2.png'
import bcr_detail3 from './bcr/assignment/detail/detail3.png'
import bcr_detail4 from './bcr/assignment/detail/detail4.png'
import bcr_detail5 from './bcr/assignment/detail/detail5.png'
import bcr_surveyFinal from './bcr/assignment/survey/survey.png'
import bcr_survey1 from './bcr/assignment/survey/survey1.png'
import bcr_survey2 from './bcr/assignment/survey/survey2.png'
import bcr_survey3 from './bcr/assignment/survey/survey3.png'
import bcr_survey4 from './bcr/assignment/survey/survey4.png'
import bcr_roadmap_road1 from './bcr/roadmap/road1.png'
import bcr_roadmap_road2 from './bcr/roadmap/road2.png'
import bcr_roadmap_road3 from './bcr/roadmap/road3.png'
import bcr_roadmap_road4 from './bcr/roadmap/road4.png'

const bcr_research = [];
for (let i = 0; i < 4; i++) {
  bcr_research[i] = require('./bcr/research' + (i + 1) + '.png')
}
const bcr_assign = [];
for (let i = 0; i < 7; i++) {
  bcr_assign[i] = require('./bcr/assignment/' + (i + 1) + '.png')
}
const bcr_dash = [];
for (let i = 0; i < 6; i++) {
  bcr_dash[i] = require('./bcr/dashboard/' + (i + 1) + '.png')
}
const bcr_roadmap_design = [];
for (let i = 0; i < 5; i++) {
  bcr_roadmap_design[i] = require('./bcr/roadmap/' + (i + 1) + '.png')
}

function zoomimg(e) {
    let classlist = e.target.classList;
    if (classlist.contains("zoomed")) {
        e.target.classList.remove("zoomed");
        if (e.target.offsetTop || e.target.height) {
            window.scrollTo({ top: e.target.offsetTop + e.target.height, behavior: 'smooth' });
        }
    }
    else {
        e.target.classList.add("zoomed");
        if (e.target.offsetTop) {
            window.scrollTo({ top: e.target.offsetTop, behavior: 'smooth' });
        }
    }
}

function principleDescrip(i){
    const designPrinciple = [{
        img : bcr_principle1,
        title: "Consider People’s Mindsets",
        content: [
        "<p>Choose features that cater to when students are struggling or doing okay.</p><p>Warrior PATHH students experience ups and downs as they navigate the 18-month program. They could be stressed, happy, frustrated, or any other mix of emotions. We need to  design experiences that meet people where they are at. Furthermore, we need to design experiences that do not exacerbate negative emotions but instead equip them with lessons that they need in order to navigate emotions and situations.</p>"]
    },
    { img : bcr_principle2,
        title:"Encourage and Support the Journey",
        content:[
            "<p>Minimize friction during navigation.  Utilize shortcuts to resume content.</p> <p>Warrior PATH teaches students that they can embrace struggle by finding new meaning and growth through the natural ups and downs of life. Students can choose to view their life as a journey. We need to find ways to support that journey by helping them understand where they are at, how far they have come, and where they are going on their journey.</p>"
        ]
    },
    {    img : bcr_principle3,
        title:"Promote Behavior Change",
        content:[
            "<p>Use reminders instead of forcing completion.</p><p>Eighteen months is a long time. Completing Warrior PATHH requires shifts in students’ behavior and mindset in order to not only endure the program but also integrate Warrior PATHH’s lessons into their daily lives, even after they finish the program. To help students achieve behavior change, we as designers can’t provide boxes for them to check off, especially for completion’s sake. Instead, we need to help students  develop habits and proactively consider their goals.</p>"
        ]
    },{ img : bcr_principle4,
        title: "Inspire Team Support",
        content:[
        "<p>Remind people of their support system. Celebrate victories rather than shame shortcomings.</p><p>For a Warrior PATHH student, their Fire Team should be a constant source of motivation, support, and encouragement throughout their 18-month journey together.  Through our designs, we need to create opportunities to foster community and celebrate each other, not bring each other down.</p>"
        ]
    },{ img : bcr_principle5,
       title:"Privacy",
       content:["<p>Respect what level of detail should be shared with loved ones.</p><p>During Warrior PATHH, students share emotional and traumatic events from their past with PATHH Guides and their Fire Teams.  They share everything with each other but may not feel comfortable sharing stories, goals,  and assignments from Warrior PATHH with their loved ones. This principle helped guide us of what level of detail to share as we strengthen touchpoints with their loved ones.</p>"
       ]
    }];
    let iconwrapper = document.getElementsByClassName("iconWrapper");
    for(let [key,value] of Object.entries(iconwrapper)){
        value.classList.remove("active");
    }

    document.getElementById("principle" + (i+1)).classList.add("active");
    document.getElementById("principle_img").src =designPrinciple[i].img;
    document.getElementById("principle_title").innerHTML =  designPrinciple[i].title;
    document.getElementById("principle_expla").innerHTML =  designPrinciple[i].content;
              
}  
const content = [
    {
        title: "Retreat Modules for Loved Ones",
        question: "What if sharing lessons from the retreat and disclosing their authentic self with their loved ones didn’t have to be a low point?",
        description:"Boulder Crest can create and share modules for loved ones that automatically send during and after their loved one attends a Warrior PATHH retreat via their Learning Management System. Each day’s video content can provide loved ones with an overview of what the student is experiencing during the day. When the student returns home from the retreat, they can go through an additional module together that provides opportunities for conversation and connection. Boulder Crest should also give students the choice to opt out."
    },
    {
        title: "Leverage Veteran Nonprofits",
        question: "What if we could help people stay engaged with the program by increasing connection touchpoints to the Warrior PATHH community?",
        description:"Boulder Crest already has formed partnerships with various veteran organizations. We see an opportunity for Boulder Crest to use those partnerships to more actively foster community within a regional model. Boulder Crest could host events at these veteran organization locations and invite Warrior PATHH alumni in the area. For nonprofits running Warrior PATHH, Boulder Crest could compile a toolkit for regional partnerships and events."
    },
    {
        title: "Find Warrior PATHH Students Near Me",
        question: "What if we could help people stay engaged with lessons by increasing connection touchpoints to the Warrior PATHH community?",
        description:"Boulder Crest could implement a new myPATHH feature to help connect students and alumni who go through Warrior PATHH who live near each other, whether they have gone through the program at Boulder Crest or at another nonprofit."
    },
    {
        title: "Improve Warrior PATHH Onboarding",
        question: "What if we could streamline the myPATHH onboarding process across Warrior PATHH locations? <br /> What if we could set up students for success in using myPATHH after the retreat, especially if they are not used to Internet technology?",
        description:"Boulder Crest should optimize in-person and digital touchpoints to improve the myPATHH onboarding experience for students"
    },
    {
        title: "Pathways to Care Through the Application Process",
        question: "What if we could direct people toward and through the Warrior PATHH program so they are most likely to thrive?",
        description:"Boulder Crest should establish a protocol for their retreat locations as well as for other nonprofits delivering Warrior PATHH to establish pathways to care based on applicants’ needs.<br />When someone applies to Boulder Crest, a staff member should assess their needs and determine the best next step based on those needs. If the applicant is dealing with substance use disorder, for example, the staff member can refer them to a local treatment facility before they are ready to go through Warrior PATHH. If another nonprofit delivering Warrior PATHH has a unique mission that best serves the applicant’s needs, the staff member can refer the applicant to that nonprofit.<br />We see Gratitude America’s protocol of using a social worker to vet applicants as a valuable approach. Social workers are professionals of understanding the whole person in their environment and utilizing their  knowledge of community resources. Having a social worker managing the vetting process could be recommended and replicated across all nonprofits delivering Warrior PATHH."
    }
];
function roadmap(ev){
    let width = window.innerWidth;
    if(width > 670){
    let explanation = document.getElementById("roadmapExpla");
    explanation.style.opacity = 1;
    explanation.style.display="block"
    let order = ev.target.id.slice(-1) - 1;
    explanation.firstChild.innerHTML = content[order].title;
    explanation.lastChild.innerHTML = "<p><i>" + content[order].question + "</i></p><p>" + content[order].description + "</p>";
    let target = ev.target;
        if(parseInt(target.offsetLeft)+ 660> width){
            //if explanation box cannot be on the next
            if((parseInt(target.offsetLeft) - 600) < 0){
                explanation.style.left = parseInt((target.offsetLeft) - 220) + "px";
                explanation.style.top = (target.offsetTop +80) + "px";
            } else{
                explanation.style.left = (target.offsetLeft- 410) + "px";
                explanation.style.top = "0px";
            }
        }else {explanation.style.left = (target.offsetLeft+ 200) + "px";
        explanation.style.top = (target.offsetTop +100) + "px"}
    } 
}
function roadmapSmall(ev){
    let width = window.innerWidth;
    if(width <= 670){
    let explanation = document.getElementById("roadmapExpla");
    explanation.style.opacity = 1;
    explanation.style.display="block"
    let order = ev.target.id.slice(-1) - 1;
    explanation.firstChild.innerHTML = content[order].title;
    explanation.lastChild.innerHTML = "<p><i>" + content[order].question + "</i></p><p>" + content[order].description + "</p>";
    let blkbg = document.getElementById("blkbg");
    blkbg.style.display = "block";
    blkbg.style.opacity = 1;
    explanation.style.top = (window.scrollY - document.getElementsByClassName("roadmapWrapper")[0].offsetTop) + "px";
    explanation.style.left = "calc(50% - 150px)"
    }
}
function hideExpla(){
    if(window.innerWidth > 670){
    let roadmap = document.getElementById("roadmapExpla");
    roadmap.style.opacity = 0; 
    window.setTimeout(function(){
        roadmap.style.display="none"
    }, 10)
}
}
function smallHideExpla(){
    let blkbg = document.getElementById("blkbg");
    let roadmap = document.getElementById("roadmapExpla");
    roadmap.style.opacity = 0; 
    blkbg.style.opacity = 0;
    window.setTimeout(function(){
        blkbg.style.display="none"
        roadmap.style.display="none"
    }, 10)
}
function bcrSolutionView(i){
    let overview = document.getElementById("navigation");
    let weekly = document.getElementById("weekly");
    let survey = document.getElementById("survey");
    let buttons = document.getElementsByClassName("small");

    switch(i){
        case "overview":
            overview.classList.add("active");
            weekly.classList.remove("active");
            survey.classList.remove("active");
            buttons[0].classList.add("active");
            buttons[1].classList.remove("active");
            buttons[2].classList.remove("active");
            break;
        case "weekly":
            overview.classList.remove("active");
            weekly.classList.add("active");
            survey.classList.remove("active");
            buttons[0].classList.remove("active");
            buttons[1].classList.add("active");
            buttons[2].classList.remove("active");
            break;
        case "survey":
            overview.classList.remove("active");
            weekly.classList.remove("active");
            survey.classList.add("active");
            buttons[0].classList.remove("active");
            buttons[1].classList.remove("active");
            buttons[2].classList.add("active");
            break;
            default:;
    }

}
export const projectList = {
    "bcr": {
        "projectTitle": "Boulder Crest",
        "quote": "Improving the service of Boulder Crest for recovering PTS veterans and first responders",
        "topimg": <img id="bcr" alt="Boulder Crest Solutions" className="topimg" src={bcr_top} />,

        "exlpla": {
            "Duration": "8 months (Jan 2019 ~ Aug 2019)",
            "Team": <span>Team Boulder Crest (<a href="https://www.amanda-kennedy-ux.com/" target="_blank" rel="noopener noreferrer">Amanda Kennedy</a>, <a href="https://tylerstern.design/" target="_blank" rel="noopener noreferrer">Tyler Stern,</a> Ja Young Lee, Kevin Seelaus, <a href="http://www.zixuanli.com/" target="_blank" rel="noopener noreferrer">Zixuan Li</a>)</span>,
            "Role": "Design Technologist, UX Designer",
            "Tool": "Figma, HTML, CSS, jQuery",
        },
        "button": 
            <div className="button bcr" onClick={(ev) => {
                let element = document.getElementById("solutionOverview");
                window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
            }}>Read about the solution</div>,
        "Boulder Crest": <div>
            <p>Boulder Crest is a nonprofit organization that offers retreats for veterans, active duty service members, first responders, and their families. Many of these individuals have been through combat, and many have experienced Post-Traumatic Stress (PTS) or depression. Their unique, holistic methodology is founded on the principle of Post-Traumatic Growth (PTG). PTG is a framework that recognizes the potential to find deeper meaning and personal strength through trauma and struggle, an alternative to treating PTS simply as a disorder.</p>
          
            <p>Boulder Crest’s cornerstone training program is Warrior PATHH. Teams of about six students, called a Fire Team, participate in a regimented seven-day intensive retreat led by PATHH Guides, who are typically alumni of the program. Once students return home from the retreat, they participate in an aftercare program where they integrate the lessons they learned from the retreat via a responsive web app, called myPATHH, and regular video calls with their Fire Team. The Warrior PATHH journey takes 18 months total to complete, but the lessons and techniques aim to impart lifelong resilience.</p>

            <p>We evaluated myPATHH and the role it plays with regards to Boulder Crest’s services.</p>
            </div>,
            "Solution Overview":<div>
                <p id = "solutionOverview">Boulder Crest has developed a responsive web application called myPATHH during the 18-month aftercare portion of their Warrior PATHH program. Students use the web app to complete assignments, set goals, and watch videos on topics like fitness and meditation to help them integrate the lessons of Warrior PATHH into their daily lives.
                Our team identified a number of opportunities to redesign sections of myPATHH and implement our design principles while addressing user needs uncovered in our research.
                </p>

                 <div className="up_expla_screen">

<div className="imgwrap_sc" >
    <img src={bcr_dash_gif} className="phonesc" alt="Dashboard Redesign" /><div className="imgdes">Dashboard</div></div>

<p> <span className="title bcr">Dashboard</span><br />
The Dashboard is the first page that Warrior PATHH students see in myPATHH. As a result, the experience with this page sets the tone for the rest of their session on the app. We decided with our client this as the first portion of myPATHH to work on.<br />
<div className = "button bcr" onClick={(ev)=>{let element = document.getElementById("dashboardRedesign");
                window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
            }}>Read More</div>
</p>

</div>

  <div className="up_expla_screen">
<div className="imgwrap_sc" >
    <img src={bcr_assign_gif} className="phonesc" alt="Assignment Redesign" /><div className="imgdes">Assignment</div></div>

<p> <span className="title bcr">Assignment</span><br />
The myPATHH assignments section is an integral part of myPATHH where students complete weekly assignments through activities such as reading, writing, and video activities. These activities teach students how to integrate Warrior PATHH lessons into their daily lives. We decided with our client that redesigning this portion of myPATHH would be valuable to the overall Warrior PATHH experience.<br />
<div className = "button bcr" onClick={(ev)=>{let element = document.getElementById("assignmentRedesign");
                window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
            }}>Read More</div>
</p>

</div>
<img src= {bcr_serviceRoadmap} alt = "Service Roadmap" style={{width: "100%", maxWidth:"1200px"}}/>
<div className="imgdes">Service Roadmap</div>
<p><span className="title bcr" style={{lineHeight:"3"}}>Service Roadmap</span><br />
The Warrior PATHH experience is about so much more than technology. Beyond the myPATHH redesign, we created a set of service design recommendations. Boulder Crest students and staff showed us the value of connection across the larger Warrior PATH program. To honor the journey of Boulder Crest and its students, we decided to integrate the concept of journey into our final student-defined deliverable by creating a roadmap of additional recommendations for myPATHH redesigns and organizational service design changes.<br />
<div className = "button bcr" onClick={(ev)=>{let element = document.getElementById("serviceDesign");
                window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
            }}>Read More</div>
</p>
            </div>,
        "Insights and Needs": <div>
              <p className="mainT" style={{ marginTop: "10px" }}>Engagement is the key for students during the 18-month follow-up.</p>
              <p>From the initial kickoff, our client mentioned that the target users' community has distinctive characteristics. To understand our target users, we conducted following research.</p>
              <div className = "quadWrap bcr">
                <div>
                  <img src ={bcr_research[0]} />
                    <p className = "title">Secondary Research</p>
                    <p>- Background Research<br />
                        - App Solutions<br />
                        - Analogous Domains</p>
                </div>
                <div>
                  <img src ={bcr_research[1]} />
                  <p className = "title">Boulder Crest Materials</p>
                  <p>- Struggle Well<br />
                    - Student Guide<br />
                    - myPATHH</p>
                </div>
                <div>
                  <img src ={bcr_research[2]} />
                  <p className = "title">Survey Responses</p>
                  <p>-Qualitative Analysis<br />
                    - Affinity Diagramming
                </p>
                </div>
                <div>
                  <img src ={bcr_research[3]} />
                  <p className = "title">
                      Interviews
                  </p>
                  <p>
                  - Semi-Structured Affinity Diagramming
                  </p>
                  </div>
                </div>
            <p> From our initial research, we got four key insights about our users.</p>

              <p className="ins_title bcr" style={{color: "#A94B56"}}>Diversity</p>
                <p>Boulder Crest students come from a variety of experiences. Considering the variety of backgrounds and needs could be an opportunity for Boulder Crest to expand their value to the Veteran Community.</p>
               <p className="ins_title bcr" style={{color: "#97AA96"}}>Community</p>
                   <p>Students value community as a support system. The sense of interpersonal connection with a team is a crucial part of the Boulder Crest experience. </p>
                   <p className="ins_title bcr" style={{color: "#78909C"}}>Continuity & Structure</p>
               <p>Students value the well-structured 7 day program, but there’s a significant discrepancy between the retreat and after care regarding the structure and support available. </p>
               <p className="ins_title bcr" style={{color: "#253C5A"}}>Transferability</p>
               <p>Students value the lessons that are useful in day-to-day life.</p>

        <p>In our research, we've learned that students value the current Warrior PATHH program and how effective it has been. However, at the same time, <b>we saw an opportunity to improve engagement for students during the 18-month follow-up.</b></p>

             <p className="mainT" style={{ marginTop: "10px" }}>Staying on the journey is a challenge</p>
<p>After further research including in-person interview with staff members who had previously gone through the program themselves, we’ve learned that the current program provides precious opportunity for human connection, and a set of useful skills such as meditation and breathing. However, we identified that it's a challenge for students to stay on this journey. Therefore, we updated our research thesis: <b>We see an opportunity to assist students in staying connected to their team & lessons over the 18-month follow-up.</b></p>  

 <p className="mainT" style={{ marginTop: "10px" }}>However, students don't need an emergency button in the moment of need.</p>
 <div className = "triwrap">
    <div className = "triinner bcr">
    <img src= {bcr_storybrd1} alt = "Storyboard" />
    </div>
    <div className = "triinner bcr">
        <img src= {bcr_storybrd2} alt = "Storyboard" />
    </div>
    <div className = "triinner bcr">
        <img src= {bcr_storybrd3} alt = "Storyboard" />
    </div>
 </div>
 <div className = "imgdes">Storyboards of Three Variations of a Scenario</div>
    <p>
    Based on our thesis, we came up with ideas of possible needs the students have. We conducted speed dating with storyboards to validate these. Rather than simply refuting or confirming these assumptions, the reaction was always a bit more complicated. What we got was a more nuanced understanding, which will guide our design process moving forward. Below are four perceived needs and potential areas of focus for a solution which we validated through speed dating.
    </p>
   
       
            <div className = "hoverWrap" id = "wrap1">
           
            <div className = "halfwrap insight">
                <img src= {bcr_need3} style ={{maxWidth: "90px"}} className = "half" alt = "Blended Model of Tech & Real World"/>
                <div className = "half insightDetail">
                <b>Blended Model of Tech & Real World</b>
                    <ul>
                        <li>Boulder Crest creates a community with a unique shared knowledge that can be hard to share with others</li>
                        <li>
                        In-person opportunities to connect are valuable
                        </li>
                    </ul>
                </div>
               
                <div className="ox">
                <Controller>
                <Scene duration={2000} triggerElement = "#wrap1" classToggle = "oxanimation">
                                <svg>
                                    <circle className="st0" cx="40" cy="40" r="36" />
                                </svg>
                                </Scene>
                </Controller>
                </div>
               
            </div>
        </div>
       
    
    <div className = "hoverWrap" id = "wrap2">
        <div className = "halfwrap insight">
            <img src= {bcr_need4} style ={{maxWidth: "90px"}} className = "half" alt = "Blended Model of Tech & Real World"/>
            <div className = "half insightDetail" >
        <b>Need Reminders for Regular Practice</b>
        <ul>
                    <li> Students need a way to stick with their routine</li>
                    <li>Extrinsic rewards could be good only as a means toward marking accomplishments, not as the sole motivator</li>
                    <li>The routine needs to work for an individual's needs</li>
        </ul>
        </div>
        
        <div className="ox">
        <Controller>
                <Scene duration={2000} triggerElement = "#wrap2" classToggle = "oxanimation">
                            <svg>
                                <circle className="st0" cx="40" cy="40" r="36" />
                            </svg>
                    </Scene>
            </Controller>
                        </div>
       
        </div>
        </div>
    <div className = "hoverWrap" id = "wrap3">
        <div className = "halfwrap insight">
            <img src= {bcr_need1} style ={{maxWidth: "90px"}} className = "half" alt = "Blended Model of Tech & Real World"/>
            <div className = "half insightDetail" >
            
            <b>Progress Tracking</b>
            <ul>
                    <li>  Recalling memories from the retreat is valuable, especially if they are visual, personal, and specific</li>
                    <li> It's best to recall your own first-hand subjective experience, keeping respect for the privacy and different interpretations of others</li>
                </ul>
            </div>
            <div className="ox">
            <Controller>
                <Scene duration={2000} triggerElement = "#wrap3" classToggle = "oxanimation">
                            <svg>
                                <circle className="st0" cx="40" cy="40" r="36" />
                            </svg>
                    </Scene>
            </Controller>
                        </div>
        </div>
        </div>
        
    <div className = "hoverWrap" id = "wrap4">
        <div className = "halfwrap insight">
        <Controller>
                <Scene duration={2000} triggerElement = "#wrap4" classToggle = "active">
            <img src= {bcr_need2} style ={{maxWidth: "90px"}} className = "half" alt = "Blended Model of Tech & Real World"/>
            </Scene>
        </Controller>
        <Controller>
                <Scene duration={2000} triggerElement = "#wrap4" classToggle = "active">
                    <div className = "half  insightDetail" >
                        <b>Support in Moment of Need</b>
                        <ul>
                            <li>  Not needed <b>IF</b> team has a strong relationship with open communication</li>
                        </ul>
                    </div>
        </Scene>
        </Controller>
        <div className="ox">
        <Controller>
                <Scene duration={2000} triggerElement = "#wrap4" classToggle = "oxanimation">
                            <svg className="ox_x">
                                <line className="st0" x1="10" y1="10" x2="72" y2="72" />
                                <line id="second" className="st0" x1="10" y1="72" x2="72" y2="10" />
                            </svg>
                </Scene>
        </Controller>
            </div>
        </div>
    </div>
<p>Based on additional interviews and speed dating, we refined our key insights:</p>
<p className="ins_title bcr" style={{color: "#A94B56"}}>Team Dynamics</p>
<p>
An open and supportive Fire Team unit helps set up trainees for success, so Boulder Crest should focus on fostering and maintaining this dynamic.
</p>
<p className="ins_title bcr" style={{color: "#97AA96"}}>Journey</p>
<p>
Boulder Crest's program takes a long time (7-days + 18-months) and goes through several stages. Therefore, it is important to both minimize abrupt changes in the level of support and keep a perspective of the larger journey.</p>
<p className="ins_title bcr" style={{color: "#78909C"}}>Customization</p>
<p>
In order to set themselves up for success while struggling well, participants need to pace themselves through the curriculum and find a few key methods that resonate with them.
</p>
<p className="ins_title bcr" style={{color: "#E0C987"}}>Content
</p>
<p>
To minimize stress and increase utility, clear navigation, organization, and searchability is more important than the amount of diversity of information available through myPATHH.
</p>
<p className="ins_title bcr" style={{color: "#253C5A"}}>Family
</p>
<p>
Trainees need to be able to set expectations and share their journey and new perspectives with their everyday support networks, especially their family.
    </p>

<p className="mainT" style={{ marginTop: "10px" }}>The concept of journey is integral to Boulder Crest’s philosophy</p>
    <p>As Boulder Crest students chart a path through life, they grow through the ups and downs. Boulder Crest as an organization is also just starting their own journey as they look toward expanding to ten locations over the next few years. Based on what we learned through the research, we created a student journey map overlaying a service blueprint of touchpoints between students and the organization throughout the duration of Warrior PATHH for our future design decisions. </p>
    <img src= {bcr_journey} style={{width: "100%", maxWidth:"1500px"}} alt= "Service Blueprint with Student Journey"/>
    <p className="mainT" style={{ marginTop: "10px" }}>
        myPATHH redesign and service design opportunities are two key components of our solutions.
    </p>
    <p>
These two key components work like gears, which means if you turn this gear, which intrinsically also manipulates other parts of this system.  Due to the limited time of this project and the resources Boulder Crest has as a non-profit organization, we made a decision that can impact the organization sooner. However, at the same time, we decided to provide a future roadmap that the organization can follow as they grow up. </p>
<p>We chose myPATHH Redesign as a solution because it is one of the only touchpoints students have after 7-day retreats. Also, myPATHH is created as a tool that connects students to lessons and their support system. We saw a potential this can be a touchpoint that can serve our thesis. At the same time, we came up with service design ideas that can potentially support the key insights we got from our research.</p>
        </div>,

        "myPATHH Redesign": <div>
            
            <p className="mainT" style={{ marginTop: "10px" }}>Providing a seamless transition to a new design is the key.</p>
            <p>The first version of myPATHH was born out of wireframes and design specs created by Accenture for Boulder Crest and developed by a software engineering team called Shoulder 2 Shoulder. When we kickstarted the myPATHH redesigns, our first step was to retrieve these design specs from our client so that we could establish a design system of fonts and colors to work with. These standards would ensure a smoother transition when we ultimately handed our work over to Shoulder 2 Shoulder to develop.</p>
            <p className="mainT" style={{ marginTop: "10px" }}>
                Due to the limited time of this project, the materials are created considering future implementation process. 
            </p>
            <p>
                Due to the limited time of this project and the resources our client has as a non-profit organization, we created multiple deliverables for the redesign. First, we created an interactive prototype using code in addition to the Figma and Sketch file. This prototype would be a tool for Shoulder 2 Shoulder team to learn about the interactions and how it works as a responsive web app in the future when they implement the design.
            </p>
            <p>
                Secondly, we handed off the success metrics so they can validate the new design as the app gets more users. In addition to our design principles, this success metrics would be a standard for the organization to make further changes on the app.
            </p>        
           <p className="mainT" style={{ marginTop: "10px" }}>What do students value the most?</p>
           <p>Instead of starting out by developing a low-fidelity prototype of a new version of the dashboard, we decided to involve Boulder Crest students in the design process.
After recruiting three Warrior PATHH alumni for 30-minute research sessions, we walked each participant through an artboard that we had set up in Figma containing various high-level feature categories for the myPATHH dashboard: Welcome, Team, Assignment Progress, Goals, Reminders, and Recommended Content.

During the interview, we asked our participants to construct their ideal Dashboard using various modules within each category.

While it was helpful to understand which ones were useful or not, it was ultimately valuable for us to understand the “why” — the reasoning behind their selections. These insights directly established our Design Principles.</p>
   
<div className = "halfwrap" style={{maxWidth: "750px"}}>
            <img src= {bcr_codesign1} alt = "Co-design Session" className="half" />
            <img src= {bcr_codesign2} alt = "Co-design Session" className="half " />
            <div className = "imgdes">Co-design Session</div>
           </div>

        <p className="mainT" style={{ marginTop: "10px" }}>North star of our design–design principles</p>
        <p>We developed a set of design principles after our initial myPATHH dashboard co-design session—which we will dive deeper into below— that would guide us from that point forward, from creating the final prototypes of the myPATHH dashboard and assignments section to developing the larger Warrior PATHH roadmap.</p>
        <div className = "designPrinciple">
            <div className = "iconRow">
                <div className = "iconWrapper active" id = "principle1" onClick={(ev)=>{principleDescrip(0); ev.target.classList.add("active")}}>
                    <img src = {bcr_principle1} alt = "Design Principle 1" />
                </div>
                <div className = "iconWrapper" id = "principle2" onClick={(ev)=>{principleDescrip(1); ev.target.classList.add("active")}}>
                    <img src = {bcr_principle2}  alt = "Design Principle 1"/>
                    </div>
                <div className = "iconWrapper" id = "principle3" onClick={(ev)=>principleDescrip(2)}>
                    <img src = {bcr_principle3}  alt = "Design Principle 1"/>
                    </div>
                <div className = "iconWrapper" id = "principle4" onClick={(ev)=>principleDescrip(3)}>
                    <img src = {bcr_principle4}  alt = "Design Principle 1"/>
                    </div>
                <div className = "iconWrapper" id = "principle5" onClick={(ev)=>principleDescrip(4)}>
                    <img src = {bcr_principle5}  alt = "Design Principle 1"/>
                </div>
            </div>
            <div className = "descrip" id = "principle_descrip">
            <img src={bcr_principle1} id = "principle_img" alt = "Design Principle" />
                <div>
                        <div className="title" id = "principle_title">
                            Consider People’s Mindsets
                        </div>
                        <div className="expla" id = "principle_expla">
                            <p>
                                Choose features that cater to when students are struggling or doing okay.</p>
                            <p>
                                Warrior PATHH students experience ups and downs as they navigate the 18-month program.
                                They could be stressed, happy, frustrated, or any other mix of emotions. We need to
                                design experiences that meet people where they are at. Furthermore, we need to design
                                experiences that do not exacerbate negative emotions but instead equip them with
                                lessons that they need in order to navigate emotions and situations. </p>
                        </div>
                </div>
            </div>
        </div>
        <p className="mainT" id = "dashboardRedesign">Dashboard Redesign</p>
        <img alt = "Current myPATHH" className="half" src = {bcr_current2} style={{maxWidth: "300px"}} />
            <div className = "imgdes">Current Dashboard</div>
        <p>We chose the dashboard because it is the first page students engage with when they enter the myPATHH app. Also, our team and the client saw the potential improvement from the page.</p>
    <p>Our final designs for the dashboard incorporate many of our design principles. We created shortcuts to critical components of the aftercare program such as students’ current assignments and links to their Fire Team’s video call. We also wanted students to feel supported on their journey from the moment they opened the application. Daily quotes and visual reminders of their Fire Team accomplish this.</p>
    <p className="insights" >Final Design</p>
    <a href="https://jayolee.github.io/bcr_prototype/dashboard.html" rel="noopener noreferrer" target="_blank">
        <div className = "button bcr">Open Dashboard Prototype</div>
    </a>
    <div className = "redesign_solution active">
    <div className="dashboardStack number dashboard">
            <img src={bcr_dashFinal} className = "dashfinal" alt = "Final Deshboard Design" />
        <div className = "dashboardWrapper"> 
            <img className="solution_dash_stack deactive" alt = "Header" src={bcr_dash[0]} />
        </div>
        <div className = "dashboardWrapper" style ={{height: "144.36px"}}>
            <div className="number">1</div>
            <img className="solution_dash_stack" src={bcr_dash[1]} alt = "Daily Quote"/>
            <div className="explanation" id="dash0">
                                <img src={bcr_principle1} alt = "Icon" />
                                <div className="descrip">
                                    <div className="principle">
                                        Consider People’s Mindsets
                                    </div>
                                    <div className="title">
                                        Daily quote
                                    </div>
                                </div>
                            </div>
        </div>
        <div className = "dashboardWrapper" style ={{height: "95.45px"}}>
            <div className="number">2</div> 
            <img className="solution_dash_stack" src={bcr_dash[2]} href="dash1" alt = "Shortcut to Current Assignment"/>
            <div className="explanation" id="dash1">
                <div className = "principleWrap">
                                <img src={bcr_principle2} alt = "Icon"/>
                                <img src={bcr_principle3} alt = "Icon"/>
                        </div>
                                <div className="descrip">
                                    <div className="principle">
                                        Encourage and support journey<br />Promote Behavior Change
                                    </div>
                                    <div className="title">
                                        Shortcut to current assignment
                                    </div>
                                </div>
                            </div>
        </div>
        <div className = "dashboardWrapper" style ={{height: "485.97px"}}>
            <div className="number">3</div>
            <img className="solution_dash_stack" src={bcr_dash[3]} href="dash2" alt = "Goals"/>
            <div className="explanation" id="dash2">
                                <img src={bcr_principle3} alt = "Icon"/>
                                <div className="descrip">
                                    <div className="principle">
                                        Promote Behavior Change
                                    </div>
                                    <div className="title">
                                        Soft reminders
                                    </div>
                                </div>
                            </div>
        </div>                 
        <div className = "dashboardWrapper" style ={{height: "475.14px"}}>
            <div className="number">4</div>
            <img className="solution_dash_stack" src={bcr_dash[4]} href="dash3" alt = "Team"/>
            <div className="explaWrapper dashboard">
                            <div className="explanation" id="dash3">
                                <img src={bcr_principle4} alt = "Icon"/>
                                <div className="descrip">
                                    <div className="principle">
                                        Inspire Team Support
                                    </div>
                                    <div className="title">
                                        Team
                                    </div>
                                </div>
                            </div>
                        </div>
        </div>                       
        <div className = "dashboardWrapper">   
            <img className="solution_dash_stack deactive" src={bcr_dash[5]} alt = "Tab Bar"/>
        </div>                             
    </div>
</div>
<p className="insights" >Success Metrics</p>
    <p className="insight_des" >
    <p className="insights" style={{fontSize:"17px"}}>Video Call Attendance</p>
    <p className="insights" style={{fontSize:"17px", fontWeight: "400", marginTop: "0"}}>
Joining the regular phase or team video calls are 100% voluntary; however, it's where students can share what they are up to. Therefore, measuring the attendance rate is a way to see how much students get engaged with the 18-month program. </p>
    <p className="insight_des" >
        <ol><li>Per Call</li>
        <li>Over Time</li></ol>
    </p>

    <p className="insights" style={{fontSize:"17px"}}>
    Shortcut Usage</p>
    <p className="insights" style={{fontSize:"17px", fontWeight: "400", marginTop: "0"}}>
    We placed shortcuts on the dashboard to support student's journey. By measuring how much students use shortcuts, we can validate our theory.</p>
    <p className="insight_des" >
        <ol>
        <li>Video Calls</li>
        <li>Assignments</li>
        </ol>
    </p>
    </p>

<p className="mainT" id = "assignmentRedesign">Assignment Page Redesign</p>

<div className = "triwrap" style={{maxWidth: "1100px"}}>
    <div className = "triinner">
            <img alt = "Current myPATHH" className="half"  src = {bcr_current1} style={{maxWidth: "300px"}}/>
        </div>
        <div className = "triinner">
            <img alt = "Current myPATHH" className="half"  src = {bcr_current3} style={{maxWidth: "300px"}}/>
            </div>
        <div className = "triinner">
            <img alt = "Current myPATHH" className="half"  src = {bcr_current4} style={{maxWidth: "300px"}}/>
        </div>
     </div>
     <div className = "imgdes">Current Version of myPATHH (Overview, Weekly Assignment, Survey)
     </div>
<p>We chose the assignment page because it is the page which students constantly engage with throughout the 18-month program. Also, our team saw the room for information architecture improvement.</p>
    <p>Our final designs for the assignments section focused on visualizing information. Large modules and a prominent timeline allow for easy navigation without losing track of students’ current position. Furthermore, we reformatted assignment pages to encourage readability. A checklist at the top of each assignment page punctuates our redesign by concisely stating what students need to accomplish.</p>
<p>
Another significant change we made through our design is that the organization can utilize the input data from students. The current version of myPATHH gets all answers in one input box. However, by dividing the boxes by questions, we not only improved the usability but made it possible for the organization to track the input by items.</p>
     <p className="insights" >Final Design</p>
    <a href="https://jayolee.github.io/bcr_prototype/index.html" rel="noopener noreferrer" target="_blank"><div className = "button bcr">Open Assignment Prototype</div></a>
    <a href="https://jayolee.github.io/bcr_prototype/survey.html" rel="noopener noreferrer" target="_blank">
    <div className = "button bcr" style={{margin:"0 8px"}}>Open Survey Prototype</div></a>
    <div className = "redesign_btnWrap">
    <div className = "button small active" onClick = {(ev) => {bcrSolutionView("overview")}}> Navigation</div>
    <div className = "button small"  onClick = {(ev) => {bcrSolutionView("weekly")}}>Weekly Assignment</div>
    <div className = "button small" onClick = {(ev) => {bcrSolutionView("survey")}}>Survey</div>
    </div>
<div className = "redesign_solution active" id = "navigation">
    <div className="dashboardStack number assignment">
            <img src={bcr_assignFinal} className = "assignfinal" alt = "Final Assignment Overview Design"/>
        <div className = "dashboardWrapper"> 
            <img className="solution_dash_stack deactive" src={bcr_assign[0]} alt = "Header"/>
        </div>
        <div className = "dashboardWrapper" style ={{height: "92.47px"}}>
            <div className="number">1</div>
            <img className="solution_dash_stack" src={bcr_assign[1]} alt = "Shortcut to current assignment"/>
            <div className="explanation" id="overview0">
                <div className = "principleWrap">   
                                <img src={bcr_principle2} alt = "Icon"/>
                                <img src={bcr_principle3} alt = "Icon"/>
                </div>
                                <div className="descrip">
                                    <div className="principle">
                                        Encourage and support journey<br />Promote Behavior Change
                                    </div>
                                    <div className="title">
                                        Shortcut to current assignment
                                    </div>
                                </div>
                            </div>
        </div>
        <div className = "dashboardWrapper" style ={{height: "169.75px"}}>
            <div className="number">2</div> 
            <img className="solution_dash_stack" src={bcr_assign[2]} href="dash1" alt = "Progress Bar"/>
            <div className="explanation" id="overview1">
                                <img src={bcr_principle2} alt = "Icon"/>
                                <div className="descrip">
                                    <div className="principle">
                                        Encourage and support journey
                                    </div>
                                    <div className="title">
                                    Prominent Progress Bar
                                    </div>
                                </div>
                            </div>
        </div>
        <div className = "dashboardWrapper" style ={{height: "443px"}}>
            <div className="number">3</div>
            <img className="solution_dash_stack" src={bcr_assign[3]} alt = "List of Assignments" />
            <div className="explanation" id="overview2">
            <img src={bcr_principle2} alt = "Icon"/>
                                <div className="descrip">
                                    <div className="principle">
                                        Encourage and support journey
                                    </div>
                                    <div className="title">
                                    Provide only required amount of information
                                    </div>
                                </div>
                            </div>
        </div>                 
        <div className = "dashboardWrapper" style ={{height: "80px"}}>
            <div className="number">4</div>
            <img className="solution_dash_stack" src={bcr_assign[4]} alt = "Celebration Message"/>
                            <div className="explanation" id="overview3">
                            <img src={bcr_principle2} alt = "Icon"/>
                                <div className="descrip">
                                    <div className="principle">
                                        Encourage and support journey
                                    </div>
                                    <div className="title">
                                    Celebration message
                                    </div>
                                </div>
                            </div>
        </div>     
        <div className = "dashboardWrapper" style ={{height: "92.84px"}}>
            <div className="number">5</div>
            <img className="solution_dash_stack" src={bcr_assign[5]} alt = "Next Module"/>
                            <div className="explanation" id="overview4">
                            <img src={bcr_principle3} alt = "Icon"/>
                                <div className="descrip">
                                    <div className="principle">
                                        Promote Behavior Change
                                    </div>
                                    <div className="title">
                                    Shaded “Next Module”
                                    </div>
                                </div>
                            </div>
        </div>                      
        <div className = "dashboardWrapper">   
            <img className="solution_dash_stack deactive" src={bcr_assign[6]}alt = "Tab Bar"/>
        </div>                             
    </div>
</div>

<div className = "redesign_solution" id = "weekly">
    <div className="dashboardStack number assignment">
            <img src={bcr_detailFinal} className = "detailfinal" alt = "Final Weekly Assignment Design"/>
        <div className = "dashboardWrapper"> 
            <img className="solution_dash_stack deactive" src={bcr_detail1} alt = "Header"/>
        </div>
        <div className = "dashboardWrapper" style ={{height: "202.98px"}}>
            <div className="number">1</div>
            <img className="solution_dash_stack" src={bcr_detail2} alt = "Checklist"/>
            <div className="explanation" id="assign0">
                                <img src={bcr_principle2} alt = "Icon"/>
                                <div className="descrip">
                                    <div className="principle">
                                        Encourage and support journey
                                    </div>
                                    <div className="title">
                                        Checklists
                                    </div>
                                </div>
                            </div>
        </div>
        <div className = "dashboardWrapper" style ={{height: "591px"}}>
            <div className="number">2</div> 
            <img className="solution_dash_stack" src={bcr_detail3} href="dash1" alt = "Contents"/>
            <div className="explanation" id="assign1">
                <div className = "principleWrap">
                                 <img src={bcr_principle2} alt = "Icon"/>
                                <img src={bcr_principle3} alt = "Icon"/>
                </div>
                                <div className="descrip">
                                    <div className="principle">
                                    Encourage and support journey<br />Promote Behavior Change
                                    </div>
                                    <div className="title">
                                    Divided Items and Easy-to-Edit Assignments
                                    </div>
                                </div>
                            </div>
        </div>
        <div className = "dashboardWrapper" style ={{height: "155.67px"}}>
            <div className="number">3</div>
            <img className="solution_dash_stack" src={bcr_detail4}  alt = " Collapsed Chapters"/>
            <div className="explanation" id="assign2">
                                <img src={bcr_principle2} alt = "Icon"/>
                                <div className="descrip">
                                    <div className="principle">
                                    Encourage and support journey
                                    </div>
                                    <div className="title">
                                    Collapsed Chapters
                                    </div>
                                </div>
                            </div>
        </div>                 
        <div className = "dashboardWrapper" >
            <img className="solution_dash_stack deactive" src={bcr_detail5}alt = "Tab Bar" />
        </div>     
                            
    </div>
</div>

<div className = "redesign_solution" id = "survey">
    <div className="dashboardStack number assignment">
            <img src={bcr_surveyFinal} className = "surveyfinal" alt = "Final Survey Design" />
        <div className = "dashboardWrapper"> 
            <img className="solution_dash_stack deactive" src={bcr_survey1} alt = "Header" />
        </div>
        <div className = "dashboardWrapper" style ={{height: "105.64px"}}>
            <div className="number">1</div>
            <img className="solution_dash_stack" src={bcr_survey2} alt = "Checklist" />
            <div className="explanation" id="survey1">
                                <img src={bcr_principle2} alt = "Icon"/>
                                <div className="descrip">
                                    <div className="principle">
                                        Encourage and support journey
                                    </div>
                                    <div className="title">
                                        Checklist
                                    </div>
                                </div>
                            </div>
        </div>
        <div className = "dashboardWrapper" style ={{height: "381.81px"}}>
            <div className="number">2</div> 
            <img className="solution_dash_stack" src={bcr_survey3} href="dash1" alt = "Contents"/>
            <div className="explanation" id="survey2">
                                <img src={bcr_principle2} alt = "Icon"/>
                                <div className="descrip">
                                    <div className="principle">
                                        Encourage and support journey
                                    </div>
                                    <div className="title">
                                    Scroll Animation and Focusing Next Question
                                    </div>
                                </div>
                            </div>
        </div>                
        <div className = "dashboardWrapper">   
            <img className="solution_dash_stack deactive" src={bcr_survey4}alt = "Tab Bar"/>
        </div>                             
    </div>
</div>
<p className="insight_des" >
    <p className="insights" style={{fontSize:"17px"}}>Average Time Spent Watching Assigned Videos</p>
    <p className="insights" style={{fontSize:"17px", fontWeight: "400", marginTop: "0"}}>
    The weekly assignments include watching videos and make reflections except for the first week. Therefore, measuring the average time spent watching assigned videos can be a way to see the engagement pattern of students within the 18-month program. </p>

    <p className="insights" style={{fontSize:"17px"}}>
    Completion Rate of Assignments</p>
    <p className="insights" style={{fontSize:"17px", fontWeight: "400", marginTop: "0"}}>
    The new design has a checklist, which is 100% voluntary; however, it can be a tool to track the pattern of students finishing assignments.</p>
    </p>
        </div>,
        "Service Design": <div>
            <p className="mainT" id = "serviceDesign">Service Roadmap</p>
<p>
The culmination of our service design exploration is the roadmap of future projects, all of which we believe have the potential to enhance the student experience. Although we have chosen to depict these recommendations as steps along a journey, this should not be interpreted as a literal step-by step process. The order in which we have chosen to depict these is not intended to imply a linear process; these projects should be pursued in the order that makes the most sense for Boulder Crest. Each individual project is further explained in the following pages, along with our rationale, a possible implementation plan, and foreseeable challenges.

</p>
<div className = "roadmapWrapper">
<div className = "imgwrapper">
    <img src = {bcr_roadmap_road1} className = "road" id = "road1" alt = "Road" />
    <img src = {bcr_roadmap_road2} className = "road" id = "road2"  alt = "Road" />
    <img src = {bcr_roadmap_road3} className = "road" id = "road3"  alt = "Road" />
    <img src = {bcr_roadmap_road4} className = "road" id = "road4"  alt = "Road" />
    <img src = {bcr_roadmap_design[0]} className = "design" id = "design1" onMouseOver ={(ev)=>roadmap(ev)} onMouseLeave={hideExpla}  alt = "Retreat Modules for Loved Ones" onClick ={(ev)=>roadmapSmall(ev)}  />
    <img src = {bcr_roadmap_design[1]} className = "design" id = "design2" onMouseOver ={(ev)=>roadmap(ev)} onMouseLeave={hideExpla} alt = "Leverage Veteran Nonprofits" onClick ={(ev)=>roadmapSmall(ev)} />
    <img src = {bcr_roadmap_design[2]} className = "design" id = "design3" onMouseOver ={(ev)=>roadmap(ev)} onMouseLeave={hideExpla} alt = "Find Warrior PATHH Students Near Me" onClick ={(ev)=>roadmapSmall(ev)} />
    <img src = {bcr_roadmap_design[3]} className = "design" id = "design4" onMouseOver ={(ev)=>roadmap(ev)} onMouseLeave={hideExpla} alt = "Improve Warrior PATHH Onboarding" onClick ={(ev)=>roadmapSmall(ev)} />
    <img src = {bcr_roadmap_design[4]} className = "design" id = "design5" onMouseOver ={(ev)=>roadmap(ev)} onMouseLeave={hideExpla} alt = "Pathways to Care Through the Application Process" onClick ={(ev)=>roadmapSmall(ev)} />
    </div>
    <div id ="blkbg"  onClick = {smallHideExpla}/>
    <div className = "expla" id = "roadmapExpla" onClick = {smallHideExpla}>
        <div className = "title">
        Retreat Modules for Loved Ones
        </div>
        <div className = "content">
        <p>
        <i>What if sharing lessons from the retreat and disclosing their authentic self with their loved ones didn’t have to be a low point?</i></p>
        <p>
        Boulder Crest can create and share modules for loved ones that automatically send during and after their loved one attends a Warrior PATHH retreat via their Learning Management System. Each day’s video content can provide loved ones with an overview of what the student is experiencing during the day. When the student returns home from the retreat, they can go through an additional module together that provides opportunities for conversation and connection. Boulder Crest should also give students the choice to opt out.
        </p>
        </div>
    </div>
</div>

        </div>,
    },
    "up": {
        "projectTitle": "Up",
        "quote": "How might we use ubiquitous devices to help (CMU) students?",
        "topimg": <img id="up" alt="Up Top Screen" className="topimg" src={up_breathing} />,

        "exlpla": {
            "Duration": "4 months (Oct 2018 ~ Jan 2019)",
            "Team": <span>Team UP (Matthew Fang, <a href="http://judithleng.me/" target="_blank" rel="noopener noreferrer">Judith Leng,</a> Ja Young Lee, Jerry Yang)</span>,
            "Role": "User reserach, UI/UX design, front-end development, illustration",
            "Tool": "React, HTML, SCSS, Adobe Illustrator, Figma",
        },
        "button": <a href="https://jayolee.github.io/Team-UP-prototype_react/" target="_blank" rel="noopener noreferrer">
            <div className="button up">Play with the React Prototype</div></a>,
        "Process": <div className="processBoxWrap">
            <div className="proBoxLine up" />
            <div className="proBoxOut">
                <div className="processBox up">Ideate</div>
            </div>
            <div className="proBoxOut">
                <div className="processBox up">Research</div>
                <div className="processExpla">Interview</div>
                <div className="processExpla">Literature Review</div>
                <div className="processExpla">Competitive Analysis</div>
            </div>
            <div className="proBoxOut">
                <div className="processBox up">Iterate</div>
                <div className="processExpla">Lo-fi Prototype</div>
                <div className="processExpla">Think-aloud</div>
                <div className="processExpla">Hi-fi Prototype</div>
            </div>
            <div className="proBoxOut">
                <div className="processBox up fin">Finalize</div>
                <div className="processExpla">Demo</div>
            </div>
        </div>,
        "Ideation & Research": <div>
            <p className="mainT" style={{ marginTop: "10px" }}>CMU students cannot sleep because of anxiety about being productive, but the anxiety affects productivity</p>
            <p>Our idea started from interviews with CMU students about causes of stress they get. Interestingly, they answered that students at CMU tend not to sleep even though they don't have things to do. They are worrying about if they are productive enough, and this gives them so much stress. We set the goal of our project as <b>relieving students' stress and promoting productivity.</b></p>
            <p className="mainPoint" >
                <span style={{ boxShadow: "inset 0 -1.5px white, inset 0 -3px #E9974C, inset 0 -4.5px white, inset 0 -6px #E9974C" }} >How can a mobile app promote productivity, combat ego-depletion and stress?</span></p>
            <p><br />Our original idea was apply love languages to self-love. We planned to prompt random tasks based on their love languages every day to give students joyful moments to care of themselves. However, we realized that the rationale is weak, so we decided to focus on a specific task which is proven as effective.</p>
            <img src={up_protos} alt="Initial Paper Prototypes" className="zoomable" onClick={zoomimg} /><div className="imgdes">Initial Paper Prototypes</div>
            <p className="mainT">Activities proven as improving productivity and relieving stress with 10,000 hours rule as a tracker</p>
            <p>Through literature review, we found activities proven as effective to relieve stress or promote creativity. Among the activities, we paid attention to <a href="http://www.hsj.gr/medicine/stress-management-techniques-evidencebased-procedures-that-reduce-stress-and-promote-health.pdf" target="_blank" rel="noopener noreferrer" ><b>diaphragmatic breathing,</b> which is shown as effective to relieve stress</a> and <a href="https://behavioralandbrainfunctions.biomedcentral.com/articles/10.1186/1744-9081-10-9" target="_blank" rel="noopener noreferrer" ><b>short-term meditation</b> which improves creativity.</a> </p>

            <p>Malcolm Gladwell’s 10,000 hours rule states that one requires over 10,000 hours of practice to become an expert of some sort; however, such number of hours is difficult of practice for young adults in college or workplace. <b>But what if we base this idea to encourage users to build a focusing habit?</b> We used this idea to motivate users.</p>
            <img src={up_activity} style={{ maxWidth: "700px", width: "100%" }} alt="Design Rationales" /><div className="imgdes" style={{ marginBottom: "50px" }}>Design Rationales</div>

            <p>
                Based on the research we conducted, our team created ​<i><b>Up</b></i> based on several psychological concepts including self control, ego-depletion, stress-reduction, and embodied cognition. <i>Up</i> encourages users <b>to form a habitual focus timing of 90 minutes.</b> Users are encouraged to perform a short guided breathing exercise of blowing a balloon immediately after a focus session concludes to regather
                brain resources. </p>
            <p className="solutionPoint"><span style={{ color: "#e9974c", fontSize: "26px", fontWeight: "bold" }}>Up,</span> an app that encourages users to form a habitual focus timing of 90 minutes.</p></div>,


        "Design Process": <div>
            <p className="mainT" style={{ marginTop: "10px" }}>Too much empathy distracts users</p>
            <p>After the literature review, our team created a lo-fi prototype using Figma based on the insights we gained. We conducted Think-alouds with this prototype. At this point, the main features were <ul>
                <li>Selecting an animal to save before starting the session.</li>
                <li>Concentration session in the amount of maximum 90 minutes.</li>
                <li>Following guided breathing session while watching characterized balloons.</li></ul></p>
            <img src={up_iniscr} alt="Initial Screenmap" className="zoomable" onClick={zoomimg} />
            <div className="imgdes">Screenmap of Initial Prototype</div>

            <div className="halfwrap">
                <img src={up_meeting} alt="Early Prototype" className="half zoomable" onClick={zoomimg} />
                <img src={up_earlyProto} className="half zoomable" alt="Early Prototype" onClick={zoomimg} /> <div className='imgdes'>Screen Sketches by Young and Think-aloud Using the Early Prototype</div>
            </div>
            <p>From the Think-aloud, we got feedback that the connection between saving endangered animals and the concentration session is not clear. Also, we added facial expression on balloons to create empathy; however, most testers felt that <b>facial expressions are distracting,</b> because there's already many activities going on (they need to hold their phones near their mouth while following the instructions).</p>
            <p className="mainT">Static prototype is not enough to convey the design</p>
            <p>
                From the testing, we realized that it is <b>hard to get meaningful usability test data with static screens due to the missing key interactions,</b> such as blowing balloons while following animated instructions and progressive disclosure of saved animals. Therefore, we decided to create a working prototype by code to give realistic experience to our testers. It was my role to build a working prototype.</p></div>,

        "The Solution": <div>
            <img src={up_screenmap} alt="Screenmap" className="zoomable imgBorder" onClick={zoomimg} /><div className="imgdes">Screenmap of the Final Design</div>
            <div style={{ textAlign: "center" }}>
                <a href="https://jayolee.github.io/Team-UP-prototype_react/" target="_blank" rel="noopener noreferrer">
                    <div className="button up" style={{ margin: "20px auto 40px" }}>Play with the React Prototype</div></a></div>
            <div className="up_expla_screen">

                <div className="imgwrap_sc" >
                    <img src={up_session} className="phonesc" alt="Concentration Session" /><div className="imgdes">Concentration Session</div></div>

                <p> <span className="title up">Concentration Timer</span><br />
                    Users can set a time ranging from a minimum of 15 to a maximum of 90 minutes to work on a task of their choice. Our goal is <br />
                    <ul>
                        <li>Improve users’ productivity by having them devote a set block of time to working on a specific task
        </li>
                        <li>
                            Prevent them from working on a task too long that they run out of mental energy
        </li>
                    </ul>
                    The concentration timer is modeled off the <b>Pomodoro technique.</b>
                    {/* which was designed for people to overcome procrastination by committing fully to completing a certain task during a time period of 25 minutes and then having a break of 5 minutes. */}
                </p>
            </div>


            <div className="up_expla_screen">
                <div className="imgwrap_sc" >
                    <img src={up_breathing} className="phonesc" alt="Breathing Session" /><div className="imgdes">Breathing Session</div>
                </div>

                <p>
                    <span className="title up">Guided Deep-breathing Exercise</span><br />
                    “Break” portion encourages users to follow a guided deep-breathing exercise. A balloon is blown up as users breathe out.
        <ul>
                        <li>Ballon is a metaphor of blowing away one’s stress and replenishing mental resource. </li>
                        <li>This contributes to users forming the habit of working productively, taking breaks, and ultimately returning to our application.</li>
                    </ul>
                    We used <b>an obfuscation via distancing.</b> The gamified elements (colorful graphics) would serve as red herrings to detract from our stealth interventions.</p>
            </div>


            <div className="up_expla_screen">
                <div className="imgwrap_sc" >
                    <img src={up_report} className="phonesc" alt="Report" />
                    <div className="imgdes">'My Island' in Report</div>
                </div>
                <p><span className="title up">Saving Virtual Endangered Animals</span><br />
                    Users can save virtual endangered animals using a certain amount of balloons, which they can obtain after concentration sessions.
       <ul>
                        <li>This feature would incentive users to participate in guided-breathing exercise.</li>
                        <li><b>By not giving out monetary incentives, we avoid undermining intrinsic motivation (developing their skills).</b></li>
                    </ul></p></div>
        </div>,

        "Challenges": <div>

            <p className="challenges" style={{ marginTop: "30px" }}>How can we reduce demoralizing factors?</p>
            <p>
                We conceded about users setting the very short sessions and not performing the breathing sessions to get the rewards. To avoid this, we decided three approaches.
                <ul>
                    <li>Not offering monetary incentives</li>
                    <li>Setting 10 minutes as the minimum session duration</li>
                    <li>Using the iPhone breathing sensor</li>
                </ul>
                The iPhone breathing sensor not only tracks the activity, but also strengthens the metaphor of blowing away one’s stress.</p>
            <img src={up_proto_blow} alt="Playing with Breathing Sensor" className="zoomable" onClick={zoomimg} /><div className='imgdes'>Breathing Sensor Detecting the Breathing Activity</div>

            <p className="challenges">Coding a knob dial</p>
            <p>
                The biggest technical challenge I had was creating a knob dial. At first, I tried to calculate the exact X and Y position of a knob using the angle from the center of the dial. However, it was slow and didn't work correctly.</p>
            <div style={{ textAlign: "center" }}>
                <div className="imgwrap_sc" >
                    <img src={up_knobnot} alt="Knob Prototype" className="phonesc" />
                </div>
                <div className="imgwrap_sc" >
                    <img src={up_knob} className="challhalf zoomable" onClick={zoomimg} alt="Knob Position Calculation" /> </div>
            </div>
            <div className='imgdes' style={{ marginBottom: "60px" }}>First Prototype of the Knob Dial</div>

            <p>Therefore, I implemented the knob dial using <b>rotation.</b> This way, there is no worries of the knob derailing from the path, and the calculation became much simpler.</p>
            <div style={{ textAlign: "center" }}>
                <div className="imgwrap_sc" >
                    <img src={up_workknob} className="phonesc" alt="Knob Dial" />
                </div>
                <div className="imgwrap_sc" >
                    <img src={up_knobcode} className="challhalf zoomable" onClick={zoomimg} alt="Knob Dial Code" />
                </div>
            </div>
            <div className="imgdes">Final Implementation of the Knob Dial</div>


        </div>,
        "Next Steps": <div>
            <img src={up_animals} id="e_animals" alt="Playing with Breathing Sensor" /><div className='imgdes'>Endangered Animal Illustrations By Young</div>
            <p className="mainT">What if users can save real animals?</p>
            <p className="addmargin">While <i>Up</i> is a productivity mobile application that serves as a concentration tool, the overall message is <b>importance of constant effort and taking efficient breaks.</b> <i>Up</i> aims to reduce the demoralizing factor occurring outside of the application by constantly rewarding users with animals.</p>
            <p>
                At current stage of design, user are limited to saving virtual animals, which may not be as rewarding as contributing to saving animals in the real world. Therefore, we look forward to having a sponsorship partner with wildlife organizations for future implementations.</p>
        </div>,
    },
    
    "forkie": {
        "projectTitle": "Forkie",
        "quote": <span>How might we reduce the food waste?</span>,
        "topimg": <div style={{ width: "100%", textAlign: "center" }}><img src={forkie_top} alt="Forkie Logo" style={{ maxWidth: "750px", width: "100%", padding: "60px 0 30px" }} /></div>,

        "exlpla": {
            "Duration": "Dec 2018 ~ March 2019",
            "Team": "Ja Young Lee, June Byeon",
            "Role": "User Reserach, UI/UX design, front/back-end development",
            "Tool": " React, HTML, SCSS, Adobe Illustrator, Figma, Sketch",
        },
        "button": <div><a onClick={(ev) => { var proto = document.getElementById("forkieSolu"); window.scroll({ top: proto.offsetTop, left: 0, behavior: 'smooth' })}}>
            <div className="button forkie">Read the Solution</div></a></div>,
        "Process": <div>
            <div className="processBoxWrap">
                <div className="proBoxLine forkie" />
                <div className="proBoxOut">
                    <div className="processBox forkie">Initial Solution</div>
                    <a href="https://jayolee.github.io/portfolio/projects/getcuisine/" target="_blank" rel="noopener noreferrer" ><div className="processExpla">Get Cuisine</div></a>
                </div>
                <div className="proBoxOut">
                    <div className="processBox forkie">Research</div>
                    <div className="processExpla">Survey</div>
                    <div className="processExpla">Semi-Structured Interview</div>
                    <div className="processExpla">Competitive Analysis</div>
                    <div className="processExpla">Affinity Diagraming</div>
                    <div className="processExpla">Speed Dating</div>
                </div>

                <div className="proBoxOut">
                    <div className="processBox forkie">Iterate</div>
                    <div className="processExpla">Lo-fi Prototype</div>
                    <div className="processExpla">Think-Alouds</div>
                    <div className="processExpla">Mid-fi Prototype</div>
                </div>

                <div className="proBoxOut">
                    <div className="processBox forkie">Finalize</div>
                    <div className="processExpla">Front-end Development</div>
                </div>
            </div>

        </div>,
        "The Project": <div>
            <p>
                The project is a continuous passion project of <span style={{ color: "#617D31", fontWeight: "bold" }}>"Get Cuisine,"</span> which was a project exploring how Machine Learning (ML) can help reduce food waste. The solution didn't solve the problem, so I did another project to solve it.
             </p>
            <div style={{ width: "100%", textAlign: "center", margin: "0" }}>
                <a href="https://jayolee.github.io/portfolio/projects/getcuisine/" target="_blank" rel="noopener noreferrer" ><div className="button getcuisine" style={{ margin: "0" }}>Read About Get Cuisine</div></a>
            </div>
        </div>,

        "Research": <div>
            <p className="mainT" style={{ marginTop: "30px" }}>The initial solution didn't solve the problem</p>
            <p>Did <span style={{ color: "#617D31", fontWeight: "bold" }}>Get Cuisine</span> fulfill the initial goal of "helping people clean out the fridge"? The answer was <b>NO.</b> I could not fully implement the design I planned. Therefore, I try to find if there's any other way to tackle the problem.
           </p>


            <p className="mainT" style={{ marginTop: "30px" }}>What happens in the cooking cycle?</p>
            <p>First, I conducted the survey and semi-structured interviews to learn about what happens in the cooking cycle. From the interview, I learned that unfamiliarity with the ingredients in the marked point generates unintended food waste.</p>
            <img src={getcuisine_aff} alt="Affinity diagram" onClick={zoomimg} className="zoomable" /><div className='imgdes'>Affinity Diagram</div>
            <div className="insightWrap" style={{ margin: "80px auto 80px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }} className="forkie_insight">
                    <img src={forkie_ins1} alt="Insight 1" className="ins_img" />
                    <div className="ins_title fork1">Context</div>
                    <div className="ins">Cooking requires contextualizing</div>
                    <div className="ins_des">
                        When people cook, they consider many factors, such as the amount of effort, tastebuds, or their previous experience. </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }} className="forkie_insight">
                    <img src={forkie_ins2} alt="Insight 2" className="ins_img" />
                    <div className="ins_title fork2">Risk-averse</div>
                    <div className="ins">People are risk-averse when cooking.</div>
                    <div className="ins_des">
                        Unlike ordering food at restaurants, cooking requires time and effort. Therefore, people are looking for recipes of which the taste is almost guaranteed.</div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }} className="forkie_insight">
                    <img src={forkie_ins3} alt="Insight 3" className="ins_img" />
                    <div className="ins_title fork3" >unfamiliarity</div>
                    <div className="ins">People have unintended food waste</div>
                    <div className="ins_des">
                        Most people have leftover ingredients after cooking, which they throw out in the end. People try to use the leftovers; however, unfamiliarity with them make people procrastinate. These leftovers eventually become food waste.

                    </div>
                </div>

            </div>
            <img src={forkie_diagram2} alt="Cooking Cycle" style={{ maxWidth: "700px", marginBottom: "30px" }} />

            <p>From the interview, we learned that procrastination generates unintended food waste. At this point, we expected that
<b> Solve the <span style={{ color: "#8DA0A1" }}>unfamiliarity</span> with ingredients by providing an automatic food inventory tracker and <span style={{ color: "#1186A5" }}>recipe recommendations</span> based on users' <span style={{ color: "#FA5327" }}>context</span> </b>
                would solve the problem.</p>

            <p className="mainT" style={{ marginTop: "30px" }}>What does existing apps do?</p>
            <p>We conducted a competitive analysis to find the opportunity space. From the analysis, we learned that currently existing apps are focusing on the first three phases from the cycle, and only provides a static recommendation without considering users' context. Therefore, adaptive recipe recommendation after grocery could be our opportunity space.</p>
            <div style={{ width: "100%", maxWidth: "1200px", display: "flex", flexDirection: "column", margin: "0 auto" }}>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                    <img src={forkie_competitive} alt="Competitive Analysis" onClick={zoomimg} className="zoomable" style={{ width: "50%" }} />
                    <img src={forkie_oppor} alt="Target Domain" onClick={zoomimg} className="zoomable" style={{ width: "50%" }} />
                </div>
                <div className="imgdes">Competitive Analysis</div>
            </div>

            <p className="mainT">However, users don't want to put additional effort</p>
            <p>Based on our idea, we did speed dating with storyboards. However, the participants' feedback was negative. People don't want to put additional effort only to minimize the food waste. Then, how can we motivate people?</p>
            <img src={forkie_story} alt="Storyboard" onClick={zoomimg} className="zoomable" />
            <div className="imgdes">"I don't really care"</div>

            <p className="mainT">Where does 'guaranteed taste' come from?</p>
            <p>However, from speed dating, we recognized that people mention how social interaction inspired them to try new things. We went back to the affinity diagram and realized that we misinterpreted one thing. We assumed that the trust to <span style={{ color: "#1186A5", fontWeight:"bold" }}>"guaranteed taste"</span> comes from well-known chefs; however, it also comes from personal connections.</p>

            
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", maxWidth: "750px", margin: "0 auto 60px" }}>
                <div style={{ margin: "0 auto", background: "rgba(97,125,49,.2)", maxWidth: "300px", padding: "8px 16px", fontWeight: "600", color: "#000", borderRadius: "6px" }}>My friend who’s good at cooking recommended this site so I trust</div>
                <div style={{ margin: "0 auto", background: "rgba(97,125,49,.2)", maxWidth: "300px", padding: "8px 16px", fontWeight: "600", color: "#000", borderRadius: "6px" }}>She kept telling me about Kabocha so I tried.</div>
            </div>

            <p className="mainT">How do people share recipes?</p>
            <p>To understand how people share recipes, we did a design activity. From the session, we learned two things.</p>
           
            <div className="insightWrap" style={{ margin: "50px auto 60px" ,justifyContent:"center"}}>
                <div style={{ margin:"0 7%", display: "flex", flexDirection: "column", alignItems: "flex-start"}} className="forkie_insight">
                    <img src={forkie_convo} alt="Insight 1" className="ins_img new" />
                    <div className="ins_title">Inaccuracy</div>
                    <div className="ins">Recipe becomes conversational</div>
                    <div className="ins_des">
                    When people create the recipe, they think in a way they speak it to other people. Therefore, recipes can be inaccurate, and people need to move back and forth to provide all the necessary information.</div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }} className="forkie_insight">
                    <img src={forkie_vers} alt="Insight 1" className="ins_img new" />
                    <div className="ins_title">Variations</div>
                    <div className="ins">Variety of a dish make people rely on personal connections</div>
                    <div className="ins_des">
                    People rely on word of mouth because a dish can have various versions. There's a higher chance that your personal connection would have similar tastebuds, or at least you know what their tastebuds are.</div>
                </div>
                </div>
           
        </div>,
        "Design":
        <div>
            <p className="mainT" style={{ marginTop: "30px" }}>Sharing recipe is sharing the experience</p>
            <p>Based on our research, we came up with four design rationale.
            </p>
            <p className="insights">1. Share recipe with friends.</p>
            <p className="insight_des">From the research, we learned that sharing the recipe is about sharing the experience. Our goal was to foster communication between people regarding a recipe. However, <b>people feel uncomfortable sharing it with random people.</b> Then how can we foster communication and enlarge the community? We believed that as people share a recipe with their personal connections, chaining effect occurs and <b>the entire community of sharing a single recipe can grow up very large.</b></p>
            <img src={forkie_diff} style={{ maxWidth: "600px", paddingLeft: "5%" }} alt="Information Diffusion" />
            <div className="imgdes" style={{ paddingLeft: "5%" }}>Information Diffusion</div>

            <p className="insights">2. Create branches (fork) of a recipe.</p>
            <p className="insight_des">Pasta in Italy and in USA taste different. Recipes of a dish can be vary depending on users' cultural backgrounds or personal preferences. Forking function not only makes people be able to enjoy what they want but also would allow people to be able to track the original recipe. It's also another way of information diffusion.</p>
            <img src={forkie_diff2} style={{ maxWidth: "600px", paddingLeft: "5%" }} alt="Forking Recipes" />
            <div className="imgdes" style={{ paddingLeft: "5%" }}>Various Versions of a Recipe</div>
            <p className="insights">3. Share first-hand experience via crowdsourcing.</p>
            <p className="insight_des">People have their own tips from their experience, and these tips could be added to recipes in a form of comments.</p>

            <p className="insights">4. Easily creating recipes using ML.</p>
            <p className="insight_des">While watching people writing recipes on the research phase, I saw how people go back and forth because they forget to mention something. Also, the recipe becomes conversational. Our goal is trying to provide recommendations which can higher the accuracy of recipes.</p>
            <img src={forkie_lofi4} alt="Writing recommendations using ML" onClick={zoomimg} className="zoomable" style={{ paddingLeft: "5%" }} />
            <div className="imgdes" style={{ paddingLeft: "5%" }}>Writing Recommendations</div>

            <p>We drew the information architecture of the app based on the ideas we have. We created lo-fi prototypes for the key concepts and conducted user testing.</p>
            <img src={forkie_struc} alt="Information Architecture" onClick={zoomimg} className="zoomable" />
            <div className="imgdes">Information Architecture</div>
            <img src={forkie_lofi} alt="Lo-fi prototypes" onClick={zoomimg} className="zoomable" />

            <div style={{ width: "100%", maxWidth: "1200px", display: "flex", flexDirection: "column", margin: "0 auto" }}>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                    <img src={forkie_lofi3} alt="Lo-fi user testing" onClick={zoomimg} className="zoomable" style={{ width: "49%" }} />
                    <img src={forkie_lofi2} alt="Lo-fi user testing2" onClick={zoomimg} className="zoomable" style={{ width: "49%" }} />
                </div>
                <div className="imgdes">User Testing with Lo-fi Prototypes</div>
                <p className="mainT" style={{ marginTop: "30px" }}>The key is the conversation about 'a recipe'</p>
                <p>The biggest question we had at this point was <b>how do we want users to interact with each other.</b> Do we want users having continuous communications or several interactions about recipes? Because the key point of our design is a <b>communication hub where people share their experience about recipes to help others regain passion for cooking,</b> our answer was the latter.</p>
                <img src={forkie_struc2} alt="Information Architecture" onClick={zoomimg} className="zoomable" />
                <div className="imgdes">Updated Information Architecture</div>
            </div>
            <img src={forkie_mid} alt="Information Architecture" onClick={zoomimg} className="zoomable" />
            <div className="imgdes">Mid-fi Prototype</div>
            <p>For this time, we conducted usability testing using a React prototype. We could observe how participants interact with the app, and could improve the UI and interaction based on the test. Also, we got feedback about how to improve the recipe view from the people who are passionate on cooking.</p>
            <div style={{ width: "100%", margint: "0 auto", textAlign: "center" }}><a style={{ margin: "0" }} href="https://jayolee.github.io/forkie/" target="_blank" rel="noopener noreferrer">
                <div className="button forkie" style={{ margin: "0" }}>Play with the React Prototype</div></a></div>
        </div>,
        "Solution": <div>
            
            <p className="solutionPoint" id = "forkieSolu" style={{ marginTop: "30px", maxWidth: "750px" }}>
            <img src ={forkie_logo} style = {{maxWidth: "300px", margin: "0 auto 30px"}} alt ="logo" />
            Forkie, a mobile app help people regain passion for cooking</p>
            <p><b>Sharing recipe is sharing experience.</b> Forkie helps people regain the passion for cooking by fostering the communication with friends. Below is the key features.</p>
            <div className="up_expla_screen forkie">
                <div className="imgwrap_sc" >
                    <img src={forkie_phone} className="phonesc" alt="Comment" style={{ width: "250px" }} />
                </div>
                
                <p>
                   <p className = "ins_title" style={{marginBottom: "0", marginLeft: "0"}}>
                   <span className ="fork2">Risk-averse</span>&nbsp;&nbsp;
                        <span className ="fork3">unfamiliarity</span>
                    </p>
                    <span className="title forkie">Share first-hand experience about a recipe</span><br />
                    Sharing recipe is sharing the experience. Forkie helps people regain the passion for cooking by fostering communication with friends.
            </p>
            </div>
            <div className="up_expla_screen forkie">
                <div className="imgwrap_sc" >
                    <img src={forkie_fork} className="phonesc" alt="Comment" style={{ width: "250px" }} />
                </div>
                <p>
                <p className = "ins_title" style={{marginBottom: "0", marginLeft: "0"}}>
                        <span className ="fork1">Context</span>&nbsp;&nbsp;
                        <span className ="fork2">Risk-averse</span>&nbsp;&nbsp;
                        <span >Variations</span>
                    </p>
                    <span className="title forkie">Fork recipes and create various versions</span><br />
                    A dish can have various versions depending on users' backgrounds and preferences. Forkie allows users to create multiple branches (versions) so other users can choose a version to cook, and even track the original version.
            </p>
            </div>
            <div className="up_expla_screen">
                <div className="imgwrap_sc" >
                    <img src={forkie_cmt} className="phonesc" alt="Comment" style={{ width: "250px" }} />
                </div>
                <p>
                <p className = "ins_title" style={{marginBottom: "0", marginLeft: "0"}}>
                        <span className ="fork1">Context</span>
                    </p>
                    <span className="title forkie"> Share tips from your experience via crowdsourcing</span><br />
                    Different people have different tips and ideas regarding a recipe. Leave comments on a recipe to share the tips.
            </p>
            </div>
            <div className="up_expla_screen">
                <div className="imgwrap_sc" >
                    <img src={forkie_crt} className="phonesc" alt="Comment" style={{ width: "250px" }} />
                </div>
                <p>
                <p className = "ins_title" style={{marginBottom: "0", marginLeft: "0"}}>
                        <span >Inaccuracy</span>
                    </p>
                    <span className="title forkie">Easily create accurate recipes with ML (Updating)</span><br />
                    Recipe becomes conversational when people share them. Forkie provides recommendations to make the recipes more accurate. Also, it parses the ingredients from the steps, so users don't need to going back and forth to list the ingredients.<br />
                    Also, by providing recommendations in a way that doesn't disturb users' typing, users can easily ignore it and keep typing if the suggestion is not what they want.
            </p>
            </div>
          
        </div>,

        "Next Steps":
            <div>
                <p className="mainT">How can we manage the crowdsourcing?</p>
                <p>Forkie uses crowdsourcing to allow users to share tips. The question is, how can we moderate the comments they share? Currently, comments with high numbers of likes would be on the top. However, is sending the comments with lower likes to the bottom a right way to manage the contents? What if there's only one comment? If there are a thumbs down button and we automatically delete comments with high numbers of thumbs down, how can we make users not abuse the function?</p>

                <p className="mainT">How can we provide options for users to find new friends?</p>
                <p>Currently, Forkie doesn't provide a function for users to find a new friend. They can only make new following via the chain of their connections. However, what if a user doesn't have a friend who is on the app?</p>

                <p className="mainT">How can users use the app while cooking?</p>
                <p>When people cook, often their hands are not free. Since Forkie is a native mobile app, we can use voice assistants of mobile devices to solve this problem. What are other technological possibilities that can also be helpful? </p>
            </div>,
    },

    "buncee": {
        "projectTitle": "Buncee",
        "quote": <span>A creating tool for school communities<br /><br /></span>,
        "topimg": <div />,
        "exlpla": {
            "What are these?": <span><i>Buncee </i>is a creation tool for school communities. Students, teachers and other community members can use the Buncee canvas as a presentation, communication and creation tool. I worked as a graphic/UX designer at <i>Buncee</i>. Below are some projects I did at <i>Buncee.</i></span>,
        },
        "Buncee Features": <div>
            <img src={buncee3} alt="Buncee Features" style={{ size: "100%", maxWidth: "1200px" }} />
            <div style={{ width: "100%", textAlign: "center" }}><a href="https://www.edu.buncee.com/features" target="_blank" rel="noopener noreferrer">
                <div className="button buncee">Visit the Site</div></a></div>
            <div style={{ maxWidth: "550px", margin: "0 auto" }}>
                <p style={{ marginBottom: "10px" }}><b>Role:</b> Web design, prototyping using HTML/CSS/JQuery, Infographics</p>
                <p style={{ margin: "10px auto", fontSize: "18px" }}><b>A web page explaining the features of Buncee</b></p>
                <div style={{ display: "flex", justifyContent: "center", maxWidth: "550px", margin: "0 auto", alignItems: "flex-start" }}>
                    <p style={{ width: "90px", marginLeft: "10px" }}><b>Challenges:</b></p>
                    <p style={{ width: "calc(100% - 90px)", paddingLeft: "20px" }}>
                    - Creating infographic of abstract concepts <br />
                    - Explaining different levels of features
                <ul style={{ marginTop: "10px" }}>
                            <li>
                                Canvas features</li><li>
                                Different type of users (School, Teacher, students)
                </li>
                        </ul>
                        </p>
                </div>
            </div>
        </div>,
        "Buncee Gallery": <div>
            <img src={buncee4} alt="Buncee Gallery" style={{ size: "100%", maxWidth: "500px" }} />
            <div style={{ width: "100%", textAlign: "center" }}>
                <div className="button buncee" style={{ background: "#ccc", boxShadow: "none" }}>Visit the Site</div>
                <div style={{
                    fontSize: "14px", transform:
                        "translateY(-50px)"
                }}>Contact me for more information</div></div>
            <div style={{ maxWidth: "550px", margin: "0 auto" }}>
                <p style={{ marginBottom: "10px" }}><b>Role:</b> Web design, prototyping using HTML/CSS/JQuery</p>
                <p style={{ margin: "10px auto", fontSize: "18px", fontWeight: "bold" }}>A portal where students and teachers can get the sample Buncees as references</p>
                <div style={{ display: "flex", justifyContent: "center", maxWidth: "550px", margin: "0 auto", alignItems: "flex-start" }}>
                    <p style={{ width: "90px", marginLeft: "10px" }}><b>Challenges:</b></p>
                    <p style={{ width: "calc(100% - 90px)", paddingLeft: "20px" }}>- Make the UI intuitive enough for non tech-savyy users<br />
                        - provide overall summary of contents which can also be used as breadcrumbs </p>
                </div>
            </div>
        </div>,
        "Sign Up Page": <div style={{ display: "flex", justifyContent: "space-around", maxWidth: "1000px", margin: "0 auto", alignItems: "center", flexWrap: "wrap" }}>

            <div style={{ width: "360px" }}>
                <img src={buncee5} style={{ boxShadow: "0 0 10px rgba(0,0,0,0.2)", padding: "16px 0 14px 20px" }} alt ="Screenshot of Buncee Features" />
            </div>
            <div>
                <p style={{ margin: "10px 0" }}><b>Role:</b> Web design, prototyping using InVision, Adobe After Effects</p>
                <p style={{ margin: "10px 0", fontSize: "18px", fontWeight: "bold" }}>A web page explaining the features of Buncee</p>
                <div style={{ display: "flex", maxWidth: "500px", margin: "0 auto", alignItems: "flex-start" }}>
                    <p style={{ width: "65px" }}><b>Challenges:</b></p>
                    <p style={{ width: "calc(100% - 90px)", paddingLeft: "30px" }}>- Providing clear instruction and error messages (using the button as a progress bar)<br />- Divide pages for easier flow</p>
                </div>
                <div style={{ width: "100%", textAlign: "center" }}><a href="https://app.edu.buncee.com/signup?account_type=generic-premium&tier=plus" target="_blank" rel="noopener noreferrer">
                    <div className="button buncee" style={{ marginTop: 0 }}>Visit the Site</div></a></div>
            </div>
        </div>,
        "Buncee Emotion iOS Sticker Pack": <div style={{ display: "flex", justifyContent: "space-between", maxWidth: "850px", margin: "0 auto", alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ width: "350px" }}>
                <img src={buncee2} style={{ maxWidth: "280px", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }} alt ="Screenshot of Buncee iOS Message"/>
            </div>
            <div style={{ width: "100%", maxWidth: "450px", marginLeft: "30px", textAlign: "center" }}>
                <p style={{ margin: "10px 0" }}><b>Role:</b> Creating Animation stickers</p>
                <p style={{ margin: "10px 0", fontSize: "18px", fontWeight: "bold" }}>iOS sticker pack for iMessage </p>
                <div style={{ width: "100%", textAlign: "center" }}><a href="https://app.edu.buncee.com/signup?account_type=generic-premium&tier=plus" target="_blank" rel="noopener noreferrer">
                    <div className="button buncee" style={{ marginTop: "30px" }}>Open the Appstore</div></a></div>
            </div>

        </div>,
        "Buncee iOS App": <div>

            <img src={buncee1} style={{ size: "100%", maxWidth: "1200px" }} alt ="Screenshots of Buncee iOS App"/>
            <div style={{ width: "100%", textAlign: "center" }}><a href="https://itunes.apple.com/us/app/buncee-creative-presentation/id1093956684?mt=8" target="_blank" rel="noopener noreferrer">
                <div className="button buncee">Open the Appstore</div></a></div>
            <div style={{ maxWidth: "550px", margin: "0 auto" }}>
                <p style={{ margin: "10px auto" }}><b>Role:</b> UX design, infographic design, prototyping using InVision</p>
                <p style={{ margin: "10px auto", fontSize: "18px", fontWeight: "bold" }}>An iOS app for Buncee canvas.</p></div>
        </div>

    },
    "herecare": {
        "projectTitle": "HereCare",
        "quote": "How might we use technology to assist at-home rehabilitation speech practices for neurodegenerative disease patients",
        "topimg": <div style={{ width: "640px", maxWidth: "100%", height: "auto", margin: "0 auto" }}><Vimeo video="329284783" /></div>,

        "exlpla": {
            "Duration": "Jan 2019 ~ Current",
            "Team": "Ja Young Lee, June Byeon, Annette Hong",
            "Role": "User Reserach, UI/UX design, Alexa skill prototyping",
            "Tool": "Adobe XD, Python",
        },
        "button": <div>
        </div>,
       
        "Research": <div>
            <p className="mainT" style={{ marginTop: "30px" }}>Lack of time and resources delay neurodegenerative disease patients to recover from speech accessibility</p>
            <p>
            Although the population struggling with cognitive impairment is growing every year, access to treatment remains stagnant due to the limited number of clinicians and physical therapists available for treatment. Additionally, adherence to at-home rehabilitation practices is difficult as patients increasingly lose independence and rely on caregivers or family members to monitor them as their situations worsen over time. 
            </p>
            <p className="mainT" style={{ marginTop: "30px" }}>Alexa can be a technological touchpoint to automatize practice for motor and/or phonological aspects</p>
            <p>From the interviews, we’ve found at-home rehabilitation is inadequately supported. Voice assistants are something users would interact with everyday. Therefore, as an integrative part of the user’s daily routine and personal environment, Alexa has the potential to make at-home speech therapy another component of everyday life.
            With Alexa, it would be posssible for patients to do daily at-home rehabilitation while collecting the data. Also, the robust tracking of this practice would allow physicians to more actively adjust exercises based on patients’ performance, so the patients’ rehab routines would be able to more actively adapt to their needs. There is also much value in empowering users because they’re often supervised by caregivers and can feel like they’re a burden and end up feeling flustered. So by letting Alexa take over the role that caregivers hold, there’s the potential of alleviating these negative emotions
            </p>

            
                <p className="mainT" style={{ marginTop: "30px" }}>Already lots of interest in field about using technology to aid speech rehabilitation</p>
                <p>
            In fact, Researchers from UW and UMD published a CHI paper last year on how alexa has been providing “accidental” accessibility. For example, one person noted that their daughter’s speech as noticeably improved through her interactions with ALEXA because interacting with alexa requires the user’s speech to reach a certain threshold of intelligibility.
            
            

overall, our expert sources were enthusiastic about the potential they see in automatizing practices that target motor and/or phonological production


            </p>
        </div>,
        "Solution": <div>
            <img src = {herecare_solutions} className = "zoomable" onClick={zoomimg}  alt ="Herecare Solutions"/>
            <p className="solutionPoint" style={{ margin: "30px auto 0", maxWidth: "100%" }}><span style={{ color: "#3D7AAF", fontWeight: "bold" }}>HereCare,</span> a service providing at-home rehabilitation assistance via multiple touchpoint</p>
            
            <img src = {herecare_solu} style ={{maxWidth: "600px"}} alt="Solution" />
                <div className="imgdes">How it works</div>
            <p> We envision that HereCare would stand in the middle, facilitating communication between patients and their doctors outside of their appointments. Doctors would set personalized practices through their dashboard, which Alexa will prompt the user to complete at set times of the day. As patients practice with Alexa, their performance data would be recorded, and this data would then be made accessible to doctors via their dashboards. Through the data, doctors are able to look over the data and make adjustments accordingly for the next round of at-home rehab exercises.</p>
            <div className = "up_expla_screen">
            <div className = "imgwrap_sc">
            <img src = {herecare_rout} style ={{maxWidth: "280px"}} className="phonesc" alt="Set Routine" />
                <div className="imgdes">Set Routine on Alexa</div></div>
            <p>Patients would use 'Set Routine' function to make the practices prompted in a certain time of the day.</p>
            </div>

            <div className = "up_expla_screen">
            <div className = "imgwrap_sc alexa">
            <img src = {herecare_alex} style ={{maxWidth: "280px"}} className="phonesc" alt="Set Routine" />
                <div className="imgdes">Alexa Prompting Practices</div></div>
            <p>Alexa will prompt practices 10 times per a day. However, users can opt out if they feel that they cannot do such amount in a day. Also, by using positive words as feedback ("Great", "Good Job" verses "Nice"), HereCare encorages patients practicing. </p>
            </div>

            <img src= {herecare_solu_screen } style ={{border: "1px solid rgba(0,0,0,0.5)"}} alt ="Dashboard" className = "zoomable" onClick={zoomimg} />
            <div className="imgdes">Dashboard</div>
            <p>The practice data would be sent to the dashboard so doctors can track progress before their next appointment and prepare for the meeting and can talk about it with the patient at the appointment. </p>
            <p className="mainT" style={{ marginTop: "30px" }}>Alexa's technological constraint can be a key to measure speech intelligibility</p>
            <p>The way Alexa understands the commands is by finding the nearest pronunciation from the given list of words. Which means, it's hard to catch the wrong production of unintended syllables, words, or phrases such as 'bapple' instead of 'apple' using Alexa. This is a technical constraint why we set our target users as apraxia patients. Currently, doctors measure speech intelligibility to see the progress of apraxia, which is a measure of how comprehensible speech is to other people. We set our standard level of speech intelligibility to go on the next level of practice as if Alexa can understand what patients speak.</p>

             <p className="mainT" style={{ marginTop: "30px" }}>Third party skills cannot recieve the record data</p>
             <p>Currently, Alexa doesn’t provide sound data to third party apps. Therefore, without support, HereCare cannot provide the recorded practice data. Instead, Herecare would provide how Alexa comprehended the practices.</p>
        </div>,
       

        "Value": <div> 
             
             <img src = {herecare_value} style ={{maxWidth: "600px"}} alt="Solution" />
                <div className="imgdes">Value Flow</div>
                <p>We view HereCare taking place as a mediator between the hospital and patient to make the currently segmented experience seamless, effective and personalized. 
Patients would first provide data, and this data are used to better. While hospitcal may pay herecare, our skill will reinforce this personal treatment for the patients.</p>
            <p className="mainT" style={{ marginTop: "30px" }}>Collecting data for the field of cognitive pathology</p>
            <p>According to our expert sources during our interviews and research, we were very much informed of current lack of sufficient research data for researchers on speech pathology. We believe that collecting the data through the system can provide clinicians and researchers access to larger sets of data. With this data, it might be able to even build computational models such as those being created for bilingual aphasia rehabilitation. These models would be capable of predicting the trajectory of recovery for patients of varying degrees of brain damage and disease severity. Additionally, the creation of such a service would also lighten the burden on caregivers, as the automated service would not require supervision. </p>
           
            <p className="mainT" style={{ marginTop: "30px" }}>Potential expansion into other areas of treatment</p>
            <p>
            Three seprate market reports say healthcare AI market will increase at compound annual grwoth rate of between 47 % - 50% over the next few years. It is a huge and growing market. Also, we believe on long term the aging of population is a big issue that this market is growing. In this growing market, we see HereCare catering also to those with other neurodegenerative diseases such as dementia and alzheimer’s. We also see it being applicable to support language acquisition in children.</p>
            <p>
So we believe that this simple, yet powerful skill would create a better supported cycle between doctors and patients with communication disorders. 
            </p>
        </div>,

        
    },
}