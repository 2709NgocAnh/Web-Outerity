import './About.css';

function About() {
    return (
        <>
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
                                        <a class="" href="/pages/about-us" title="Giới thiệu" target="_self">
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
            <div class="col-md-9 col-sm-12 col-xs-12">
                <div class="page-wrapper">
                    <div class="heading-page">
                        <h1>Giới thiệu</h1>
                    </div>
                    <div class="wrapbox-content-page">
                        <div class="content-page ">
                            <p>
                                Câu chuyện của Outerity được bắt đầu từ 2017 tại Sài Gòn, Việt Nam; xuất phát từ ý tưởng
                                về một thương hiệu văn hóa đường phố từ Khoa Sen và những người bạn Gen Z đầy sáng tạo.
                                Sau những thành công và kinh nghiệm gói ghém từ thương hiệu tiền thân là The Yars Shop,
                                Outerity đã ra đời. Không quá ồn ào hay phô trương, cái tên DirtyCoins tượng trưng cho
                                những giá trị nguyên bản nhất của cuộc sống: đó là hiện thực gai góc của những dồng tiền
                                xương máu, của giá trị lao động đầy mồ hôi, bụi bẩn và nước mắt. Outerity trở thành một
                                thương hiệu của tinh thần thời trang mạnh mẽ, táo bạo tuy nhiên vẫn gần gũi và dễ tiếp
                                cận rộng rãi. Tuy nhiên, không dừng lại ở đó, Outerity muốn vượt qua giới hạn của một
                                thương hiệu thời trang đơn thuần và trở thành một biểu tượng về văn hóa và phong cách
                                sống của những con người trẻ tuổi. Những sản phẩm của Outerity mang đậm dấu ấn kết hợp
                                giữa văn hóa phương Tây và Phương Đông, xác lập một ngôn ngữ sáng tạo rất riêng, đầy mạo
                                hiểm và mới mẻ. Chất liệu cảm hứng được Outerity chắt lọc từ sự đa sắc, đa diện của dòng
                                chảy cuộc sống hàng ngày; pha trộn cùng cảm hứng nghệ thuật đương đại để tạo nên một
                                tiểu vùng văn hóa rất riêng của Outerity. Không ngại thử thách, luôn luôn mạo hiểm và
                                không ngừng đuổi bắt những giới hạn, đó là DNA của Outerity.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default About;
