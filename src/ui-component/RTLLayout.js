/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import { useEffect } from 'react';

// material-ui
import { CacheProvider } from '@emotion/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import createCache from '@emotion/cache';

// third-party
import rtlPlugin from 'stylis-plugin-rtl';
import useConfig from 'hooks/useConfig';

// ==============================|| RTL LAYOUT ||============================== //

const RTLLayout = ({ children }) => {
    const { rtlLayout } = useConfig();

    useEffect(() => {
        document.dir = rtlLayout ? 'rtl' : 'ltr';
    }, [rtlLayout]);

    const cacheRtl = createCache({
        key: rtlLayout ? 'rtl' : 'css',
        prepend: true,
        stylisPlugins: rtlLayout ? [rtlPlugin] : []
    });

    return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
};

RTLLayout.propTypes = {
    children: PropTypes.node
};

export default RTLLayout;
