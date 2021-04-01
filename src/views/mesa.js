import React, {useState, useEffect, useCallback} from 'react'
import {getServiceAllMesas} from '../services/mesas.service'
import {Col, Row,} from 'reactstrap';
import CardItem from '../components/mesas/mesaCard'
import Loading from '../components/loading'
import styled from 'styled-components';

const Mesas = () => {
    
    const [mesas, setMesa] = useState([]);
    const [loading, setLoading] = useState(false)
    const [hasError, setError] = useState(false)

     const getMesas = useCallback (() => {
        setLoading(true) 
        getServiceAllMesas()
         .then(res => { 
             setMesa(res.data)
            setLoading(false)
            })
         .catch(err => {
             setError(true)
             setLoading(false)
         })

     }, []);

     useEffect(() =>{
         getMesas()
     }, [getMesas])
    
    const mapDeMesas = (mesas) => mesas.map((item, i) => (
       <Col md="3" xl="3" sm="6" xs="6" key={i}>
           <CardItem item={item}/>
       </Col>
        ))
    return (
    
            <div className="mesas">
                {
                    hasError
                    ? (<div>Aconteceu um erro, volte já!</div>)
                    : (
                        <BoxMesas >
                            {loading ? <Loading/>
                            : mapDeMesas(mesas)}
                        </BoxMesas>

                    )}
            </div>
            
    )
};

export default Mesas;

const BoxMesas = styled(Row)`
    
`
