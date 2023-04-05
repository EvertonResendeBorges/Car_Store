import Navbar from "components/Navbar"
import Busca from 'components/Busca'
import CardCar from "components/CardCar"

import './style.css'

function Catalog(){
    return(
        <>
            <Navbar/>
            <Busca/>
            <div className="card1"> <CardCar/> </div>
            <div className="card2"> <CardCar/> </div>
        </>
    )
}

export default Catalog