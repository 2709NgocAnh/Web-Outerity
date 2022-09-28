import Widget from '~/admin/Component/widget/Widget';
import './home.scss';
import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
// import Featured from '../../components/featured/Featured';
// import Chart from '../../components/chart/Chart';
import Table from '~/admin/Component/table/Table';
const Home = () => {
    return (
        <div className="home">
            {/* <Sidebar /> */}
            <div className="homeContainer">
                {/* <Navbar /> */}
                <div className="widgets">
                    <Widget type="user" />
                    <Widget type="category" />
                    <Widget type="product" />
                    <Widget type="order" />
                </div>
                {/* <div className="charts">
                    <Featured />
                    <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
                </div> */}
                {/* <div className="listContainer">
                    <div className="listTitle">Latest Transactions</div>
                    <Table />
                </div> */}
            </div>
        </div>
    );
};

export default Home;
