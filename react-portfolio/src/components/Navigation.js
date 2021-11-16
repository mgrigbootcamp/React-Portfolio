import React from 'react'
import { Link } from 'react-router-dom'
export default function Navigation() {
    return (
        <>
        <nav>
                <div className="myname">Matt <span>Griggs</span> </div>
                <div className="nav-menu">
                    <ul>
                        <li>
                        <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/resume">Resume</Link></li>

                        <li><Link to="/project">Project</Link></li>

                        <li><Link to="/contact">Contact</Link></li>
                        <li></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
