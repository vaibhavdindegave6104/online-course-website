import "./../styles/Payment.css";

function Payment(){
    return(
        <div className="payment-page">
           
            <section className="payment-hero">
                <div className="hero-content">
                <h1>Secure Course Payment</h1>
                <p>Complete your enrollment using our trusted and secure payment gateway.
                    Multiple payment options are available for a smooth checkout experience.
                </p>
                <button className="hero-btn">
                    Enroll Now
                </button>
                </div>
            </section>



          
            <section className="course-summary">
            <h2 className="course-title">
                Course Summary
            </h2>
            <div className="summary-container">
                <div className="couse-card">

                    <img src="https://cdn.dribbble.com/userupload/29649028/file/original-42fb44dd088b43b8e10ddaf89607aa54.png?format=webp&resize=400x300&vertical=center" alt="course" />
                    <div className="course-details">
                        <h3>Complete Web Development Bootcamp </h3>
                        <p>Learn HTML, CSS, JavaScript, React JS, Node JS and MongoDb through real-world projects with lifetime access.</p>
                        

                        <div className="course-info">
                        <div className="info-box">
                            <h4>Duration</h4>
                            <span>12 weeks</span>
                        </div>

                        <div className="info-box">
                            <h4>Level</h4>
                            <span>Beginner</span>
                        </div>

                        <div className="info-box">
                            <h4>Lessons</h4>
                            <span>85+</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="price-card">
                <h3>Payment Details</h3>

                <div className="price-row">
                    <span>Course Fee</span>
                    <span>Rs.14,999/-</span>
                </div>

                <div className="price-row">
                    <span>Discount</span>
                    <span>Rs.-2000/-</span>
                </div>

                <div className="price-row">
                    <span>GST</span>
                    <span>Rs.540</span>
                </div>
                <hr />
                <div className="price-row">
                    <span>Total</span>
                    <span>Rs.13,539/-</span>
                </div>

                <button className="pay-btn">
                    Proceed To Pay
                </button>
            </div>
            </div>
            </section>




          

            <section className="payment-section">
                <h2 className="section-tilte">
                    Choose Your Payment Method
                </h2>
                <div className="payment-container">

                  

                    <div className="payment-form">
                        <h3>Secure Payment</h3>
                        <form>
                            <input type="text" placeholder="Card Holder name" />
                            <input type="text" placeholder="CArd Name" />
                            <div className="row">
                            <input type="text" placeholder="MM/YY" />
                            <input type="text" placeholder="CVV" />
                            </div>
                            <input type="email" placeholder="Email Address" />


                            <button type="submit">
                                Complete Payment
                            </button>
                        </form>
                    </div>

                

                    <div className="payment-option">
                        <h3>Available Payment Methods</h3>
                        <div className="method-card">

                            <div>
                                <h4>Credit / Debit Card</h4>
                                <p>Visa, MasterCard, RuPay & American Express</p>
                            </div>
                        </div>

                        <div className="method-card">

                            <div>
                                <h4>UPI Payment</h4>
                                <p>Google Pay, phonePe, Paytm, BHIM</p>
                            </div>
                        </div>

                        <div className="method-card">

                            <div>
                                <h4>Net Banking</h4>
                                <p>All Major Indian Banks Supported</p>
                            </div>
                        </div>

                        <div className="method-card">
                            <div>
                                <h4>Digital Wallect</h4>
                                <p>Amazon Pay, Mobikwik and Other Wallet</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Payment;
