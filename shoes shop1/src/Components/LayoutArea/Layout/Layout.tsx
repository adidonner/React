import "./Layout.css";
import Links from "../Links/Links";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";

function Layout(): JSX.Element {
    return (
        <div className="Layout" dir="rtl" >
			<header>
                <Header/>
            </header>
            <aside>
                <Links/>
            </aside>
            <main>
                <Home/>
            </main>
           <footer>
                <Footer/> 
           </footer>
        </div>
    );
}

export default Layout;
