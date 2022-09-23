const Footer = () => {
    return (
        <footer className="footer">
            <footer>
                <div className="container">
                    <div className="logo">
                        <a href="/">
                            <img src="./img/logo.png" alt="" />
                        </a>
                    </div>
                    <div className="logo_p">
                        <p>
                            지금 <span> 데일리샷 </span>에서
                            편리한 주류 쇼핑을
                            시작해보세요!
                        </p>
                        <p className="warning"> 경고 : 지나친 음주는 뇌졸중, 기억력 손상이나 치매를 유발합니다. 임신 중 음주는 기형아 출생 위험을 높입니다.</p>
                    </div>
                    <ul>
                        <li><a href="#none">서비스 이용약관</a></li>
                        <li><a href="#none">개인정보 취급방침</a></li>
                    </ul>
                    <div className="sns">
                        <a href="https://www.instagram.com/dailyshot.co" target="blank"><i className="xi-instagram"></i></a>
                        <a href="https://www.facebook.com/dailyshot.co" target="blank"><i className="xi-facebook"></i></a>
                        <a href="https://blog.naver.com/daily-shot" target="blank"><i className="xi-naver"></i></a>
                    </div>
                    <div className="copyright">
                        <p>Copyright © dailyshot. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </footer>
    )
}

export default Footer;