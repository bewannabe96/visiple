import React from 'react';
import { View, StyleProp, StyleSheet } from 'react-native';

import { addShadowProperties } from '../config/theme';
import { HORIZONTAL_UNIT, VERTICAL_UNIT } from '../config/size';
import { VSPScreenProps } from '../props/vsp-screen';

import VSPContainer from '../components/vsp-container';
import VSPTextInput from '../components/vsp-textinput';
import VSPButton from '../components/vsp-button';
import VSPTitleLogo from '../components/vsp-titlelogo';

export default class VSPLoginScreen extends React.Component<VSPScreenProps> {
    private _fixed_style: StyleProp<any>;

    constructor(props: VSPScreenProps) {
        super(props);

        this._fixed_style = StyleSheet.create({
            topView: {
                alignItems: 'center',
                paddingBottom: 15*VERTICAL_UNIT,
                ...addShadowProperties(),
            },
        });
    }

    render() {
        return (
            <VSPContainer
                justifyContent='flex-end'
                background='cottoncandy-blue'
                paddingX={9*HORIZONTAL_UNIT}
                paddingY={6*VERTICAL_UNIT}
            >
                <View style={this._fixed_style.topView}>
                    <VSPTitleLogo
                        fillDirection='X'
                        rescaleRatio='90%'
                    />
                </View>
                <VSPTextInput
                    frontIcon='user'
                    placeholder='이메일'
                    textContentType='username'
                    marginBottom={2*VERTICAL_UNIT}
                />
                <VSPTextInput
                    frontIcon='padlock'
                    placeholder='비밀번호'
                    textContentType='password'
                    marginY={2*VERTICAL_UNIT}
                />
                <VSPButton
                    text='로그인'
                    fontSize={4*VERTICAL_UNIT}
                    marginY={2*VERTICAL_UNIT}
                    onPress={() => this.props.navigation.navigate('App')}
                />
                <VSPButton
                    text='회원가입'
                    fontSize={4*VERTICAL_UNIT}
                    theme='sky-blue'
                    marginY={2*VERTICAL_UNIT}
                    onPress={() => this.props.navigation.navigate('RegisterScreen')}
                />
                <VSPButton
                    text='비밀번호를 잊으셨나요?'
                    buttonStyle='text-only'
                    marginY={VERTICAL_UNIT*2}
                />
            </VSPContainer>
        );
    }
}