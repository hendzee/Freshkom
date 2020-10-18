import React from 'react';
import { Text } from '@ui-kitten/components';

const CustomText = (props) => {
    return (
        <>
            <Text {...props}>
                {props.children}
            </Text>
        </>
    );
}

export { CustomText };