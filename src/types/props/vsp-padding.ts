/**
 * VSPPaddingProps
 *
 * - ```padding```: Overall padding; including paddingTop, paddingBottom, paddingRight and paddingLeft
 * - ```paddingX```: Horizontal padding; including paddingRight and paddingLeft
 * - ```paddingY```: Vertical padding; including paddingTop and paddingBottom
 * - ```paddingTop```: Top padding
 * - ```paddingBottom```: Bottom padding
 * - ```paddingRight```: Rigth padding
 * - ```paddingLeft```: Left padding
 */

export interface IVSPPaddingProps {
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

interface IPaddingStyleProps {
	paddingTop?: number;
	paddingBottom?: number;
	paddingRight?: number;
	paddingLeft?: number;
}

export const decodeVSPPaddingProps = (
	props: IVSPPaddingProps,
): IPaddingStyleProps => ({
	paddingTop: props.paddingTop
		? props.paddingTop
		: props.paddingY
		? props.paddingY
		: props.padding
		? props.padding
		: undefined,

	paddingBottom: props.paddingBottom
		? props.paddingBottom
		: props.paddingY
		? props.paddingY
		: props.padding
		? props.padding
		: undefined,

	paddingRight: props.paddingRight
		? props.paddingRight
		: props.paddingX
		? props.paddingX
		: props.padding
		? props.padding
		: undefined,

	paddingLeft: props.paddingLeft
		? props.paddingLeft
		: props.paddingX
		? props.paddingX
		: props.padding
		? props.padding
		: undefined,
});
