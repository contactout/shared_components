export enum VARIANTS {
    PRIMARY = 'PRIMARY',
    SECONDARY_COLOR = 'SECONDARY_COLOR',
    SECONDARY_GREY = 'SECONDARY_GREY',
    TERTIARY_COLOR = 'TERTIARY_COLOR',
    TERTIARY_GREY = 'TERTIARY_GREY',
    PRIMARY_DESTRUCTIVE = 'PRIMARY_DESTRUCTIVE',
    SECONDARY_COLOR_DESTRUCTIVE = 'SECONDARY_COLOR_DESTRUCTIVE',
    TERTIARY_COLOR_DESTRUCTIVE = 'TERTIARY_COLOR_DESTRUCTIVE',
    LINK_COLOR = 'LINK_COLOR',
}

export enum SIZES {
    XXS = 'XXS',
    XS = 'XS',
    S = 'S',
    M = 'M',
    L = 'L',
    XL = 'XL',
    XXL = 'XXL',
}

export const DEFAULT_BOX_SHADOW = 'shadow-sm shadow-gray-900/5';

const BUTTON_CONFIG = {
    [VARIANTS.PRIMARY]: {
        background: {
            default: 'primary-600',
            hover: 'primary-700',
            active: 'primary-600',
            disabled: 'primary-200',
        },
        border: {
            default: 'primary-600',
            hover: 'primary-700',
            active: 'primary-600',
            disabled: 'primary-200',
        },
        color: {
            default: 'white',
        },
        boxShadow: DEFAULT_BOX_SHADOW,
        activeOutlineColor: 'primary-200',
    },
    [VARIANTS.PRIMARY_DESTRUCTIVE]: {
        background: {
            default: 'error-600',
            hover: 'error-700',
            active: 'error-600',
            disabled: 'error-200',
        },
        border: {
            default: 'error-600',
            hover: 'error-700',
            active: 'error-600',
            disabled: 'error-200',
        },
        color: {
            default: 'white',
        },
        boxShadow: DEFAULT_BOX_SHADOW,
        activeOutlineColor: 'error-200',
    },
    [VARIANTS.SECONDARY_COLOR]: {
        background: {
            default: 'primary-50',
            hover: 'primary-100',
            active: 'primary-50',
            disabled: 'primary-25',
        },
        border: {
            default: 'primary-50',
            hover: 'primary-100',
            active: 'primary-50',
            disabled: 'primary-25',
        },
        color: {
            default: 'primary-700',
            disabled: 'primary-300',
        },
        boxShadow: DEFAULT_BOX_SHADOW,
        activeOutlineColor: 'primary-100',
    },
    [VARIANTS.SECONDARY_COLOR_DESTRUCTIVE]: {
        background: {
            default: 'error-50',
            hover: 'error-100',
            active: 'error-50',
            disabled: 'error-25',
        },
        border: {
            default: 'error-50',
            hover: 'error-100',
            active: 'error-50',
            disabled: 'error-25',
        },
        color: {
            default: 'error-700',
            disabled: 'error-300',
        },
        boxShadow: DEFAULT_BOX_SHADOW,
        activeOutlineColor: 'error-100',
    },
    [VARIANTS.SECONDARY_GREY]: {
        background: {
            default: 'white',
            hover: 'gray-100',
        },
        border: {
            default: 'gray-300',
        },
        color: {
            default: 'gray-700',
            hover: 'gray-800',
            disabled: 'gray-300',
        },
        boxShadow: DEFAULT_BOX_SHADOW,
        activeOutlineColor: 'gray-200',
    },
    [VARIANTS.TERTIARY_COLOR]: {
        background: {
            default: 'white',
            hover: 'primary-50',
            active: 'white',
            disabled: 'white',
        },
        border: {
            default: 'transparent',
            hover: 'transparent',
            active: 'transparent',
            disabled: 'transparent',
        },
        color: {
            default: 'primary-700',
            disabled: 'gray-300',
        },
        boxShadow: '',
        activeOutlineColor: 'primary-100',
    },
    [VARIANTS.TERTIARY_COLOR_DESTRUCTIVE]: {
        background: {
            default: 'white',
            hover: 'error-50',
            active: 'white',
            disabled: 'white',
        },
        border: {
            default: 'transparent',
            hover: 'transparent',
            active: 'transparent',
            disabled: 'transparent',
        },
        color: {
            default: 'error-700',
            disabled: 'gray-300',
        },
        boxShadow: '',
        activeOutlineColor: 'error-100',
    },
    [VARIANTS.TERTIARY_GREY]: {
        background: {
            default: 'white',
            hover: 'white',
            active: 'white',
            disabled: 'white',
        },
        border: {
            default: 'transparent',
            hover: 'transparent',
            active: 'transparent',
            disabled: 'transparent',
        },
        color: {
            default: 'gray-500',
            hover: 'gray-600',
            active: 'gray-500',
            disabled: 'gray-300',
        },
    },
    [VARIANTS.LINK_COLOR]: {
        background: {
            default: 'white',
        },
        border: {
            default: 'transparent',
        },
        color: {
            default: 'primary-700',
        },
    },
    [SIZES.XXS]: {
        padding: 'py-px px-2',
        iconOnlyPadding: 'p-1',
        fontSize: 'text-xs',
    },
    [SIZES.XS]: {
        padding: 'py-0.5 px-2',
        iconOnlyPadding: 'p-1.5',
        fontSize: 'text-xs',
    },
    [SIZES.S]: {
        padding: 'py-2 px-3.5',
        iconOnlyPadding: 'p-2',
        fontSize: 'text-xs',
    },
    [SIZES.M]: {
        padding: 'py-2.5 px-5',
        iconOnlyPadding: 'p-2',
        fontSize: 'text-sm',
    },
    [SIZES.L]: {
        padding: 'py-2.5 px-5',
        iconOnlyPadding: 'p-3',
        fontSize: 'text-base',
    },
    [SIZES.XL]: {
        padding: 'py-3 px-5',
        iconOnlyPadding: 'p-3.5',
        fontSize: 'text-base',
    },
    [SIZES.XXL]: {
        padding: 'py-4 px-7',
        iconOnlyPadding: 'p-4',
        fontSize: 'text-lg',
    },
};

export const getButtonConfig: any = (
    variant: VARIANTS,
    size: SIZES,
    disabled: boolean
) => {
    const config: any = { ...BUTTON_CONFIG[variant], ...BUTTON_CONFIG[size] };
    return Object.keys(config).reduce((acc, key: string) => {
        const configItem = config[key];
        if (typeof configItem === 'string') {
            return { ...acc, [key]: configItem };
        } else {
            const tempObj: any = {};
            const defaultValue = configItem.default;
            const disabledValue = configItem.disabled || defaultValue;
            tempObj[key] = disabled ? disabledValue : defaultValue;
            ['hover', 'active'].forEach((type) => {
                tempObj[`${key}${type[0].toUpperCase() + type.slice(1)}`] =
                    configItem[type] || defaultValue;
            });
            return { ...acc, ...tempObj };
        }
    }, {});
};