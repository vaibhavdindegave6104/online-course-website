import "../styles/VideoLessons.css";

function VideoLessons(){

    return(
        <section className="videos">

            <div className="container">

                <h1>🎥 Video Lessons</h1>

                <p className="subtitle">Watch High-quality recorded lessons prepared by expert instructors.
                    Learn at Your own pece with unlimited access.
                </p>


            <div className="video-grid">

                <div className="video-card">

                   <iframe width="100%" height="220" src="https://www.youtube.com/embed/w7ejDZ8SWv8?si=uhg1M0EbaTmPiPbW" 
                   title="YouTube video player" 
                   frameborder="0" 
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>


                   </iframe>
                

                    <h3>React Fundementals</h3>
                
                    <p>Learn React cmponents, props, state and Hooks.</p>
                </div>


                
                <div className="video-card">

             
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/ajdRvxDWH4w?si=wxvDjVIxPQFsSmWq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                 

                    <h3>JavaScript Bascis</h3>
                
                    <p>Understand variables , functions and Dom manipulation.</p>
                </div>


                
                <div className="video-card">

                        <iframe width="560" height="315" src="https://www.youtube.com/embed/-G7bJVAIiEI?si=ikJR_91im7mBIV_d" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <h3>HTML & CSS</h3>
                
                    <p>Create responsive webistes using HTML and CSS.</p>
                </div>

                 <div className="video-card">

                       <iframe width="560" height="315" src="https://www.youtube.com/embed/UrsmFxEIp5k?si=HUZfrCNhokuwVzkQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <h3>Full-stack PYTHON</h3>
                
                    <p>Create responsive webistes using Python.</p>
                </div>


                 <div className="video-card">

                        <iframe width="560" height="315" src="https://www.youtube.com/embed/m3fg2PRY1u4?si=jWh76UqdJoSDAmc8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <h3>Full-stack JAVA</h3>
                
                    <p>Create Websites usin Backend Java Language</p>
                </div>

            </div>


            <div className="features">

                <h2> 🎥 Video Features</h2>


                <div className="feature-box">

                    <h3>HD Quality Videos</h3>
                    <p>Crystal clear video for better understanding</p>

                </div>


                <div className="feature-box">

                    <h3>Self-palced learning</h3>
                    <p>Watch Lessons whenever you want.</p>

                </div>


                <div className="feature-box">

                    <h3><span>?</span> Quiz After Every Lessons</h3>
                    <p>Improve your knowledge with quizzes.</p>

                </div>
            
            
            </div>


            </div>



        </section>


    );




}

export default VideoLessons;