
const Header = () => {
    return (
        <header className="header">
            <div className="container">
               <a href="/"><h1><img src="./img/logo.png" alt="dailyshot-logo" className="logo" /></h1></a> 
                <nav>
                    <ul>
                        <a href="">
                            <li className="Head_Nav"> 앱다운로드 </li>
                        </a>
                       <a href=""><li>MD's추천픽</li></a> 
                       <a href=""><li>위스키</li></a> 
                       <a href=""><li>데낄라</li></a> 
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;