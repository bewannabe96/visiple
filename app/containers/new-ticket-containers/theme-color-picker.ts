import { connect } from 'react-redux';

import { ThemeColorPicker } from '../../screen-components/new-ticket-screen-components';
import { setThemeColor } from '../../actions/new-ticket-actions';

const mapStateToProps = (state: any) => ({
    selectedColor: state.themeColor,
});

const mapDispatchToProps = {
    setThemeColor,
};

export default connect(mapStateToProps, mapDispatchToProps)(ThemeColorPicker);