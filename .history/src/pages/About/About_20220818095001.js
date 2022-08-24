import React from 'react';
import './About.css';
import { NavLink } from 'react-router-dom';
import config from '~/Components/config';
function About() {
    return (
        <div className="About">
            <div class="wrapper-row pd-page">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-3 col-sm-12 col-xs-12">
                            <div class="sidebar-page">
                                <div class="group-menu">
                                    <div class="page_menu_title title_block">
                                        <h2>Danh mục trang</h2>
                                    </div>
                                    <div class="layered layered-category">
                                        <div class="layered-content">
                                            <ul class="tree-menu">
                                                <li class="active">
                                                    <span></span>
                                                    <NavLink
                                                        className={(nav) => ({ active: nav.isActive })}
                                                        to={config.routes.about}
                                                    >
                                                        Giới thiệu
                                                    </NavLink>
                                                </li>

                                                <li class="">
                                                    <span></span>
                                                    <NavLink
                                                        className={(nav) => ({ active: nav.isActive })}
                                                        to={config.routes.returnpolicy}
                                                    >
                                                        Chính sách đổi trả
                                                    </NavLink>
                                                </li>

                                                <li class="">
                                                    <span></span>
                                                    <NavLink
                                                        className={(nav) => ({ active: nav.isActive })}
                                                        to={config.routes.privacypolicy}
                                                    >
                                                        Chính sách bảo mật
                                                    </NavLink>
                                                </li>

                                                <li class="">
                                                    <span></span>
                                                    <NavLink
                                                        className={(nav) => ({ active: nav.isActive })}
                                                        to={config.routes.termsservice}
                                                    >
                                                        Điều khoản dịch vụ
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-9 col-sm-12 col-xs-12">
                            <div class="page-wrapper">
                                <div class="heading-page">
                                    <h1>Giới thiệu</h1>
                                </div>
                                <div class="wrapbox-content-page">
                                    <div class="content-page ">
                                        <p>
                                            Chúng mình xuất hiện để đem tới mọi người một chất lượng áo tốt nhất, với
                                            giá thành hấp dẫn nhất để đưa Outerity đến với tất cả lứa tuổi và khắp mọi
                                            vùng miền đất nước
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
