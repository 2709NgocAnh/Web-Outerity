import './About.css';

function Navbar() {
    return (
        <>
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
                                                <li class="">
                                                    <span></span>
                                                    <a
                                                        class=""
                                                        href="/pages/about-us"
                                                        title="Giới thiệu"
                                                        target="_self"
                                                    >
                                                        Giới thiệu
                                                    </a>
                                                </li>

                                                <li class="active">
                                                    <span></span>
                                                    <a
                                                        class=" current"
                                                        href="/pages/chinh-sach-doi-tra"
                                                        title="Chính sách đổi trả"
                                                        target="_self"
                                                    >
                                                        Chính sách đổi trả
                                                    </a>
                                                </li>

                                                <li class="">
                                                    <span></span>
                                                    <a
                                                        class=""
                                                        href="/pages/chinh-sach-bao-mat"
                                                        title="Chính sách bảo mật"
                                                        target="_self"
                                                    >
                                                        Chính sách bảo mật
                                                    </a>
                                                </li>

                                                <li class="">
                                                    <span></span>
                                                    <a
                                                        class=""
                                                        href="/pages/dieu-khoan-dich-vu"
                                                        title="Điều khoản dịch vụ"
                                                        target="_self"
                                                    >
                                                        Điều khoản dịch vụ
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Navbar;
