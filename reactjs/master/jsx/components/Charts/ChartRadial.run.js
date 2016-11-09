import * as CONST from '../Common/constants';

export default function() {

    if (!$.fn.easyPieChart) return;
    if (!$.fn.knob) return;

    // Knob
    var knobLoaderOptions1 = {
        width: '50%', // responsive
        displayInput: true,
        fgColor: CONST.APP_COLORS['info']
    };
    $('#knob-chart1').knob(knobLoaderOptions1);

    var knobLoaderOptions2 = {
        width: '50%', // responsive
        displayInput: true,
        fgColor: CONST.APP_COLORS['purple'],
        readOnly: true
    };
    $('#knob-chart2').knob(knobLoaderOptions2);

    var knobLoaderOptions3 = {
        width: '50%', // responsive
        displayInput: true,
        fgColor: CONST.APP_COLORS['info'],
        bgColor: CONST.APP_COLORS['gray'],
        angleOffset: -125,
        angleArc: 250
    };
    $('#knob-chart3').knob(knobLoaderOptions3);

    var knobLoaderOptions4 = {
        width: '50%', // responsive
        displayInput: true,
        fgColor: CONST.APP_COLORS['pink'],
        displayPrevious: true,
        thickness: 0.1,
        lineCap: 'round'
    };
    $('#knob-chart4').knob(knobLoaderOptions4);

    // Easy pie
    var pieOptions1 = {
        animate: {
            duration: 800,
            enabled: true
        },
        barColor: CONST.APP_COLORS['success'],
        trackColor: false,
        scaleColor: false,
        lineWidth: 10,
        lineCap: 'circle'
    };
    $('#easypie1').easyPieChart(pieOptions1);

    var pieOptions2 = {
        animate: {
            duration: 800,
            enabled: true
        },
        barColor: CONST.APP_COLORS['warning'],
        trackColor: false,
        scaleColor: false,
        lineWidth: 4,
        lineCap: 'circle'
    };
    $('#easypie2').easyPieChart(pieOptions2);

    var pieOptions3 = {
        animate: {
            duration: 800,
            enabled: true
        },
        barColor: CONST.APP_COLORS['danger'],
        trackColor: false,
        scaleColor: CONST.APP_COLORS['gray'],
        lineWidth: 15,
        lineCap: 'circle'
    };
    $('#easypie3').easyPieChart(pieOptions3);

    var pieOptions4 = {
        animate: {
            duration: 800,
            enabled: true
        },
        barColor: CONST.APP_COLORS['danger'],
        trackColor: CONST.APP_COLORS['yellow'],
        scaleColor: CONST.APP_COLORS['gray-dark'],
        lineWidth: 15,
        lineCap: 'circle'
    };
    $('#easypie4').easyPieChart(pieOptions4);

    // Classyloader

    $('[data-classyloader]').each(function() {
        $(this).ClassyLoader($(this).data());
    });

}