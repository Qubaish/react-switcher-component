import React from 'react';
import sn from 'classnames';
import PropTypes from 'prop-types';
import {
    checkedIcon as defaultCheckedIcon,
    uncheckedIcon as defaultUncheckedIcon
  } from "./icon.js";
import '../switcher.css';

const blockName = 'custom-switch';
export default function Switcher({
    className,
    checked,
    onChange,
    name,
    ariaLabel,
    unCheckedIcon,
    checkedIcon,
    id,
    onColor
}) {
    const styledColor = onColor ? { background: onColor, border: `1px solid ${onColor}`  } : '';
    const checkedIconWithColor =  checkedIcon ? checkedIcon : defaultCheckedIcon(onColor);

    return (
        <div className={sn(blockName, className)}>
            <input
                className={`${blockName}__checkbox`}
                type="checkbox"
                aria-label={ariaLabel}
                name={name}
                checked={checked}
                onChange={onChange}
                id={id}
            />
            <div
                className={sn('animated', `${blockName}__shape`)}
                style={checked ? styledColor : {}}
            >
                {unCheckedIcon && !checked && (<span className={`${blockName}__icon-text`}>{unCheckedIcon}</span>)}
                {checked && (<span className={sn(`${blockName}__icon-text`, `${blockName}__icon-text--checked`)}>{checkedIconWithColor}</span>)}
            </div>
        </div>
    );
}

Switcher.defaultProps = {
    unCheckedIcon: defaultUncheckedIcon,
    onColor: '#009688',
};

Switcher.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    ariaLabel: PropTypes.string,
    className: PropTypes.string,
    checked: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    checkedIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    unCheckedIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    handlerIcon: PropTypes.bool,
};