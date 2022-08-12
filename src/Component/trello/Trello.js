import React from "react"
import './Trello.css'
import img from './img/trello.png'
import img1 from './img/Hero-mobile_2x.png'
import img2 from './img/board.png'
import img3 from './img/coinbase.svg'
import img4 from './img/johnDeere.svg'
import img5 from './img/Grand-Hyatt.svg'
import img6 from './img/Google.svg'
import img7 from './img/Visa.svg'
import img8 from './img/Zoom.png'
import img9 from './img/view.svg'
import img10 from './img/card-back.svg'
import img11 from './img/automation.png'
import img12 from './img/power-ups.png'
import img13 from './img/tag.svg'
import img14 from './img/compass.svg'
import img15 from './img/solutions.svg'




const Trello = () => {
    return (
   <>
    <div className="navbar">
       <ul>
         <li> 
            <a href="#"><img src={img} alt="" className="nav-img"/></a>
         </li>
         <div className="nav-link">
             <div className="nav-links">
             <li>
            <a href="#">Features</a>
         </li>
         <li>
            <a href="#">Solutions</a>
         </li>
         <li>
            <a href="#">Plans</a>
         </li>
         <li>
            <a href="#">Pricing</a>
         </li>
         <li>
            <a href="#">Resources</a>
         </li>
             </div>
         <div className="left-nav">
           
                <a href="#">Log In</a>
            
            
                <span className="free">
                <a href="#">Get Trello For Free</a>
                </span>
            
          
           </div>
         </div>

        </ul>
           
    </div>
         <div className="trello-team">
               <div className="trello-signup">
                     <h1>
                     Trello helps teams move work <br/>forward.
                     </h1> 
                     <p id="para">
                     Collaborate, manage projects, and reach new productivity peaks. <br/> 
                     From high rises to the home office, the way your team works is <br/> 
                     unique—accomplish it all with Trello.
                     </p>

                     <input type="email" placeholder="Email" className="input-email"/>
                     <button className="sign-btn">Sign up - it's free</button>
               </div>
               <img src={img1} alt="" className="team-img"/>
         </div>

         <div className="project">
            <h2>
            It’s more than work. It’s a way of working together.
            </h2>
            <p id="para1">
            Start with a Trello board, lists, and cards. Customize and expand with more features as your teamwork grows. <br/> Manage projects, organize tasks, and build team spirit—all in one place.
            </p>
            <button id="head">Start doing</button>
         </div>
         <div>
          <img src={img2} alt="" className="trello-img"/>
         
         </div>
         <div>
            <p id="para2">
              Join over 2,000,000 teams worldwide that are using Trello to get more done.
            </p>
         </div>

         <div className="img-unit">
                  <img src={img3} alt=""/>
                  <img src={img4} alt=""/>
                  <img src={img5} alt=""/>
                  <img src={img6} alt=""/>
                  <img src={img7} alt=""/>
                  <img src={img8} alt="" className="zoom-img"/>
         </div>
            
                  <div className="feature">
                     <h1>
                     Features to help your team <br/> succeed
                     </h1>

                     <p id="para3">
                     Powering a productive team means using a powerful<br/> tool (and plenty of snacks). From meetings and projects <br/> to events and goal setting, Trello’s intuitive features give <br/>any team the ability to quickly set up and customize <br/> workflows for just about anything.
                     </p>
                     <div className="feature-board">
                       <img src={img9} alt="" className="feature-img"/>

                       <div>
                         <h5 id="head1">CHOOSE A VIEW</h5>
                         <h1>The board is just the beginning</h1>
                         <p id="para4">Lists and cards are the building blocks of organizing work on a <br/> Trello board. Grow from there with task assignments, timelines, <br/> productivity metrics, calendars, and more.</p>
                         <h2 id="head2">+ Learn more</h2>
                       </div>
                     </div>
                  </div>

                  <div className="card">
                        <div>
                           <h5 style={{
                             fontFamily: 'Arial, Helvetica, sans-serif', marginBottom: '1em'}}>DIVE INTO THE DETAILS</h5>

                           <h1>Cards contain everything you need</h1>

                           <p id="para5">Trello cards are your portal to more organized work—where every <br/>single part of your task can be managed, tracked, and shared with <br/>teammates. Open any card to uncover an ecosystem of checklists,<br/> due dates, attachments, conversations, and more.</p>
                           <h2 id="head3">+ Learn more</h2>
                        </div>
                        <img src={img10} alt="" className="card-img"/>
                  </div>
                     <div className="automation">
                        <img src={img11} alt="" className="automation-img"/>

                        <div>
                           <h5 style={{
                             fontFamily: 'Arial, Helvetica, sans-serif', marginBottom: '1em'}}>MEET YOUR NEW BUTLER</h5>
                             <h1>No-code automation</h1>
                             <p id="para6">Let the robots do the work—so your team can focus on work that <br/> matters. With Trello’s built-in automation, Butler, reduce the <br/> number of tedious tasks (and clicks) on your project board by <br/> harnessing the power of automation across your entire team.</p>
                             <h2 id="head4">+ Learn more</h2>
                        </div>
                     </div>
                        <div className="integrate">
                              <div style={{
                                 marginTop: '2em'
                              }}>
                                   <h5 style={{
                                fontFamily: 'Arial, Helvetica, sans-serif', marginBottom: '1em'}}>POWER-UPS</h5>
                                 <p id="para7">
                                 Easily connect the apps your team already uses into your Trello<br/> workflow, or add a Power-Up that helps fine-tune one specific <br/> need. With hundreds of Power-Ups available, your team’s workflow <br/>wishes are covered.
                                 </p>
                                 <h2 id="head5">+ Learn more</h2>
                              </div>
                               <img src={img12} alt="" className="integrate-img"/>
                        </div>
                        
                        <div className="enterprise">
                             
                                 <div className="enter-card">
                                     <h2>See Trello pricing</h2>
                                     <p className="para8">Whether you’re a team of 2 or <br/> 2,000, Trello can be customized <br/> for your organization. Explore <br/> which option is best for you.</p>
                                     <button className="enterbtn">Compare Pricing</button>
                                      <div className="">
                                      <img src={img13} alt="" className="enter-img"/>
                                      </div>
                                 </div>
                                 <div className="enter-card">
                                     <h2>What is Trello?</h2>
                                     <p className="para8">Trello is the visual tool that <br/> empowers your team to manage <br/> any type of project, workflow, or <br/> task tracking.</p>
                                     <button className="enterbtn">Tour Trello</button>
                                      <div className="">
                                      <img src={img14} alt="" className="enter-img"/>
                                      </div>
                                 </div>
                                 <div className="enter-card">
                                     <h2>Discover Trello Enterprise</h2>
                                     <p className="para8">The productivity tool teams love, <br/> paired with the features and <br/>security needed for scale.</p>
                                     <button className="enterbtn">Learn More</button>
                                      <div className="">
                                      <img src={img15} alt="" className="enter-img"/>
                                      </div>
                                 </div>
                                 
                        </div>
                        <div className="chattered">
                           <div>
                              <p id="para9"><span id="quote">  ❝ </span>Everyone loves it; it has democratized our finance <br/> function. In some ways Trello chattered hierarchy<br/> and brought us together</p>
                           </div>
                        </div>
   </>
    )
}

export default Trello;