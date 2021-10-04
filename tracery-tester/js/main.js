$(function () {
	var grammarInput = Kefir.fromEvents($("#grammar"), "keyup").map(
		R.path(["target", "value"])
	);

	var grammar = grammarInput.flatMap(
		R.tryCatch(
			R.pipe(
				JSON.parse,
				R.ifElse(
					R.has("origin"),
					R.identity,
					R.tap(function () {
						throw "Missing origin property";
					})
				),
				Kefir.constant
			),
			Kefir.constantError
		)
	);

	grammar.onError(function (error) {
		$("#generate").addClass("disabled");
		$("#error").html(
			"<strong>There was an error in your JSON.</strong><br><br>Message: " +
				error
		);
		$("#output").html("");
	});

	grammar.onValue(function () {
		$("#generate").removeClass("disabled");
		$("#error").html("");
	});

	var traceryGrammar = grammar.map(tracery.createGrammar).toProperty();

	var createGrammar = function (t) {
		$("#output").html(t.flatten("#origin#").replace(/\n/g, "<br>"));
	};
	var clickGrammar = Kefir.fromEvents($("#generate"), "click");
	traceryGrammar.onValue(createGrammar);
	traceryGrammar.sampledBy(clickGrammar).onValue(createGrammar);
});
