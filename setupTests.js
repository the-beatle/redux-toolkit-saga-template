import '@testing-library/jest-dom';
import {configure} from '@testing-library/react';

configure({
    testIdAttribute: 'data-test-id',
    asyncUtilTimeout: 5000 // Set timeout for async utility functions, e.g. act()
});
