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
import dote_story from './Dotenote/storyboard.png'

import getcuisine1 from './getcuisine/top.gif'
import getcuisine3 from './getcuisine/icons.png'
import getcuisine8 from './getcuisine/report1.svg'
import getcuisine9 from './getcuisine/report2.svg'
import getcuision10 from './getcuisine/modelerror.gif'
import getcuisine11 from './getcuisine/503error.jpg'
import getcuisinemod1 from './getcuisine/knear.svg'
import getcuisinemod2 from './getcuisine/svm.svg'
import getcuisinemod3 from './getcuisine/multi.svg'
import getcuisine_aff from './getcuisine/affinity.jpg'
import getcuisineword from './getcuisine/wordbag.svg'
import forkie_competitive from './getcuisine/competitive.jpg'
import forkie_oppor from './getcuisine/opportunity.jpg'
import forkie_story from './getcuisine/forkiestoryboard.jpg'
import forkie_recipe1 from './getcuisine/shareRecipe1.jpg'
import forkie_recipe2 from './getcuisine/shareRecipe2.jpg'
import forkie_struc from './getcuisine/structure3.jpg'
import forkie_struc2 from './getcuisine/structure.jpg'
import forkie_diff from './getcuisine/diffusion.jpg'
import forkie_diff2 from './getcuisine/diffusion2.jpg'
import forkie_lofi from './getcuisine/lofi.jpg'
import forkie_lofi2 from './getcuisine/lofi2.jpg'
import forkie_lofi3 from './getcuisine/lofi3.jpg'
import forkie_lofi4 from './getcuisine/lofi_ml.jpg'
import forkie_mid from './getcuisine/mid_ml.jpg'
import forkie_mid2 from './getcuisine/mid_fork.jpg'
import forkie_mid3 from './getcuisine/mid_home.jpg'
import forkie_phone from './getcuisine/commentphone.gif'
import forkie_fork from './getcuisine/fork.gif'
import forkie_cmt from './getcuisine/commenting_recipe.gif'
import forkie_crt from './getcuisine/create_phone.gif'
import forkie_logo from './getcuisine/forkie_logo.svg'
import forkie_top from './getcuisine/forkie_top.png'
import forkie_top2 from './getcuisine/forkie_top2.png'

