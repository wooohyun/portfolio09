const MainVisual = () => {
    return (
        <mainvisual className="mainvisual">
            <div className="container">
                <span>맛있는 술을
                    쉽게 즐길 수 있도록</span>
                <h2>데일리샷</h2>
                <div className="download">
                    <div className="btn">
                        <a target="blank" href="https://apps.apple.com/kr/app/%EB%8D%B0%EC%9D%BC%EB%A6%AC%EC%83%B7-%EC%9C%84%EC%8A%A4%ED%82%A4-%EC%99%80%EC%9D%B8-%EC%A3%BC%EB%A5%98-%EC%8A%A4%EB%A7%88%ED%8A%B8%EC%98%A4%EB%8D%94-%EC%95%B1/id1286370741">
                            <button>
                                <img src="./img/app-store.svg" alt="" />
                                <p>App Store</p>
                            </button>
                        </a>
                    </div>
                    <div className="btn">
                        <a target="blank" href="https://play.google.com/store/apps/details?id=shaker.bar.com">
                            <button>
                                <img src="./img/google-play.svg" alt="" />
                                <p>Google Play</p>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </mainvisual>
    )
}

export default MainVisual;