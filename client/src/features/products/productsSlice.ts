import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {
    FetchStatus,
    IFetchError,
    IProduct,
    IUpdateProductStatusParams,
    IProductState,
    IProductsState
} from "./Products.interfaces";
import {fetchProduct, fetchProducts, updateDeliveryStatus} from "./productsAPI";

const initialProductsState: IProductsState = {
    products: undefined,
    status: FetchStatus.INITIAL,
    error: undefined
};

const initialProductState: IProductState = {
    product: undefined,
    status: FetchStatus.INITIAL,
    error: undefined
};

export const fetchProductsThunk = createAsyncThunk<IProduct[], undefined, { rejectValue: IFetchError }>(
    'products/fetchAll',
    async (undefined, thunkApi) => {
        try {
            const response = await fetchProducts();
            return response.data;
        } catch (e) {
            console.log(e);
            const error = {text: 'Failed to fetch product list'};
            return thunkApi.rejectWithValue(error as IFetchError);
        }
    }
);

export const fetchProductThunk = createAsyncThunk<IProduct, number, { rejectValue: IFetchError }>(
    'products/fetchOne',
    async (id, thunkApi) => {
        try {
            const response = await fetchProduct(id);
            return response.data;
        } catch (e) {
            console.log(e);
            const error = {text: 'Failed to fetch single product'};
            return thunkApi.rejectWithValue(error as IFetchError);
        }
    }
);

export const updateStatusThunk = createAsyncThunk<IProduct, IUpdateProductStatusParams, { rejectValue: IFetchError }>(
    'products/updateProductStatus',
    async (params, thunkApi) => {
        try {
            const response = await updateDeliveryStatus(params);
            return response.data;
        } catch (e) {
            console.log(e);
            const error = {text: 'Failed to update status'};
            return thunkApi.rejectWithValue(error as IFetchError);
        }
    }
);

export const productsSlice = createSlice({
    name: 'products',
    initialState: initialProductsState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsThunk.pending, (state, action) => {
                state.status = FetchStatus.LOADING;
                state.error = undefined;
                state.products = undefined;
            })
            .addCase(fetchProductsThunk.fulfilled, (state, action) => {
                state.status = FetchStatus.READY;
                state.products = action.payload;
            })
            .addCase(fetchProductsThunk.rejected, (state, action) => {
                state.status = FetchStatus.ERROR;
                state.error = action.payload;
            });
    },
});

export const productSlice = createSlice({
    name: 'product',
    initialState: initialProductState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductThunk.pending, (state, action) => {
                state.status = FetchStatus.LOADING;
                state.error = undefined;
                state.product = undefined;
            })
            .addCase(fetchProductThunk.fulfilled, (state, action) => {
                state.status = FetchStatus.READY;
                state.product = action.payload;
            })
            .addCase(fetchProductThunk.rejected, (state, action) => {
                state.status = FetchStatus.ERROR;
                state.error = action.payload;
            })
            .addCase(updateStatusThunk.pending, (state, action) => {
                state.status = FetchStatus.LOADING;
                state.error = undefined;
                state.product = undefined;
            })
            .addCase(updateStatusThunk.fulfilled, (state, action) => {
                state.status = FetchStatus.READY;
                state.product = action.payload;
            })
            .addCase(updateStatusThunk.rejected, (state, action) => {
                state.status = FetchStatus.ERROR;
                state.error = action.payload;
            });
    },
});

export const selectProducts = (state: RootState) => state.products.products;
export const selectProductsStatus = (state: RootState) => state.products.status;

export const selectProduct = (state: RootState) => state.product.product;
export const selectProductStatus = (state: RootState) => state.product.status;

export default {
    productsReducer: productsSlice.reducer,
    productReducer: productSlice.reducer,
};
