import React from 'react';
import { View } from 'react-native';

import { VERTICAL_UNIT } from '../../types/config/size';
import { THEME_MINOR_FONTSIZE } from '../../types/config/theme';

import VSPProfile from '../../components/vsp-profile';
import VSPText from '../../components/vsp-text';
import VSPTextButton from '../../components/vsp-text-button';

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
                <VSPTextButton
                    icon='cancel'
                    fontSize={THEME_MINOR_FONTSIZE}
                />
            </View>
        );
    }
}