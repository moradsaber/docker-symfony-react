import React, {SetStateAction, useContext, useEffect, useState}  from 'react'
import {
    CCol,
    CContainer,
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

    useEffect(() => {
        console.log(' listProduct >> ', getProducts());
        dispatch({type: 'PRODUCT_GET', payload : getProducts()})
      }, [])

    
    return (
        <CRow>

        {state.products.map( pdt => 
                <CCol xs="12" md="4" key={pdt.id}>
                    <CCard>
                    <CCardHeader>
                       {pdt.titre}
                    </CCardHeader>
                    <CCardBody>
                    {pdt.description}     
                    </CCardBody>
                    <CCardFooter>
                   Prix :  {pdt.Price} €     
                    </CCardFooter>
                </CCard>
        </CCol>)
        }

    </CRow>
    )
}

export default Products