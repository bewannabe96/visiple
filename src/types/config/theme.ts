import { HORIZONTAL_UNIT } from "./size";

/**
 * Theme Font
 */
export const THEME_FONT = 'Arial';
/**
 * Theme Font Size
 */

export const THEME_FONTSIZE = 3*HORIZONTAL_UNIT;
export const THEME_HEADER_FONTSIZE = 4*HORIZONTAL_UNIT;
export const THEME_MINOR_FONTSIZE = 2.5*HORIZONTAL_UNIT;

/**
 * Raw Color Type
 */
export type RawColorType = string;

/**
 * Theme Color Type
 */
export type ThemeColorType
    = 'none'
    | 'white'
    | 'grey'
    | 'grey-white'
    | 'ocean-blue'
    | 'sky-blue'
    | 'cottoncandy-blue'
    | 'beige'
    | 'brown';

/**
 * Theme Colors
 */
export const THEME_COLORS: {[key: string]: string}  = {
    'none': 'transparent',
    'white': '#FFFFFF',
    'grey': '#707070',
    'black': '#000000',
    'grey-white': '#FCFCFC',
    'ocean-blue': '#728CA3',
    'sky-blue': '#73C0F4',
    'cottoncandy-blue': '#E6EFF3',
    'beige': '#F3E4C6',
    'brown': '#8F4F06',
};

/**
 * Add shadow style properties
 */
export const addShadowProperties = (offset?: number, opacity?: number, color?: RawColorType) => (
    {
        shadowColor: color ? color : THEME_COLORS['black'],
        shadowOffset: { width: 0, height: offset ? offset : 2 },
        shadowOpacity: opacity ? opacity : 0.3,
        elevation: offset ? offset*1.5 : 3,
        zIndex: 1,
    }
);