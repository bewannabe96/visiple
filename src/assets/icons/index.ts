export type IconNameType
= 'user'
| 'menu'
| 'padlock'
| 'check'
| 'settings'
| 'previous'
| 'next'
| 'home'
| 'cancel'
| 'search'
| 'plus'
| 'calendar'
| 'clock'
| 'leftarrow'
| 'rightarrow';
 
 const ICON_SOURCE: {[name in IconNameType]: any} = {
     'user': require('./user.png'),
     'menu': require('./menu.png'),
     'padlock': require('./padlock.png'),
     'check': require('./check.png'),
     'settings': require('./settings.png'),
     'previous': require('./previous.png'),
     'next': require('./next.png'),
     'home': require('./home.png'),
     'cancel': require('./cancel.png'),
     'search': require('./search.png'),
     'plus': require('./plus.png'),
     'calendar': require('./calendar.png'),
     'clock': require('./clock.png'),
     'leftarrow': require('./left-arrow.png'),
     'rightarrow': require('./right-arrow.png'),
 };

 export default ICON_SOURCE;