import React from 'react';
import YouTube from 'react-youtube';
import Dote from './dote.js'
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

import getcuisine1 from './getcuisine/top.gif'
import getcuisine2 from './getcuisine/hi_proto.gif'
import getcuisine3 from './getcuisine/icons.png'
import getcuisine4 from './getcuisine/hi_1.jpg'
import getcuisine5 from './getcuisine/hi_2.jpg'
import getcuisine6 from './getcuisine/final_1.jpg'
import getcuisine7 from './getcuisine/final_2.jpg'

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
import naoshima from './images/naoshima2.png'

import up_main from './up/top.png'
import up_animals from './up/animals.jpg'
import up_proto_blow from './up/blow.jpg'
import up_meeting from './up/meeting.jpg'
import up_session from './up/session.gif'
import up_breathing from './up/breathing.gif'
import up_report from './up/report.gif'
import up_screenmap from './up/screenmap.jpg'
import up_knob from './up/knob.jpg'
import up_protos from './up/prototypes.jpg'

function anigenerator() {
    let element = [];
    let momothumblist = [momo4_1, momo5_1, momo6_1, momo7_1, momo8_1, momo9_1, momo10_1, momo11_1, momo12_1, momo13_1, momo14_1, momo15_1, momo16_1, momo17_1, momo18_1, momo19_1, momo20_1, momo21_1, momo22_1, momo23_1, momo24_1, momo25_1, momo26_1, momo27_1];
    let momoanilist = [momo4_2, momo5_2, momo6_2, momo7_2, momo8_2, momo9_2, momo10_2, momo11_2, momo12_2, momo13_2, momo14_2, momo15_2, momo16_2, momo17_2, momo18_2, momo19_2, momo20_2, momo21_2, momo22_2, momo23_2, momo24_2, momo25_2, momo26_2, momo27_2];

    for (let i = 0; i < momothumblist.length; i++) {
        element.push(
            <div className="aniwrap" key={"momoAniWrap"+i}>
                <img className="thumb" src={momothumblist[i]} key={"MomoThumb"+i} alt={"Momoko Thumbnail "+i}/>
                <img className="ani" src={momoanilist[i]} key={"MomoAni"+i} alt={"Momoko Animation "+i}/>
            </div>
        )
    }
    return element;
}

const vidid = {
    "log": "5Q6vJg-OufI",
    "dote": "zlp8SnxFN3I",
    "gssh": "lUaJy9qo6qA",
}

