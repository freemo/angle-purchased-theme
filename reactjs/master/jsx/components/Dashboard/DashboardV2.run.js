import initSparkLine from '../Common/sparkline'
import initSlimScroll from '../Common/slimscroll'

export default (chartBar, chartSpline) => {

    // Chart Sline
    var datav2 = [{
        "label": "Hours",
        "color": "#23b7e5",
        "data": [
            ["Jan", 70],
            ["Feb", 20],
            ["Mar", 70],
            ["Apr", 85],
            ["May", 59],
            ["Jun", 93],
            ["Jul", 66],
            ["Aug", 86],
            ["Sep", 60],
            ["Oct", 60],
            ["Nov", 12],
            ["Dec", 50]
        ]
    }, {
        "label": "Commits",
        "color": "#7266ba",
        "data": [
            ["Jan", 20],
            ["Feb", 70],
            ["Mar", 30],
            ["Apr", 50],
            ["May", 85],
            ["Jun", 43],
            ["Jul", 96],
            ["Aug", 36],
            ["Sep", 80],
            ["Oct", 10],
            ["Nov", 72],
            ["Dec", 31]
        ]
    }];

    var options = {
        series: {
            lines: {
                show: false
            },
            points: {
                show: true,
                radius: 4
            },
            splines: {
                show: true,
                tension: 0.4,
                lineWidth: 1,
                fill: 0.5
            }
        },
        grid: {
            borderColor: '#eee',
            borderWidth: 1,
            hoverable: true,
            backgroundColor: '#fcfcfc'
        },
        tooltip: true,
        tooltipOpts: {
            content: function(label, x, y) {
                return x + ' : ' + y;
            }
        },
        xaxis: {
            tickColor: '#fcfcfc',
            mode: 'categories'
        },
        yaxis: {
            min: 0,
            max: 150, // optional: use it for a clear represetation
            tickColor: '#eee',
            //position: 'right' or 'left',
            tickFormatter: function(v) {
                return v /* + ' visitors'*/ ;
            }
        },
        shadowSize: 0
    };

    if (chartSpline)
        $.plot(chartSpline, datav2, options);

    // Chart bar Stacked
    var dataStackedv2 = [{
        "label": "Pending",
        "color": "#9289ca",
        "data": [
            ["Pj1", 86],
            ["Pj2", 136],
            ["Pj3", 97],
            ["Pj4", 110],
            ["Pj5", 62],
            ["Pj6", 85],
            ["Pj7", 115],
            ["Pj8", 78],
            ["Pj9", 104],
            ["Pj10", 82],
            ["Pj11", 97],
            ["Pj12", 110],
            ["Pj13", 62]
        ]
    }, {
        "label": "Assigned",
        "color": "#7266ba",
        "data": [
            ["Pj1", 49],
            ["Pj2", 81],
            ["Pj3", 47],
            ["Pj4", 44],
            ["Pj5", 100],
            ["Pj6", 49],
            ["Pj7", 94],
            ["Pj8", 44],
            ["Pj9", 52],
            ["Pj10", 17],
            ["Pj11", 47],
            ["Pj12", 44],
            ["Pj13", 100]
        ]
    }, {
        "label": "Completed",
        "color": "#564aa3",
        "data": [
            ["Pj1", 29],
            ["Pj2", 56],
            ["Pj3", 14],
            ["Pj4", 21],
            ["Pj5", 5],
            ["Pj6", 24],
            ["Pj7", 37],
            ["Pj8", 22],
            ["Pj9", 28],
            ["Pj10", 9],
            ["Pj11", 14],
            ["Pj12", 21],
            ["Pj13", 5]
        ]
    }];

    var optionsStacked = {
        series: {
            stack: true,
            bars: {
                align: 'center',
                lineWidth: 0,
                show: true,
                barWidth: 0.6,
                fill: 0.9
            }
        },
        grid: {
            borderColor: '#eee',
            borderWidth: 1,
            hoverable: true,
            backgroundColor: '#fcfcfc'
        },
        tooltip: true,
        tooltipOpts: {
            content: function(label, x, y) {
                return x + ' : ' + y;
            }
        },
        xaxis: {
            tickColor: '#fcfcfc',
            mode: 'categories'
        },
        yaxis: {
            // position: 'right' or 'left'
            tickColor: '#eee'
        },
        shadowSize: 0
    };

    if (chartBar)
        $.plot(chartBar, dataStackedv2, optionsStacked);

    // Sparkline
    $('[data-sparkline]').each(initSparkLine);

    // Classyloader

    $('[data-classyloader]').each(function() {
        $(this).ClassyLoader($(this).data());
    });

}