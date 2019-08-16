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
import getcuisineword from './getcuisine/wordbag.svg'

import reporter0 from './reporter/int1.jpg'
import reporter1 from './reporter/garage.jpg'
import reporter2 from './reporter/lightssmall.jpg'
import reporter3 from './reporter/staircase.gif'
import reporter4 from './reporter/int1.jpg'
import reporter5 from './reporter/int2.jpg'
import reporter6 from './reporter/int3.jpg'

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
}
const protoRef = React.createRef();

export const sideList = {
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
        "Next Steps": <div>
            <p className="mainT" style={{ marginTop: "30px" }}>The solution didn't solve the problem</p>
            <p>Does this website fulfill the initial goal of "helping people clean out the fridge"? The answer was <b>NO.</b> The website was more about exploring the development of a ML powered website. Therefore, I started the second round of design. The final solution we got was <span style={{ color: "#fa6c42", fontWeight: "bold" }}>"Forkie."</span></p>
            <div style={{ width: "100%", textAlign: "center", margin: "0" }}>
                <a href="https://jayolee.github.io/portfolio/projects/forkie/" rel="noopener noreferrer" ><div className="button forkie" style={{ margin: "0" }}>Read About Forkie</div></a>
            </div>
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