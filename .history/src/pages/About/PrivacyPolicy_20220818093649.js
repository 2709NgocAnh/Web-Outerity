function PrivacyPolicy() {
    return (
        <div class="pageAbout-us page-layout">
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
                                    <h1>Chính sách bảo mật</h1>
                                </div>
                                <div class="wrapbox-content-page">
                                    <div class="content-page ">
                                        <p>
                                            Chính sách bảo mật này nhằm giúp Quý khách hiểu về cách website thu thập và
                                            sử dụng thông tin cá nhân của mình thông qua việc sử dụng trang web, bao gồm
                                            mọi thông tin có thể cung cấp thông qua trang web khi Quý khách đăng ký tài
                                            khoản, đăng ký nhận thông tin liên lạc từ chúng tôi, hoặc khi Quý khách mua
                                            sản phẩm, dịch vụ, yêu cầu thêm thông tin dịch vụ từ chúng tôi.
                                        </p>
                                        <p>
                                            Chúng tôi sử dụng thông tin cá nhân của Quý khách để liên lạc khi cần thiết
                                            liên quan đến việc Quý khách sử dụng website của chúng tôi, để trả lời các
                                            câu hỏi hoặc gửi tài liệu và thông tin Quý khách yêu cầu.
                                        </p>
                                        <p>
                                            <span class="wysiwyg-font-size-medium">
                                                Trang web của chúng tôi coi trọng việc bảo mật thông tin và sử dụng các
                                                biện pháp tốt nhất để bảo vệ thông tin cũng như việc thanh toán của
                                                khách hàng.&nbsp;
                                            </span>
                                        </p>
                                        <p>
                                            <span class="wysiwyg-font-size-medium">
                                                Mọi thông tin giao dịch sẽ được bảo mật ngoại trừ trong trường hợp cơ
                                                quan pháp luật yêu cầu.
                                            </span>
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

export default PrivacyPolicy;
