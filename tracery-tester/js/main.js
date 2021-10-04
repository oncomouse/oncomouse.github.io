$(function() {
	var grammarInput = Kefir.fromEvents($("#grammar"), "keyup").map(
		R.path(["target", "value"])
	);

	var grammarValidator = grammarInput.flatMap(function (grammar) {
		var lint = JSONLint(grammar);
		if (lint.error) {
			return Kefir.constantError(lint);
		}
		return Kefir.constant(grammar);
	});

	grammarValidator.onError(function(lint) {
		$('#generate').addClass('disabled');
		$('#error').html('<strong>There was an error in your JSON.</strong><br><br>Message: ' + lint.error + '(' + lint.line + ':' + lint.character + ')');
	})

	grammarValidator.onValue(function() {
		$('#generate').removeClass('disabled');
		$('#error').html('');
	})

	var traceryGrammar = grammarValidator
		.map(JSON.parse)
		.map(tracery.createGrammar)
		.toProperty();

	var createGrammar = function(t) {
		$("#output").html(t.flatten('#origin#').replace(/\n/g, "<br>"));
	}
	var clickGrammar = Kefir.fromEvents($("#generate"), "click");
	traceryGrammar.onValue(createGrammar);
	traceryGrammar.sampledBy(clickGrammar).onValue(createGrammar);
})
