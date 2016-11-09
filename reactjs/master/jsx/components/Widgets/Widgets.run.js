import initSparkLine from '../Common/sparkline'
import initGmap from '../Common/maps-google'

export default function() {

    // Google Maps
    $('[data-gmap]').each(initGmap);

    // Sparkline
    $('[data-sparkline]').each(initSparkLine);

}