export const projectList = {
    "up":{
        "projectTitle": "Up",
        "quote": "How can an app promote productivity, combate ego-depletion and stress?",
        "topimg": <img id="up" alt="Up Top Screen" className="topimg" src={up_main} />,

        "exlpla": {
            "Time": "Oct 2018 ~ Jan 2019",
            "Team": "Team UP (Matthew Fang, Judith Leng, Ja Young Lee, Jerry Yang)",
            "Role": "UI/UX, development, illustration",
            "Tool": "React, HTML, SCSS, Adobe Illustrator",
        },
        "button": <a href="https://jayolee.github.io/Team-UP-prototype_react/" target="_blank" rel="noopener noreferrer">
            <div className="button up">Play with the Prototype</div></a>,
        "Ideation": <div>
            <p>In Malcolm Gladwell’s book ​<i>The Outliers​,</i> it is stated that one requires over 10,000 hours of practice to become an expert of some sort. Such number of hours is extremely difficult of practice for young adults in college or workplace. 10,000 hours equals to roughly 417 days of full practice without a break, which is undoubtedly a difficult task. But what if we base this idea to encourage users to build a focusing habit? Instead of emphasizing how many hours are left until 10,000 hours, why not focus more on the actual time a user has dedicated to his work?</p>
            <img src={up_protos} alt="Initial Paper Prototypes" /><div className="imgdes">Initial Paper Prototypes</div>
            <p>
            With the approach above, our team has created ​Up based on several psychological concepts including self control, ego-depletion, stress-reduction, intrinsic motivation as related to goal pursuit, and embodied cognition. The application encourages users to form a habitual focus timing of 90 minutes. Users are encouraged to perform a short guided breathing exercise immediately after a focus session concludes to regather
            brain resources. For each break session, users will have the opportunity to blow a balloon that can be used towards saving an endangered animal 
            which will then be transported to user’s “island” of the application.</p></div>,
        "Research": <div>
            <img src={up_session} className = "phonesc" alt="Concentration Session" /><div className="imgdes">Concentration Session</div>
            <p> The main and first part of our application is the concentration timer. Users have the ability to set a time ranging from a minimum of 15 minutes to a maximum of 90 minutes to work on a task of their choice. Our goal is to improve users’ productivity by having them devote a set block of time to working on a specific task, and also prevent them from working on a task too long that they run out of mental energy. The concentration timer is modeled off the Pomodoro technique, which was designed for people to overcome procrastination by committing fully to completing a certain task during a time period of 25 minutes and then having a break of 5 minutes.
            </p>
            <img src={up_breathing} className = "phonesc" alt="Breathing Session" /><div className="imgdes">Breathing Session</div>
            <p>
            The next part of our application is the “break” portion which encourages users to follow a guided deep-breathing exercise. As users breathe out, they will watch a balloon being blown up. We included stealth interventions to help users relieve stress and counteract ego-depletion. This would be beneficial for users’ performance as they enter the next productivity phase. The intervention to counteract ego-depletion was imperative in the design because the ability for users to replenish mental resource contributes to them forming the habit of working productively, 
            taking breaks, and ultimately returning to our application. We included guided deep-breathing - which in experiments show significant effect on improvement of the hemodynamic changes following stressful tasks.</p><p>
            Also, to make this a true stealth intervention, we took an embedded-design approach by incorporating the visual element of blowing up a balloon as one engages in the guided deep-breathing activity. Blowing up a balloon utilizes the technique of obfuscation via distancing, as the “story” of blowing up a balloon is metaphorical for blowing away one’s stress. 
            Additionally, obfuscation via misdirection is used because gamified elements such as the colorful graphics of the balloon, would serve as red herrings to detract from the our actual stealth interventions.</p>
            <img src={up_report} className = "phonesc" alt="Report" /><div className="imgdes">Report</div>
            <p>
            Our final major design implementation gives users the ability to save virtual endangered animals by obtaining a certain amount of balloons. 
            Balloons can only be obtained through the completing a concentration session. Different sized balloons will be given based off length of focus time. We believe this feature incentives users to participate in our guided-breathing exercise. We decided not to give out incentives because it might make users to concentrate just to earn rewards, which would undermine intrinsic motivation. Moreover, we incorporate a report on user’s focus time as evidence of progress, which would increase intrinsic motivation to continue 
            using our application 
</p></div>,

        "Design Challenges": <div>
            <img src={up_proto_blow} alt="Playing with Breathing Sensor" /><div className='imgdes'>Breathing Sensor Detecting the Breathing Activity</div>

            <p className="addmargin">- How to reduce demoralizing factors?<br />
            We conceded about users setting the very short sessions and not actually performing the breathing sessions to get the rewards. To avoid this, we decided to reward users by giving out balloons to save endangered animals. Also, we believe that users would already be motivated to practice on their tasks. Moreover, we decided to use the breathing sensor on the iPhone to not only track the activity, but also strengthen the metaphor of blowing away one’s stress.</p>
            <img src={up_meeting} alt="Early Prototype" className="half" />
            <img src={up_knob} className="half" alt="Early Prototype" /> <div className='imgdes'>Development Process</div>
            <p>
            - Creating Prototypes<br />
                After doing user testing with less interactive prototypes, We decided to create a working prototype by coding to give realistic experience to our testers.</p>
            </div>,

        "Next Steps": <div>
        <img src={up_animals} id="e_animals" alt="Playing with Breathing Sensor" /><div className='imgdes'>Endangered Animal Illustrations By Ja Young Lee and Judith Leng </div>

        <p className="addmargin">While Up is a productivity mobile application that serves as a concentration tool, the overall message Up is delivering to users is importance of constant effort and taking efficient breaks. Up aims to reduce the demoralizing factor occurring outside of the application by constantly rewarding users with animals and acts as a companion that travels with users to keep track of every effort that can count.</p>
            <p>
        At current stage of design, user are limited to saving virtual animals, which may not be as rewarding as contributing to saving animals in the real world. For future implementations, we look forward to having a sponsorship partner with wildlife organizations such as the World WildLife Fund (WWF).</p>
        </div>,
    },
    "getcuisine": {
        "projectTitle": "Get Cuisine",
        "quote": "How can machine learning help people clean out the fridge?",
        "topimg": <img id="getcuisine" alt="Get Cuisine Screen" className="topimg imgBorder" src={getcuisine1} />,

        "exlpla": {
            "Time": "Dec 2018 ~ Jan 2019",
            "Team": "Ja Young Lee",
            "Role": "UI/UX, development",
            "Tool": "Python Flask, jQuery, HTML, CSS, Adobe Illustrator",
        },
        "button": <a href="http://getcuisine.herokuapp.com" target="_blank" rel="noopener noreferrer">
            <div className="button getcuisine">Go to the Website</div></a>,
        "Ideation": <div>
            <p>As a final project for <a href="http://humanaiclass.org" target="_blank" rel="noopener noreferrer">Human-Ai Interaction class at CMU in Fall 2018,</a> I decided to create a system with a Machine Learning (ML) model providing foods to cook based on the ingredients provided from users.<br />
                I got inspired by my experience having small amounts of ingredients which are leftovers after cooking. It’s often challenging to deal with these leftovers. Therefore, when I found the <a href="https://www.kaggle.com/c/whats-cooking" target="_blank" rel="noopener noreferrer">cuisines and ingredients dataset</a> from Kaggle, I decided to create a model can help people clean out their fridges.</p></div>,
        "Research": <div>
            <p> In the beginning, I planned to create an Amazon Alexa Skill. However although 41.4 percent of people place their smart speakers in the kitchen, only 26.5% of people use the speakers to look for recipes monthly, and only 5.1% people use it daily. This is a comparably low percentage comparing to some other popular functions such as listening music (76.2% of monthly use, 41.9% of daily use) or checking the weather (69.1% of monthly use, 41.4% of daily use). <a href=" (https://voicebot.ai/download-smart-speaker-consumer-adoption-report-2018/)" target="_blank" rel="noopener noreferrer">(Source)</a> Therefore, I decided to create a website which also has visual interaction with users.</p></div>,

        "Challenges": <div><p>-Lack of the open source recipe dataset<br />
            I could not find an open source recipe dataset; however, I found the <a href="https://www.kaggle.com/c/whats-cooking" target="_blank" rel="noopener noreferrer">cuisines and ingredients dataset from Kaggle</a>. With this dataset, I decided to limit the functionality of the model as providing the appropriate cuisine to look for based on the given ingredients. Because providing cuisine requires additional efforts for users to look for a specific food to cook, I also created a function sending users to Google Search searching recipes with the predicted cuisine and given ingredients.</p></div>,

        "Process": <div>
            <img src={getcuisine2} className="imgBorder" alt="Hi-fi prototype" /><div className='imgdes'>Hi-fi Prototype made of HTML, CSS, jQuery, and Flask</div>

            <img className="half imgBorder addmargin" src={getcuisine4} alt="Hi-fi prototype" /><img className="half addmargin" src={getcuisine5} alt="Hi-fi prototype" />
            <p className="addmargin">Because I trained the model with certain ingredients, I wanted people to type ingredients in a format that can be processed. Therefore, I implemented an autocomplete function on the search bar using jQuery Autocomplete API. The biggest issue of using ML is that it is hard to optimize the website for shorter loadings. I tried to optimize the files as much as possible; however, it is still slow in the beginning.<br /><br /></p>

            <img src={getcuisine3} alt="Cuisine Icons" /><div className='imgdes'>Cuisine Icons</div>
            <p>
                One of the concerns about this project is that the data this website provides can easily be obtained, and even more data can be obtained by searching on websites providing recipes. Also, the data people need is recipes, not a cuisine type to look for. However, I got feedback that this website not only provides information but also fun, I focused on providing interesting interactions as fun factors. I added graphics for visual pleasure.</p>
            <img className="half imgBorder addmargin" src={getcuisine6} alt="Final Design" /><img className="half addmargin" src={getcuisine7} alt="Final Design" />
            <p>
                Also, to provide more helpful information, I created a function sending users to Google Search searching recipes with the predicted cuisine and given ingredients.</p></div>,


    },
    "logpos": {
        "projectTitle": "LOG + POS",
        "quote": "How can we improve the communication at rescue operations using audio AR?",
        "topimg": <YouTube
            videoId={vidid.log}
            id="player"
        />,
        "exlpla": {
            "Time": "Oct 19th ~ Nov 1st (Bose Challenge at CMU)",
            "Team": <span>Aniruddih Iyer, <a className="member" href="http://www.hyunwoopaik.com/" target="_blank" rel="noopener noreferrer">Hyun Woo Paik,</a> Ja Young Lee, Se One Park, <a className="member" href="https://wwchung.github.io/SSUI-Portfolio/index.html" target="_blank" rel="noopener noreferrer">Won-Woo Chung</a></span>,
            "Role": "ideation, video directing/editing",
            "Tool": "Maya, After Effects, Illustrator",
            " ": <i>This is a project for a Bose Challenge at CMU.</i>,
        },
        "Ideation": <div>
            <p> The prompt of Bose Challenge was <i><b>“How might we use sound-based augmented reality to improve our lives?”</b></i> Among the idea we had, we decided to focus on improving cooperation situations which require team members’ communications about their locations and status. More specifically, we narrowed down our target as firefighters, about their rescue operations in extreme situations.</p> <p>Our assumption here is that under the urgent circumstances of limited vision and hearing, it is difficult to communicate accurate location information via speaking. Therefore, we designed a way to communicate each other automatically generated location data based on their GPS with minimum hand control. </p><img src={logpos1} alt="Ideation Meeting" /><div className='imgdes'>Ideation Meeting</div> </div>,
        "User Research": <div>
            <p> With our basic ideation, we conducted a phone interview with a firefighter. He confirmed that our idea will be helpful, and gave us the problems about the current system has.</p><img src={logpos2} alt="Phone Interview"/><div className='imgdes'>Phone Interview</div><p>According to the firefighter, there is a system providing location information using sound and blinking lights after a firefighter being motionless for 30 seconds (Watch the video for additional information). However, the issue is that the location information is verbally communicated, so the information rescue team has might not be the latest information. Also, the light and sound signals can be hindered by the fire and the smoke. Our solution solves this problem by providing real-time information directly to the firefighters through the device.</p></div>,

        "Challenges": <div><div className='title logpos' >Technical Challenge:</div>How can we get the accurate indoor location data?<div className='solution'><li>To get accurate location data, we designed our device to use the bluetooth devices for better location accuracy.</li></div><div className='title logpos'>Social Constraints:</div>According to the interview, there are two social constraints:<br />Firefighters sometimes rely on their ears to determine the temprature. Therefore, there should not be a thing cover their ears.<br /> Firefighters resist change, especially if it is going to be hard to put on. <div className='solution'> <li>We designed an audio AR device satisfying these challenges. </li></div><img src={logpos3} alt="Device Design" /><div className='imgdes'>Device Desiged by <a href='http://www.hyunwoopaik.com' target='_blank' rel="noopener noreferrer">Hyun Woo Paik</a></div></div>,

        "Final Design": <div><p>To create a video explining our idea, we made a scenario conveying how our design can be applied to the target situations.</p>
        <img className="half" src={logposstory1} alt="Storyboard 1"/> <img className="half" src={logposstory2} alt="Storyboard 2" /><div className="imgdes">Video Storyboard by Ja Young Lee</div>
        <p>The device can be controlled with verbal and head motions.</p>
        <div className="control">
        <img id="connected" src={logposrun1} alt="Control: Connect" /></div>
        <li className="animdes">Team members connect the devices before getting into the operation.</li>
        <div className="control"><img className="anim continuImg" alt="Control: Getting Messages 1" src={logposrun2} />
        <img className="continuImg" src={logposrun3} alt="Control: Getting Messages 2" /></div><div className="imgdes">Hover on the image</div>
        <li className="animdes">Users will continuously get the messages from others as walkie-talkie</li>
        <div className="control"><img className="anim" src={logposrun4}  alt="Control: Locate All 1"/><img src={logposrun5} alt="Control: Locate All 2"/></div>
        <div className="imgdes">Hover on the image</div>
        <li className="animdes">With a verbal control of <b><i>"Locate All,"</i></b> a user will continuously get the location information of everyone based on his or her head direction. </li>
        <div className="control"><img className="anim" src={logposrun6} alt="Control: Locate ['name'] 1"/> <img src={logposrun7} alt="Control: Locate ['name'] 2"/></div>
        <div className="imgdes">Hover on the image</div>
        <li className="animdes">With a verbal control of <b><i>"Locate [Name],"</i></b> a user will get a specific person's location based on his or her head direction.</li> 
        <div className="control"><img className="anim" src={logposrun8} alt="Communication 1"/><img src={logposrun9} alt="Communication 2"/></div>
        <div className="imgdes">Hover on the image</div>
        <li className="animdes">When a user wants to communicate with other people, he or she will push the button on the side, and will speak. This message will go to everyone as walkie-talkie.</li>
        <div className="control"><img id="deactivate" alt="Deactivate" src={logposrun10} /> </div><li className="animdes">When a user wants to stop getting the location information, he or she can speak <b><i>"Deactivate"</i></b> to stop the function.</li></div>
    },
    "dote": {
        "projectTitle": "DoteNote",
        "quote": "What if we can leave a virtual message at a specific location?",
        "topimg": <YouTube
            videoId={vidid.dote}
            id="player"
        />,
        "exlpla": {
            "Time": "Sep 21st ~ 22nd (HackCMU 2018)",
            "Team": <span>DoteNote (Aniruddih Iyer, <a className="member" href="http://www.hyunwoopaik.com/" target="_blank" rel="noopener noreferrer">Hyun Woo Paik,</a> Ja Young Lee, <a className="member" href="https://wwchung.github.io/SSUI-Portfolio/index.html" target="_blank" rel="noopener noreferrer">Won-Woo Chung</a>)</span>,
            "Role": "ideation, UI/UX design, video directing/editing",
            "Tool": "Adobe XD, After EFfects, Illustrator",
            " ": <i>This is a project for a hackathon held at CMU (HackCMU 2018) which got <b>3rd Place.</b></i>,
        },
        "Ideation": <div>
            <p> Our idea started from a thought: what if we can leave our lovers a virtual message at a specific location ?
            Using AR technology, we focused on messaging emotions related to locations.
                With DoteNote, users can leave 3D messages at specific locations.</p><img className="half" src={dote1} alt="Ideation Meeting 1"/>
            <img className="half" src={dote2} alt="Ideation Meeting 2"/>
            <div className="imgdes">Ideation Meeting</div> </div>,
        "Challenges": <div>
            <img src={dote3} alt="AR Testting" />
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
            <img className="solu_dote" src={dote4} alt="Solution 1"/>
            <div className="imgdes">If a user is on the same side of the street, they can see the message by looking around.</div></div>
            
            <div>
            <img className="solu_dote" src={dote5} alt="Solution 2"/>
            <div className="imgdes">If a user is around the corner, because the notification comes up when they enter the range of one block, they can know which direction the message is located. If they are from the side where the message is located, they get the notification before they enter the street.</div>
            </div></div>,

        "Final Design": <div>
            <div className="screens">
                <Dote /></div></div>,

        "Further Question": "How can we deal with the indoor messages on different floors? ",
    },
    "reporter": {
        "projectTitle": "I am a Reporter",
        "quote": "How to make the UI of a visual novel easy enough for novice users?",
        "topimg": <img id="reporter" className="topimg" alt="Game Main Screen" src={reporter0} />,
        "button":<a href="https://goo.gl/B7sXrV" target="_blank" rel="noopener noreferrer">
        <div className="button reporter">Go to Invision Prototype</div>
    </a>,
        "exlpla": {
            "Time": "Aug 2016 ~ Dec 2016",
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
            <div className="solution"><li>As a solution, we chose realistic illustration style.</li></div>
            <div className="onethird">
                <img src={reporter1} alt="Illustration 1"/>
                <img src={reporter2} alt="Illustration 2"/>
                <img src={reporter3} alt="Illustration 3"/>
            </div>
            <div className="title reporter">UI Challenge:</div>
            <p>How can we make the interface intuitive enough for people who have not played visual novel game can easily play?</p>
            <p>
                Visual novel is a game genre popular in Japan, which is using static images with text-based story. As its name, the genre uses
                static screens which is not familiar with game players of other genres. Our story was targeting diverse users expected not to
                play visual novels, so  our biggest challenge was to make the UI intuitive to novice users of the visual novel.
                    </p>

            <div className="solution"><li>As a solution, we decided to use elements commonly used in the web design.</li></div>
        </div>,

        "Interface": <div className="onethird">
            <img src={reporter4} alt="Screen 1"/>
            <img src={reporter5} alt="Screen 2"/>
            <img src={reporter6} alt="Screen 3"/>
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
            "Time": "Jan 2014",
            "Team": "1 developer, 1 designer (Ja Young Lee)",
            "Role": "prototyping, branding, UI improvement",
            "Tool": "Adobe Illustrator",
        },
        "Even?": <div>
            <p> Even is an Android application that helps users find the best place to meet between their location. It calculates the
  mid point based on the time it takes for each person to get to the point. I was the lead designer who improved the interface
  of the application.
                </p></div>,
        "Design Changes": <div className="center">
            <div className="evensc before"> <img src={even1} alt="Screen Before" />
                <div className="ori">Original</div>
            </div>
            <div className="evensc after"> <img src={even2} alt="Screen After 1"/> <img src={even3} alt="Screen After 2"/>
                <div className="impro">Improved</div>
            </div>

        </div>,

        "Prototype": <div>
            <img className="half" src={even4} alt="Prototype"/>
        </div>,
        "Process": <div>
            <div className="center">
                <div className="evenwrapper inpfld"> <img src={even1} alt="Screen Before - Input Field" />
                    <div className="spot blu" />
                </div>
                <div className="evenwrapper inpfld"> <img src={even2} alt="Screen After - Input Field"/>
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
                <div className="evenwrapper maparea"> <img src={even1} alt="Screen Before - Map"/>
                    <div className="spot blu" />
                </div>
                <div className="evenwrapper maparea"> <img src={even2} alt="Screen After - Map"/>
                    <div className="spot red" />
                </div>
            </div>
            <br />
            <li className="animdes">Expanded the map area</li>
            <li className="animdes">Differentiated the action types</li>
            <p>Next, I expanded the map area: the white space around the map area was decreased, which makes the area seem unlimited. This also works well with the zoom function.</p>
            <div className="center">
                <div className="evenwrapper bicons"> <img src={even1} alt="Screen Before - Checkbox"/>
                    <div className="spot blu" />
                </div>
                <div className="evenwrapper bicons"> <img src={even2} alt="Screen After - Checkbox"/>
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
                <img src={momo_btn2} className="storebtn" id="appstore" alt="App Store Button"/>
            </a>
            <a href="https://store.line.me/stickershop/product/1387989/en" target="_blank" rel="noopener noreferrer">
                <img src={momo_btn1} className="storebtn" id="linestore" alt="Line Store Button"/>
            </a>
        </div>,
        "exlpla": {
            "Time": "Jan 2017",
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
                    <img src={momo3} id="pointers" alt="Pointer Animation"/>

                    <div className="aniwrap">
                        <img className="thumb" src={momo4_1} alt="Momoko Thumbnail 1"/>
                        <img className="ani" src={momo4_2} alt="Momoko Animation 1"/>
                    </div>
                    <div className="aniwrap">
                        <img className="thumb" src={momo5_1} alt="Momoko Thumbnail 2"/>
                        <img className="ani" src={momo5_2} alt="Momoko Animation 1"/>
                    </div>
                    {anigenerator()}
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
        "Video":
            <div>
                <p>This is a video I created for the 10th anniversary of my high school, Gyeongsan Science High School (G.S.S.H.). The music in the beginning is my classmate's recent piano play. It shows our school year memories and how we have grown up. The background music was the school's morning alarm music: Heal the World.</p>
            </div>
    },
    "naoshima": {
        "projectTitle": "Art of Naoshima",
        "quote": "How can I convey the information of a travel location?",
        "topimg": <img id='naoshima' className="topimg imgBorder" src={naoshima} alt="Naoshima"/>,
        "exlpla": {
            "Time": "Sep 2018",
            "Team": "Ja Young Lee",
            "Role": "illustration, UI/UX design, coding",
            "Tool": "Sketch (iPad), React, Adobe Photoshop",
        },
        "Process":
            <div>
                <p>Currently working on the process journal.</p>
                <a href="https://jayolee.github.io/Travel-app/" target="_blank" rel="noopener noreferrer">
                    <div className="button naoshima">Go to the Website</div></a>
            </div>
    },
}