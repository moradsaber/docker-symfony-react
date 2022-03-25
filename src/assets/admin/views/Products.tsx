import React, {EffectCallback, SetStateAction, useContext, useEffect, useState}  from 'react'
import {
    CCol,
    CCardHeader,
    CCard,
    CCardBody,
    CCardFooter,
    CRow
} from '@coreui/react'
import {GlobalContext} from "../state/GlobalStore";
import {getProducts} from "../repository/products/product";
import Product from "../models/product/Product";

const Products: React.FunctionComponent<any> = () => {
    const [state, dispatch] = useContext(GlobalContext);

     useEffect (() => {
         (async()=>{
            dispatch({type: 'PRODUCT_GET', payload : await getProducts()})
         })()
      }, [])

    
    return (
        <CRow>

        {state.products.map( pdt => 
                <CCol xs="12" md="4" key={pdt.id}>
                    <CCard>
                    <CCardHeader>
                       {pdt.title}
                    </CCardHeader>
                    <CCardBody>
                    {pdt.description}     
                    </CCardBody>
                    <CCardFooter>
                   Prix :  {pdt.price} €     
                    </CCardFooter>
                </CCard>
        </CCol>)
        }

    </CRow>
    )
}

export default Products