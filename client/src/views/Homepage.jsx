import { useEffect, useState } from "react"
import { Button } from "../components/button/Button"
import beamlogo from "../icons/beamlogo.svg"
import caret from "../icons/caret.svg"
import blackcaret from "../icons/blackcaret.svg"
import rightarrow from "../icons/rightarrow.svg"
import onTrack from "../icons/onTrack.svg"
import behind from "../icons/behind.svg"
import atRisk from "../icons/atRisk.svg"
import { Input } from "../components";
import Chart from "../components/chart"
import axiosRequest from "../utils/apiServices"


const Homepage = () => {
    const [activeTab, setActiveTab] = useState(1)
    const [search, setSearch] = useState('')
    const [apiData, setApiData] = useState('')
    const [tabs] = useState([{id: 1, label: "People"}, {id: 2, label: "Reporting"}])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {        
        try {
            const { data } = await axiosRequest("get", "/data");
            setApiData(data.data)
        } catch (err) {
            alert(err)
            return;
        }
    };

    const changeTab = (tabNumber) => {
        setActiveTab(tabNumber)
    }

    const toPercent = apiData && apiData.map(value => {
        let total = value.atRisk + value.behind + value.onTrack;

        value.atRisk = Number(((value.atRisk/total)*100).toFixed(2));
        value.behind = Number(((value.behind/total)*100).toFixed(2));
        value.onTrack = Number(((value.onTrack/total)*100).toFixed(2));
        return value;
    })

    const handleChange = (e) => {
        let val = e.target.value;
        setSearch(val);
    };

    return (
        <div className="home">
            <div className="main-cont">
                <div className="top-bar flex justify-between">
                    <div className="flex justify-around each-bar">
                        <div><img src={beamlogo} alt="beamlogo"/></div>
                        <div><p>Orangeboat</p></div>
                        <div><img src={caret} alt="caret"/></div>
                        
                    </div>
                    
                    <div className="flex justify-around center-bar">
                        <h3 style={{color: "#5F5F8C"}}>You</h3>
                        <h3 style={{color: "#5F5F8C"}}>Your Team</h3>
                        <div className="active-center-bar">
                            <h3 style={{color: "#585ADF"}}>Admin</h3>
                        </div>
                    </div>

                    <div className="flex justify-around  each-bar">
                        <div className="center-abbr">
                            <p style={{color: "#5F5F8C"}}>EU</p>
                        </div>
                        <div>
                            <p>Ekene</p>
                        </div>
                        <div>
                            <img src={blackcaret} alt="caret"/>
                        </div>
                        
                    </div>
                </div>

                <div className="body-sect">
                    <div className="top">
                        <h2 className="workspace">Your Workspace</h2>

                    </div>

                    <div className="mainbody container">

                        <div className="flex justify-start" style={{borderBottom: "1px solid #EDEDF2"}}> 
                            {tabs.map(tab => {
                                return <div className={tab.id === activeTab? 'active mr-10 tabs': 'mr-10 tabs'} onClick={()=>changeTab(tab.id)} >
                                    {tab.label}
                                </div>
                            })}
                        </div>

                        <div className="flex mt-4">
                            <div className="w-1/5">

                                <div className="flex mt-3 justify-between goals">
                                    <div>Goals</div>
                                    <div><img src={rightarrow} alt="rightarrow"/></div>
                                </div>
                            </div>
                            <div className="w-4/5">
                                <div className="flex justify-around">
                                    <div className="w-5/6 ...">
                                    <div className="mt-3 flex mr-10" style={{ border: "1px solid #cecede", borderRadius: "6px"}}>
                                        <div className="w-1/6 flex justify-around select">
                                            <div>
                                                <h3>Select</h3>
                                            </div>
                                            <div>
                                                <img src={caret} alt="caret"/>
                                            </div>
                                        </div>
                                        <div className="w-5/6">
                                            <Input
                                            placeholder="Search"
                                            name="search"
                                            type="text"
                                            value={search}
                                            className="search"
                                            onChange={handleChange}
                                            />
                                        </div>

                                    </div>
                                    </div>
                                    <div class="w-1/6 mt-3">
                                        <Button className="filter-btn" text="Filter"/>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex mt-6 h-24 px-6 goalstatus">
                                        <div className="w-5/6">
                                            <h3 style={{color:"#1E1E2F"}}>Goal Status</h3>
                                        </div>
                                        <div className="w-1/6">
                                            <Button className="report-btn" text="View report"/>
                                        </div>
                                    </div>

                                    <div className="flex justify-around py-8 px-6 bottom">
                                        <div className="w-1/2">
                                            <Chart data={toPercent} />
                                        </div>
                                        <div className="w-1/2 metrics">
                                            <div className="flex justify-between px-9 h-20" style={{alignItems: "center"}}>
                                                <div style={{color: "#1E1E2F"}}>Status</div>
                                                <div style={{color: "#1E1E2F"}}>
                                                    <span style={{color:"#5F5F8C"}}>Metrics as at</span> June 31st
                                                </div>
                                            </div>

                                            <div className="flex px-9 justify-between h-20 ontrack">
                                            <div className="flex">
                                                <img src={onTrack} alt=""/>
                                                <h4>On track</h4>
                                            </div>
                                            <div><h4 style={{color: "#585ADF"}}>View</h4></div>
                                            </div>

                                            <div className="flex px-9 justify-between h-20 behind">
                                                <div className="flex">
                                                    <img src={behind} alt=""/>
                                                    <h4>Behind</h4>
                                                </div>
                                                <div>
                                                    <h4 style={{color: "#585ADF"}}>View</h4>
                                                </div>
                                            </div>

                                            <div className="flex px-9 justify-between h-20" style={{alignItems: "center"}}>
                                            <div className="flex">
                                                <img src={atRisk} alt=""/>
                                                <h4>At risk</h4>
                                            </div>
                                            <div><h4 style={{color: "#585ADF"}}>View</h4></div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>   
        </div>
    )
}

export default Homepage