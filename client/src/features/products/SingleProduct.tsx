import React, {useEffect} from 'react';
import {Typography, CircularProgress, Box} from "@mui/material";
import {useAppSelector, useAppDispatch} from '../../app/hooks';
import {Error} from "./components/Error";
import {fetchProductThunk, selectProduct, selectProductStatus, updateStatusThunk} from './productsSlice';
import {FetchStatus, IDeliveryStatus} from "./Products.interfaces";
import {useParams} from "react-router-dom";
import {SingleProductItem} from "./components/SingleProductItem";

export function SingleProduct() {
    const dispatch = useAppDispatch();
    const params = useParams();
    const product = useAppSelector(selectProduct);
    const status = useAppSelector(selectProductStatus);

    useEffect(() => {
        const id = Number(params.id);
        if (id) {
            dispatch(fetchProductThunk(id));
        }
    }, []);

    const onStatusChange = (status: IDeliveryStatus) => {
        dispatch(updateStatusThunk({
                id: Number(params.id),
                status: status
            })
        );
    }

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
                    <SingleProductItem item={product} onStatusChange={onStatusChange}/>
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
