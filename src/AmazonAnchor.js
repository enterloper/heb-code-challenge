import React from 'react';
import { string } from 'prop-types';

const AmazonAnchor = ({ url, label }) => (
    <a 
        className="amazon_anchor"
        href={url}
        target="_blank" 
        rel="noreferrer"
    >
        {label}
    </a>
);

AmazonAnchor.propTypes = {
    label: string.isRequired,
    url: string.isRequired
};

export default AmazonAnchor;