import React from 'react';
import { render } from '@testing-library/react';

import MultiSelectBox from 'components/selection-elements/MultiSelectBox/MultiSelectBox';
import MultiSelectBoxItem from 'components/selection-elements/MultiSelectBox/MultiSelectBoxItem';

describe('SelectBox Default', () => {
    test('renders the SelectBox component with default props', () => {
        render(
            <MultiSelectBox>
                <MultiSelectBoxItem value={1} name="Option One" />
                <MultiSelectBoxItem value={2} name="Option Two" />
                <MultiSelectBoxItem value={3} name="Option Three" />
            </MultiSelectBox>
        );
    });
});