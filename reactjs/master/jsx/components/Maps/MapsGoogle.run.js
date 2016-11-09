import initGmap from '../Common/maps-google'

export default function () {
    // Google Maps
    $('[data-gmap]').each(initGmap);
}
