/**
 * VSPPaddingProps
 *
 * - ```padding```: Overall padding; including paddingTop, paddingBottom, paddingRight and paddingLeft
 * - ```paddingHorizontal```: Horizontal padding; including paddingRight and paddingLeft
 * - ```paddingVertical```: Vertical padding; including paddingTop and paddingBottom
 * - ```paddingTop```: Top padding
 * - ```paddingBottom```: Bottom padding
 * - ```paddingRight```: Rigth padding
 * - ```paddingLeft```: Left padding
 */

export type IVSPPaddingProps<T = {}> = T & {
	/**
	 * Overall padding; including paddingTop, paddingBottom, paddingRight and paddingLeft
	 */
	padding?: number;

	/**
	 * Horizontal padding; including paddingRight and paddingLeft
	 */
	paddingHorizontal?: number;

	/**
	 * Vertical padding; including paddingTop and paddingBottom
	 */
	paddingVertical?: number;

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
};

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
		: props.paddingVertical
		? props.paddingVertical
		: props.padding
		? props.padding
		: undefined,

	paddingBottom: props.paddingBottom
		? props.paddingBottom
		: props.paddingVertical
		? props.paddingVertical
		: props.padding
		? props.padding
		: undefined,

	paddingRight: props.paddingRight
		? props.paddingRight
		: props.paddingHorizontal
		? props.paddingHorizontal
		: props.padding
		? props.padding
		: undefined,

	paddingLeft: props.paddingLeft
		? props.paddingLeft
		: props.paddingHorizontal
		? props.paddingHorizontal
		: props.padding
		? props.padding
		: undefined,
});
