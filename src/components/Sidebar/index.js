import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";

import { FaAngleRight, FaBell, FaCartArrowDown } from "react-icons/fa6";
import { FaProductHunt } from "react-icons/fa";
import { MdDashboard, MdMessage } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";
import { MyContext } from '../../App';

const Sidebar = () => {

    const [activeTab, setActiveTab] = useState(null);
    const [isToggleSubmenu, setIsToggleSubmenu] = useState(false);

    const context = useContext(MyContext);

    const isOpenSubmenu=(index)=> {
        setActiveTab(index);
        setIsToggleSubmenu(!isToggleSubmenu);
    }


    return (
        <>
            <div className="sidebar">
                <ul>
                    <li>
                        <Link to="/dashboard">
                            <Button className={`w-100 ${activeTab === 0 ? 'active': ''}`}>
                                <span className="icon"><MdDashboard /></span>
                                Tổng quan
                                <span className="arrow"><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        
                            <Button className={`w-100 ${activeTab === 1 && isToggleSubmenu ===true ? 'active': ''}`} onClick={()=>isOpenSubmenu(1)}>
                                <span className="icon"><FaProductHunt /></span>
                                Sản phẩm
                                <span className="arrow"><FaAngleRight /></span>
                            </Button>
                            
                            <div className={`submenuWrapper ${activeTab === 1 && isToggleSubmenu ===true ? 'colapse': 'colapsed'} `}>
                                <ul className="submenu">
                                    <li><Link to="/">Product List</Link></li>
                                    <li><Link to="/">Product View</Link></li>
                                    <li><Link to="/">Product Upload</Link></li>
                                </ul>
                            </div>
                                  
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab === 2 ? 'active': ''}`}>
                                <span className="icon"><FaCartArrowDown /></span>
                                Đặt hàng
                                <span className="arrow"><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab === 3 ? 'active': ''}`}>
                                <span className="icon"><MdMessage /></span>
                                Tin nhắn
                                <span className="arrow"><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab === 4 ? 'active': ''}`}>
                                <span className="icon"><FaBell /></span>
                                Thông báo
                                <span className="arrow"><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab === 5 ? 'active': ''}`}>
                                <span className="icon"><IoIosSettings /></span>
                                Cài đặt
                                <span className="arrow"><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>

                </ul>

                <br/>

                <div className="logoutWrapper">
                    <div className="logoutBox">
                        <Button variant="contained"><IoMdLogOut/> Logout</Button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Sidebar;