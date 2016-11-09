import initVectorMap from '../Common/maps-vector'

export default function () {
    // Vector Map
    $('[data-vector-map]').each(initVectorMap);
}