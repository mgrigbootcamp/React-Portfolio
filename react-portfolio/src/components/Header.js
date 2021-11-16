import React from 'react'
import bio_photo from '../../src/IMG_0473.jpg'
export default function Header() {
    return (
        <>
        <main>
                <div className="main-header-holder">
                    <div className="my-img">
                        <img src={bio_photo} alt="" width="300" height="300" />
                    </div>
                    <div className="profile">
                        <div class="profile-name">
                            <h1>Hello My Name Is Matt Griggs</h1>
                        </div>
                        <div className="profile-occupation">
                            <h4>I Am A Full Stack Developer</h4>
                        </div>
                        <div className="profile-social">
                            <span>social media icons</span>
                        </div>
                    </div>
                </div>
            </main>
            
        </>
    )
}
