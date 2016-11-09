import initSparkLine from '../Common/sparkline'
import initSlimScroll from '../Common/slimscroll'

export default () => {

    // Sparkline
    $('[data-sparkline]').each(initSparkLine);

    // Slimscroll
    $('[data-scrollable]').each(initSlimScroll);

    // Datatable (zero config)
    if (!$.fn.dataTable) return;
        $('#datatable1').dataTable();
};
