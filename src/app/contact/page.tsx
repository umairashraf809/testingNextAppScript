import React from 'react'
import './page.css';

const Contact = () => {
    console.log('ContactContactContact');

    return (
        <>
            <div className='header container'>
                <h1>Contact Us Page</h1>
                <section id="contact" className="contact">
                    <p>If you have any questions, feel free to reach out to us.</p>
                    <form>
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <textarea placeholder="Your Message" required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </section>
                <div style={{ marginTop: '40px' }}>
                    <form>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div className="form-group">
                            <label>Example select</label>
                            <select className="form-control" id="exampleFormControlSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Example multiple select</label>
                            <select multiple className="form-control" id="exampleFormControlSelect2">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Example textarea</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1"></textarea>
                        </div>
                    </form>

                </div>
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

export default Contact