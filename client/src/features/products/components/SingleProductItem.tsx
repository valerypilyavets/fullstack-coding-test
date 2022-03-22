import React, {useEffect} from 'react';
import {IDeliveryStatus, IProduct, StatusChangeCallback} from '../Products.interfaces';
import {Paper, TableContainer, TableBody, SelectChangeEvent, TableCell, Table, TableRow, FormControl, InputLabel, Select, MenuItem} from '@mui/material';
import {Link} from "react-router-dom";
import {fetchProductsThunk} from "../productsSlice";

interface IProductItemPropTypes {
    item: IProduct | undefined,
    onStatusChange: StatusChangeCallback
}

export function SingleProductItem({item, onStatusChange}: IProductItemPropTypes) {
    const [status, setStatus] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setStatus(event.target.value);
        onStatusChange(Number(event.target.value));
    };

    useEffect(() => {
        if (item) {
            setStatus(item.deliveryStatus.toString());
        }
    }, [item]);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableBody>
                    <TableRow>
                        <TableCell>
                            Product type
                        </TableCell>
                        <TableCell>
                            {item?.productType?.name}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            Customer name
                        </TableCell>
                        <TableCell>
                            {item?.customer?.name}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            Customer contact number
                        </TableCell>
                        <TableCell>
                            {item?.customer?.contactNumber}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            Delivery address
                        </TableCell>
                        <TableCell>
                            {item?.deliveryAddress}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            Estimated delivery date
                        </TableCell>
                        <TableCell>
                            {item ? new Date(item.estimatedDeliveryDate).toDateString() : ''}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            Delivery status
                        </TableCell>
                        <TableCell>
                            <FormControl fullWidth>
                                <InputLabel id="select-label">Status</InputLabel>
                                <Select
                                    labelId="select-label"
                                    id="demo-simple-select"
                                    value={status}
                                    label="Age"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={IDeliveryStatus.ORDERED}>ordered</MenuItem>
                                    <MenuItem value={IDeliveryStatus.SHIPPED}>shipped</MenuItem>
                                    <MenuItem value={IDeliveryStatus.CANCELLED}>cancelled</MenuItem>
                                    <MenuItem value={IDeliveryStatus.PENDING}>pending</MenuItem>
                                </Select>
                            </FormControl>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Link to={'/products'}>&larr; Back to list</Link>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
