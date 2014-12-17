/* ---------- TEMPLATE DATA ---------- */

var leadpages_input_data = {
  'videourl'  : 'https://www.youtube.com/embed/dhzI3Om9QIQ?rel=0&amp;controls=0&amp;loop=1&amp;showinfo=0&amp;autoplay=1&amp;playlist=dhzI3Om9QIQ' // what what
};

/* ---------- VIDEO PREP ---------- */
$(function() {
    $('.video-player').attr('src', leadpages_input_data.videourl);
});