import { useEffect } from "react";



export default function Navbar({ setCount, count, idata, setIData }) {
    console.log(idata);
    useEffect(() => {
        let count = 0;
        idata.forEach(item => {
            // console.log(item.status)
            if (item.status) {
                count++;
            }
        })
        setCount(count)
    }, [idata])
    function handleChange() {
        let filteredData = idata.map(item => {
            return { ...item, status: false }
        })
        setIData(filteredData)
    }
    return (
        <nav className="nav">
            <h3 className="title">Notifications</h3>
            <div className={count>0 ? "count" : "white"}>{count}</div>
            <button className="btn-all" onClick={handleChange}>Mark all as read</button>
        </nav>
    )
}