import React, { useContext, useEffect, useState } from "react";
import {NavLink} from "react-router-dom";
import LastFooter from "./LastFooter";
import { store } from "../../../ContextStore/ContextStore";

function Footer(){

    const [cdata] = useContext(store);
    console.log(cdata);

    const [FooterIconData1, SetFooterIconData1] = useState([]);    
    const [FooterIconData2, SetFooterIconData2] = useState([]);    
    const [FooterIconData3, SetFooterIconData3] = useState([]);
    const [FooterIconData4, SetFooterIconData4] = useState([]);

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth", 
        });
      };

      useEffect(() => {
        const apiUrl = "http://localhost:2003/api/data";
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                const FooterIconImg1 = data.filter((item) => item.category === "FooterIcon1");
                SetFooterIconData1(FooterIconImg1);

                const FooterIconImg2 = data.filter((item) => item.category === "FooterIcon2");
                SetFooterIconData2(FooterIconImg2);

                const FooterIconImg3 = data.filter((item) => item.category === "FooterIcon3");
                SetFooterIconData3(FooterIconImg3);

                const FooterIconImg4 = data.filter((item) => item.category === "FooterIcon4");
                SetFooterIconData4(FooterIconImg4);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, [])  

    return(
        <>  
            <div className="Footer">
                <div className="Fcontainer">
                    <div className="Fbox1">
                        <div className='logo'>
                            <h4 className='logoh4'>The</h4><h1 className='logoh1'>Siren</h1>
                        </div><hr/><br/>
                        <h3>Contact: +91 772 882 7144</h3>
                        <h4>Email: nagilamukesh43@gmail.com</h4>
                        <h4>Address: Pithoragarh, Uttrakhand</h4>
                        <div className="icons">
                                        {FooterIconData1.map((item, index) => {
                                            return(
                                                <>
                                                    <a href="https://www.instagram.com/nagilabhai/"><img src={item.image} alt="instaimg"></img></a>
                                                </>
                                            )
                                        })}
                                        {FooterIconData2.map((item, index) => {
                                            return(
                                                <>
                                                    <a href="https://www.facebook.com/mukesh.nagila.9"><img src={item.image} alt="instaimg"></img></a>
                                                </>
                                            )
                                        })}
                                        {FooterIconData3.map((item, index) => {
                                            return(
                                                <>
                                                    <a href="https://www.linkedin.com/in/mukesh-nagila-989775255/"><img src={item.image} alt="instaimg"></img></a>
                                                </>
                                            )
                                        })}
                                        {FooterIconData4.map((item, index) => {
                                            return(
                                                <>
                                                    <a href="https://www.youtube.com/channel/UC0KGSCNE-RF1CLY3gUmop8A"><img src={item.image} alt="instaimg"></img></a>
                                                </>
                                            )
                                        })}
                        </div>
                    </div>
                    <div className="Fbox2">
                        <h3>Know More</h3><br/>
                        <h5>"You want potential leads to be able to get in contact with you as easily as possible. For that reason, website footers will often contain contact details like a business email, phone number, or mailing address. Or it might simply include a link that brings you to a contact form."</h5>
                    </div>
                    <div className="Fbox3">
                        <h3>Quick Link's</h3>                    
                        <div><NavLink onClick={scrollToTop} style={({isActive}) => ({color : isActive ? "blue" : "White"})} className='Linkline' to="/" >Home</NavLink></div>
                        <div><NavLink onClick={scrollToTop} style={({isActive}) => ({color : isActive ? "blue" : "White"})} className='Linkline' to="/Bollywood" >Bollywood</NavLink></div>
                        <div><NavLink onClick={scrollToTop} style={({isActive}) => ({color : isActive ? "blue" : "White"})} className='Linkline' to="/Technology" >Technology</NavLink></div>
                        <div><NavLink onClick={scrollToTop} style={({isActive}) => ({color : isActive ? "blue" : "White"})} className='Linkline' to="/Hollywood" >Hollywood</NavLink></div>
                        <div><NavLink onClick={scrollToTop} style={({isActive}) => ({color : isActive ? "blue" : "White"})} className='Linkline' to="/Fitness" >Fitness</NavLink></div>
                        <div><NavLink onClick={scrollToTop} style={({isActive}) => ({color : isActive ? "blue" : "White"})} className='Linkline' to="/Food" >Food</NavLink></div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                    <LastFooter />
            </div>        
        </>
    )
}

export default Footer;