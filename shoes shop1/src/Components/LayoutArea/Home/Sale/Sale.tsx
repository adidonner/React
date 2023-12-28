import "./Sale.css";
function Sale(): JSX.Element {

    function isFisrtDayOfMonth():boolean{
        const date = new Date();
        const day = date.getDate();
        console.log(day);
        
        return day==1;
    }

    return (
        <div className="Sale box">
			{isFisrtDayOfMonth() && <p>!! מבצע ראש חודש : 1 + 1 על כל המותגים !!</p>}
        </div>
    );
}

export default Sale;
