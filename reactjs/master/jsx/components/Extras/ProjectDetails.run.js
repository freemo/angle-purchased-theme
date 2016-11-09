import initSparkLine from '../Common/sparkline'
import initSlimScroll from '../Common/slimscroll'

export default () => {

    // Sparkline
    $('[data-sparkline]').each(initSparkLine);

    // Slimscroll
    $('[data-scrollable]').each(initSlimScroll);

};
