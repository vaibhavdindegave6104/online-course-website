import React from 'react'


import  './../styles/About.css'

export default function About() {
  return (
     <>
      
   
       
    <section className="expertise-hero">
        <div className="container">
            <h1>Empowering learners Through Quality Online Education</h1>
            <p>
               We are dedicated to helping students and professionals
achieve their career goals through industry-focused online courses, expert guidance, and practical learning experiences.
            </p>
        </div>
    </section>


  
    <section className="intro">
        <div className="container">
            <h2>Our Story</h2>
            <p>
                Coursify was established with a vision to make high-quality education accessible to everyone, regardless of location or background. We believe that learning should be flexible, engaging, and focused on building practical skills for real-world success.
            </p>
        </div>
    </section>



     
       <section className="mission-vision">
        <div className="container">
            <div className="mission-card">

                <h2>Our Mission</h2>
                <p>
                    To deliver high-quality online education that equips learners with practical knowledge and industry-relevant skills.
                </p>
            </div>

            <div className="vision-card">

                <h2>Our Vision</h2>
                <p>
                    To become a trusted global learning platform that inspires
lifelong learning and professional growth.
                </p>
            </div>

        </div>
       </section>


  

    <section className="why-us">
        <div className="container">
            <h2>Why Choose Coursify?</h2>
            <div className="why-grid">
                <div className="why-card">
                   
                    <h3>👨‍🏫Expert Instructors</h3>
                    <p>Learn from industry professionals with years of real-world experience.</p>
                </div>
                <div className="why-card">
                   
                    <h3>🎥Interactive Video lessons</h3>
                    <p>Access engaging HD video lectures and practical demonstrations anytime</p>
                </div>
                <div className="why-card">
                    
                    <h3>💼Placement Support</h3>
                    <p>Assisting students in finding employment opportunities after course completion.</p>
                </div>

            </div>
        </div>
    </section>



  

    <section className="stats">

        <div className="container">
            <h2>Our Achievements</h2>
           
            <div className="stats-grid">
                <div className="stat-card">
                    <h3 className="counter" data-target="250">10k+</h3>
                    <p>Students Trained</p>
                </div>
                <div className="stat-card">
                    <h3 className="counter" data-target="250">50+</h3>
                    <p>Professional Courses</p>
                </div>
                <div className="stat-card">
                    <h3 className="counter" data-target="250">100+</h3>
                    <p>Industry Mentors</p>
                </div>
                <div className="stat-card">
                    <h3 className="counter" data-target="250">95%</h3>
                    <p>Placement Assistance Success</p>
                </div>
            </div>
        </div>
    </section>





 
    <section className="about-cta">
        <div className="container">
            <h2>Start Learning Today</h2>
            <p>
                Transform your career with our expert-led training programs.
                Join thousands of satisfied students who have advanced their skills and boosted their prospects.
            </p>
            <a href="form.html" className="cta-btn">Explore Courses</a>
        </div>
    </section>









     
     
    </>
  )
}
