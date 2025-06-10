'use client'
import './work.css'
export default function Work(){
    return <>

        <div id="mainW">

            <div id='sideC'>
                <h2 id='sHead'><span>GOT</span> A PROJECT IN MIND?</h2>
                <h3>GREAT.</h3>
                <p>I am listening, and I&apos;d love to hear about your ideas. Let&apos;s bring your vision to life.</p>
                <h2 id='sBottom'>LEAVE THE REST TO ME!</h2>
            </div>
            <form id='wForm'>
                <h1 id='wHead'>Let&apos;s Talk</h1>
                <input type='text' placeholder='Name' className='i'/>
                <input type='email' placeholder='Email Address' className='i'/>
                <select id="type" required>
                    <option id='opt' hidden value="" >Project Type</option>
                    <option value="portfolio">Portfolio Website</option>
                    <option value="shopping">Shopping Website</option>
                    <option value="other">Other</option>
                </select>
                <textarea rows={7} cols={60} placeholder='Tell me About your project'></textarea>
                
                <button id='button'>Send Message</button>
            </form>



            
        </div>
        <div id='footer'>
                <h4>© 2025 Sanyam. All rights reserved</h4>
            </div>
    
    </>
}