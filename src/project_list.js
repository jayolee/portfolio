import React from 'react';
import YouTube from 'react-youtube';
import Vimeo from '@u-wave/react-vimeo';
import Dote from './dote.js'
import logpos1 from './Logpos/IMG_0658.jpg'
import logpos2 from './Logpos/interview.jpg'
import logpos3 from './Logpos/final_design.jpg'
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

import getcuisine1 from './getcuisine/top.gif'
import getcuisine3 from './getcuisine/icons.png'
import getcuisine_persona1 from './getcuisine/persona1.jpg'
import getcuisine_persona2 from './getcuisine/persona2.jpg'
import getcuisine_story from './getcuisine/storyboard.jpg'
import getcuisine_story2 from './getcuisine/storyboard2.jpg'
import getcuisine8 from './getcuisine/report1.svg'
import getcuisine9 from './getcuisine/report2.svg'
import getcuision10 from './getcuisine/modelerror.gif'
import getcuisine11 from './getcuisine/503error.jpg'
import getcuisinemod1 from './getcuisine/knear.svg'
import getcuisinemod2 from './getcuisine/svm.svg'
import getcuisinemod3 from './getcuisine/multi.svg'
import getcuisine_aff from './getcuisine/affinity.jpg'
import getcuisineword from './getcuisine/wordbag.svg'

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

import momo_btn1 from './momoko/avaliable_line.png'
import momo_btn2 from './momoko/appstore.svg'

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

import naoshima from './naoshima/top.gif'
import nao_lofi from './naoshima/lo3.jpg'
import nao_midfi from './naoshima/midfi.jpg'
import nao_drawing from './naoshima/draw.jpg'
import nao_sketches from './naoshima/sketches.gif'
import nao_about from './naoshima/about.gif'
import nao_detail from './naoshima/detail.jpg'

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

function anigenerator() {
    let element = [];
    let momothumblist = [momo4_1, momo5_1, momo6_1, momo7_1, momo8_1, momo9_1, momo10_1, momo11_1, momo12_1, momo13_1, momo14_1, momo15_1, momo16_1, momo17_1, momo18_1, momo19_1, momo20_1, momo21_1, momo22_1, momo23_1, momo24_1, momo25_1, momo26_1, momo27_1];
    let momoanilist = [momo4_2, momo5_2, momo6_2, momo7_2, momo8_2, momo9_2, momo10_2, momo11_2, momo12_2, momo13_2, momo14_2, momo15_2, momo16_2, momo17_2, momo18_2, momo19_2, momo20_2, momo21_2, momo22_2, momo23_2, momo24_2, momo25_2, momo26_2, momo27_2];

    for (let i = 0; i < momothumblist.length; i++) {
        element.push(
            <div className="aniwrap" key={"momoAniWrap" + i}>
                <img className="thumb" src={momothumblist[i]} key={"MomoThumb" + i} alt={"Momoko Thumbnail " + i} />
                <img className="ani" src={momoanilist[i]} key={"MomoAni" + i} alt={"Momoko Animation " + i} />
            </div>
        )
    }
    return element;
}

function zoomimg(e) {
    let classlist = e.target.classList;
    if (classlist.contains("zoomed")) {
        e.target.classList.remove("zoomed");
    }
    else {
        e.target.classList.add("zoomed");
    }
}
const vidid = {
    "log": "5Q6vJg-OufI",
    "dote": "zlp8SnxFN3I",
    "gssh": "lUaJy9qo6qA",
}
const protoRef = React.createRef();

