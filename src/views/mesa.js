import React, {useState, useEffect, useCallback} from 'react'
import {getServiceAllMesas} from '../services/mesas.service'
import {Col, Row,} from 'reactstrap';
import CardItem from '../components/mesas/mesaCard'

const Mesas = () => {
    
    const [mesas, setMesa] = useState([]);
    const [hasError, setError] = useState(false)

    // useEffect(() => {
    //     const getMesas = async () => {
    //         const res = await getServiceAllMesas();
    //         setMesa(res.data)
    //     };
    //     getMesas();
    // }, [])
     const getMesas = useCallback (() => {
         getServiceAllMesas()
         .then(res => setMesa(res.data))
         .catch(err => setError(true))
     }, []);

     useEffect(() =>{
         getMesas()
     }, [getMesas])
    
    const mapDeMesas = (mesas) => mesas.map((item, i) => (
       <Col md="3" xl="3" sm="12" xs="12" key={i}>
           <CardItem item={item}/>
       </Col>
        ))
    return (
    
            <div className="mesas">
                {
                    hasError
                    ? (<div>Aconteceu um erro, volte já!</div>)
                    : (
                        <Row >
                            {mapDeMesas(mesas)}
                        </Row>

                    )}
            </div>
            
    )
};

export default Mesas;