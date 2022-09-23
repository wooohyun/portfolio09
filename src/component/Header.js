
const Header = () => {
    return (
        <header className="header">
            <div className="container">
               <a href="#none"><h1><img src="./img/logo.png" alt="dailyshot-logo" className="logo" /></h1></a> 
                <nav>
                    <ul>
                        <a href="#none">
                            <li className="Head_Nav"> 앱다운로드 </li>
                        </a>
                       <a href="#none"><li>MD's추천픽</li></a> 
                       <a href="#none"><li>위스키</li></a> 
                       <a href="#none"><li>전통주</li></a> 
                       <a href="#none"><li>맥주</li></a> 
                       <a href="#none"><li>와인</li></a> 
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;