import MainSlide from "./MainSlide";
const MainVisual = () => {
    return (
        <mainvisual className="mainvisual">
            <div className="container">
                <span>맛있는 술을
                    쉽게 즐길 수 있도록</span>
                <h2>데일리샷</h2>
                <div className="download">
                    <div className="btn">
                        <a href="#none">
                        <button>
                            <img src="./img/app-store.svg" alt="" />
                            <p>App Store</p>
                        </button>
                        </a>
                    </div>
                    <div className="btn">
                    <a href="#none">
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