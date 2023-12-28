// import Year from "../../Year/Year";
import "./Footer.css";


function Footer(): JSX.Element {
    const d = new Date();
    let year = d.getFullYear();
    return (
        <div className="Footer">
            &copy;כל הזכויות שמורות - מוישה אופניק אתרים {year}
        </div>
    );
}

export default Footer;
