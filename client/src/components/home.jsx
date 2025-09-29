import GenImg1 from "../assets/GenImg1.png";

const home = () => {
    return (
        <div className="heroLanding">
            <div className="heroText">
                <h1 className="heroTitle">Unleash your <br /> <span>creativity</span> <br /> without the fear <br /> of Errors</h1>
                <p>Your coding assistant is here 24/7. Feeling anxious or <br /> burned out? It supports your ideas and shapes it.</p>
                <h3>Try rev'it Now <i className="ri-arrow-right-up-line"></i></h3>
            </div>
            <div className="heroImg">
                <img src={GenImg1} alt="" className="heroGenImg"/>
                <ul className="heroList1">
                    <li className="heroList1Tile">Blogs</li>
                    <li className="heroList1Tile">About</li>
                    <li className="heroList1Tile">Github</li>
                    <li className="heroList1Tile">Linkedin</li>
                    <li className="heroList1Tile">Hire</li>
                </ul>
                <ul className="heroList2">
                    <li className="heroList2Tile glass">
                        Users
                    </li>
                    <li className="heroList2Tile glass">
                        Time Saved
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default home