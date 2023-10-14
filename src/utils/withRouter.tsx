/*=========================================================
        Imports
=========================================================*/

import React from 'react';
import { useLocation, Location } from 'react-router-dom';

/*=========================================================
        MixIn
=========================================================*/

/**
 * Passed in type is the constructed components props. 
 * Used to pass the current location to the given component via the props
 * as suggested in React Router Dom's FAQ:
 * @see https://reactrouter.com/en/6.16.0/start/faq#what-happened-to-withrouter-i-need-it
 * @param pComponent Component Type to wrap
 * @returns Wrapper component
 */
export default function withRouter<T>(pComponent: React.ComponentType<{Location: Location} & T>) {
    return (pProps: any) => {
        return (
            React.createElement(
                pComponent, 
                {
                    Location: useLocation(),
                    ...pProps
                }
            )
        );
    }
}