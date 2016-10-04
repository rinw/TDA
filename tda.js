var t = []
var timer 

function escape_html (s) {
	return $('<div/>').text(s).html()
}

function has_only_spaces (s) {
	for (var i = 0; i < s.length; i++) {
		if (s[i] != ' ') {
			return false
		}
	}
	return true
}

function get_input() {
	var new_entry = $('#new_entry').val()
	if (timer) { 
		clearTimeout(timer)
		timer = undefined
	}
	if (new_entry.length < 3 || has_only_spaces(new_entry)) {
		$('#required').html('Unclear Task')
		timer = setTimeout(function() {
			$('#required').html('')
		}, 5000)
	}
	else {
		t.unshift({'checked': false, 'text': new_entry})
		$('#required').html('')
		$('#new_entry').val('')
	}
}
var create_list = function () {
	var list = ''
	for (var i = 0; i < t.length; i++) {
		var input = $('<input/>')
		input.attr('value', t[i].text)
		var s = $('<div/>').append(input).html()
		list = list + s + '<br>'
	}
	return list
}

$(function() {
	$('#show_list').html(create_list())
	$("#new_entry").keyup(function(event) {
    	if(event.keyCode == 13) {
      	  	get_input()
			$('#show_list').html(create_list()) 
    	}
	});
})
