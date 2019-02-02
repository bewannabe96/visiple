import React from 'react';
import { View, StyleProp, StyleSheet } from 'react-native';

import { VERTICAL_UNIT, HORIZONTAL_UNIT } from '../types/config/size';
import { VSPScreenProps } from '../types/props/vsp-screen';
import { THEME_COLORS } from '../types/config/theme';

import VSPContainer from '../components/vsp-container';
import VSPTitleLogo from '../components/vsp-titlelogo';
import VSPText from '../components/vsp-text';
import VSPTextInput from '../components/vsp-textinput';
import VSPCheckbox from '../components/vsp-checkbox';
import VSPTextButton from '../components/vsp-text-button';
import VSPColoredButton from '../components/vsp-colored-button';

export default class VSPRegisterScreen extends React.Component<VSPScreenProps> {
    private _fixed_style: StyleProp<any>;

    constructor(props: VSPScreenProps) {
        super(props);

        this._fixed_style = StyleSheet.create({
            headerView: {
                alignItems: 'center',
                height: 14*VERTICAL_UNIT,
                marginBottom: 2*VERTICAL_UNIT,
            },

            welcomeText: {
                alignSelf: 'center',
                fontWeight: 'bold',
                color: THEME_COLORS['sky-blue'],
            },

            titleText: {
                fontWeight: 'bold',
            },

            groupView: {
                marginVertical: 4*VERTICAL_UNIT,
            },

            checkboxItem: {
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 4*VERTICAL_UNIT,
            },

            checkboxIndentItem: {
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 3*VERTICAL_UNIT,
                marginLeft: 4*HORIZONTAL_UNIT,
            },
        });
    }

    render() {
        return (
            <VSPContainer
                background='cottoncandy-blue'
                justifyContent='space-between'
                paddingX={9*HORIZONTAL_UNIT}
                paddingY={6*VERTICAL_UNIT}
            >
                <View>
                    <View style={this._fixed_style.headerView}>
                        <VSPTitleLogo
                            fillDirection='Y'
                        />
                    </View>
                    <VSPText style={this._fixed_style.welcomeText}>
                        Visiple 신규 가입을 환영합니다!
                    </VSPText>
                </View>
                <View style={this._fixed_style.groupView}>
                    <VSPText style={this._fixed_style.titleText}>회원정보</VSPText>
                    <VSPTextInput
                        placeholder='이름(실명)'
                        textContentType='name'
                        marginTop={4*VERTICAL_UNIT}
                    />
                    <VSPTextInput
                        placeholder='본인 이메일 주소 입력'
                        textContentType='emailAddress'
                        marginTop={4*VERTICAL_UNIT}
                    />
                    <VSPTextInput
                        placeholder='비밀번호(알파벳 대소문자, 숫자 포함한 8-20 글자)'
                        textContentType='password'
                        marginTop={4*VERTICAL_UNIT}
                    />
                    <VSPTextInput
                        placeholder='비밀번호 확인'
                        textContentType='password'
                        marginTop={4*VERTICAL_UNIT}
                    />
                </View>
                <View style={this._fixed_style.groupView}>
                    <VSPText style={this._fixed_style.titleText}>이용약관</VSPText>
                    <View style={this._fixed_style.checkboxItem}>
                        <VSPCheckbox
                            size={5*VERTICAL_UNIT}
                            theme='sky-blue'
                        />
                        <VSPText>
                            전체동의
                        </VSPText>
                    </View>
                    <View style={this._fixed_style.checkboxIndentItem}>
                        <VSPCheckbox
                            size={5*VERTICAL_UNIT}
                            theme='sky-blue'
                            marginLeft={5*HORIZONTAL_UNIT}
                        />
                        <VSPTextButton
                            text='이용약관'
                            theme='brown'
                        />
                        <VSPText>
                            에 동의합니다.
                        </VSPText>
                    </View>
                    <View style={this._fixed_style.checkboxIndentItem}>
                        <VSPCheckbox
                            size={5*VERTICAL_UNIT}
                            theme='sky-blue'
                            marginLeft={5*HORIZONTAL_UNIT}
                        />
                        <VSPTextButton
                            text='개인정보 취급방침'
                            theme='brown'
                        />
                        <VSPText>
                            에 동의합니다.
                        </VSPText>
                    </View>
                </View>
                <VSPColoredButton
                    text='완료'
                    fontSize={4*VERTICAL_UNIT}
                    marginTop={4*VERTICAL_UNIT}
                    onPress={() => {this.props.navigation.popToTop()}}
                />
            </VSPContainer>
        );
    }
}