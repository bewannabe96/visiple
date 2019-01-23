import React from 'react';

import { VSPScreenProps } from '../props/vsp-screen';

import VSPContainer from '../components/vsp-container';
import VSPHeader from '../components/vsp-header';
import VSPTitleLogo from '../components/vsp-titlelogo';
import VSPProfileScreen from './vsp-profile-screen.tsx';

export default class VSPHomeScreen extends React.Component<VSPScreenProps> {
    static navigationOptions = () => {
        return {
            header: (
                <VSPHeader
                    headerTitle={(
                        <VSPTitleLogo
                            fillDirection='Y'
                            rescaleRatio='70%'
                        />
                    )}
                />
            ),
        };
    };

    render() {
        return (
            <VSPContainer>
                <VSPProfileScreen />
            </VSPContainer>
        );
    };
}