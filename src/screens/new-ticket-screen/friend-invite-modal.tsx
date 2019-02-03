import React from 'react';
import { StyleSheet } from 'react-native';

import { TicketHeaderColorType } from '../../types/config/ticket_theme';
import { VERTICAL_UNIT } from '../../types/config/size';

import VSPModal from '../../components/vsp-modal';
import VSPTextInput from '../../components/vsp-textinput';

interface FriendInviteModalProps {
    // STATES
    ticketColor: TicketHeaderColorType,
    inviteModalVisible: boolean,

    // ACTION CREATORS
    closeInviteModal: any,
}

/**
 * FriendInviteModal
 */
export default class FriendInviteModal extends React.Component<FriendInviteModalProps> {
    render() {
        let style = StyleSheet.create({
        });

        return (
            <VSPModal
                titleText={'친구 초대'}
                isVisible={this.props.inviteModalVisible}
                closeAction={this.props.closeInviteModal}
                padding={4*VERTICAL_UNIT}
            >
                <VSPTextInput
                    placeholder='이름 또는 이메일을 입력하세요'
                    rearIcon='search'
                />
            </VSPModal>
        );
    }
}