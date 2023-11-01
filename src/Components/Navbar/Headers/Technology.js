////////////////////// DAta By Using API //////////////////////

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Technology = () => {

    const [technologyData, setTechnologyData] = useState([]);
    const [topTechMainData, setTopTechMainData] = useState([]);
    const [topTechSmallData, setTopTechSmallData] = useState([]);
    const [extraTechData, setExtraTechData] = useState([]);
    const [TechImg1Data, SetTechImg1Data] = useState([]);
    const [TechImg2Data, SetTechImg2Data] = useState([]);

    useEffect(() => {
        // const apiUrl = "http://localhost:2003/api/data";
        const apiUrl = "https://node-backend-project-x42k.onrender.com/api/data";
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                const filteredTechnologyData = data.filter((item) => item.category === "Technology");
                setTechnologyData(filteredTechnologyData);

                const topTechMainItems = data.filter((item) => item.category === "TopTechMain");
                setTopTechMainData(topTechMainItems);

                const topTechSmallItems = data.filter((item) => item.category === "TopTechSmall");
                setTopTechSmallData(topTechSmallItems);

                const extraTechItems = data.filter((item) => item.category === "extratech");
                setExtraTechData(extraTechItems);

                const TechImg1Items = data.filter((item) => item.category === "TechImg1");
                SetTechImg1Data(TechImg1Items);

                const TechImg2Items = data.filter((item) => item.category === "TechImg2");
                SetTechImg2Data(TechImg2Items);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    var num = 0;
    var num2 = 0;

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <div className="startslider">
                <div className="container">
                    <div className="box1">
                        <h1 className="theh1"> Technology </h1>
                        {technologyData.map((item, index) => {
                            return (
                                <div key={index}>
                                    <div className="inlinediv">
                                        <div className="forimg">
                                            <NavLink onClick={scrollToTop} className="linkunderline" to={`/Details/${item.id}`}>
                                                <img className="img" src={item.image} alt="Technology img"></img>
                                            </NavLink>
                                        </div>
                                        <div className="forcontent">
                                            <NavLink onClick={scrollToTop} className="linkunderline" to={`/Details/${item.id}`}>
                                                <h2 className="name">{item.name}</h2>
                                            </NavLink>
                                            <p className="description">{item.description.slice(0, 310)}......</p>
                                            <h3 className="category">{item.category} : </h3>
                                            <p className="date">{item.date}</p>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            );
                        })}
                    </div>
                    <div className="box2">
                        <h1 className="theh1"> Top_Posts </h1>
                        <br />
                        <div className="toppost">
                            {topTechMainData.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <img className="Topimg" src={item.image} alt="TopPost Img"></img>
                                        <div className="TopContainer">
                                            <div className="TCpart1">
                                                <NavLink onClick={scrollToTop} className="linkunderline" to={`/Details/${item.id}`}>
                                                    <h2 className="Topname">{item.name}</h2>
                                                </NavLink>
                                                <h3 className="category">TopTechnology : <span className="date">{item.date}</span></h3>
                                            </div>
                                            <div className="TCpart2">
                                                <p className="TCpart2p">{num = num + 1}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <br />
                        <hr />
                        {topTechSmallData.map((item, index) => {
                            return (
                                <div key={index}>
                                    <div className="smalltopblog">
                                        <div className="smalltopimg">
                                            <NavLink onClick={scrollToTop} className="linkunderline" to={`/Details/${item.id}`}>
                                                <img className="smalltopimg" src={item.image} alt="smalltopimg"></img>
                                            </NavLink>
                                        </div>
                                        <div className="smalltoptext">
                                            <NavLink onClick={scrollToTop} className="linkunderline" to={`/Details/${item.id}`}>
                                                <h2 className="smalltopname">{item.name}</h2>
                                            </NavLink>
                                            <h3 className="category">TopTechnology : <span className="date">{item.date}</span></h3>
                                        </div>
                                        <p className="smalltopp">{num = num + 1}</p>
                                    </div>
                                    <hr />
                                </div>
                            );
                        })}

                        <div className="foradvertisement">
                            {TechImg1Data.map((item, index) => {
                                return (
                                    <p className="advertisementP2" key={index}>
                                        <img className="advertisementP2" src={item.image} alt="AddImg"></img>
                                    </p>
                                );
                            })}
                        </div>

                        <h1 className="theh1"> Technology- </h1>
                        <br />
                        {extraTechData.map((item, index) => {
                            return (
                                <div key={index}>
                                    <div className="smalltopblog">
                                        <div className="smalltopimg">
                                            <NavLink onClick={scrollToTop} className="linkunderline" to={`/Details/${item.id}`}>
                                                <img className="smalltopimg" src={item.image} alt="smalltopimg"></img>
                                            </NavLink>
                                        </div>
                                        <div className="smalltoptext">
                                            <NavLink onClick={scrollToTop} className="linkunderline" to={`/Details/${item.id}`}>
                                                <h2 className="smalltopname">{item.name}</h2>
                                            </NavLink>
                                            <h3 className="category">TopTechnology : <span className="date">{item.date}</span></h3>
                                        </div>
                                        <p className="smalltopp">{num2 = num2 + 1}</p>
                                    </div>
                                    <hr />
                                </div>
                            );
                        })}

                        <div className="foradvertisement">
                            {TechImg2Data.map((item, index) => {
                                return (
                                    <p className="advertisementP2" key={index}>
                                        <img className="advertisementP2" src={item.image} alt="AddImg"></img>
                                    </p>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Technology;
