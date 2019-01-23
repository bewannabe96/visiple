import React from 'react';
import { View, StyleProp, StyleSheet } from 'react-native';
import Modal from "react-native-modal";

import { VERTICAL_UNIT, HORIZONTAL_UNIT } from '../../config/size';
import { addShadowProperties, THEME_COLORS, THEME_HEADER_FONTSIZE } from '../../config/theme';

import VSPButton from '../../components/vsp-button';
import VSPTextInput from '../../components/vsp-textinput';
import VSPText from '../../components/vsp-text';

export default class AddFriendModal extends React.Component {
    private _fixed_style: StyleProp<any>;

    state = {
        visible: false,
    }

    constructor(props: any) {
        super(props);

        this._fixed_style = StyleSheet.create({
            overlayView: {
                position: 'absolute',
                bottom: 5*VERTICAL_UNIT,
                right: 6*HORIZONTAL_UNIT,
                ...addShadowProperties(),
            },

            container: {
                height: '50%',
                width: '90%',
                alignSelf: 'center',
            },

            headerView: {
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
                height: 12*HORIZONTAL_UNIT,
                borderTopLeftRadius: 2*HORIZONTAL_UNIT,
                borderTopRightRadius: 2*HORIZONTAL_UNIT,
                backgroundColor: THEME_COLORS['grey-white'],
                ...addShadowProperties(),
            },

            headerTitleView: {
                width: '40%',
                alignItems: 'center',
            },

            headerTitleText: {
                fontSize: THEME_HEADER_FONTSIZE,
                color: THEME_COLORS['brown'],
            },

            headerRightView: {
                width: '30%',
                alignItems: 'flex-end',
            },
            
            bodyView: {
                flex: 1,
                padding: 4*HORIZONTAL_UNIT,
                borderBottomLeftRadius: 2*HORIZONTAL_UNIT,
                borderBottomRightRadius: 2*HORIZONTAL_UNIT,
                backgroundColor: THEME_COLORS['white'],
            },

            resultView: {
                flex: 1,
            },
        });
    }

    _openModal = () => {
        this.setState({ visible: true, });
    }

    render() {
        return (
            <View style={this._fixed_style.overlayView}>
                <VSPButton
                    icon='plus'
                    buttonStyle='round-icon'
                    fontSize={5*HORIZONTAL_UNIT}
                    theme='brown'
                    onPress={this._openModal}
                />
                <Modal
                    isVisible={this.state.visible}
                    avoidKeyboard={true}
                >
                    <View style={this._fixed_style.container}>
                        <View style={this._fixed_style.headerView}>
                            <View style={this._fixed_style.headerTitleView}>
                                <VSPText style={this._fixed_style.headerTitleText}>친구 추가</VSPText>
                            </View>
                            <View style={this._fixed_style.headerRightView}>
                                <VSPButton
                                    icon='cancel'
                                    buttonStyle='text-only'
                                    marginRight={4*HORIZONTAL_UNIT}
                                    onPress={()=>{this.setState({ visible: false });}}
                                />
                            </View>
                        </View>
                        <View style={this._fixed_style.bodyView}>
                            <VSPTextInput
                                placeholder='이메일을 입력하세요'
                                rearIcon='search'
                                textContentType='emailAddress'
                            />
                            <View style={this._fixed_style.resultView}>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}