import React, {useEffect} from 'react';
import {Typography, CircularProgress, Box} from "@mui/material";
import {useAppSelector, useAppDispatch} from '../../app/hooks';
import {Error} from "./components/Error";
import {fetchProductsThunk, selectProducts, selectProductsStatus} from './productsSlice';
import {FetchStatus} from "./Products.interfaces";
import {ProductItems} from "./components/ProductItems";

export function Products() {
    const dispatch = useAppDispatch();

    const products = useAppSelector(selectProducts);
    const status = useAppSelector(selectProductsStatus);

    useEffect(() => {
        dispatch(fetchProductsThunk());
    }, []);

    return (
        <>
            {status === FetchStatus.LOADING &&
                <Box sx={{
                    textAlign: 'center',
                    marginTop: '50px'
                }}>
                    <CircularProgress/>
                </Box>
            }
            {status === FetchStatus.READY &&
                <Box sx={{
                    marginTop: '30px'
                }}>
                    <ProductItems items={products}/>
                </Box>
            }
            {status === FetchStatus.ERROR &&
                <Box sx={{
                    marginTop: '30px'
                }}>
                    <Error/>
                </Box>
            }
        </>
    );
}
