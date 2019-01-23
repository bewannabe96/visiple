/**
 * VSPPaddingProps
 * 
 * - 'padding': Overall padding; including paddingTop, paddingBottom, paddingRight and paddingLeft
 * - 'paddingX': Horizontal padding; including paddingRight and paddingLeft
 * - 'paddingY': Vertical padding; including paddingTop and paddingBottom
 * - 'paddingTop': Top padding
 * - 'paddingBottom': Bottom padding
 * - 'paddingRight': Rigth padding
 * - 'paddingLeft': Left padding
 */
export interface VSPPaddingProps {
    /**
     * Overall padding; including paddingTop, paddingBottom, paddingRight and paddingLeft
     */
    padding?: number;

    /**
     * Horizontal padding; including paddingRight and paddingLeft
     */
    paddingX?: number;

    /**
     * Vertical padding; including paddingTop and paddingBottom
     */
    paddingY?: number;
    
    /**
     * Top padding
     */
    paddingTop?: number;
    
    /**
     * Bottom padding
     */
    paddingBottom?: number;
    
    /**
     * Right padding
     */
    paddingRight?: number;
    
    /**
     * Left padding
     */
    paddingLeft?: number;
}

interface PaddingStyleProps {
    paddingTop: number;
    paddingBottom: number;
    paddingRight: number;
    paddingLeft: number;
}

export const decodeVSPPaddingProps = (props: VSPPaddingProps): PaddingStyleProps => (
    {
        paddingTop: props.paddingTop ? props.paddingTop : (
            props.paddingY ? props.paddingY : (props.padding ? props.padding : 0)),

        paddingBottom: props.paddingBottom ? props.paddingBottom : (
            props.paddingY ? props.paddingY : (props.padding ? props.padding : 0)),

        paddingRight: props.paddingRight ? props.paddingRight : (
            props.paddingX ? props.paddingX : (props.padding ? props.padding : 0)),

        paddingLeft: props.paddingLeft ? props.paddingLeft : (
            props.paddingX ? props.paddingX : (props.padding ? props.padding : 0)),
    }
);