export const projectList = {
    "up": {
        "projectTitle": "Up",
        "quote": "How might we use ubiquitous devices to help (CMU) students?",
        "topimg": <img id="up" alt="Up Top Screen" className="topimg" src={up_breathing} />,

        "exlpla": {
            "Duration": "4 months (Oct 2018 ~ Jan 2019)",
            "Team": <span>Team UP (Matthew Fang, <a href="http://judithleng.me/" target="_blank" rel="noopener noreferrer">Judith Leng,</a> Ja Young Lee, Jerry Yang)</span>,
            "Role": "UI/UX design, development, illustration",
            "Tool": "React, HTML, SCSS, Adobe Illustrator, Figma",
        },
        "button": <a href="https://jayolee.github.io/Team-UP-prototype_react/" target="_blank" rel="noopener noreferrer">
            <div className="button up">Play with the Prototype</div></a>,
        "Process": <div className="processBoxWrap">
            <div className="proBoxLine up" />
            <div className="proBoxOut">
                <div className="processBox up">Ideate</div>
            </div>
            <div className="proBoxOut">
                <div className="processBox up">Research</div>
                <div className="processExpla">Interview</div>
                <div className="processExpla">Literature Review</div>
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
             <p className = "mainT" style={{marginTop:"10px"}}>CMU students cannot sleep because of anxiety about being productive, but the anxiety affects productivity</p>
            <p>Our idea started from interviews with CMU students about causes of stress they get. Interestingly, they answered that students at CMU tend not to sleep even though they don't have things to do. They are worrying about if they are productive enough, and this gives them so much stress. We set the goal of our project as <b>relieving students' stress and promoting productivity.</b></p>
            <p className="mainPoint" >
            <span style={{boxShadow:"inset 0 -1.5px white, inset 0 -3px #E9974C, inset 0 -4.5px white, inset 0 -6px #E9974C"}} >How can a mobile app promote productivity, combat ego-depletion and stress?</span></p>
            <p><br />Our original idea was apply love languages to self-love. We planned to prompt random tasks based on their love languages every day to give students joyful moments to care of themselves. However, we realized that the rationale is weak, so we decided to focus on a specific task which is proven as effective.</p>
            <img src={up_protos} alt="Initial Paper Prototypes" className="zoomable" onClick={zoomimg} /><div className="imgdes">Initial Paper Prototypes</div>
            <p className = "mainT">Activities proven as improving productivity and relieving stress with 10,000 hours rule as a tracker</p>
            <p>Through literature review, we found activities proven as effective to relieve stress or promote creativity. Among the activities, we paid attention to <a href="http://www.hsj.gr/medicine/stress-management-techniques-evidencebased-procedures-that-reduce-stress-and-promote-health.pdf" target="_blank" rel="noopener noreferrer" ><b>diaphragmatic breathing,</b> which is shown as effective to relieve stress</a> and <a href="https://behavioralandbrainfunctions.biomedcentral.com/articles/10.1186/1744-9081-10-9" target="_blank" rel="noopener noreferrer" ><b>short-term meditation</b> which improves creativity.</a> </p>
            
            <p>Malcolm Gladwell’s 10,000 hours rule states that one requires over 10,000 hours of practice to become an expert of some sort; however, such number of hours is difficult of practice for young adults in college or workplace. <b>But what if we base this idea to encourage users to build a focusing habit?</b> We used this idea to motivate users.</p>
            <img src={up_activity} style={{maxWidth:"700px", width:"100%"}} alt="Design Rationales"/><div className="imgdes" style={{marginBottom:"50px"}}>Design Rationales</div>

            <p>
                Based on the research we conducted, our team created ​<i><b>Up</b></i> based on several psychological concepts including self control, ego-depletion, stress-reduction, and embodied cognition. <i>Up</i> encourages users <b>to form a habitual focus timing of 90 minutes.</b> Users are encouraged to perform a short guided breathing exercise of blowing a balloon immediately after a focus session concludes to regather
                brain resources. </p>
                <p className="solutionPoint"><span style={{color:"#e9974c", fontSize:"26px", fontWeight:"bold"}}>Up,</span> an app that encourages users to form a habitual focus timing of 90 minutes.</p></div>,
        "The Solution":<div>
                <img src={up_screenmap} alt="Screenmap" className="zoomable imgBorder" onClick={zoomimg} /><div className="imgdes">Screenmap of the Final Design</div>
                <div style={{textAlign:"center"}}>
                <a href="https://jayolee.github.io/Team-UP-prototype_react/" target="_blank" rel="noopener noreferrer">
            <div className="button up" style={{margin:"20px auto 40px"}}>Play with the Prototype</div></a></div>
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

        "Design Process": <div>
            <img src={up_iniscr} alt="Initial Screenmap" className="zoomable" onClick={zoomimg}/> 
            <div className="imgdes">Screenmap of Initial Prototype</div>
            <p>After the literature review, our team created a lo-fi prototype using Figma based on the insights we gained. We conducted Think-aloud with this prototype. At this point, the main features were <ul>
                <li>Selecting an animal to save before starting the session.</li>
                <li>Concentration session in the amount of maximum 90 minutes.</li>
                <li>Following guided breathing session while watching characterized balloons.</li></ul></p> 
            <div className="halfwrap">
            <img src={up_meeting} alt="Early Prototype" className="half zoomable" onClick={zoomimg} />
            <img src={up_earlyProto} className="half zoomable" alt="Early Prototype" onClick={zoomimg} /> <div className='imgdes'>Screen Sketches by Young and Think-aloud Using the Early Prototype</div>
            </div>
                <p>From the Think-aloud, we got feedback that the connection between saving endangered animals and the concentration session is not clear. Also, we added facial expression on balloons to create empathy; however, most testers felt that <b>facial expressions are distracting,</b> because they need to hold their phones near their mouth while following the instructions.<br />
                From the testing, we realized that it is <b>hard to get meaningful usability test data with static screens due to the missing key interactions.</b> Therefore, we decided to create a working prototype by code to give realistic experience to our testers. It was my role to build a working prototype.</p></div>,
       
       

        "Challenges": <div>
            
            <p className = "mainT" style={{marginTop: "30px"}}>How can we reduce demoralizing factors?</p>
            <p>
                We conceded about users setting the very short sessions and not performing the breathing sessions to get the rewards. To avoid this, we decided three approaches.
                <ul>
                    <li>Not offering monetary incentives</li>
                    <li>Setting 10 minutes as the minimum session duration</li>
                    <li>Using the iPhone breathing sensor</li>
                </ul>
                The iPhone breathing sensor not only tracks the activity, but also strengthens the metaphor of blowing away one’s stress.</p>
            <img src={up_proto_blow} alt="Playing with Breathing Sensor" className="zoomable" onClick={zoomimg} /><div className='imgdes'>Breathing Sensor Detecting the Breathing Activity</div>

            <p className = "mainT">Coding a knob dial</p>
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
            <p className = "mainT">What if users can save real animals?</p>
            <p className="addmargin">While <i>Up</i> is a productivity mobile application that serves as a concentration tool, the overall message is <b>importance of constant effort and taking efficient breaks.</b> <i>Up</i> aims to reduce the demoralizing factor occurring outside of the application by constantly rewarding users with animals.</p>
            <p>
                At current stage of design, user are limited to saving virtual animals, which may not be as rewarding as contributing to saving animals in the real world. Therefore, we look forward to having a sponsorship partner with wildlife organizations for future implementations.</p>
        </div>,
    },
    "getcuisine": {
        "projectTitle": "Get Cuisine",
        "quote": "How might Machine Learning can help people?",
        "topimg": <div style={{ width: "640px", maxWidth: "100%", height: "auto", margin: "0 auto" }}><Vimeo video="315035206" /></div>,
        
        "exlpla": {
            "Duration": "Dec 2018 ~ Current",
            "Team": "Ja Young Lee",
            "Role": "UI/UX, development",
            "Tool": "Python Flask, jQuery, HTML, CSS, Adobe Illustrator",
        },
        "button": <div><a href="http://getcuisine.herokuapp.com" target="_blank" rel="noopener noreferrer">
            <div className="button getcuisine">Go to the Website</div></a>
            <div style={{transform:"translateY(-26px)"}}>*Initial loading is very slow</div>
            </div>,
        "Process": <div> 
        <div className="processBoxWrap">
         <div className="proBoxLine getcuisine" />
        <div className="proBoxOut">
            <div className="processBox getcuisine">Ideate</div>
            <div className="processExpla">Matchmaking</div>
        </div>
        <div className="proBoxOut">
            <div className="processBox getcuisine">Research</div>
            <div className="processExpla">Descriptive Research</div>
            <div className="processExpla">Survey</div>
        </div>
        <div className="proBoxOut">
            <div className="processBox getcuisine">Iterate</div>
            <div className="processExpla">Hi-fi Prototype</div>
            <div className="processExpla">Think-aloud</div>
        </div>
        <div className="proBoxOut">
            <div className="processBox getcuisine fin">Finalize</div>
            <div className="processExpla">Deployment</div>
        </div>
        </div>
        <div className="processBoxWrap">
         <div className="proBoxLine getcuisine" />
        <div className="proBoxOut">
            <div className="processBox getcuisine">Research</div>
            <div className="processExpla">Survey</div>
            <div className="processExpla">Semi-Structured Interview</div>
            <div className="processExpla">Affinity Diagraming</div>
            <div className="processExpla">User Personas</div>
            <div className="processExpla">Speed Dating</div>
        </div>
        
        <div className="proBoxOut">
            <div className="processBox getcuisine">Iterate</div>
        </div>
        </div>
        
        </div>,
        "Ideation": <div>
           
            <p>The ideation started from the matchmaking process. How can we help human using Machine Learning (ML)? While identifying possible activities and domains to which we can apply ML model, one of the dataset from Kaggle (<a href="https://www.kaggle.com/c/whats-cooking" target="_blank" rel="noopener noreferrer">cuisines and ingredients</a>) inspired me. It brought my experience having small amounts of ingredients which are leftovers after cooking. It’s often challenging to deal with these leftovers. 
                </p>
                <p className="mainPoint">
                <span style={{boxShadow:"inset 0 -1.5px white, inset 0 -3px #617D31, inset 0 -4.5px white, inset 0 -6px #617D31"}} >How might Machine Learning help people clean out the fridge?</span></p>
                
                <p>
                The idea of creating a ML model can help people cleaning out their fridges came up in my mind. I created a ML model providing foods to cook based on the ingredients provided from users, and deployed a web platform for people to be able to use this model.</p>
                <p className="solutionPoint"><span style={{color:"#617d31", fontSize:"26px", fontWeight:"bold"}}>Get Cuisine,</span> a ML powered web platform to help clean out the fridge</p>
                <div style={{textAlign:"center"}}><a href="http://getcuisine.herokuapp.com" target="_blank" rel="noopener noreferrer">
            <div className="button getcuisine" style={{margin:"20px auto 40px"}}>Go to the Website</div></a>
            <div style={{transform:"translateY(-26px)", margin:"0", height:"0"}}>*Initial loading is very slow</div>
            </div>
                </div>,
        "Initial Research": <div>
            <p className = "mainT" style={{marginTop: "30px"}}>People don't use Alexa to search for recipes</p>
            <p> In the beginning, I planned to create an Amazon Alexa Skill. <b>However, although 41.4% of people place their smart speakers in the kitchen, only 26.5% of people use the speakers to look for recipes monthly, and only 5.1% people use it daily.</b> This is a comparably low percentage comparing to other popular functions such as listening music (76.2% of monthly use, 41.9% of daily use) or checking the weather (69.1% of monthly use, 41.4% of daily use). <a href=" https://voicebot.ai/2018/03/21/data-breakdown-consumers-use-smart-speakers-today/" target="_blank" rel="noopener noreferrer">(Source)</a> Therefore, I decided to create a website which can also provide visual interaction to users.</p>
            <div className="halfwrap" style={{marginTop:"0"}}>
            <img src={getcuisine8} alt="Where do people put their smart speakers?" className="half" style={{ maxWidth: "500px", marginTop:"0"}} />
            <img src={getcuisine9} alt="Smart Speaker Use Case Frequency Jan 2018" className="half" style={{ maxWidth: "500px", marginTop:"0"}}/><div className="imgdes">
                <a href=" https://voicebot.ai/2018/03/21/data-breakdown-consumers-use-smart-speakers-today/" target="_blank" rel="noopener noreferrer">(Source of the graphs above)</a>
                </div>
            </div>
        </div>,
 "ML Model": <div>
     <p>
     I built pipelines of three algorithms: K-Nearest Neighbors (K-NN), Support Vector Machine, Multinomial Naive Bayesian from Scikit-learn with CountVectorizer and TfidfTransformer. Among three models, I decided to use K-NN model because it returned highest accuracy from K-fold Cross-validation (K = 5).</p>
    <img src={getcuisineword} alt = "Pipeline Structure" />
    <div className="imgdes">Pipeline Structure</div>
     <div className="triwrap getcuisine" style={{marginTop:"60px"}}>
     <div className = "triinner" style={{border:"4px solid rgba(97,125,49,0.5)", padding:"5px 15px 5px 0", borderRadius:"10px"}}>
        <img src={getcuisinemod1} alt="K-NN Model"  className="half" />
        <div className="imgdes">K-NN Model<br />Accuracy: 0.73</div>
     </div>
     <div className = "triinner">
        <img src={getcuisinemod2} alt= "SVM Model" className="half" />
        <div className="imgdes">SVM Model<br />Accuracy: 0.06</div>
     </div>
     <div className = "triinner">
        <img src={getcuisinemod3} alt = "Multinomial Naive Bayesian Model" className="half"/>
        <div className="imgdes">Multinomial NB Model<br />Accuracy: 0.63</div>
     </div>
     </div>
     </div>,

        "Challenges": <div> <p className = "mainT" style={{marginTop:"30px"}}>Using Google search to solve the lack of the open source recipe dataset</p>
        <p>
            Since there was no open source recipe dataset, I used the <a href="https://www.kaggle.com/c/whats-cooking" target="_blank" rel="noopener noreferrer">cuisines and ingredients dataset</a>. Therefore, I decided to limit the functionality as providing the appropriate cuisine to look for based on the given ingredients. Because providing cuisine requires additional efforts for users to look for a specific food to cook, I also created a function sending users to Google Search searching recipes with the predicted cuisine and given ingredients.</p>
            <p className = "mainT">Optimizing the site</p>
            <p>
            The biggest issue of using ML is that it is hard to optimize the website for shorter loadings. I tried to optimize the files as much as possible; however, the initial response time is still long due to Heroku (If the app has no traffic for 30 mins, it goes to sleep due to Heroku's policy).
            </p>
            <p className = "mainT">Debugging server error</p>
            <p>
                This was the first time I used Python Flask and managed the server side. I used ajax call to send and get the data to the server. It kept returning 500 error, and I could not figure out what it was. By deleting the code line by line, I figured out this happened because I passed Null value to the server to run the model. Later, I learned that I also need to make a server return the error indicating what type of error it is for the sake of debugging.
            <img src={getcuisine11} alt="500 error" style={{ maxWidth: "500px" }} /><div className="imgdes">500 Error... What Does It Mean?</div>
            </p>
            <p className = "mainT">Managing the format of users' input to run the ML model</p>
            <p>
                The training data I used didn't have colum headers, and the data I passed from the inputs (JSON -> Pandas Dataframe) had column headers. As a result, it only returned French Cuisine (error). I added a line of code to get rid of the column headers to fix the error.
            <img src={getcuision10} className="imgBorder" style={{ maxWidth: "500px" }} alt="Model Returning Error" /><div className="imgdes">ML Model Only Returning French Cuisine<br />(Curry Paste + Tamarind Paste + Chicken Breasts = French Food?)
            </div>
            <p>Also, I added an autocomplete function to the search bar using jQuery Autocomplete API because I wanted users to type ingredients in a same format as the train data.</p>
            

            </p>
        </div>,
       
        "Initial Design": <div>
            <p className = "mainT" style={{marginTop:"30px"}}>"Curiosity" can be a value of this website</p>
            <p className="addmargin">One of the concerns about this project is that the data this website provides can easily be obtained from other websites. Also, the data people need is recipes, not a cuisine type to look for. However, I got feedback that once knowing that this website is using ML, people become curious to see the result and get interested.</p>

            <img src={getcuisine3} alt="Cuisine Icons" onClick={zoomimg} className="zoomable" /><div className='imgdes'>Cuisine Icons</div>
            <img className="zoomable" src={getcuisine1} onClick={zoomimg} alt="final design"/>
                 <div className='imgdes'>Final Design</div>
          </div>,
        "Second Round Research": <div>
            <p className = "mainT" style={{marginTop:"30px"}}>The solution didn't solve the problem</p>
        <p>However, does this website fulfill the initial goal of "helping people clean out the fridge"? The answer was <b>NO.</b> The website was more about exploring the development of a ML powered website. Therefore, I started the second round of design process to achieve the original goal.</p>
        <p>First, I surveyed to understand what are the struggles people have regarding food consumption cycles, and how people search foods to cook.
            <ul>
                <li>Almost similar amount of people usually throw out leftover ingredients after gone bad as people who cook another food with those.</li>
                <li>Almost similar amount of people use ingredients as the keyword as those who use dish names for search to look for recipes.</li>
            </ul>
        Besides, there were fun facts such as <i>People make a meal plan before going  groceries more tends to throw out groceries after they gone bad than those who plan meals after getting groceries.</i> Based on this survey data, I conducted semi-structured interviews to learn about their decision making process about how they decide what to cook from the search result. I created an affinity diagram with the interviews. From the interview, I found some trends.</p>
        <img src={getcuisine_aff}  alt = "Affinity diagram" onClick={zoomimg} className="zoomable"/><div className='imgdes'>Affinity Diagram</div>
        <p>
            <ul>
                <li>When deciding what to cook using remaining ingredients, it is important how many other ingredients are needed.</li>
                <li>When cooking with leftover ingredients, not only finding a recipe using only the currently having ingredients, but required utensils are also important.</li>
                <li>Sometimes search results are overwhelming, and the experience of leftovers prevents people from cooking.</li>
            </ul>
        </p>
        <p>Based on the interview, I created two personas and storyboards.</p>
        <div className="halfwrap">
            <img src={getcuisine_persona1} alt="Persona 1" className="half" style={{maxWidth:"350px", marginTop:"0"}}/>
            <img src={getcuisine_persona2} className="half" alt="Persona 2" style={{maxWidth:"350px", marginTop:"0"}}/> <div className='imgdes'>Personas Created Based on the Survey and Semi-Structured Interview</div>
            
        </div>
        <img src={getcuisine_story} alt="Storyboard"  onClick={zoomimg} className="zoomable"/>
        <div className='imgdes'>Storyboards Explaining the Scenarios</div>
        <p>How can <i>Get Cuisine</i> website be integrated to the service as additional feature to help people? I got the inspiration from the interviews. I asked people if they had tried new dishes to cook, what the reasons were. Many people who cook often like trying new foods. I thought that I can connect this to another insight that sometimes search results are overwhelming, and the experience of leftovers prevents people from cooking. Below is the scenario of how an app can convey the insight.</p>
        <img src={getcuisine_story2} alt="Storyboard"  onClick={zoomimg} className="zoomable"/>
        <div className='imgdes'>A Scenario Explaining How Get Cuisine Function Can Help People</div>
        <p>Currently, I am conducting Speed Dating with the storyboards.</p>
        <p style={{textAlign:"center", fontSize:"24px",fontWeight:"bold",color:"rgb(97,125,49)"}}>To be continued!</p>
        </div>

    },
    "Buncee":{

    } ,
    "logpos": {
        "projectTitle": "LOG + POS",
        "quote": <span>How can we improve the communication at rescue operations using audio AR?<br /><br /></span>,
        "topimg": <YouTube
            videoId={vidid.log}
            id="player"
        />,
        "exlpla": {
            " ": <i>This is a project for a Bose Challenge at CMU.</i>,
            "Duration": <span>14 days - <b>Bose Challenge at CMU</b> (Oct 19th ~ Nov 1st)</span>,
            "Team": <span>Aniruddh Iyer, <a className="member" href="http://www.hyunwoopaik.com/" target="_blank" rel="noopener noreferrer">Hyun Woo Paik,</a> Ja Young Lee, Se One Park, <a className="member" href="https://wwchung.github.io/SSUI-Portfolio/index.html" target="_blank" rel="noopener noreferrer">Won-Woo Chung</a></span>,
            "Role": "ideation, video directing/editing",
            "Tool": "Maya, After Effects, Illustrator",
        },
        "Process": <div className="processBoxWrap">
         <div className="proBoxLine logpos" />
        <div className="proBoxOut">
            <div className="processBox logpos">Ideate</div>
            <div className="processExpla">Matchmaking</div>
        </div>

        <div className="proBoxOut">
            <div className="processBox logpos">Research</div>
            <div className="processExpla">Interview</div>
        </div>
        <div className="proBoxOut">
            <div className="processBox logpos">Design</div>
            <div className="processExpla">Device design</div>
            <div className="processExpla">UI design</div>
        </div>
        <div className="proBoxOut">
            <div className="processBox logpos">Finalize</div>
            <div className="processExpla">Video</div>
        </div>
        </div>,
        "Ideation": <div>
            <p> The prompt of Bose Challenge was <i><b>“How might we use sound-based augmented reality to improve our lives?”</b></i> Among the idea we had, we decided to focus on improving cooperation situations which require team members’ communications about their locations and status. More specifically, we narrowed down our target as firefighters, about their rescue operations in extreme situations.</p> <p>Our assumption here is that under the urgent circumstances of limited vision and hearing, it is difficult to communicate accurate location information via speaking. Therefore, we designed a way to communicate each other automatically generated location data based on their GPS with minimum hand control. </p><img src={logpos1} alt="Ideation Meeting" className="zoomable" onClick={zoomimg} /><div className='imgdes'>Ideation Meeting, Sketch by Young</div> </div>,
        "User Research": <div>
            <p> With our basic ideation, we conducted a phone interview with a firefighter. He confirmed that our idea will be helpful, and gave us the problems about the current system has.</p><img src={logpos2} alt="Phone Interview" /><div className='imgdes'>Phone Interview</div><p>According to the firefighter, there is a system providing location information using sound and blinking lights after a firefighter being motionless for 30 seconds (Watch the video for additional information). However, the issue is that the location information is verbally communicated, so the information rescue team has might not be the latest information. Also, the light and sound signals can be hindered by the fire and the smoke. Our solution solves this problem by providing real-time information directly to the firefighters through the device.</p></div>,

        "Challenges": <div><div className='title logpos' >Technical Challenge:</div><p>How can we get the accurate indoor location data?<div className='solution'><li>To get accurate location data, we designed our device to use the bluetooth devices for better location accuracy.</li></div></p>
        
        <div className='title logpos'>Social Constraints:</div><p>According to the interview, there are two social constraints:<br />Firefighters sometimes rely on their ears to determine the temprature. Therefore, there should not be a thing cover their ears.<br /> Firefighters resist change, especially if it is going to be hard to put on. <div className='solution'> <li>We designed an audio AR device satisfying these challenges. </li></div>
        </p>
            <img src={logpos3} alt="Device Design" className="zoomable" onClick={zoomimg} /><div className='imgdes'>Device Desiged by <a href='http://www.hyunwoopaik.com' target='_blank' rel="noopener noreferrer">Hyun Woo Paik</a></div></div>,

        "Final Design": <div><p>To create a video explining our idea, we made a scenario conveying how our design can be applied to the target situations.</p>
           <div className="halfwrap">
                <img className="half zoomable" onClick={zoomimg} src={logposstory1} alt="Storyboard 1" /> 
                <img className="half zoomable" onClick={zoomimg} src={logposstory2} alt="Storyboard 2" />
                <div className="imgdes">Video Storyboard by Young</div>
            </div>
            <p>The device can be controlled with verbal and head motions.</p>
            <div className="control">
                <img id="connected" src={logposrun1} alt="Control: Connect" /></div>
             <div className="imgdes solution">Team members connect the devices before getting into the operation.</div>
            <div className="control" style={{width:"230px"}}>
                <img className="anim continuImg" alt="Control: Getting Messages 1" src={logposrun2} />
                <img className="continuImg" src={logposrun3} alt="Control: Getting Messages 2" /></div><div className="imgdes hover">Hover on the image</div>
            <div className="imgdes solution">Users will continuously get the messages from others as walkie-talkie</div>
            <div className="control"><img className="anim" src={logposrun4} alt="Control: Locate All 1" /><img src={logposrun5} alt="Control: Locate All 2" /></div>
            <div className="imgdes hover">Hover on the image</div>
            <div className="imgdes solution">With a verbal control of <b><i>"Locate All,"</i></b> a user will continuously get the location information of everyone based on his or her head direction. </div>
            <div className="control"><img className="anim" src={logposrun6} alt="Control: Locate ['name'] 1" /> <img src={logposrun7} alt="Control: Locate ['name'] 2" /></div>
            <div className="imgdes hover">Hover on the image</div>
            <div className="imgdes solution">With a verbal control of <b><i>"Locate [Name],"</i></b> a user will get a specific person's location based on his or her head direction.</div>
            <div className="control"><img className="anim" src={logposrun8} alt="Communication 1" /><img src={logposrun9} alt="Communication 2" /></div>
            <div className="imgdes hover">Hover on the image</div>
            <div className="imgdes solution">When a user wants to communicate with other people, he or she will push the button on the side, and will speak. This message will go to everyone as walkie-talkie.</div>
            <div className="control"><img id="deactivate" alt="Deactivate" src={logposrun10} /> </div><div className="imgdes solution">When a user wants to stop getting the location information, he or she can speak <b><i>"Deactivate"</i></b> to stop the function.</div></div>
    },
    "dote": {
        "projectTitle": "DoteNote",
        "quote": "What if we can leave a virtual message at a specific location?",
        "topimg": <YouTube
            videoId={vidid.dote}
            id="player"
        />,
        "exlpla": {
            " ": <span style={{fontStyle:"italic"}} >This is a project for a hackathon held at CMU (HackCMU 2018) which got <b>3rd Place.</b></span>,
            "Duration": <span>24 hours - <b>HackCMU 2018</b> (Sep 21st ~ 22nd)</span>,
            "Team": <span>DoteNote (Aniruddh Iyer, <a className="member" href="http://www.hyunwoopaik.com/" target="_blank" rel="noopener noreferrer">Hyun Woo Paik,</a> Ja Young Lee, <a className="member" href="https://wwchung.github.io/SSUI-Portfolio/index.html" target="_blank" rel="noopener noreferrer">Won-Woo Chung</a>)</span>,
            "Role": "ideation, UI/UX design, video directing/editing",
            "Tool": "Adobe XD, After Effects, Illustrator",
        },
        "button": <a onClick={(ev)=>{var proto = document.getElementById("doteproto"); window.scroll( {top: proto.offsetTop, left: 0,  behavior: 'smooth'})}}>
        <div className="button dote">Play with the Prototype</div></a>,
        "Process": <div className="processBoxWrap">
         <div className="proBoxLine dote" />
        <div className="proBoxOut">
            <div className="processBox dote">Ideate</div>
        </div>

        <div className="proBoxOut">
            <div className="processBox dote">Iterate</div>
            <div className="processExpla">Hi-fi Prototype</div>
        </div>
        <div className="proBoxOut">
            <div className="processBox dote fin">Finalize</div>
            <div className="processExpla">Video</div>
        </div>
        </div>,
        "Ideation": <div>
            <p> Our idea started from a thought: what if we can leave our lovers a virtual message at a specific location ?
            Using AR technology, we focused on messaging emotions related to locations.
                With DoteNote, users can leave 3D messages at specific locations.</p>
                <div className="halfwrap">
                    <img className="half zoomable" onClick={zoomimg} src={dote1} alt="Ideation Meeting 1" />
                    <img className="half zoomable" onClick={zoomimg} src={dote2} alt="Ideation Meeting 2" />
                    <div className="imgdes">Ideation Meeting</div> 
                </div>
            </div>,
        "Challenges": <div>
            <img src={dote3} alt="AR Testting" className="zoomable" onClick={zoomimg} />
            <div className="imgdes">AR Testing</div>
            <div className="title dote">Technical Challenge:</div>
            <p>Due to the accuracy of GPS, we faced following challenges:
              Can we leave messages towards a certain angle and position?
                        In what range do users get notifications?</p>


            <div className="title dote">UX Challenges:</div>
            <p>Also, because we wanted to keep the factor of surprise, we had another challenges:
                      In what distance do we want to push the notifications?<br />
                From the point they get notifications, how can we direct them to the message?<br /><br />

                To solve these issues we decided to push the notification approximately within a block. </p>

            <div>
                <img className="solu_dote" src={dote4} alt="Solution 1" />
                <div className="imgdes solution">If a user is on the same side of the street, they can see the message by looking around.</div></div>

            <div>
                <img className="solu_dote" src={dote5} alt="Solution 2" />
                <div className="imgdes solution">If a user is around the corner, because the notification comes up when they enter the range of one block, they can know which direction the message is located. If they are from the side where the message is located, they get the notification before they enter the street.</div>
            </div></div>,

        "Final Design": <div>
            <div className="screens" id="doteproto">
                <Dote style={{ contain: "content" }}  ref={protoRef}/></div></div>,

        "Further Question": <p>How can we deal with the indoor messages on different floors?</p>,
    },
    "reporter": {
        "projectTitle": "I am a Reporter",
        "quote": "How to make the UI of a visual novel easy enough for novice users?",
        "topimg": <img id="reporter" className="topimg" alt="Game Main Screen" src={reporter0} />,
        "button": <a href="https://goo.gl/B7sXrV" target="_blank" rel="noopener noreferrer">
            <div className="button reporter">Go to Invision Prototype</div>
        </a>,
        "exlpla": {
            "Duration": "4 months (Aug 2016 ~ Dec 2016)",
            "Team": "1 developer, 1 writer, 1 designer (Ja Young Lee)",
            "Role": "UI/UX design, concept design, illustration",
            "Tool": "InVision, Adobe XD, Photoshop, Illustrator, HTML/CSS/Javascript",
        },
        "I am a Reporter?": <div>
            <p> I am a Reporter is a visual novel game targeting wide range of people in 20s ~ 30s.<br />
            </p></div>,
        "Challenges": <div>
            <div className="title reporter">Concept Design Challenge:</div>
            <p>How can we design the overall concept to be accepted by wide range of people? Many visual novel games use drawing style of cell-animation, which some people feel childish. </p>
            <div className="solution"><p><li>As a solution, we chose realistic illustration style.</li></p></div>
            <div className="onethird">
                <img src={reporter1} alt="Illustration 1" className="zoomable" onClick={zoomimg} />
                <img src={reporter2} alt="Illustration 2" className="zoomable" onClick={zoomimg} />
                <img src={reporter3} alt="Illustration 3" className="zoomable" onClick={zoomimg} />
            </div>
            <div className="title reporter">UI Challenge:</div>
            <p>How can we make the interface intuitive enough for people who have not played visual novel game can easily play?</p>
            <p>
                Visual novel is a game genre popular in Japan, which is using static images with text-based story. As its name, the genre uses
                static screens which is not familiar with game players of other genres. Our story was targeting diverse users expected not to
                play visual novels, so  our biggest challenge was to make the UI intuitive to novice users of the visual novel.
                    </p>

            <div className="solution"><p><li>As a solution, we decided to use elements commonly used in the web design.</li></p></div>
        </div>,

        "Interface": <div className="onethird">
            <img src={reporter4} alt="Screen 1" className="zoomable" onClick={zoomimg} />
            <img src={reporter5} alt="Screen 2" className="zoomable" onClick={zoomimg} />
            <img src={reporter6} alt="Screen 3" className="zoomable" onClick={zoomimg} />
            <a href="https://goo.gl/B7sXrV" target="_blank" rel="noopener noreferrer">
                <div className="button reporter">Go to Invision Prototype</div>
            </a>
        </div>,
    },
    "even": {
        "projectTitle": "Even",
        "quote": "Where is the best place to meet?",
        "topimg": " ",
        "exlpla": {
            "Duration": "1 months (Jan 2014)",
            "Team": "1 developer, 1 designer (Ja Young Lee)",
            "Role": "prototyping, branding, UI improvement",
            "Tool": "Adobe Illustrator",
        },
        "Even?": <div>
            <p> Even is an Android application that helps users find the best place to meet between their location. It calculates the
  mid point based on the time it takes for each person to get to the point. I was the lead designer who improved the interface
  of the application.
                </p></div>,
        "Design Changes": <div className="center" style={{maxWidth:"1100px", margin:"60px auto 0"}}>
            <div className="evensc before"> <img src={even1} alt="Screen Before" />
                <div className="ori">Original</div>
            </div>
            <div className="evensc after"> <img src={even2} alt="Screen After 1" /> <img src={even3} alt="Screen After 2" />
                <div className="impro">Improved</div>
            </div>

        </div>,

        "Prototype": <div>
            <img className="half" src={even4} alt="Prototype" />
        </div>,
        "Process": <div>
            <div className="center">
                <div className="evenwrapper inpfld"> <img src={even1} alt="Screen Before - Input Field" />
                    <div className="spot blu" />
                </div>
                <div className="evenwrapper inpfld"> <img src={even2} alt="Screen After - Input Field" />
                    <div className="spot red" />
                </div>
            </div>
            <br />
            <li className="animdes"> Stacked the input fields</li>
            <li className="animdes">Replaced the transportation toggles with simple icons</li>
            <li className="animdes">Deleted the ‘Edit’ option to make the field interactive.</li>
            <p>There was too much text in the original box, and the 'Enter a spot' text in the middle looked like an input field but was not. Therefore, I got rid of the 'Edit' button and made the box itself an input field with an example address so people would know that it is an input field.</p>
            <p> Initially, the boxes were next to each other because they had the same priority level. However, from the user's perspective, the function can also be considered as finding a middle point from Spot A to B. Additionally, the boxes were too small to type in an address. Thus, I stacked two boxes on top of each other to gain more space which also makes the addresses easier to read.</p>
            <p> In addition, I changed the toggle buttons to simple icons, because a toggle button is more efficient for the ON/OFF option. By making different transportation options default, users will know that there are different types to choose from.</p>
            <div className="center">
                <div className="evenwrapper maparea"> <img src={even1} alt="Screen Before - Map" />
                    <div className="spot blu" />
                </div>
                <div className="evenwrapper maparea"> <img src={even2} alt="Screen After - Map" />
                    <div className="spot red" />
                </div>
            </div>
            <br />
            <li className="animdes">Expanded the map area</li>
            <li className="animdes">Differentiated the action types</li>
            <p>Next, I expanded the map area: the white space around the map area was decreased, which makes the area seem unlimited. This also works well with the zoom function.</p>
            <div className="center">
                <div className="evenwrapper bicons"> <img src={even1} alt="Screen Before - Checkbox" />
                    <div className="spot blu" />
                </div>
                <div className="evenwrapper bicons"> <img src={even2} alt="Screen After - Checkbox" />
                    <div className="spot red" />
                </div>
            </div>
            <br />
            <li className="animdes">Replaced the checkboxes with icons</li>
            <p>Finally, I replaced the place option checkboxes to icons. The location types are distinctly different, so using icons is more intuitive and gives more spaces between the icons, which allows easier access.</p>
        </div>
    },
    "momo": {
        "projectTitle": "Happy Momoko",
        "quote": "24 Animation Emojis for iOS and Line Messengers",
        "topimg": <div className="screens center">
            <img src={momo1} className="momoscreen" alt="Momoko - iOS" />
            <img src={momo2} className="momoscreen" alt="Momoko - LINE" /> <br />
            <a href="https://itunes.apple.com/ca/app/happy-momoko/id1207545553?mt=8" target="_blank" rel="noopener noreferrer">
                <img src={momo_btn2} className="storebtn" id="appstore" alt="App Store Button" />
            </a>
            <a href="https://store.line.me/stickershop/product/1387989/en" target="_blank" rel="noopener noreferrer">
                <img src={momo_btn1} className="storebtn" id="linestore" alt="Line Store Button" />
            </a>
        </div>,
        "exlpla": {
            "Duration": "3 weeks (Jan 2017)",
            "Team": "Ja Young Lee",
            "Role": "Character Deisgn, Animation",
            "Tool": "Adobe Illustrator, Photoshop",
        },
        "Emojis":
            <div>
                <div className="imgdes">
                    <span className="mobileonly">Click</span><span className="forall">Hover mouse on</span> thumbnails below to see the animations.
              </div>
                <div className="animation_wrap">
                    <img src={momo3} id="pointers" alt="Pointer Animation" />
                    <p>
                    {anigenerator()}
                    </p>
                </div>
            </div>
    },
    "gssh": {
        "projectTitle": "GSSH - Class of 2011",
        "quote": "GSSH - Class of 2011, from 2008 to 2017",
        "topimg": <YouTube
            videoId={vidid.gssh}                  // defaults -> null
            id="player"                       // defaults -> null
        />,
        "exlpla": {
        },
        "About the video...":
            <div>
                <p>This is a video I created for the 10th anniversary of my high school, Gyeongsan Science High School (G.S.S.H.). The music in the beginning is my classmate's recent piano play. It shows our school year memories and how we have grown up. The background music was the school's morning alarm music: Heal the World.</p>
            </div>
    },
    "naoshima": {
        "projectTitle": "Artwork of Naoshima",
        "quote": "How can a web application introduce a travel location?",
        "topimg": <img id='naoshima' className="topimg" src={naoshima} alt="Naoshima" />,
        "button": <a href="https://jayolee.github.io/Travel-app/" target="_blank" rel="noopener noreferrer">
            <div className="button naoshima">Go to the Website</div>
        </a>,
        "exlpla": {
            "Duration": "1 month (Sep 2018)",
            "Team": "Ja Young Lee",
            "Role": "illustration, UI/UX design, development",
            "Tool": "Sketch (iPad), React, Adobe Photoshop",
        },
        "Ideation": <div>
            <p>For a React web application project for <i>Software Structures for User Interfaces</i> class at CMU in Fall 2018, I chose Naoshima, Japan as the travel location I will introduce.<br />
                Naoshima is the place I visited in summer 2018. It is an island full of artworks.  </p></div>,
        "Prototypes": <div>
            <div className="halfwrap">
                <img src={nao_lofi} alt="Lo-fi Prototype" className="half zoomable" onClick={zoomimg} />
                <img src={nao_midfi} alt="Mid-fi Prototype" className="half zoomable" onClick={zoomimg} />
                <div className="imgdes">Lo-fi and Mid-fi Prototypes</div>
            </div>
            <p>As a web application introducing a specific location, I wanted to give a feeling of staying on one page but looking at different aspects of the website. Therefore, I designed all pages appearing as layers above the home page.</p>
        </div>,

        "Interaction": <div>
            <img src={nao_about} className="imgBorder" alt="About Page Interaction" />
            <div className="imgdes">About Page Interaction</div>
            <p>To make different layers of pages more obvious, I gave page transition animations.</p></div>,

        "Illustrations": <div>
            <div className="halfwrap">
                <img src={nao_sketches} alt="Illustrations" className="half zoomable" onClick={zoomimg} /> 
                <img src={nao_drawing} alt="Drawing on iPad" className="half zoomable" onClick={zoomimg} />
                <div className='imgdes'>Hand-Drawn Digital Illustrations on iPad Sketch</div>
            </div>
            <p>Because Naoshima is the island with many famous artworks, I wanted to give the artistic feeling to the website. Therefore, I added hand-drawn digital illustrations.</p>
        </div>,

        "Image Source": <div>
            <img src={nao_detail} alt="Source Button on Detail Page" className="zoomable" onClick={zoomimg} /><div className='imgdes'>Image Source Button on the Detail Pages</div>
            <p>Since the website is heavily relying on many images from other sites, I added Images Source buttons on each detail page of photos.</p></div>,
    },
}