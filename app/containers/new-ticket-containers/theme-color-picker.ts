import { connect } from 'react-redux';

import { ThemeColorPicker } from '../../screen-components/new-ticket-screen-components';
import { setThemeColor } from '../../actions/new-ticket-actions';
import VSPNewTicket from '../../models/vsp-new-ticket';
import { ThemeColorPickerProps } from '../../screen-components/new-ticket-screen-components/theme-color-picker';

const mapStateToProps = (state: VSPNewTicket, ownProps: ThemeColorPickerProps) => ({
    selectedColor: state._theme_color,
})

export default connect(mapStateToProps, { setThemeColor })(ThemeColorPicker);