 $("a").click( function() {
  console.log($(this).attr('href'));
  if ($(this).attr('href') == undefined) {
    var id = $(this).attr('id');
    console.log(id);
    window.open('svprojects/' + id.toString() + '.zip')
    console.log('svprojects/' + id.toString() + '.zip')
    gtag('event', 'download_' + id.toString(), {
        'send_to': 'G-YVVR1546XJ',
        'event_category': 'Model download',
        'event_label': 'test',
        'value': '1'
    });
  }
 });
