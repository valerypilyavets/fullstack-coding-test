import React from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from "@mui/material";
import {IProduct} from "../Products.interfaces";
import {Link} from "react-router-dom";
import {getReadableStatus} from "../productsHelpers";

interface IProductItemsPropTypes {
    items: IProduct[] | undefined
}

export function ProductItems({items}: IProductItemsPropTypes) {

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Date created</TableCell>
                        <TableCell align="right">Delivery address</TableCell>
                        <TableCell align="right">Estimated delivery date</TableCell>
                        <TableCell align="right">Delivery status</TableCell>
                        <TableCell align="right">Details</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items !== undefined && items.map((item, index) => (
                        <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">
                                {new Date(item.createdAt).toDateString()}
                            </TableCell>
                            <TableCell align="right">{item.deliveryAddress}</TableCell>
                            <TableCell align="right">{new Date(item.estimatedDeliveryDate).toDateString()}</TableCell>
                            <TableCell align="right">{getReadableStatus(item.deliveryStatus)}</TableCell>
                            <TableCell align="right"><Link to={'/products/' + item.id} >More &rarr;</Link></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
