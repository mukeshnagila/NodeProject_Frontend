////////////////////// DAta By Using API //////////////////////

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Fitness = () => {

    const [fitnessData, setFitnessData] = useState([]);
    const [topFitnessMainData, setTopFitnessMainData] = useState([]);
    const [topFitnessSmallData, setTopFitnessSmallData] = useState([]);
    const [someNewData, setSomeNewData] = useState([]);
    const [FitnessImg1Data, SetFitnessImg1Data] = useState([]);
    const [FitnessImg2Data, SetFitnessImg2Data] = useState([]);

    useEffect(() => {
        // const apiUrl = "http://localhost:2003/api/data";
        const apiUrl = "https://node-backend-project-x42k.onrender.com/api/data";
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                const filteredFitnessData = data.filter((item) => item.category === "Fitness");
                setFitnessData(filteredFitnessData);

                const topFitnessMainItems = data.filter((item) => item.category === "TopFitnessMain");
                setTopFitnessMainData(topFitnessMainItems);

                const topFitnessSmallItems = data.filter((item) => item.category === "Top FitnessS");
                setTopFitnessSmallData(topFitnessSmallItems);

                const someNewItems = data.filter((item) => item.category === "FitnessMore");
                setSomeNewData(someNewItems);

                const FitnessImg1Items = data.filter((item) => item.category === "FitnessImg1");
                SetFitnessImg1Data(FitnessImg1Items);

                const FitnessImg2Items = data.filter((item) => item.category === "FitnessImg2");
                SetFitnessImg2Data(FitnessImg2Items);
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
                        <h1 className="theh1"> Fitness </h1>
                        {fitnessData.map((item, index) => {
                            return (
                                <div key={index}>
                                    <div className="inlinediv">
                                        <div className="forimg">
                                            <NavLink onClick={scrollToTop} className="linkunderline" to={`/Details/${item.id}`}>
                                                <img className="img" src={item.image} alt="Fitness img"></img>
                                            </NavLink>
                                        </div>
                                        <div className="forcontent">
                                            <NavLink onClick={scrollToTop} className="linkunderline" to={`/Details/${item.id}`}>
                                                <h2 className="name">{item.name}</h2>
                                            </NavLink>
                                            <p className="description">{item.description ? item.description.slice(0, 360) : ""}......</p>
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
                            {topFitnessMainData.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <img className="Topimg" src={item.image} alt="TopPost Img"></img>
                                        <div className="TopContainer">
                                            <div className="TCpart1">
                                                <NavLink onClick={scrollToTop} className="linkunderline" to={`/Details/${item.id}`}>
                                                    <h2 className="Topname">{item.name}</h2>
                                                </NavLink>
                                                <h3 className="category">TopFitness : <span className="date">{item.date}</span></h3>
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
                        {topFitnessSmallData.map((item, index) => {
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
                                            <h3 className="category">TopFitness : <span className="date">{item.date}</span></h3>
                                        </div>
                                        <p className="smalltopp">{num = num + 1}</p>
                                    </div>
                                    <hr />
                                </div>
                            );
                        })}
                        <div className="foradvertisement">
                            {FitnessImg1Data.map((item, index) => {
                                return(
                                    <p className="advertisementP2" key={index}>
                                        <img className="advertisementP2" src={item.image} alt="AddImg"></img>
                                    </p>
                                )
                            })}
                        </div>
                        <h1 className="theh1"> Some_New- </h1>
                        <br />
                        {someNewData.map((item, index) => {
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
                                            <h3 className="category">TopFitness : <span className="date">{item.date}</span></h3>
                                        </div>
                                        <p className="smalltopp">{num2 = num2 + 1}</p>
                                    </div>
                                    <hr />
                                </div>
                            );
                        })}
                        <div className="foradvertisement">
                            {FitnessImg2Data.map((item, index) => {
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

export default Fitness;



