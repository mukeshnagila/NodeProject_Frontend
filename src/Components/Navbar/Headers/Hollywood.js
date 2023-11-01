////////////////////// DAta By Using API //////////////////////

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Hollywood = () => {

    const [hollywoodData, setHollywoodData] = useState([]);
    const [topHollywoodMainData, setTopHollywoodMainData] = useState([]);
    const [topHollywoodSmallData, setTopHollywoodSmallData] = useState([]);
    const [moreHollywoodData, setMoreHollywoodData] = useState([]);
    const [HollyImg1Data, SetHollyImg1Data] = useState([]);
    const [HollyImg2Data, SetHollyImg2Data] = useState([]); 

    useEffect(() => {
        // const apiUrl = "http://localhost:2003/api/data";
        const apiUrl = "https://node-backend-project-x42k.onrender.com/api/data";
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                const filteredHollywoodData = data.filter((item) => item.category === "Hollywood");
                setHollywoodData(filteredHollywoodData);

                const topHollywoodMainItems = data.filter((item) => item.category === "TopHollywoodMain");
                setTopHollywoodMainData(topHollywoodMainItems);

                const topHollywoodSmallItems = data.filter((item) => item.category === "Top Holly");
                setTopHollywoodSmallData(topHollywoodSmallItems);

                const moreHollywoodItems = data.filter((item) => item.category === "HollywoodMore");
                setMoreHollywoodData(moreHollywoodItems);

                const HollyImg1Items = data.filter((item) => item.category === "HollyImg1");
                SetHollyImg1Data(HollyImg1Items);

                const HollyImg2Items = data.filter((item) => item.category === "HollyImg2");
                SetHollyImg2Data(HollyImg2Items);
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
                        <h1 className="theh1"> Hollywood </h1>
                        {hollywoodData.map((item, index) => {
                            return (
                                <div key={index}>
                                    <div className="inlinediv">
                                        <div className="forimg">
                                            <NavLink onClick={scrollToTop} className="linkunderline" to={`/Details/${item.id}`}>
                                                <img className="img" src={item.image} alt="Hollywood img"></img>
                                            </NavLink>
                                        </div>
                                        <div className="forcontent">
                                            <NavLink onClick={scrollToTop} className="linkunderline" to={`/Details/${item.id}`}>
                                                <h2 className="name">{item.name}</h2>
                                            </NavLink>
                                            <p className="description">{item.description.slice(0, 360)}......</p>
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
                            {topHollywoodMainData.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <img className="Topimg" src={item.image} alt="TopPost Img"></img>
                                        <div className="TopContainer">
                                            <div className="TCpart1">
                                                <NavLink onClick={scrollToTop} className="linkunderline" to={`/Details/${item.id}`}>
                                                    <h2 className="Topname">{item.name}</h2>
                                                </NavLink>
                                                <h3 className="category">TopHollywood : <span className="date">{item.date}</span></h3>
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
                        {topHollywoodSmallData.map((item, index) => {
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
                                            <h3 className="category">TopHollywood : <span className="date">{item.date}</span></h3>
                                        </div>
                                        <p className="smalltopp">{num = num + 1}</p>
                                    </div>
                                    <hr />
                                </div>
                            );
                        })}

                        <div className="foradvertisement">
                            {HollyImg1Data.map((item, index) => {
                                return (
                                    <p className="advertisementP2" key={index}>
                                        <img className="advertisementP2" src={item.image} alt="AddImg"></img>
                                    </p>
                                );
                            })}
                        </div>

                        <h1 className="theh1"> More- </h1>
                        <br />
                        {moreHollywoodData.map((item, index) => {
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
                                            <h3 className="category">TopHollywood : <span className="date">{item.date}</span></h3>
                                        </div>
                                        <p className="smalltopp">{num2 = num2 + 1}</p>
                                    </div>
                                    <hr />
                                </div>
                            );
                        })}

                        <div className="foradvertisement">
                            {HollyImg2Data.map((item, index) => {
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

export default Hollywood;

