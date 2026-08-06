import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components//Footer'
import  './../styles/Home.css'

export default function Home() {
  return (
    <>
      <Navbar />


      {/* Hero section  */}
    <section className="home-hero">
        <div className="container">
            <h1>Learn Without limits</h1>
            <p>
               Master in-demand skills through expert-led online courses, interactive video lessons, and hands-on projects designed to accelerate your career.
            </p>
        </div>
    </section>




    {/* courses */}

    <section className="latest-blogs" id="latest-blogs">
        <div className="container">
            <h2>Featured Courses</h2>
            <p>Choose from our most popular industry-oriented programs.</p>

            <div className="blog-grid">


                <div className="blog-card">

                    <img src="https://www.centricdxb.com/insights/9021/image-thumb__9021__item_home_352_201/full-stack-development-2@2x.jpg" alt="Cloud Computing" />

                    <div className="blog-content" >

                        <h3>Full-Stack Web Development</h3>
                        <p>Master both frontend and backend technologies to build modern, responsive web applications.
                        </p>
                        <a href="#" class="l-btn">Enroll Now</a>
                    </div>
                </div>

                <div className="blog-card">
                    <img src="https://img.freepik.com/premium-photo/python-programming-code-abstract-technology-background_926199-2202275.jpg" />
                    <div className="blog-content" >

                        <h3>Python Programming</h3>
                        <p>Learn the fundamentals of Python programming and apply your skills to real-world projects.
                        </p>
                        <a href="#" className="l-btn">Enroll Now</a>
                    </div>
                </div>

                <div className="blog-card">
                    <img src="https://wallpapers.com/images/featured/data-science-xe1pmo7wm4jcokpd.jpg" />
                    <div class="blog-content" >

                        <h3>Data Science</h3>
                        <p>Unlock the power of data with our comprehensive Data Science course, covering statistics,
                            machine learning, and data visualization.</p>
                        <a href="#" className="l-btn">Enroll Now</a>
                    </div>
                </div>

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
            <h2>Begin Your Learning Journey Today</h2>
            <p>
                Transform your career with our expert-led training programs.
                Join thousands of satisfied students who have advanced their skills and boosted their prospects.
            </p>
            <a href="form.html" class="cta-btn">Join Now</a>
        </div>
    </section>


      

      <Footer/>
    </>
  )
}
