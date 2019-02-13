/** @format */

import React from 'react';

import VSPText from './vsp-text';

interface IVSPHeaderTitleProps {
	/**
	 * Title text
	 */
	text: string;
}

/**
 * VSPHeaderTitle
 *
 * @property
 * - ```text```(required): Title text
 */
export class VSPHeaderTitle extends React.Component<IVSPHeaderTitleProps> {
	public render() {
		return (
			<VSPText fontSize={20} fontWeight='bold' theme='brown'>
				{this.props.text}
			</VSPText>
		);
	}
}
