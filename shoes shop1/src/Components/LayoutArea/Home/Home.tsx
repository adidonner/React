import Sale from "./Sale/Sale";
import "./Home.css";
import YouTube from "./YouTube/YouTube";
import ShoeBrands from "./ShoeBrands/ShoeBrands";
import ShoeList from "./ShoesArea/ShoeList/ShoeList";

function Home(): JSX.Element {
    return (
        <div className="home" >
            <Sale/>
             <YouTube/>
              {/* <ShoeCard/>  */}
             <ShoeBrands/>
             <ShoeList/>
             <hr />
        </div>
    );
}

export default Home;
