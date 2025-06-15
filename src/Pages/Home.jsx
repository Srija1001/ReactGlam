import React from "react";
import HomeDes from "../Components/HomeDes";
import Popular from "../Components/Popular/Popular";
import News from "../Components/NewsLetter/News";
const Home = () => {
    return (
        <div className="home">
            <HomeDes />
            <Popular/>
            <News/>

        </div>
    );
}

export default Home;