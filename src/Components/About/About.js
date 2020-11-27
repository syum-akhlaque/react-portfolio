import React from 'react';
import myImg from '../../Images/syum.png';
import './About.css'

const About = () => {
    return (
        <>
        <div className='d-flex mt-5 row '>
            <div className= 'mt-5 col-md-5 offset-md-1 px-3'> 
                <h1 className= 'px-3'><b>HI</b>, Let Me <span className='text-warning'>Introduce</span> </h1>
                <img className='mt-5' src={myImg} alt="syum akhlaque" width='350px'/>
            </div>
            <div className= 'mt-5 col-md-5'>
                <h4 className= 'mt-sm-5 py-sm-5 px-3'>
                     Passionate web app developer. Always try to grab the new features of technology. Last few years made myself skilled in the field of web application development. Acquired to maintain strong interpersonal relationships with teammates. I am passionate about providing care to my work, which keeps me motivated and excited about doing my best work.
                </h4>
            </div>
           
        </div>
        {/* ------------------skill cards----------------- */}
        <div  className ='my-2 pt-2 mx-auto container'>
            <h2 className ='text-center my-5'>About <span className = 'text-warning'> Myself</span> </h2>
            <div className="row mb-5">
                <div className="col-md-4 px-3 ">
                    <div className= 'about-cards d-flex flex-column p-3 '>
                        <h4 className= 'text-warning'>SKILLS</h4> 
                        <p>
                            <b>Expertise</b> : Javascript, ES6, React JS, HTML5, CSS3, Bootstrap4, MongoDB <br/>
                            <b>Comfortable</b> : NodeJS, Php, ExpressJS, Firebase,Wordpress, SQL <br/>
                            <b>Familiar</b> : Java , Material Ui, Sass, Data Structure, Algorithm, OOP, SEO 
                        </p>
                    </div>
                </div>
                <div className="col-md-4 px-3 ">
                    <div className= 'about-cards d-flex flex-column p-3 '>
                        <h4 className= 'text-warning'>Personal Info</h4> 
                        <p>
                            <b>Name</b> : MD. Akhlaqur Rahman Siddiqui<br/>
                            <b>DoB</b> : 7th sep, 1996 <br/>
                            <b>Blood Group</b> : A+<br/>
                            <b>Blood</b> : A+<br/>
                            <b>Religion</b> : Islam<br/>
                            <b>Home</b> :Muradnagar,Cumilla<br/>
                        </p>
                    </div>
                </div>
                <div className="col-md-4 px-3 ">
                    <div className= 'about-cards d-flex flex-column p-3 '>
                        <h4 className= 'text-warning'>Education</h4> 
                        <p>
                          B. Sc. <span className='text-warning'>Daffodil International University -2019 </span><br/>
                           Dept of<span className='text-warning'> CSE </span> <br/> <br/>

                           <b>HSC</b>: Kazi Noman Ahmed Degree College -2014<br/>
                           <b>SSC</b> : D.R. Govt High School -2012
                            
                        </p>
                    </div>
                </div>
            </div>
     </div>
     </>
    );
};

export default About;