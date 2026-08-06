import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <>

            <footer>
                <div className="footer-container">
                    <div className="footer-box">
                        <h2>COURSIFY</h2>
                        <p>
                            Coursify is an online learning platform where instructors create and sell courses, and learners upskill through structured, easy-to-access content.
                        </p>
                    </div>
                    <div className="footer-box">
                        <h2>Quick Links</h2>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/aboutus">About Us</a></li>
                            <li><a href="/lms">LMS Setup</a></li>
                            <li><a href="/videos">Video Lessons</a></li>
                            <li><a href="/payments ">Payment</a></li>
                            <li><a href="/contact">Contact</a></li>

                        </ul>
                    </div>

                    <div className="footer-box">
                        <h2>Contact</h2>
                        <p>📍 Pune, maharashtra</p>
                        <p>📞 +91 55555 55555</p>
                        <p>📧info@coursify.com</p>
                        <p>🌐www.coursify.com</p>
                    </div>

                    <div className="footer-box">
                        <h2>Follow Us</h2>
                        <a href="#">Facebook</a>
                        <a href="#">Instagram</a>
                        <a href="#">LinkedIn</a>
                        <a href="#">Twitter</a>
                    </div>

                </div>
                <hr />
                <div className="copyright">
                    <p>© 2026 Coursify. All Rights Reserved.</p>
                </div>
            </footer>

        </>
    )
}
