import initSparkLine from '../Common/sparkline'

export default () => {

    // Sparkline
    $('[data-sparkline]').each(initSparkLine);

};
