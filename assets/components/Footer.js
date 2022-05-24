import React from 'react'
import Contact from './Contact';

const Footer = () => {
    return (
        <div>
            <Contact /> 
            <footer className="text-center text-lg-start">
                <div className="text-center p-3">
                    <div>
                        All the pictures are licensed under{" "}
                        <a href="https://unsplash.com/">Unsplash</a> license
                    </div>
                    <div>© 2022 Copyright</div>
                </div>
            </footer>
        </div>
    );
}

export default Footer