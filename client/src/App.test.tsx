import React from 'react';
import {render} from '@testing-library/react';
import {Provider} from 'react-redux';
import {store} from './app/store';
import App from './App';

test('renders page and contains initial progress', () => {
    const {getByRole} = render(
        <Provider store={store}>
            <App/>
        </Provider>
    );

    const circularProgress = getByRole('progressbar');
    expect(circularProgress).toBeInTheDocument();
});
