
$(function () {
    //click for previous month
    $(document).on('click', '#lnkPrev', function() {
        if ($(this).hasClass('cb-dis')) {
            return;
        }

        var month = parseInt($('#cb-js-calendar-month').val());
        var year = parseInt($('#cb-js-calendar-year').val());

        if (month === 1) {
            year = year - 1;
            month = 12;
        } else {
            month = month - 1;
        }

        changeMonth(month, year);
    });

    //click for next month
    $(document).on('click', '#lnkNext', function() {
        if ($(this).hasClass('cb-dis')) {
            return;
        }

        var month = parseInt($('#cb-js-calendar-month').val());
        var year = parseInt($('#cb-js-calendar-year').val());

        if (month === 12) {
            year = year + 1;
            month = 1;
        } else {
            month = month + 1;
        }

        changeMonth(month, year);
    });

    //click on a day in the calendar
    $('#cal-tbl-container').on('click', '.cb-js-avail', function (e) {
        $('#ea-js-error-summary').hide();

        $('.cb-stay-length-popout').hide();
        $('.cb-day').removeClass('cb-sel').removeClass('cb-departure');
        $(this).find('.cb-stay-length-popout').show();
        $(this).closest('.cb-day').addClass('cb-sel');

        var date = $(this).find('.ea-js-date').val();
        $('#cb-js-check-in-date').val(date);

        var anchor = $(this).find('.ea-js-a-staylength');
        var nrDays;
        if (anchor.length > 0) {
            nrDays = anchor.first().data('staylength');

        } else {
            var dropDown = $(this).find('.ea-js-dd-staylengths');

            //the first option is choose so we select the second option
            nrDays = parseInt(dropDown.find(':selected').next('option').val());
        }

        $('#cb-js-stay-length').val(nrDays);

        e.stopPropagation();
    });

    //This is used to close the staylengths popup when clicking outside of that area
    $(document).click(function () {
        var visiblePopups = $('.cb-stay-length-popout:visible');

        if (visiblePopups.length > 0) {
            $('.cb-stay-length-popout').hide();

            calendarMarker();
        }
    });

    //stop closing of the popup if the dropdown is clicked
    $('#cal-tbl-container').on('click', '.ea-js-dd-staylengths', function(e) {
        e.stopPropagation();
    });

    //changing value in the popup stay length dropdown
    $('#cal-tbl-container').on('change', '.ea-js-dd-staylengths', function (e) {
        changeDate(e, this, parseInt($(this).val()));
        $(this).val('');
    });

    //clicking a stay length in the popup
    $('#cal-tbl-container').on('click', '.ea-js-a-staylength', function (e) {
        changeDate(e, this, $(this).data('staylength'));
    });

    function changeDate(event, elem, nrDays) {
        $('#ea-js-error-summary').hide();

        var column = $(elem).closest('.cb-day');

        var date = column.find('.ea-js-date').val();
        $('#cb-js-check-in-date').val(date);

        var endDate = Globalize.parseDate(date);
        endDate.setDate(endDate.getDate() + nrDays);
        var endDateLocalized = Globalize.format(endDate, "d");
        $('#cb-js-check-out-date').val(endDateLocalized);

        $('#cb-js-stay-length').val(nrDays);

        markDays(nrDays, column);

        $(elem).closest('.cb-stay-length-popout').hide();

        event.stopPropagation();
    }

    function markDays(nrDays, startColumnElem) {
        if (!startColumnElem.hasClass('cb-sel')) {
            startColumnElem.addClass('cb-sel');
        }

        var lastMarkedColumn = startColumnElem;
        var columnToMark = startColumnElem;
        var lastRow = startColumnElem.closest('.cb-week');
        for (var i = 0; i < nrDays; i++) {
            columnToMark = columnToMark.next();

            if (columnToMark.length > 0 && columnToMark.is('h4')) {
                columnToMark = columnToMark.next();
            }
            if (columnToMark.length > 0) {
                columnToMark.addClass('cb-sel');
                lastMarkedColumn = columnToMark;
            } else {
                lastRow = lastRow.next();

                columnToMark = lastRow.find('.cb-day').first();

                if (columnToMark.length > 0) {
                    columnToMark.addClass('cb-sel');
                    lastMarkedColumn = columnToMark;
                } else {
                    break;
                }
            }
        }

        lastMarkedColumn.addClass('cb-departure');
    }

    function changeMonth(month, year) {
        var channelId = $('#ChannelId').val();

        var isPackage = 'False';

        if (isPackage == 'True') {
            var packageId = $('#cb-js-packageid').val();

            var basePackageUrl = '/Search/GetPeriodPackageAvailabilityCal';

            url = basePackageUrl + "?channelId=" + channelId + "&year=" + year + "&month=" + month;

            if (packageId != null) {
                url +=  "&packageId=" + packageId;
            }
        }
        else {

            var isCampaign = 'False';

            if (isCampaign == 'True') {
                var campaignId = $('#cb-js-campaignid').val();
                if (campaignId.length == 0) {
                    $('#lnkNext').addClass('cb-dis');
                    return;
                }
            }

            var guestRoomId = $('#cb-js-guestroomid').val();

            var baseRoomUrl = '/Search/GetPeriodAvailabilityCal';

            url = baseRoomUrl + "?channelId=" + channelId + "&year=" + year + "&month=" + month;

            if (guestRoomId != null) {
                url += "&guestRoomId=" + guestRoomId;
            }

            if(campaignId != null) {
                url += "&campaignId=" + campaignId;
            }
        }

        $.ajax({
            type: "GET",
            cache: false,
            contentType: "application/json; charset=utf-8",
            url: url,
            dataType: 'json',
            success: function (data) {
                // append rows
                $('#cb-main-tbl-wrapper').empty().html(data);
                refreshCalendar(month, year);
            }
        });
    }

    function refreshCalendar(month, year) {
        if(month <= (new Date().getMonth() + 1) && year <= (new Date().getFullYear())) {
            $('#lnkPrev').addClass('cb-dis').attr('disabled', 'disabled');
        } else {
            $('#lnkPrev').removeClass('cb-dis').removeAttr('disabled');
        }

        var maxMonth = 5;
        var maxYear = 2017;

        if (month >= maxMonth && year >= maxYear) {
            $('#lnkNext').addClass('cb-dis').attr('disabled', 'disabled');
        } else {
            $('#lnkNext').removeClass('cb-dis').removeAttr('disabled');
        }

        // set calendar month header
        var monthName = $('.cb-month-name')[0].innerHTML;
        var header = monthName + ' ' + year;
        $('#availCalMonthHeader').empty().html(header);
        calendarMarker();
    }

    function markDaysReverse(endColumnElem) {
        if (!endColumnElem.hasClass('cb-sel')) {
            endColumnElem.addClass('cb-sel');
        }

        if (!endColumnElem.hasClass('cb-departure')) {
            endColumnElem.addClass('cb-departure');
        }

        var lastMarkedColumn = endColumnElem;
        var lastRow = endColumnElem.closest('.cb-week');

        while (true) {
            lastMarkedColumn = lastMarkedColumn.prev();
            if (lastMarkedColumn.length > 0) {
                lastMarkedColumn.addClass('cb-sel');
            } else {
                lastRow = lastRow.prev();
                lastMarkedColumn = lastRow.find('.cb-day').last();

                if (lastMarkedColumn.length > 0) {
                    lastMarkedColumn.addClass('cb-sel');
                } else {
                    break;
                }
            }
        }
    }

    function calendarMarker() {
        $('.cb-day').removeClass('cb-sel').removeClass('cb-departure');

        var startDate = $('#cb-js-check-in-date').val();
        var numberOfNights = $('#cb-js-stay-length').val();

        if (startDate.length > 0 && numberOfNights.length > 0) {

            var startInputElem = $('.ea-js-date[value="' + startDate + '"]');

            if (startInputElem.length > 0) {

                var startColumnElem = startInputElem.closest('.cb-day');
                markDays(parseInt(numberOfNights), startColumnElem);
            } else {
                var endDate = $('#cb-js-check-out-date').val();

                if (endDate.length > 0) {
                    var endInputElem = $('.ea-js-date[value="' + endDate + '"]');

                    if (endInputElem.length > 0) {
                        var endColumnElem = endInputElem.closest('.cb-day');
                        markDaysReverse(endColumnElem);
                    }
                }
            }
        }
    }

    calendarMarker();

    // this function validates and submits the search form
    $('#ajaxForm').submit(function () {
        if ($(this).valid()) {
            // the functionality belove creates a search form model
            // as an JSON-object and calls the search method
            var startDate = $('#cb-js-check-in-date').val();
            var numberOfNights = $('#cb-js-stay-length').val();

            if (startDate.length === 0 || numberOfNights.length === 0) {
                $('#ea-js-error-summary').show();
                return false;
            }

            var channelId = $('#ChannelId').val();
            var hasLikedOnFacebook = $('#hffbl').val();

            var roomConfigs = [];
            var configs = $('div.cb_js_roomconfig');
            configs.each(function () {
                var nrAdults = parseInt($(this).find('.cb-js-nrAdults').val());
                var nrChildren = parseInt($(this).find('.cb-js-nrChildren').val());
                var includeSharer = false;
                var childAges = [];

                var sharerMaxAge = -1;
                var sharer = $(this).find('div.cb-js-sharer');
                if ($(sharer).length > 0) {
                    sharerMaxAge = parseInt($(this).find('.cb-js-sharer-max-age').val());
                }
                var ags = $(this).find('input.cb-js-child-age');
                ags.each(function (i) {
                    if (i < nrChildren) {
                        var age = $(this).val();
                        if (age != "") {
                            childAges.push({ "Age": parseInt(age) });
                            if (parseInt(age) <= sharerMaxAge) {
                                if ($(sharer).find('input.cb-js-include-sharer:checked').length > 0) {
                                    includeSharer = true;
                                }
                            }
                        }
                    }
                });
                roomConfigs.push({ "SelectedNrAdults": nrAdults, "SelectedNrChildren": nrChildren, "ChildAges": childAges, "IncludeSharer": includeSharer });
            });

            var noCalendar = { "StartDate": startDate, "NrNights": numberOfNights };

            var roomConf = { "RoomConfigurations": roomConfigs };
            var model = { "ChannelId": channelId, "PeriodCalendar": noCalendar, "RoomConfiguration": roomConf, "HasFacebookLiked": hasLikedOnFacebook };

            var params = $.toJSON(model);

            var url = "/GuestRoom/SearchRooms" + "?channelId=" + channelId;
            var triggerNivoSlider = false;
            if ($('#cb-js-guestroomid').length > 0) {
                url = url + "&guestRoomId=" + $('#cb-js-guestroomid').val();
                triggerNivoSlider = true;
            } else if ($('#cb-js-packageid').length > 0) {
                url = url + "&packageId=" + $('#cb-js-packageid').val();
                triggerNivoSlider = true;
            } else if ($('#cb-js-campaignid').length > 0) {
                url = url + "&campaignId=" + $('#cb-js-campaignid').val();
                triggerNivoSlider = true;
            }

            $('#cb-ticker').show();

            $.ajax({
                    type: 'POST',
                    cache: false,
                    url: url,
                    data: params,
                    dataType: 'JSON',
                    contentType: 'application/json; charset=utf-8',
                    success: function (data) {

                        if (data.IndexUrl) {
                            window.location = data.IndexUrl;
                        }

                        $('#cb-ticker').hide();
                        $('#roomList').empty().html(data);

                        if (triggerNivoSlider) {
                            $('#cb-js-slider').nivoSlider({
                                effect: 'fade',
                                animSpeed: 300,
                                pauseTime: 6000,
                                controlNav: true,
                                controlNavThumbs: true,
                                controlNavThumbsFromRel: true
                            });
                        }
                    }
                }
            );
        }
        return false;
    });

    var options = {
        pattern: 'yyyy-mm', // Default is 'mm/yyyy' and separator char is not mandatory
        selectedYear: '2015',
        startYear: '2015',
        finalYear: '2017',
        monthNames: ['Sau', 'Vas', 'Kov', 'Bal', 'Geg', 'Bir', 'Lie', 'Rgp', 'Rgs', 'Spl', 'Lap', 'Grd']
    };

    $('#hfSelectedMonth').monthpicker(options);

    function initMonthPicker() {
        var currentMonth = '11';
        var closedMonths = [];
        for (var mth = 1; mth < currentMonth; mth++) {
            closedMonths.push(mth);
        }
        if (closedMonths.length > 0) {
            $('#hfSelectedMonth').monthpicker('disableMonths', closedMonths);
        }
    }

    initMonthPicker();

    $('#availCalMonthHeader').bind('click', function () {
        $('#hfSelectedMonth').monthpicker('show');
    });

    $('#hfSelectedMonth').monthpicker().bind('monthpicker-click-month', function (e, month) {
        var year = $('#hfSelectedYear').val();
        changeMonth(month, year);

    }).bind('monthpicker-change-year', function (e, year) {
        $('#hfSelectedYear').val(year);
        $('#hfSelectedMonth').monthpicker('disableMonths', []); // (re)enables all
        var currentYear = '2015';
        var currentMonth = '11';
        var closedMonths = [];
        var maxMonth = 5;
        var maxYear = 2017;

        if (year == currentYear) {
            for (var mth = 1; mth < currentMonth; mth++) {
                closedMonths.push(mth);
            }
        }
        if (year == maxYear) {
            for (var m = maxMonth + 1; m <= 12; m++) {
                closedMonths.push(m);
            }
        }
        if (closedMonths.length > 0) {
            $('#hfSelectedMonth').monthpicker('disableMonths', closedMonths);
        }
    });
});
