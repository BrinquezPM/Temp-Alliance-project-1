import React, { Component } from 'react';
import Illustration from '../Images/ApplicationFormPage/Running-amico.png';
import info from '../Images/ApplicationFormPage/InfoIcon.png';
import playbtn from '../Images/ApplicationFormPage/PlayButton.png';
import './StyleSheet.css';

export class ApplicationForm extends Component {
    static displayName = ApplicationForm.name;

    render() {
        return (
            <div>
                <p style={{ float: "left" }} ><img src={Illustration} alt = "illustration"></img></p>
                <forms style={{ float: "center" }} method = "POST">
                    <table >
                        <thead>
                            <th colSpan = "2">                             
                                <h1>You're almost there!</h1>
                            </th>
                        </thead>
                        <tbody>
                            <tr >
                                <td colSpan="2">
                                <p style={{ fontSize: '22px' }}>We're excited to have you onboard, but before we do that, let's get to know you a little more first.</p>
                                </td>
                            </tr>

                            <tr>
                                <td style={{ width: '50%' }} >First Name</td>
                                <td style={{ width: '50%' }} >Last Name</td>
                        </tr>
                            <tr>
                                <td style={{ width: '50%' }}>
                                    <input type="text" className ="input1" placeholder="John"></input>
                                </td>
                                <td style={{ width: '50%' }}>
                                    <input type="text" className="input1" placeholder="Doe"></input>
                                </td>
                                
                            </tr>
                            <tr>
                                <td className="emptySpace"></td>
                            </tr>
                            <tr>
                                <td>Email Address</td>
                            </tr>
                            <tr>
                                <td colSpan="2" style={{ width: '50%' }}>
                                    <input type="text" className="input2" placeholder="johndoe@alliance.com"></input>
                                </td>
                            </tr>
                            <tr>
                                <td className="emptySpace"></td>
                            </tr>
                            <tr>
                                <td style={{ width: '50%' }} >Curriculum Vitae (CV)</td>
                                <td style={{ width: '50%' }} >Passport Sized Photo</td>
                            </tr>
                          
                            <tr>
                                <td style={{ width: '50%' }}> <input type="submit" value="Upload CV" className = "submit1"></input></td>
                                <td style={{ width: '50%' }}> <input type="submit" value="Upload Photo" className="submit1"></input></td>
                            </tr>
                            <tr>
                                <td style={{ width: '50%' }} ><img src={info} alt = "info icon"></img>File Format: PDF</td>
                                <td style={{ width: '50%' }} ><img src={info} alt="info icon"></img>File Format: JPEG & PNG</td>
                            </tr>

                            <tr>
                                <td>
                                    <td style={{ width: '50%' }} ><img src={playbtn} alt="play button"></img>File Format: PDF</td>
                                </td>
                            </tr>
                        </tbody>
                    </table>
          {/*          <ul style={{ listStyleType: 'none' }}>
                        <li></li>
                        <li></li>
                        <li>First Name&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Last Name</li>
                        
                        <li><input placeholder="John"></input> &nbsp; &nbsp; <input placeholder="Doe"></input></li>
                        
                        &nbsp;
                        <li><p>Email Address</p></li>

                        <input placeholder="doe.john@alliance.ph" size="50"></input>
                        <p> </p>
                        <button className = "uploadBTN">Upload CV</button>
                     <li><img src={ButtonPlay} alt="play button"></img><b>    Start Your Journey</b></li>
                        <li className="arrow"><img src={Arrow} alt="Arrow"></img></li>
                    </ul>
                  */}

                </forms>


            </div>
        );
    }
}
