
import React from 'react';
import "../aboutUsAndFooterStyle.css"


function AboutUsAndFooter() {
    return (
    <div className = "aboutus-and-footer">
    <CreateAboutUs/>
    <CreateFooter/>
    </div>
    );
  }


function CreateAboutUs(){
    return(
        <div className = "about-us-wrapper">
        <div className = "about-us-title">
            <p>About us</p>
        </div>
        <div className = "about-us-text">
        <p >Finding a skilled developer that would boost your project is similar to chasing a dream. <br/>
           The race is long, the forest is dark and there is a hunter hiding behind every tree.<br/>
           With the entire world screaming about the huge gap between the number of developers and the number of vacancies, 
           one can easily find programmers, the another one  should have to run an extra mile with the recruitment process.<br/>
           Are you a human, who is ready to achive his goal of becoming programmer or broadend your perception of programming? <br/>
           Here's one more way to find your dream developer, who will help you to achieve the job that fits you perfectly.<br/>
           If you are a recruiter, DevsHunter will help you to find the right people for the jobs, to match candidates to the job they are born for.<br/>
           DevsHunter is a platform which can help you to find all the information that will best describe the person's 
           knowledge, work experience, feedbacks and completed projects.<br/>
           Good luck and enjoy DevsHunter  :)<br/>
           Best regards DevsHunter team.
        </p>
        </div>
        </div>

    )
}

function CreateFooter(){
    return(
        <div className = "footer">
        <div className = "footer-text-left">
            <span>About Us</span>
            <span>Blog</span>
            <span>FAQs</span>
            <span>Order Tracking</span>
            <span>Contact</span>
            <span>© By NordicMade</span>
        </div>
        <div className="footer-text-right">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <span><i class="fa fa-facebook" ></i></span>
        <span><i class="fa fa-instagram"></i></span>
        <span><i class="fa fa-twitter"></i></span>
        </div>
        </div>

    )
}



export default AboutUsAndFooter