import "./../styles/contact.css";

function Contact() {
  return (
    <>
    <div className="contact-page">

      {/* Hero Section */}

      <section className="contact-hero">

        <div className="contact-hero-content">

          <h1>Contact Our Learning Team</h1>

          <p>
            Have questions about our online courses, payments or enrollment?
            Our support team is always ready to help you begin your learning
            journey.
          </p>

          <button>Get In Touch</button>

        </div>

      </section>



      {/* Contact Information */}

      <section className="contact-info">

        <h2 className="section-title">
          Reach Us Anytime
        </h2>

        <div className="contact-card-container">

          <div className="contact-card">

            <div className="icon">📍</div>

            <h3>Office Address</h3>

            <p>
              401, Knowledge Tower,
              <br />
              Hinjewadi Phase 1,
              <br />
              Pune, Maharashtra
            </p>

          </div>



          <div className="contact-card">

            <div className="icon">📞</div>

            <h3>Call Us</h3>

            <p>
              +91 98765 43210
              <br />
              +91 91234 56789
            </p>

          </div>



          <div className="contact-card">

            <div className="icon">✉️</div>

            <h3>Email</h3>

            <p>
              support@learnonline.com
              <br />
              admissions@learnonline.com
            </p>

          </div>



          <div className="contact-card">

            <div className="icon">🕒</div>

            <h3>Working Hours</h3>

            <p>
              Monday - Saturday
              <br />
              9:00 AM - 7:00 PM
            </p>

          </div>

        </div>

      </section>

    </div>


      

      <section className="contact-form-section">

        <h2 className="section-title">
          Send Us a Message
        </h2>

        <div className="contact-form-container">

          {/* Form */}

          <div className="contact-form">

            <form>

              <input
                type="text"
                placeholder="Full Name"
              />

              <input
                type="email"
                placeholder="Email Address"
              />

              <input
                type="tel"
                placeholder="Mobile Number"
              />

              <select>

                <option>Select Course</option>

                <option>Web Development</option>

                <option>React JS</option>

                <option>Python Programming</option>

                <option>Java Full Stack</option>

                <option>UI / UX Design</option>

              </select>

              <textarea
                rows="6"
                placeholder="Write your message here..."
              ></textarea>

              <button type="submit">
                Send Message
              </button>

            </form>

          </div>



          {/* Office Details */}

          <div className="office-details">

            <h3>Visit Our Office</h3>

            <p>
              Our counselors are available to guide you with course
              selection, payment assistance and career advice.
            </p>

            <div className="office-box">

              <h4>📍 Address</h4>

              <p>
                Knowledge Tower,
                <br />
                Hinjewadi Phase 1,
                <br />
                Pune, Maharashtra - 411057
              </p>

            </div>

            <div className="office-box">

              <h4>📞 Helpline</h4>

              <p>
                +91 98765 43210
                <br />
                +91 91234 56789
              </p>

            </div>

            <div className="office-box">

              <h4>📧 Email</h4>

              <p>
                support@learnonline.com
                <br />
                info@learnonline.com
              </p>

            </div>

            <div className="office-box">

              <h4>🕒 Office Hours</h4>

              <p>
                Monday - Saturday
                <br />
                9:00 AM - 7:00 PM
              </p>

            </div>

          </div>

        </div>

      </section>
      </>
 );
}
export default Contact;