import React from 'react';
import { View } from 'react-native';

import { VERTICAL_UNIT } from '../../config/size';
import { THEME_MINOR_FONTSIZE } from '../../config/theme';

import VSPProfile from '../../components/vsp-profile';
import VSPText from '../../components/vsp-text';
import VSPButton from '../../components/vsp-button';

export interface InvitedFriendItemProps {
    /**
     * Name of the friend
     */
    name: string,
}

/**
 * InvitedFriendItem
 * 
 * @property
 * ```name```: Name of the friend
 */
export default class InvitedFriendItem extends React.Component<InvitedFriendItemProps> {
    render() {
        return (
            <View
                style={
                    {
                        alignItems: 'center',
                        padding: VERTICAL_UNIT,
                        marginHorizontal: VERTICAL_UNIT,
                    }
                }
            >
                <VSPProfile />
                <VSPText
                    style={
                        {
                            marginVertical: VERTICAL_UNIT,
                        }
                    }
                >
                    김윤회
                </VSPText>
                <VSPButton
                    buttonStyle='text-only'
                    icon='cancel'
                    fontSize={THEME_MINOR_FONTSIZE}
                />
            </View>
        );
    }
}