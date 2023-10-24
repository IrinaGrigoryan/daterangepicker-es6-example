import DateRangePicker from 'daterangepicker/daterangepicker.js';
import moment from 'moment';

/**
 * Class for using the Date Range Picker jquery plugin.
 */
export default class DateRangePickerWrapper {
    constructor(selector) {
        this.selector = selector;

        // Date Range Picker plugin options
        this.options = {
            startDate: moment(),
            endDate: moment().add(1, 'month'),
            ranges: {
                'Today': [moment(), moment()],
                'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                'This Month': [moment().startOf('month'), moment().endOf('month')],
                'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            },
        };

        this.init();
    }

    /**
     * Use the callback function to add additional functionality.
     */
    dateRangePickerCallback(startDate, endDate, rangeLabel) {
        console.log('Start date: ' + startDate);
        console.log('End date: ' + endDate);
        console.log('Range label: ' + rangeLabel);
    }

    /**
     * Initialize the plugin.
     */
    init() {
        const input = document.querySelector(this.selector);
        const _ = new DateRangePicker(input, this.options, this.dateRangePickerCallback.bind(this));
    }
}
