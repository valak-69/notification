import Navbar from "./components/navbar";
import data from "./components/data"
import Noti from "./components/Noti";
import { useState } from "react";
export default function App(){
    const [count, setCount] = useState(0)
    const [idata, setIData] = useState(data)
    // console.log(idata)
    const elements = idata.map(cardelement => {
        return <Noti 
            setCount={setCount} count={count} idata={idata}
            key={cardelement.id}
            element={cardelement}
            setIData={setIData}
            />
    })
    return(
        <div className="container">
            <div className="card">
                <Navbar setCount={setCount} count={count} idata={idata} setIData={setIData}/>
                <div className="lmao">
                    {elements}
                </div>
            </div>
        </div>
    )
}