import "./Navbar.css"

function Navbar() {


    return (



        <section className="header">

            <div className="header-container">

                <div className  ="logo">

                    <img src="https://img.freepik.com/premium-vector/online-learning-courses-logo-template-icon-illustration-brand-identity_7109-1476.jpg?w=2000"
                        alt="company logo" />
                    <h2> COURSIFY</h2>
                </div>

                <nav>

                    <ul>
                        <li><a href="/">HOME</a></li>
                        <li><a href="/About">ABOUT US</a></li>
                        <li><a href="/LMS">LMS SETUP</a></li>
                        <li><a href="/VideosLessons">VIDEO LESSONS</a></li>
                        <li><a href="/Payment ">PAYMENT</a></li>
                        <li><a href="/Contact">CONTACT</a></li>
                        

                    </ul>


                </nav>

            </div>

        </section>

    );
}

export default Navbar;
