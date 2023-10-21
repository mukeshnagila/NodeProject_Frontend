import React, { useContext, useEffect, useState } from "react";
import { store } from "../../../ContextStore/ContextStore";
import Slider from "../../../Slider/Slider";
import { NavLink } from "react-router-dom";


const Home = () => {
    const [cdata] = useContext(store);
    console.log(cdata);

    const [SliderImgData1, SetSliderImgData1] = useState([]);    
    const [SliderImgData2, SetSliderImgData2] = useState([]);    
    const [SliderImgData3, SetSliderImgData3] = useState([]);
    const [LatestImgData, SetLatestImgData] = useState([]);
    const [AllImgData, SetAllImgData] = useState([]);
    const [AllImgData2, SetAllImgData2] = useState([]);
    const [AllImgData3, SetAllImgData3] = useState([]);
    const [TopBollywoodMainData, SetTopBollywoodMainData] = useState([]);

    
    var num = 0;
    var num2 = 0;

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
                const HomeSliderImg1 = data.filter((item) => item.category === "SliderImg1");
                SetSliderImgData1(HomeSliderImg1);

                const HomeSliderImg2 = data.filter((item) => item.category === "SliderImg2");
                SetSliderImgData2(HomeSliderImg2);

                const HomeSliderImg3 = data.filter((item) => item.category === "SliderImg3");
                SetSliderImgData3(HomeSliderImg3);

                const HomeLatestImg = data.filter((item) => item.category === "LatestImg"  && item.id % 3 === 0);
                SetLatestImgData(HomeLatestImg);

                const HomeAllImg = data.filter((item) => item.id % 9 === 0);
                SetAllImgData(HomeAllImg);

                const HomeAllImg2 = data.filter((item) => item.id % 20 === 0);
                SetAllImgData2(HomeAllImg2);

                const HomeAllImg3 = data.filter((item) => item.id % 20 === 0);
                SetAllImgData3(HomeAllImg3);

                const HomeTopBollywoodMain = data.filter((item) => item.category === "TopBollywoodMain");
                SetTopBollywoodMainData(HomeTopBollywoodMain);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, [])

    return(
        
        <>
            <div className="startsliderhome">
                <Slider />
            </div>
            <div className="home">
                    <div className="homecontainer">
                        {SliderImgData1.map((item,index) => {
                            return(
                                <div className="Csliderimg1" key={index}>
                                    <img className="sliderimg" src={item.image} alt="homeimg1"></img>
                                </div>
                            )
                        })}

                        <div className="Csliderimg2" >
                                    {SliderImgData2.map((item,index) => {
                                        return(
                                            <>
                                                <span key={index}>
                                                        <img className="sliderimg2" src={item.image} alt="homeimg1"></img><br/>
                                                </span>
                                            </>
                                        )
                                    })} 
                                    {SliderImgData3.map((item,index) => {
                                        return(                
                                            <>
                                                <span key={index}>
                                                        <img className="sliderimg2" src={item.image} alt="homeimg1"></img>
                                                </span>
                                            </>
                                        )
                                    })}    
                        </div>
                    </div>

                    {/*....................................... Latest  Post ..................................*/}


                    <h1 className="theh1"> The_Latest.... </h1><br/>
                    <div className="Hcontainer2">
                        {LatestImgData.map((item, index) => {
                            return(
                                <>
                                    <div className="HCchildbox" key={index}>
                                    <NavLink onClick={scrollToTop} className= "linkunderline" to={`/Details/${item.id}`}>
                                        <img className="latestIMG" src={item.image} alt="HomeContentImg"></img>
                                        <h2 className="name">{item.name}</h2><br />
                                    </NavLink>    
                                        <p className="description">{item.description.slice(0, 250)}.......</p>
                                    </div>
                                </>
                            )
                        })}
                    </div>


                    {/*....................................... Top Stories Of Home Page And Top Post ..................................*/}

                    <div className="container">
                    <div className="box1">
                        <h1 className="theh1"> Top_Stories </h1>
                            {AllImgData.map((item, index) => {
                                console.log(item);
                                return(
                                    <div key={index}>
                                                <div className="inlinediv">
                                                    <div className="forimg">
                                                    <NavLink onClick={scrollToTop} className= "linkunderline" to={`/Details/${item.id}`}>
                                                        <img className="img" src={item.image} alt="bollywood img"></img>
                                                    </NavLink>    
                                                    </div>
                                                    <div className="forcontent">
                                                    <NavLink onClick={scrollToTop} className= "linkunderline" to={`/Details/${item.id}`}>
                                                        <h2 className="name">{item.name}</h2>
                                                    </NavLink>    
                                                        <p className="description">{item.description.slice(0, 250)}.....</p>
                                                        <h3 className="category">{item.category} : </h3>
                                                        <p className="date">{item.date}</p>
                                                    </div>
                                                </div><hr/>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="box2">
                                <h1 className="theh1"> Top_Posts </h1><br/>
                                <div className="toppost">
                                    {TopBollywoodMainData.map((item, index) => {
                                        return(
                                            <div key={index}>
                                                <img className="Topimg" src={item.image} alt="TopPost Img"></img>
                                                <div className="TopContainer">
                                                    <div className="TCpart1">
                                                    <NavLink onClick={scrollToTop} className= "linkunderline" to={`/Details/${item.id}`}>
                                                        <h2 className="Topname">{item.name}</h2>
                                                    </NavLink>    
                                                        <h3 className="category">{item.category} : <span className="date">{item.date}</span></h3>
                                                    </div>
                                                    <div className="TCpart2">
                                                        <p className="TCpart2p">{num = num + 1}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div><br/><hr/>
                                {AllImgData2.map((item, index) => {
                                        return(
                                            <div key={index}>
                                                <div className="smalltopblog">
                                                    <div className="smalltopimg">
                                                    <NavLink onClick={scrollToTop} className= "linkunderline" to={`/Details/${item.id}`}>
                                                        <img className="smalltopimg" src={item.image} alt="smalltopimg"></img>
                                                    </NavLink>    
                                                    </div>
                                                    <div className="smalltoptext">
                                                    <NavLink onClick={scrollToTop} className= "linkunderline" to={`/Details/${item.id}`}>
                                                        <h2 className="smalltopname">{item.name}</h2>
                                                    </NavLink>    
                                                        <h3 className="category">{item.category} : <span className="date">{item.date}</span></h3>
                                                    </div>
                                                        <p className="smalltopp">{num = num + 1}</p>
                                                </div><hr/>
                                            </div>
                                        )
                                    })}

                                <div className="foradvertisement">
                                        {cdata.filter((item) => item.category === 'HomeImg1').map((item, index) => {
                                            return(
                                                <p className="advertisementP" key={index}>
                                                        <img className="advertisementP" src={item.image} alt="AddImg"></img>
                                                </p>
                                            )
                                        })}
                                </div>

                                <h1 className="theh1"> Trands- </h1><br/>
                                {AllImgData3.map((item, index) => {
                                        return(
                                            <div key={index}>
                                                <div className="smalltopblog">
                                                    <div className="smalltopimg">
                                                    <NavLink onClick={scrollToTop} className= "linkunderline" to={`/Details/${item.id}`}>
                                                        <img className="smalltopimg" src={item.image} alt="smalltopimg"></img>
                                                    </NavLink>    
                                                    </div>
                                                    <div className="smalltoptext">
                                                    <NavLink onClick={scrollToTop} className= "linkunderline" to={`/Details/${item.id}`}>
                                                        <h2 className="smalltopname">{item.name}</h2>
                                                    </NavLink>    
                                                        <h3 className="category">{item.category} : <span className="date">{item.date}</span></h3>
                                                    </div>
                                                    <div className="smalltopp">
                                                        <p className="smalltopp">{num2 = num2 + 1}</p>
                                                    </div>    
                                                </div><hr/>
                                            </div>
                                        )
                                    })}


                                <div className="foradvertisement">
                                        {cdata.filter((item) => item.category === 'HomeImg2').map((item, index) => {
                                            return(
                                                <p className="advertisementP" key={index}>
                                                        <img className="advertisementP" src={item.image} alt="AddImg"></img>
                                                </p>
                                            )
                                        })}
                                </div>
                                
                                    
                        </div>
                </div>    
                    
            </div>
        </>    
    )
}

export default Home;