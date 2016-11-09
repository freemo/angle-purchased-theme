import initGmap from '../Common/maps-google'

export default () => {
    // Google Maps
    $('[data-gmap]').each(initGmap);
}