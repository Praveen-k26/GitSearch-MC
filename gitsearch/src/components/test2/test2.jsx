import React from 'react';
import './test2.css';
import image from "../../nyc1.jpg";
import profilepic from "../../assets/brent_goose.jpg";


const Test2 = ({}) => {

    return (

        // <div className='wrapper'>
        //
        //         return <>
        //             <div className="container">
        //                 <header className="header">
        //                     <img src={'data.user.avatarUrl'} alt="Praveen"/>
        //                     <h4>"Praveen-k26"</h4>
        //                 </header>
        //                 <p className="bio">Software Engineer</p>
        //                 <p className="email">praveen@koru.com</p>
        //                 <p className="website">www.google.com</p>
        //                 <p className="location">Salt Lake City</p>
        //                 <a href="/" className='a'>Follow</a>
        //                 <span><p>Followers: 20 </p></span>
        //                 <span><p>Following: 45</p></span>
        //             </div>
        //         </>
        //
        //     }
        // </div>
        <>
            <div className='container'>
                <div className="card-wrapper">
                    <div className="card">
                        <img src={image} alt='card-background' className='card-img'/>
                        <img src={profilepic} alt="profile image" className="profile-img"/>
                        <h1>Praveen Koru</h1>
                        <p className='job-title'>Software Developer</p>
                        <p className='about'>BIO HERE</p>
                        <a href="#" className='btn'>Contact</a>
                        <ul className='social-media'>
                            <li><a href="#"><i className="fab fa-twitter-square"></i></a></li>
                        </ul>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Test2;
