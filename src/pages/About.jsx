import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import  './../styles/About.css'

export default function About() {
  return (
     <>
      
       <Navbar />
       
       {/* Hero section  */}
    <section className="expertise-hero">
        <div className="container">
            <h1>Empowering learners Through Quality Online Education</h1>
            <p>
               We are dedicated to helping students and professionals
achieve their career goals through industry-focused online courses, expert guidance, and practical learning experiences.
            </p>
        </div>
    </section>


    {/* Intro section   */}
    <section class="intro">
        <div class="container">
            <h2>Our Story</h2>
            <p>
                Coursify was established with a vision to make high-quality education accessible to everyone, regardless of location or background. We believe that learning should be flexible, engaging, and focused on building practical skills for real-world success.
            </p>
        </div>
    </section>



      {/* our Mission section  */}
       <section class="mission-vision">
        <div class="container">
            <div class="mission-card">

                <h2>Our Mission</h2>
                <p>
                    To deliver high-quality online education that equips learners with practical knowledge and industry-relevant skills.
                </p>
            </div>

            <div class="vision-card">

                <h2>Our Vision</h2>
                <p>
                    To become a trusted global learning platform that inspires
lifelong learning and professional growth.
                </p>
            </div>

        </div>
       </section>


       {/* Why choose us   */}

    <section class="why-us">
        <div class="container">
            <h2>Why Choose Coursify?</h2>
            <div class="why-grid">
                <div class="why-card">
                   
                    <h3>👨‍🏫Expert Instructors</h3>
                    <p>Learn from industry professionals with years of real-world experience.</p>
                </div>
                <div class="why-card">
                   
                    <h3>🎥Interactive Video lessons</h3>
                    <p>Access engaging HD video lectures and practical demonstrations anytime</p>
                </div>
                <div class="why-card">
                    
                    <h3>💼Placement Support</h3>
                    <p>Assisting students in finding employment opportunities after course completion.</p>
                </div>

            </div>
        </div>
    </section>



    {/* stats section  */}

    <section class="stats">

        <div class="container">
            <h2>Our Achievements</h2>
           
            <div class="stats-grid">
                <div class="stat-card">
                    <h3 class="counter" data-target="250">10k+</h3>
                    <p>Students Trained</p>
                </div>
                <div class="stat-card">
                    <h3 class="counter" data-target="250">50+</h3>
                    <p>Professional Courses</p>
                </div>
                <div class="stat-card">
                    <h3 class="counter" data-target="250">100+</h3>
                    <p>Industry Mentors</p>
                </div>
                <div class="stat-card">
                    <h3 class="counter" data-target="250">95%</h3>
                    <p>Placement Assistance Success</p>
                </div>
            </div>
        </div>
    </section>





     {/* Call to action section   */}
    <section class="about-cta">
        <div class="container">
            <h2>Start Learning Today</h2>
            <p>
                Transform your career with our expert-led training programs.
                Join thousands of satisfied students who have advanced their skills and boosted their prospects.
            </p>
            <a href="form.html" class="cta-btn">Explore Courses</a>
        </div>
    </section>









       <Footer/>
     
    </>
  )
}
