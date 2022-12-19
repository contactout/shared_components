import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import classNames from 'classnames';
import { getButtonConfig, SIZES, VARIANTS } from './constants';

export { VARIANTS, SIZES, getButtonConfig } from './constants';

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: VARIANTS;
    size?: SIZES;
    icon?: ReactElement;
    leftIcon?: ReactElement;
    rightIcon?: ReactElement;
    disabled?: boolean;
}

export const Button = (props: ButtonProps) => {
    const {
        className: customClassName = '',
        variant = VARIANTS.PRIMARY,
        size = SIZES.M,
        disabled = false,
        icon = null,
        leftIcon = null,
        rightIcon = null,
    } = props;

    const buttonConfig = getButtonConfig(variant, size, disabled);
    console.log('buttonConfig', buttonConfig);
    const classname = classNames(
        // Background Color
        `bg-${buttonConfig.background} hover:bg-${buttonConfig.backgroundHover} active:bg-${buttonConfig.backgroundActive} focus:bg-${buttonConfig.backgroundActive}`,
        // Text Color
        `text-${buttonConfig.color} hover:text-${buttonConfig.colorHover} active:text-${buttonConfig.colorActive} focus:text-${buttonConfig.colorActive}`,
        // Font size
        buttonConfig.fontSize,
        // Font weight
        'font-semibold',
        // Padding
        icon ? buttonConfig.iconOnlyPadding : buttonConfig.padding,
        // Border radius
        'rounded-md',
        // Border
        `border border-1 border-${buttonConfig.border} hover:border-${buttonConfig.borderHover} active:border-${buttonConfig.borderActive} focus:border-${buttonConfig.borderActive}`,
        // LINK_COLOR text-underline
        variant === VARIANTS.LINK_COLOR &&
        'hover:underline active:underline focus:underline',
        // Shadow
        buttonConfig.boxShadow,
        // Custom Classname
        customClassName,
        {
            // Active Outline
            [`
      active:ring-4 focus:ring-4 ring-${buttonConfig.activeOutlineColor}
      `]: buttonConfig.activeOutlineColor,
        }
    );

    const StyledButton = styled.button();
    const content = (() => {
        if (icon) {
            return <span className={'flex justify-center items-center'}>{icon}</span>;
        }
        return (
            <div className={'flex flex-row'}>
                {leftIcon && (
                    <span className={'flex justify-center items-center mr-2'}>
            {leftIcon}
          </span>
                )}
                {props.children}
                {rightIcon && (
                    <span className={'flex justify-center items-center ml-2'}>
            {rightIcon}
          </span>
                )}
            </div>
        );
    })();
    return (
        <StyledButton
            className={classname}
            aria-label={props['aria-label']}
            onClick={props.onClick}
        >
            {content}
        </StyledButton>
    );
};
