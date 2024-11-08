import React from 'react';
import './page.css';

const About = () => {
    return (
        <>
            <div className='header container'>
                <section id="about" className="about">
                    <h2>About Us</h2>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classNameical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                    <img src="https://cdn.pixabay.com/photo/2015/01/08/18/27/startup-593341_960_720.jpg" alt="" />
                </section>
                <section id="services" className="services">
                    <h2>Our Services</h2>
                    <div className="service">
                        <img src="https://via.placeholder.com/150" alt="" />
                        <h3>Service One</h3>
                        <p>High-quality service that meets your expectations and needs.</p>
                    </div>
                    <div className="service">
                        <img src="https://via.placeholder.com/150" alt="" />
                        <h3>Service Two</h3>
                        <p>Expert assistance tailored to help you reach your goals.</p>
                    </div>
                    <div className="service">
                        <img src="https://via.placeholder.com/150" alt="" />
                        <h3>Service Three</h3>
                        <p>Innovative solutions that drive success and deliver results.</p>
                    </div>
                </section>
            </div>

            <div className="container" style={{textAlign: 'center'}}>
                <a href="https://dusknews.com/2023/11/" style={{ color: 'white' }}>https://dusknews.com/</a><br />
                <a href="https://dusknews.com/2024/06/" style={{ color: 'white' }}>https://dusknews.com/</a><br />
                <a href="https://dusknews.com/2024/07/" style={{ color: 'white' }}>https://dusknews.com/</a><br />
                <a href="https://dusknews.com/2024/09/" style={{ color: 'white' }}>https://dusknews.com/</a><br />
            </div>
            <div className="container" style={{ color: 'white', marginTop: '20px', textAlign: 'center' }}>
                <h2>Latest Post</h2>
            </div>
        </>
    )
}

export default About