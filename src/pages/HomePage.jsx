import React from 'react'
import '../styles/homepage-stylings.css'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div className='homepage-container'>
           <section className="background-blue"></section>
           <main className="content-container">
                <section className="content-box">
                    <section className="image-section">
                        <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80" alt=""/>
                    </section>
                    <section className="content-body">
                        <div className="content-intro">
                            <div style={{ display : "flex" }}>
                                    <p id="name">Andrew Dubow</p>
                                    <img style={{ margin: "15px 0 15px 15px" }} height="20px" width="20px" src="https://img.icons8.com/wired/20/000000/broken-pencil.png"/>
                            </div>
                            <p id="bio">Designer in San Diego, CA, United States  Member since October 24, 2016</p>
                            <div id="content-text">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus est error, sunt fugiat nihil dolor corrupti accusantium minus quidem iure porro maxime nesciunt quam, nulla perferendis aut dignissimos odio, asperiores atque rerum consequatur expedita doloribus. Assumenda est ipsam eum laborum optio corporis tempora. Culpa numquam explicabo quos repellendus ducimus odio eos veniam. Expedita tenetur temporibus deserunt aut, suscipit rem aliquam? Placeat incidunt natus sapiente cumque doloremque eveniet corrupti corporis iste voluptates nam culpa, ad laborum nesciunt id minus eligendi at voluptatem dolores veniam praesentium dolore hic? Temporibus corrupti corporis asperiores suscipit cum, ipsam cumque in, accusamus modi quas eos maiores.
                            </div>
                        </div>
                        <div className="content-skills">
                            <ul id="content-skills-list">
                                <Link to='/details'><li style={{ background: 'grey', color : "whitesmoke" }}>javaScript</li></Link>
                                <li>Lorem, ipsum.</li>
                                <li>Lorem ipsum dolor sit.</li>
                                <li>Lorem, ipsum dolor.</li>
                                <li>Lorem.</li>
                                <li>Lorem, ipsum dolor.</li>
                                <li>Lorem, ipsum.</li>
                                <li>Lorem ipsum dolor sit.</li>
                                <li>Lorem, ipsum dolor.</li>
                                <li>Lorem.</li>
                                <li>Lorem, ipsum dolor.</li>
                                <li>Lorem, ipsum dolor.</li>
                                <li>Lorem, ipsum.</li>
                                <li>Lorem ipsum dolor sit.</li>
                                <li>Lorem, ipsum dolor.</li>
                                <li>Lorem, ipsum dolor.</li>
                                <li>Lorem, ipsum dolor.</li>
                                <li>Lorem.</li>
                                <li>Lorem, ipsum dolor.</li>
                                <li>Lorem, ipsum.</li>
                                <li>Lorem ipsum dolor sit.</li>
                                <li>Lorem, ipsum dolor.</li>
                            </ul>
                        </div>
                    </section>
                </section>
                <footer id="footer">
                    <div className="footer-content">
                        <p style={{ fontWeight : 500, margin: '12px 3px', wordSpacing : '2px' }}>Andrew is now <span style={{ color : 'rgb(22, 197, 124)' }}>available</span> for hire</p>
                        <button>Hire Andrew</button>
                    </div>
                </footer>
           </main>
        </div>
    )
}


export default HomePage
{/* <Link to='/details'><button>details</button></Link> */}