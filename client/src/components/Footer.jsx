import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'


const Footer = () => {
    return (
        <>
            <div className="footer highlight">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 mt-3">
                        <div className="col">
                            <h4 className="border-bottom border-dark">ABOUT</h4>
                            <div className="row">
                            <div className="col-3">Profile picture</div>
                            <div className="col">
                                <p>Sukanya Jain is a freelance web developer living in Long Island, NY. She began her engineering journey with a Bachelor's in Biomolecular Sciences from NYU Tandon School of Engineering (2019) and is continuing to build on that path after completing the Fullstack Software Engineering Bootcamp program offered by Coding Dojo (2022). They say a parent should never do this, but if she had to...</p>
                                <p className="mb-0">&lt;Sukanya&gt;</p>
                                <ul className="mb-0">
                                <li>&lt;Front-End class="growing-on-me" id="like-a-fungus" /&gt;</li>
                                <li>&lt;Back-End class="favorite-forever" /&gt;</li>
                                <li>&lt;Database class="good-stuff" /&gt;</li>
                                </ul>
                                <p>&lt;/Sukanya&gt;</p>
                            </div>
                            </div>
                        </div>
                        <div className="col">
                            <h4 className="border-bottom border-dark">MERN Projects</h4>
                            <Link to={{ pathname: "http://44.202.10.33/" }} target="_blank">Pizza-Time</Link>
                            <Link to={{ pathname: "http://44.202.10.33/" }} target="_blank">WaterBnB</Link>
                            <Link to={{ pathname: "http://44.202.10.33/" }} target="_blank">BuJo Pro</Link>
                            <Link to={{ pathname: "http://44.202.10.33/" }} target="_blank">Gift Detectives</Link>

                        </div>

                        <div className="col">
                        <h4 className="border-bottom border-dark"></h4>
                        <p>Github: https://github.com/Sukanyajain1</p>
                        <p>LinkedIn: </p>
                        <p>Discord: </p>
                        <p>Email: jain.sukanya.2@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Footer;