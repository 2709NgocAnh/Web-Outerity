import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <>
        
                <div class="container-fluid">
			<div class="row">
				
				<div class="col-xs-12 col-sm-6 col-md-4 col-lg">
					<div class="footer-col footer-content1">
						<h4 class="footer-title">
							Giới thiệu
						</h4>
						<div class="footer-content">
							
							<p>Hi.</p>
							
							
							<div class="logo-footer">
								<a href="/" target="_blank" rel="nofollow noreferrer">
									<img src="https://file.hstatic.net/1000300454/file/logo_bct_019590229b4c4dfda690236b67f7aff4.png" alt="Bộ Công Thương">
								</a>
							</div>
							
						</div>
					</div>
				</div>
				
				
				<div class="col-xs-12 col-sm-6 col-md-2 col-lg">
					<div class="footer-col footer-block">
						<h4 class="footer-title">
							Liên kết
						</h4>
						<div class="footer-content toggle-footer">
							<ul>
								
								<li class="item">
									<a href="/search" title="Tìm kiếm">Tìm kiếm</a>
								</li>
								
								<li class="item">
									<a href="/pages/about-us" title="Giới thiệu">Giới thiệu</a>
								</li>
								
								<li class="item">
									<a href="/pages/chinh-sach-doi-tra" title="Chính sách đổi trả">Chính sách đổi trả</a>
								</li>
								
								<li class="item">
									<a href="/pages/chinh-sach-bao-mat" title="Chính sách bảo mật">Chính sách bảo mật</a>
								</li>
								
								<li class="item">
									<a href="/pages/dieu-khoan-dich-vu" title="Điều khoản dịch vụ">Điều khoản dịch vụ</a>
								</li>
									
							</ul>
						</div>
					</div>
				</div>
				
				
				<div class="col-xs-12 col-sm-6 col-md-3 col-lg">
					<div class="footer-col">
						<h4 class="footer-title">
							Thông tin liên hệ
						</h4>
						<div class="footer-content footer-contact">
							<ul>
								<li class="contact-1">TP.HCM</li>
								<li class="contact-2">‭086 2642568‬</li>
								<li class="contact-3">coming soon</li>
								<li class="contact-4">outerity.local@gmail.com</li>
							</ul>	
						</div>
					</div>
				</div>
				
				
				<div class="col-xs-12 col-sm-6 col-md-3 col-lg">
					<div class="footer-col">
						<h4 class="footer-title">
							Fanpage
						</h4>
						<div class="footer-content footer-contact">
							<!-- Facebook widget -->						
							<div class="footer-static-content"> 
								<div class="fb-page fb_iframe_widget" data-href="https://www.facebook.com/outerity" data-height="300" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" data-show-posts="false" fb-xfbml-state="rendered" fb-iframe-plugin-query="adapt_container_width=true&amp;app_id=363772567412181&amp;container_width=305&amp;height=300&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Fouterity&amp;locale=vi_VN&amp;sdk=joey&amp;show_facepile=true&amp;show_posts=false&amp;small_header=false"><span style="vertical-align: bottom; width: 305px; height: 130px;"><iframe name="f2f3cf4bebfefb8" width="1000px" height="300px" data-testid="fb:page Facebook Social Plugin" title="fb:page Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v12.0/plugins/page.php?adapt_container_width=true&amp;app_id=363772567412181&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df1c8a1d3efe8b34%26domain%3Douterity.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fouterity.com%252Ff61c8ea4d0f48%26relation%3Dparent.parent&amp;container_width=305&amp;height=300&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Fouterity&amp;locale=vi_VN&amp;sdk=joey&amp;show_facepile=true&amp;show_posts=false&amp;small_header=false" style="border: none; visibility: visible; width: 305px; height: 130px;" class=""></iframe></span></div>
							</div>
							<div style="clear:both;"></div>
							
						</div>
					</div>
				</div>
				
			</div>
		</div>
    )
}
        </>
        

export default Footer;
