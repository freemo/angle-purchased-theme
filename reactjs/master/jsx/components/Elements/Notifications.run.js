import notifyAlert from '../Common/notify'

export default () => {

    // Notifiy
    $('[data-notify]').each(notifyAlert);

}