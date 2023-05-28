import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import 'animate.css'
import Resume from './Resume'


const PromptUser = ({handleChange, imageSource , OnButtonClick,userObject }) =>{
    const navigate = useNavigate()

    const [image, setImage] = useState(null);
    console.log("Image URL: ",image);
 


    const onButtonClick = () =>{
        alert("Resume Created")
        navigate('/resume')
    }

    return (
    <>
    {OnButtonClick ? <Resume userObject = {userObject} imageSource={imageSource}/> : 
    <div className='bar'><h1>Resume Builder</h1>
    
      <div id="back">
        <div className='inputs'>
          <h2 id="title">DETAILS</h2>
            <input  onChange={handleChange} placeholder="Enter First Name" name="firstName" className="fields"/>
            <input  onChange={handleChange}  placeholder="Enter Last Name" name="lastName" className="fields" />
            <input  onChange={handleChange} placeholder="Profile Detail" name="profile" isTextArea={true} className="fields" />
           <br></br><br></br><br></br>
            <input  onChange={handleChange}  placeholder="Enter phone number" name="phoneNumber" className="fields" />
            <input  onChange={handleChange}  type='date'  name="dob" className="fields"  />
            <input  onChange={handleChange}  type='number' placeholder="Enter age" name="age"  className="fields" />
            <br></br><br></br><br></br>

            <input  onChange={handleChange} placeholder="Enter Email ID" name="email" className="fields" />
            <input  onChange={handleChange}  placeholder="Enter Address" name="address" isTextArea={true} className="fields" />
           <br /><br /><hr /><br />


            <h2 id="title2">EDUCATIONAL QUALIFICATIONS</h2>
            <input  onChange={handleChange} placeholder="Enter College Name" name="college" className="fields" />
            <input  onChange={handleChange} placeholder="Enter Admission Year" name="admcollege" className="fields" />
            <input  onChange={handleChange} placeholder="Enter Passing Year" name="pascollege" className="fields" />
            <br></br><br></br><br></br>

            <input  onChange={handleChange} placeholder="Enter University Name" name="university" className="fields" />
            <input  onChange={handleChange} placeholder="Enter Admission Year" name="admdcollege" className="fields" />
            <input  onChange={handleChange} placeholder="Enter Graduation Year" name="graduationYear" className="fields" />
            <br></br><br></br><br></br>

            <input  onChange={handleChange} placeholder="Enter Course" name="course" className="fields" />
            <input  onChange={handleChange} placeholder="Enter Additional Courses (if any)" name="addcourse" className="fields" />
            <input  onChange={handleChange} placeholder="Enter Online Courses (if any)" name="oncourse" className="fields" />

            <br /><br /><hr /><br />

            <h2 id="title3">LANGUAGES & SKILLS</h2>
            <input  onChange={handleChange} placeholder="Enter Languages Known" name="lang" id="fieldslang" />
            <input  onChange={handleChange} placeholder="Enter Your Professional Skills" name="skills" id="fieldslang" />
            <br /><br /><hr /><br />


            <br></br>
            <button className='generate-button' onClick={()=>{
                onButtonClick()
            }}>Generate Resume <HiArrowRight /></button>
            </div>
        </div>
        
        </div>
        }
    </>
  )
}


export default PromptUser;