import forkie_ins1 from './getcuisine/insight1.jpg'
import forkie_ins2 from './getcuisine/insight2.jpg'
import forkie_ins3 from './getcuisine/insight3.jpg'
import forkie_ins from './getcuisine/insight_over.jpg'
import forkie_scmap from './getcuisine/screenmap.jpg'

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
import nao_hie from './naoshima/hie.jpg'

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
    "getcuisine": {
        "projectTitle": "Get Cuisine",
        "quote": "How might Machine Learning can help people?",
        "topimg": <div style={{ width: "640px", maxWidth: "100%", height: "auto", margin: "0 auto" }}><Vimeo video="315035206" /></div>,

        "exlpla": {
            "Duration": "Dec 2018 ~ Current",
            "Team": "Ja Young Lee, June Byeon (from the second round)",
            "Role": "User Reserach, UI/UX design, front, back-end development",
            "Tool": "Python Flask, jQuery, HTML, CSS, Adobe Illustrator",
        },
        "button": <div><a href="http://getcuisine.herokuapp.com" target="_blank" rel="noopener noreferrer">
            <div className="button getcuisine">Go to the Website</div></a>
            <div style={{ transform: "translateY(-26px)" }}>*Initial loading is very slow</div>
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

        </div>,
        "Ideation": <div>
            <p className="mainT" style={{ marginTop: "30px" }}>How might we help people using Machine Learning?</p>
            <p>While the matchmaking process identifying possible activities and domains to which we can apply Machine Learning (ML) model, one of the dataset from Kaggle (<a href="https://www.kaggle.com/c/whats-cooking" target="_blank" rel="noopener noreferrer">cuisines and ingredients</a>) inspired me. It brought my experience having small amounts of ingredients which are leftovers after cooking. It’s often challenging to deal with these leftovers. Therefore, I redefined the problem space as below.
                </p>
            <p className="mainPoint" style={{ marginBottom: "0" }}>
                <span style={{ boxShadow: "inset 0 -1.5px white, inset 0 -3px #617D31, inset 0 -4.5px white, inset 0 -6px #617D31" }} >How might Machine Learning help people clean out the fridge?</span></p>
        </div>,
        "Platform Research": <div>
        <p className="mainT" style={{ marginTop: "30px" }}>People don't use Alexa to search for recipes</p>
        <p> Originally, I planned to create an Amazon Alexa Skill because I believed it would be handy to provide recipe via conversational user interface. <b>However, although 41.4% of people place their smart speakers in the kitchen, only 26.5% of people use the speakers to look for recipes monthly, and only 5.1% people use it daily.</b> This is a comparably low comparing to other popular functions such as listening music (76.2% of monthly use, 41.9% of daily use) or checking the weather (69.1% of monthly use, 41.4% of daily use). <a href=" https://voicebot.ai/2018/03/21/data-breakdown-consumers-use-smart-speakers-today/" target="_blank" rel="noopener noreferrer">(Source)</a> Therefore, I chose website as a platform which can also provide visual interaction to users.</p>
        <div className="halfwrap" style={{ marginTop: "0" }}>
            <img src={getcuisine8} alt="Where do people put their smart speakers?" className="half" style={{ maxWidth: "500px", marginTop: "0" }} />
            <img src={getcuisine9} alt="Smart Speaker Use Case Frequency Jan 2018" className="half" style={{ maxWidth: "500px", marginTop: "0" }} /><div className="imgdes">
                <a href=" https://voicebot.ai/2018/03/21/data-breakdown-consumers-use-smart-speakers-today/" target="_blank" rel="noopener noreferrer">(Source of the graphs above)</a>
            </div>
        </div>
    </div>,
    "ML Model": <div>
        <p>
            I built pipelines of three algorithms: K-Nearest Neighbors (K-NN), Support Vector Machine, Multinomial Naive Bayesian from Scikit-learn with CountVectorizer and TfidfTransformer. Among three models, I decided to use K-NN model because it returned highest accuracy from K-fold Cross-validation (K = 5).</p>
        <img src={getcuisineword} alt="Pipeline Structure" />
        <div className="imgdes">Pipeline Structure</div>
        <div className="triwrap getcuisine" style={{ marginTop: "60px" }}>
            <div className="triinner" style={{ border: "4px solid rgba(97,125,49,0.5)", padding: "5px 15px 5px 0", borderRadius: "10px" }}>
                <img src={getcuisinemod1} alt="K-NN Model" className="half" />
                <div className="imgdes">K-NN Model<br />Accuracy: 0.73</div>
            </div>
            <div className="triinner">
                <img src={getcuisinemod2} alt="SVM Model" className="half" />
                <div className="imgdes">SVM Model<br />Accuracy: 0.06</div>
            </div>
            <div className="triinner">
                <img src={getcuisinemod3} alt="Multinomial Naive Bayesian Model" className="half" />
                <div className="imgdes">Multinomial NB Model<br />Accuracy: 0.63</div>
            </div>
        </div>
    </div>,

    "Challenges": <div> <p className="challenges" style={{ marginTop: "30px" }}>Lack of the open source recipe dataset</p>
        <p>
            I could not find and open source recipe dataset, so I used <a href="https://www.kaggle.com/c/whats-cooking" target="_blank" rel="noopener noreferrer">cuisines and ingredients dataset</a>. As a result, the functionality of the website is limited to provide only suitable cuisines instead of recipes. It requires additional efforts for users to look for a dish and a recipe to cook. Therefore, I added a function sending users to Google Search of recipes with the predicted cuisine and given ingredients.</p>
        <p className="challenges">Optimizing the site</p>
        <p>
            The biggest issue of using ML is that it is hard to optimize the website for shorter loadings. I tried to optimize the files as much as possible; however, the initial response time is still long due to Heroku's policy (If the app has no traffic for 30 mins, it goes to sleep).
        </p>
        <p className="challenges">Debugging server error</p>
        <p>
            This was the first time I managed the server side. It kept returning 500 error from the ajax call, and I could not figure out the reason. By deleting the code line by line, I figured out this happened because I passed Null value to the server to run the model. Later, I learned that I need to make a server return the error indicating the type for the sake of debugging.
        <img src={getcuisine11} alt="500 error" style={{ maxWidth: "500px" }} /><div className="imgdes">500 Error... What Does It Mean?</div>
        </p>
        <p className="challenges">Managing the data format to run the ML model</p>
        <p>
            The training data I used didn't have colum headers, and the data I passed from the inputs (JSON -> Pandas Dataframe) had column headers. As a result, it only returned French Cuisine (error). I added a line of code to get rid of the column headers to fix the error.
        <img src={getcuision10} className="imgBorder" style={{ maxWidth: "500px" }} alt="Model Returning Error" /><div className="imgdes">ML Model Only Returning French Cuisine<br />(Curry Paste + Tamarind Paste + Chicken Breasts = French Food?)
        </div>
            <p>Also, I added an autocomplete function to the search bar using jQuery Autocomplete API because I wanted users to type ingredients in the same format as the train data.</p>


        </p>
    </div>,

    "Initial Solution": <div>

        <div style={{ width: "640px", maxWidth: "100%", height: "auto", margin: "0 auto" }}><Vimeo video="315035206" /></div>
        <p className="solutionPoint" style={{ margin: "30px auto 0", maxWidth: "100%" }}><span style={{ color: "#617D31", fontWeight: "bold" }}>Get Cuisine,</span><br />a ML powered website to help clean out the fridge</p>
        <div style={{ textAlign: "center" }}>
            <a href="http://getcuisine.herokuapp.com" target="_blank" rel="noopener noreferrer">
                <div className="button getcuisine">Go to the Website</div></a>
            <div style={{ transform: "translateY(-26px)" }}>*Initial loading is very slow</div>
        </div>
        <p className="mainT" style={{ marginTop: "30px" }}>"Curiosity" can be a value of this website</p>
        <p className="addmargin">One of the concerns about this project is that the data this website provides can easily be obtained from other websites. Also, what people need is recipes, not a cuisine type for search. However, I got feedback that once knowing that this website is using ML, people become curious to see the result and get interested. Therefore, I focused on providing 'fun' and fulfilling 'curiosity.'</p>

        <img src={getcuisine3} alt="Cuisine Icons" onClick={zoomimg} className="zoomable" /><div className='imgdes'>Cuisine Icons</div>
        <img className="zoomable" src={getcuisine1} onClick={zoomimg} alt="final design" />
        <div className='imgdes'>Final Design</div>
    </div>,
    "Next Steps":<div>
        <p className="mainT" style={{ marginTop: "30px" }}>The solution didn't solve the problem</p>
            <p>Does this website fulfill the initial goal of "helping people clean out the fridge"? The answer was <b>NO.</b> The website was more about exploring the development of a ML powered website. Therefore, I started the second round of design. The final solution we got was <span style={{ color:"#fa6c42", fontWeight:"bold"}}>"Forkie."</span></p>
            <div style={{width:"100%", textAlign:"center", margin:"0"}}>
            <a href="https://jayolee.github.io/portfolio/projects/forkie/" rel="noopener noreferrer" ><div className="button forkie" style={{margin:"0"}}>See Forkie</div></a>
            </div>
    </div>
    },
    "forkie": {
        "projectTitle": "Forkie",
        "quote": <span>How might we help people regain passion for cooking?<br />
            <span style={{ fontSize: "16px", opacity: ".7s" }}>How might we reduce food waste?</span></span>,
        "topimg": <div style={{width:"100%", textAlign:"center"}}><img src={forkie_logo} style={{maxWidth:"300px", width:"100%", padding:"60px 0 30px"}}/></div>,

        "exlpla": {
            "Duration": "Dec 2018 ~ March 2019",
            "Team": "Ja Young Lee, June Byeon",
            "Role": "User Reserach, UI/UX design, front/back-end development",
            "Tool": " React, HTML, SCSS, Adobe Illustrator, Figma, Sketch",
        },
        "button": <div><a href="https://jayolee.github.io/forkie/" target="_blank" rel="noopener noreferrer">
            <div className="button forkie">Play with the React Prototype</div></a></div>,
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
         <p>The project had two rounds. It started with the project <span style={{color:"#617D31", fontWeight:"bold"}}>"Get Cuisine,"</span> which was about exploring how Machine Learning (ML) can help people clean out the fridge. Later, I realized the initial solution didn't solve the problem, so I had another round to get the solution.</p>
        <div style={{width:"100%", textAlign:"center", margin:"0"}}>
         <a href="https://jayolee.github.io/portfolio/projects/getcuisine/" target="_blank" rel="noopener noreferrer" ><div className="button getcuisine" style={{margin:"0"}}>See Get Cuisine</div></a>
         </div>
     </div>,
        "Solution": <div>
            <div className="insightWrap">
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }} className="forkie_insight">
                    <img src={forkie_ins1} alt="Insight 1" className="ins_img" />
                    <div className="ins">Cooking requires contextualizing</div>
                    <div className="ins_des">
                        People consider many factors such as the amount of effort needed or their previous experience when cooking. A lot of people cook the foods they are familiar with.</div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }} className="forkie_insight">
                    <img src={forkie_ins2} alt="Insight 2" className="ins_img" />
                    <div className="ins">People are risk-averse when cooking.</div>
                    <div className="ins_des">
                        Unlike ordering food at restaurants, cooking requires time and effort. Therefore, people are looking for recipes of which the taste is almost guaranteed. They rely on credible sources, popularity, expertise and past experience.</div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }} className="forkie_insight">
                    <img src={forkie_ins3} alt="Insight 3" className="ins_img" />
                    <div className="ins">People have unintended food waste</div>
                    <div className="ins_des">
                        Most people have leftover ingredients after cooking which they throw out in the end. They try to use those ingredients; however, there's unfamiliarity with the ingredients, so they procrastinate using those and forget about them.
                </div>
                </div>
            </div>
            <img src={forkie_ins} alt="Main insight" style={{ maxWidth: "500px", margin: "40px auto 0" }} />
            <p className="mainT" style={{ marginTop: "30px" }}>Why do people have food waste?</p>
            <p>From our research, we learned that leftover ingredients become food waste because of unfamiliarity they have with the ingredients. People either don't know how to use or not familiar with the portion. Because of the amount of effort required, people lose passion for cooking them, so procrastinate cooking and forget. We found that <b>people can be motivated from social interaction regarding recipes with their connections.</b> Therefore, we found our solution from the recipe-sharing social network which would make people regain passion for cooking to minimize the food waste generated from leftover ingredients.</p>
            <p className="solutionPoint" style={{ marginTop: "30px", maxWidth: "750px" }}>Forkie, a mobile app help people regain passion for cooking</p>
            <p><b>Sharing recipe is sharing experience.</b> Forkie helps people regain the passion for cooking by fostering the communication with friends. Below is the key features.</p>
            <div className="up_expla_screen forkie">
                <div className="imgwrap_sc" >
                    <img src={forkie_phone} className="phonesc" alt="Comment" style={{ width: "250px" }} />
                </div>
                <p><span className="title forkie">Share first-hand experience about a recipe</span><br />
                    Sharing recipe is sharing the experience. Forkie helps people regain the passion for cooking by fostering communication with friends. Below are the key features.
            </p>
            </div>
            <div className="up_expla_screen forkie">
                <div className="imgwrap_sc" >
                    <img src={forkie_fork} className="phonesc" alt="Comment" style={{ width: "250px" }} />
                </div>
                <p><span className="title forkie">Fork recipes and create various versions</span><br />
                A dish can have various versions depending on users' backgrounds and preferences. Forkie allows users to create multiple branches (versions) so other users can choose a version to cook, and even track the original version.
            </p>
            </div>
            <div className="up_expla_screen">
                <div className="imgwrap_sc" >
                    <img src={forkie_cmt} className="phonesc" alt="Comment" style={{ width: "250px" }} />
                </div>
                <p><span className="title forkie"> Share tips from your experience via crowdsourcing</span><br />
                    Different people have different tips and ideas regarding a recipe. Leave comments on a recipe to share the tips.
            </p>
            </div>
            <div className="up_expla_screen">
                <div className="imgwrap_sc" >
                    <img src={forkie_crt} className="phonesc" alt="Comment" style={{ width: "250px" }} />
                </div>
                <p><span className="title forkie">Easily create accurate recipes with ML</span><br />
                Recipe becomes conversational when people share them. Forkie provides recommendations to make the recipes more accurate. Also, it parses the ingredients from the steps, so users don't need to going back and forth to list the ingredients.<br />
                        Also, by providing recommendations in a way that doesn't disturb users' typing, users can easily ignore it and keep typing if the suggestion is not what they want.
            </p>
            </div>
            <div style={{ width: "100%", margint: "0 auto", textAlign: "center" }}><a style={{ margin: "0" }} href="https://jayolee.github.io/forkie/" target="_blank" rel="noopener noreferrer">
                <div className="button forkie" style={{ margin: "0" }}>Play with the React Prototype</div></a></div>


        </div>,
        "Research": <div>
            <p className="mainT" style={{ marginTop: "30px" }}>The initial solution didn't solve the problem</p>
            <p>Did <span style={{color:"#617D31", fontWeight:"bold"}}>Get Cuisine</span> fulfill the initial goal of "helping people clean out the fridge"? The answer was <b>NO.</b> The website was more about exploring the development of a ML powered website. Therefore, I started the second round of design. This time, I tried to figure out why people have leftover ingredients.</p>
            <p className="mainT" style={{ marginTop: "30px" }}>What is the cooking life-cycle?</p>
            <p>First, I conducted the survey and semi-structured interviews to learn about people's decision making process regarding cooking and find pain points. Participants were people in mid-20s to early 30s and who prepare food for themselves. Most of them also have a busy schedule. From the research, I got the following insights.</p>
            <img src={getcuisine_aff} alt="Affinity diagram" onClick={zoomimg} className="zoomable" /><div className='imgdes'>Affinity Diagram</div>
            <div className="insightWrap" style={{ margin: "50px auto 60px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }} className="forkie_insight">
                    <img src={forkie_ins1} className="ins_img" />
                    <div className="ins">Cooking requires contextualizing</div>
                    <div className="ins_des">
                    People consider many factors such as the amount of effort needed or their previous experience when cooking. A lot of people cook the foods they are familiar with.</div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }} className="forkie_insight">
                    <img src={forkie_ins2} className="ins_img" />
                    <div className="ins">People are risk-averse when cooking.</div>
                    <div className="ins_des">
                    Unlike ordering food at restaurants, cooking requires time and effort. Therefore, people are looking for recipes of which the taste is almost guaranteed. They rely on credible sources, popularity, expertise and past experience.</div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }} className="forkie_insight">
                    <img src={forkie_ins3} className="ins_img" />
                    <div className="ins">People have unintended food waste</div>
                    <div className="ins_des">
                    Most people have leftover ingredients after cooking which they throw out in the end. They try to use those ingredients; however, there's unfamiliarity with the ingredients, so they procrastinate using those and forget about them.
                </div>
                </div>
            </div>
            <p>Until this point, I thought that there's an opportunity on recipe recommendation based on users' context. To learn if any similar apps are managing this problem, and if so, what approach they are taking, we conducted a competitive analysis of the existing apps.</p>

            <p className="mainT" style={{ marginTop: "30px" }}>Adaptive recipe recommendation after grocery is the key</p>
            <p>From the competitive analysis, we learned that the current apps are missing recipe recommendations after grocery. Also, they only provide static recommendations based on the ingredients without considering users' preference.</p>
            <div style={{ width: "100%", maxWidth: "1200px", display: "flex", flexDirection: "column", margin: "0 auto" }}>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                    <img src={forkie_competitive} alt="Competitive Analysis" onClick={zoomimg} className="zoomable" style={{ width: "50%" }} />
                    <img src={forkie_oppor} alt="Target Domain" onClick={zoomimg} className="zoomable" style={{ width: "50%" }} />
                </div>
                <div className="imgdes">Competitive Analysis</div>
            </div>

            <p>Based on the research, we came up with following ideas.<br />
                <b>1. Recipe recommendation after the grocery</b><br />
                <b>2. Adaptive recommendation considering the context using ML</b><br />
                <b>3. Integration with daily routine for contextualizing</b><br />
                Our solution was to enable regaining the passion for food by providing an <b>automatic food inventory tracker</b> and <b>recipe recommendation tool</b> based on users' context.
            </p>
            <p className="mainT">However, people don't care about leftovers</p>
            <p>With our idea, we did speed dating with the storyboards. However, we learned that people are not interested in our idea. People don't care about reducing food waste or managing the food inventory because of the effort required. </p>
            <img src={forkie_story} alt="Storyboard" onClick={zoomimg} className="zoomable" />
            <div className="imgdes">"I don't really care"</div>

            <p className="mainT">Social interaction can be a key to regain passion</p>
            <p>From the speed dating, We noticed that people often mention about <b>interaction with other people</b> as <b>a motivation for cooking</b>. We went back to the affinity diagram and found some notes we misunderstood. We perceived "guaranteed taste" is coming from well-known chefs; however, the personal connection was another key providing trust.</p>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", maxWidth: "750px", margin: "0 auto 60px" }}>
                <div style={{ margin: "0 auto", background: "rgba(97,125,49,.2)", maxWidth: "300px", padding: "8px 16px", fontWeight: "600", color: "#000", borderRadius: "6px" }}>My friend who’s good at cooking recommended this site so I trust</div>
                <div style={{ margin: "0 auto", background: "rgba(97,125,49,.2)", maxWidth: "300px", padding: "8px 16px", fontWeight: "600", color: "#000", borderRadius: "6px" }}>She kept telling me about Kabocha so I tried.</div>
            </div>
            <p className="insights">1. Recipe becomes conversational when shared</p>
            <p className="insight_des">To learn more about how people share recipes, we researched how people write a recipe and share it. We learned that people communicate recipes in <b>conversational way.</b> Also, many people write down ingredients first; however, they <b>go through the entire process to remember the ingredients</b> in their minds.</p>
            <div style={{ width: "100%", maxWidth: "1200px", display: "flex", flexDirection: "column", margin: "0 auto" }}>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                    <img src={forkie_recipe1} alt="How do you share a recipe" onClick={zoomimg} className="zoomable" style={{ width: "49%" }} />
                    <img src={forkie_recipe2} alt="How do you write a recipe?" onClick={zoomimg} className="zoomable" style={{ width: "49%" }} />
                </div>
                <div className="imgdes">How do you write or share a recipe?</div>
            </div>
            <p className="insights">2. People rely on personal connections because of variations of a dish</p>
            <p className="insight_des">People rely on word of mouth because a dish can have various versions. Which means, there's a higher chance that people would like the version of what their friends recommend. From this insight, <b>Github's 'forking'</b> came up in my mind.</p>
            <div style={{ margin: "60px auto 0", background: "rgba(97,125,49,.2)", maxWidth: "400px", padding: "16px 24px", fontWeight: "600", color: "#000", borderRadius: "6px" }}>I tried Bulgogi at a Korean restaurant so tried to make it, but the taste was different. I think it was the recipe which was wrong.</div>
        </div>,

        "Design Iteration":
            <div>
                <p className="mainT" style={{ marginTop: "30px" }}>Sharing recipe is sharing the experience</p>
                <p>Based on our research, we decided four main features of the app.

                {/* <b>1. Share recipe with friends.</b><br />
                <b>2. Create branches (fork) of a recipe.</b><br />
                <b>3. Easily creating recipes using ML.</b><br /> */}
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



                <p>We drew the information architecture of the app based on the ideas we have. We created lo-fi prototypes for three key concepts and conducted user testing.</p>
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
                    <p>We tested various versions. One of the questions we had was <b>how do we want users to interact with each other.</b> Do we want users having continuous communications or several interactions about recipes? Because the key point of our design is a <b>communication hub where people share their experience about recipes to help others regain passion for cooking,</b> our answer was the latter. Based on this idea, we updated the information architecture and screens.  </p>
                    <img src={forkie_struc2} alt="Information Architecture" onClick={zoomimg} className="zoomable" />
                    <div className="imgdes">Updated Information Architecture</div>
                </div>
                <img src={forkie_mid} alt="Information Architecture" onClick={zoomimg} className="zoomable" />
                <img src={forkie_mid2} alt="Information Architecture" onClick={zoomimg} className="zoomable" />
                <img src={forkie_mid3} alt="Information Architecture" onClick={zoomimg} className="zoomable" />
                <div className="imgdes">Mid-fi Prototype</div>
                <p>For this time, we conducted usability testing also with people who are good at cooking. From the testing, we could get feedback about how to improve the recipe view. </p>
            </div>,
        "Final Design": <div>

            <img src={forkie_scmap} alt="Screenmap" onClick={zoomimg} className="zoomable" />
            <div className="imgdes">Screenmap</div>
            <p className="solutionT">Forkie, a recipe-sharing social network which help people regain passion for cooking.</p>
            <div style={{ width: "100%", margin: "30px 0", textAlign: "center" }}><a href="https://jayolee.github.io/forkie/" target="_blank" rel="noopener noreferrer">
                <div className="button forkie">Play with the React Prototype</div></a></div>
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
            <img src={buncee3} style={{ size: "100%", maxWidth: "1200px" }} />
            <div style={{ width: "100%", textAlign: "center" }}><a href="https://www.edu.buncee.com/features" target="_blank" rel="noopener noreferrer">
                <div className="button buncee">Visit the Site</div></a></div>
                <div style={{maxWidth:"550px", margin:"0 auto"}}>
            <p style={{ marginBottom: "10px" }}><b>Role:</b> Web design, prototyping using HTML/CSS/JQuery, Infographics</p>
            <p style={{ margin: "10px auto", fontSize: "18px" }}><b>A web page explaining the features of Buncee</b></p>
            <div style={{ display: "flex", justifyContent: "center", maxWidth: "550px", margin: "0 auto", alignItems: "flex-start" }}>
                <p style={{ width: "90px", marginLeft:"10px" }}><b>Challenges:</b></p>
                <p style={{ width: "calc(100% - 90px)", paddingLeft: "20px" }}>- Explaining different levels of features
                <ul style={{ marginTop: "10px" }}>
                        <li>
                             Canvas features</li><li>
                             Different type of users (School, Teacher, students)
                </li>
                    </ul>
                    - Creating infographic of abstract concepts </p>
            </div>
            </div>
        </div>,
        "Buncee Gallery": <div>
            <img src={buncee4} style={{ size: "100%", maxWidth: "500px" }} />
            <div style={{ width: "100%", textAlign: "center" }}><a href="https://www.edu.buncee.com/gallery" target="_blank" rel="noopener noreferrer">
                <div className="button buncee">Visit the Site</div></a></div>
            <div style={{maxWidth:"550px", margin:"0 auto"}}>
                <p style={{ marginBottom: "10px" }}><b>Role:</b> Web design, prototyping using HTML/CSS/JQuery</p>
                <p style={{ margin: "10px auto", fontSize: "18px", fontWeight: "bold" }}>A portal where students and teachers can get the sample Buncees as references</p>
                <div style={{ display: "flex", justifyContent: "center", maxWidth: "550px", margin: "0 auto", alignItems: "flex-start" }}>
                <p style={{ width: "90px", marginLeft:"10px" }}><b>Challenges:</b></p>
                    <p style={{ width: "calc(100% - 90px)", paddingLeft: "20px" }}>- Make the UI intuitive enough for non tech-savyy users<br />
                        - provide overall summary of contents which can also be used as breadcrumbs </p>
                </div>
            </div>
        </div>,
        "Sign Up Page": <div style={{display: "flex", justifyContent: "space-around", maxWidth: "1000px", margin: "0 auto", alignItems: "center", flexWrap:"wrap"}}>

            <div style={{width:"360px"}}>
                <img src={buncee5} style={{boxShadow:"0 0 10px rgba(0,0,0,0.2)", padding:"16px 0 14px 20px"}} />
            </div>
            <div>
            <p style={{ margin: "10px 0" }}><b>Role:</b> Web design, prototyping using InVision, Adobe After Effects</p>
            <p style={{ margin: "10px 0", fontSize: "18px", fontWeight: "bold" }}>A web page explaining the features of Buncee</p>
            <div style={{ display: "flex", maxWidth: "500px", margin: "0 auto", alignItems: "flex-start" }}>
                <p style={{ width: "65px" }}><b>Challenges:</b></p>
                <p style={{ width: "calc(100% - 90px)", paddingLeft: "30px" }}>- Providing clear instruction and error messages (using the button as a progress bar)<br />- Divide pages for easier flow</p> 
            </div>
            <div style={{ width: "100%", textAlign: "center" }}><a href="https://app.edu.buncee.com/signup?account_type=generic-premium&tier=plus" target="_blank" rel="noopener noreferrer">
                    <div className="button buncee" style={{marginTop:0}}>Visit the Site</div></a></div>
            </div>
        </div>,
        "Buncee Emotion iOS Sticker Pack": <div style={{display: "flex", justifyContent: "space-between", maxWidth: "850px", margin: "0 auto", alignItems: "center", flexWrap:"wrap"}}>
               <div style={{width:"350px"}}>
                <img src={buncee2} style={{maxWidth:"280px", boxShadow:"0 0 10px rgba(0,0,0,0.2)"}}/>
            </div>
            <div style={{width:"100%", maxWidth:"450px",marginLeft:"30px", textAlign:"center"}}>
            <p style={{ margin: "10px 0" }}><b>Role:</b> Creating Animation stickers</p>
            <p style={{ margin: "10px 0", fontSize: "18px", fontWeight: "bold" }}>iOS sticker pack for iMessage </p>
            <div style={{ width: "100%", textAlign: "center" }}><a href="https://app.edu.buncee.com/signup?account_type=generic-premium&tier=plus" target="_blank" rel="noopener noreferrer">
                    <div className="button buncee" style={{marginTop:"30px"}}>Open the Appstore</div></a></div>
            </div>
           
        </div>,
        "Buncee iOS App": <div>

             <img src={buncee1} style={{ size: "100%", maxWidth: "1200px" }} />
            <div style={{ width: "100%", textAlign: "center" }}><a href="https://itunes.apple.com/us/app/buncee-creative-presentation/id1093956684?mt=8" target="_blank" rel="noopener noreferrer">
                <div className="button buncee">Open the Appstore</div></a></div>
            <div style={{maxWidth:"550px", margin:"0 auto"}}>
            <p style={{ margin: "10px auto" }}><b>Role:</b> UX design, infographic design, prototyping using InVision</p>
            <p style={{ margin: "10px auto", fontSize: "18px", fontWeight: "bold" }}>An iOS app for Buncee canvas.</p></div>
        </div>

    },
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
        "Ideation": <div> <p className="mainT" style={{ marginTop: "30px" }}>Audio AR for circumstances with communication difficulties</p>
            <p> The prompt of Bose Challenge was <i><b>“How might we use sound-based augmented reality to improve our lives?”</b></i> Among the idea we had, we decided to focus on improving cooperation situations which require team members’ communications about their locations and status. More specifically, we narrowed down our target as firefighters, about their rescue operations in extreme situations.</p> <p>Our assumption here is that under the urgent circumstances of limited vision and hearing, it is difficult to communicate accurate location information via speaking. Therefore, we designed a way to communicate each other automatically generated location data based on their GPS with minimum hand control. </p><img src={logpos1} alt="Ideation Meeting" className="zoomable" onClick={zoomimg} /><div className='imgdes'>Ideation Meeting, Sketch by Young</div> </div>,
        "User Research": <div>
            <p className="mainT" style={{ marginTop: "30px" }}>Why do firefighters need an audio AR solution?</p>
            <p> With our initial ideation, we conducted a phone interview with a firefighter. He confirmed that our idea will be helpful, and gave us the problems about the current system has.</p><img src={logpos2} alt="Phone Interview" /><div className='imgdes'>Phone Interview</div><p>According to the firefighter, there is a system providing location information using sound and blinking lights after a firefighter being motionless for 30 seconds (Watch the video for additional information). However, the issue is that the location information is verbally communicated, so the information rescue team has might not be the latest information. Also, the light and sound signals can be hindered by the fire and the smoke. Our solution solves this problem by providing real-time information directly to the firefighters through the device.</p></div>,

        "Challenges": <div><p className="challenges">How can we get the accurate indoor location data?</p>
            <p>To get accurate location data, we designed our device to use the bluetooth devices for better location accuracy.</p>

            <p className='challenges'>Social Constraints</p><p>According to the interview, there are two social constraints:<br />1. Firefighters sometimes rely on their ears to determine the temprature. Therefore, there should not be a thing cover their ears.<br />2. Firefighters resist change, especially if it is going to be hard to put on. We designed an audio AR device satisfying these challenges.
            </p>
            <img src={logpos3} alt="Device Design" className="zoomable" onClick={zoomimg} /><div className='imgdes'>Device Desiged by <a href='http://www.hyunwoopaik.com' target='_blank' rel="noopener noreferrer">Hyun Woo Paik</a></div></div>,

        "Final Design": <div><p>We created a video explaining our idea. We made a scenario conveying how our design can be applied to the target situations. I created a storyboard to communicate with the team.</p>
            <div className="halfwrap">
                <img className="half zoomable" onClick={zoomimg} src={logposstory1} alt="Storyboard 1" />
                <img className="half zoomable" onClick={zoomimg} src={logposstory2} alt="Storyboard 2" />
                <div className="imgdes">Video Storyboard by Young</div>
            </div>
            <p>The device can be controlled with verbal and head motions.</p>
            <div className="control">
                <img id="connected" src={logposrun1} alt="Control: Connect" /></div>
            <div className="imgdes solution">Team members connect the devices before getting into the operation.</div>
            <div className="control" style={{ width: "230px" }}>
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
            " ": <span style={{ fontStyle: "italic" }} >This is a project for a hackathon held at CMU (HackCMU 2018) which got <b>3rd Place.</b></span>,
            "Duration": <span>24 hours - <b>HackCMU 2018</b> (Sep 21st ~ 22nd)</span>,
            "Team": <span>DoteNote (Aniruddh Iyer, <a className="member" href="http://www.hyunwoopaik.com/" target="_blank" rel="noopener noreferrer">Hyun Woo Paik,</a> Ja Young Lee, <a className="member" href="https://wwchung.github.io/SSUI-Portfolio/index.html" target="_blank" rel="noopener noreferrer">Won-Woo Chung</a>)</span>,
            "Role": "ideation, UI/UX design, video directing/editing",
            "Tool": "Adobe XD, After Effects, Illustrator",
        },
        "button": <a onClick={(ev) => { var proto = document.getElementById("doteproto"); window.scroll({ top: proto.offsetTop, left: 0, behavior: 'smooth' }) }}>
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
            <p className="mainT" style={{ marginTop: "30px" }}>What if we can leave our lovers a virtual message at a specific location?</p>
            <p> Our idea started from this one sentence.
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
            <p className="challenges">How can we deal with the accuracy of GPS?</p>
            <p>Due to the low accuracy of GPS, we faced following challenges:
              users cannot leave messages to a certain direction and position. If so, how can prompt the new message notifications efficiently? In other words, how users can find messages without getting wandering while keeping the message as a surprise?</p>

            <p>To solve this questions, we had two sub-questions. First, in what distance do we want to push the notifications? Second, from the point they get notifications, how can we direct them to the message?<br /><br />

                As a solution, we decided to push the notification approximately within a block. </p>

            <div>
                <img className="solu_dote" src={dote4} alt="Solution 1" />
                <div className="imgdes solution">If a user is on the same side of the street, they can see the message by looking around.</div></div>

            <div>
                <img className="solu_dote" src={dote5} alt="Solution 2" />
                <div className="imgdes solution">If a user approaches from around the corner, they can know to which direction they need to move because the notification comes up when they enter the range.<br />If they enter the block from the side where the message is located, they get the notification before they enter the street.</div>
            </div></div>,

        "Final Design": <div>
            <div className="screens" id="doteproto">
                <Dote style={{ contain: "content" }} ref={protoRef} /></div></div>,
        "Video":
            <div>
                <img src={dote_story} alt="storyboard" className="zoomable" onClick={zoomimg} />
                <div className="imgdes">Video Storyboard by Young</div>
                <p className="mainT">Lyrical mood is the key</p>
                <p>We created a video to explain our solution. Since our design is targeting lovers and emotional communication, I focused on creating a lyrical mood. To organize my ideas and communicate with other team members, I created a storyboard using Adobe Illustrator.</p>
            </div>,
        "Further Questions":
            <div>
                <p className="mainT" style={{ marginTop: "30px" }}>How about indoor use cases?</p>
                <p>We considered of outdoor possible cases. However, indoor use cases are more challenging. For example, how can we deal with the indoor messages on different floors? We expect that we can use bluetooth to get more accurate positions; however, further research is required. </p>
                <p className="mainT" style={{ marginTop: "30px" }}>Does the solution fulfill the goal?</p>
                <p>Since this was a hackathon project which was made within 24 hours, we don't have enough user research to prove the solution achieved the goal. Further research about location-related emotions (ex. does certain time or direction matters) and the way people communicate their feelings is required to validate our idea.</p>
            </div>,
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
        "Design Changes": <div className="center" style={{ maxWidth: "1100px", margin: "60px auto 0" }}>
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
        "quote": "How might we introduce a travel location via single page web application?",
        "topimg": <img id='naoshima' className="topimg" src={naoshima} alt="Naoshima" />,
        "button": <a href="https://jayolee.github.io/Travel-app/" target="_blank" rel="noopener noreferrer">
            <div className="button naoshima">Go to the Website</div>
        </a>,
        "exlpla": {
            "Duration": "1 month (Sep 2018)",
            "Team": "Ja Young Lee",
            "Role": "illustration, UI/UX design, development",
            "Tool": "Paper (iPad), React, Adobe Photoshop",
        },
        "Ideation": <div>
            <p className="mainT" style={{ marginTop: "30px" }}>Why Naoshima?</p>
            <p>For a React web application project for <i>Software Structures for User Interfaces</i> class at CMU in Fall 2018, I chose Naoshima, Japan as the travel location I will introduce.
                Naoshima is the place I visited in summer 2018. It is an island full of artworks.</p>
            <p> Unlike other travel locations, because Naoshima is a small island with very little public transportation, it is important to know the locations of each key travel spots to make a plan. The pros of single page web app is that by making the layer salient, users can easily get the hierarchy of the information.</p>
            <img src={nao_hie} alt="App structure" />
            <div className="imgdes">App Structure</div></div>,
        "Design": <div>
            <div className="halfwrap">
                <img src={nao_lofi} alt="Lo-fi Prototype" className="half zoomable" onClick={zoomimg} />
                <img src={nao_midfi} alt="Mid-fi Prototype" className="half zoomable" onClick={zoomimg} />
                <div className="imgdes">Lo-fi and Mid-fi Prototypes</div>
            </div>
            <p>To give a feeling of staying on one page but looking at different aspects of the website, I designed all pages appearing as layers above the home page.</p>

            <img src={nao_about} className="imgBorder" alt="About Page Interaction" />
            <div className="imgdes">About Page Interaction</div>
            <p>I also utilized page transition animations to make the layer structure salient.</p></div>,

        "Illustrations": <div>
            <div className="halfwrap">
                <img src={nao_sketches} alt="Illustrations" className="half zoomable" onClick={zoomimg} />
                <img src={nao_drawing} alt="Drawing on iPad" className="half zoomable" onClick={zoomimg} />
                <div className='imgdes'>Hand-Drawn Digital Illustrations on iPad Paper</div>
            </div>
            <p>Naoshima is the island with many famous artworks, so I wanted to provide the artistic feeling. Therefore, I created hand-drawn digital illustrations.</p>
        </div>,

        "Image Source": <div>
            <img src={nao_detail} alt="Source Button on Detail Page" className="zoomable" onClick={zoomimg} /><div className='imgdes'>Image Source Button on the Detail Pages</div>
            <p>I used images from external sources to explain the locations. Although all are copyright free images, to provide credit, I added buttons to images sources on each detail page of photos.</p></div>,
    },
}