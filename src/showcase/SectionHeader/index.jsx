import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'


const SectionHeader = ({
    size, textColor, dividerColor, children
}) => {
    const Heading = Number.isInteger(size) ? `h${size}` : `div`;

    const StyledHeading = styled(Heading)`
        font-family: Roboto;
        line-height: 2.0;
        ${props => Number.isInteger(props.size) ? `` : `font-size: ${props.size};`}
        font-weight: 800;
        font-style: normal;
        position: relative;
        text-align: center;
        letter-spacing: 1px;
        color: ${props => props.textColor};
        &::after {
            display: block;
            position: relative;
            content: '';
            width: 10px;
            height: 10px;
            background-color:  ${props => props.dividerColor};
            -webkit-transform: translate(-50%, 0%) rotate(45deg);
            transform: translate(-50%, 0%) rotate(45deg);
            left: 50%;
        }
    `
    return (
        <StyledHeading size={size} textColor={textColor} dividerColor={dividerColor}>{children}</StyledHeading>
    )
}

SectionHeader.propTypes = {
    size: PropTypes.any,
    dividerColor: PropTypes.string,
    textColor: PropTypes.string
};

SectionHeader.defaultProps = {
    size: 1,
    dividerColor: "#fb3448",
    textColor: "#383838"
};

export default SectionHeader;

