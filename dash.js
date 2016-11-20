//warning this may trigger multiple times for one press
//...usually triggers twice based on testing for each press

var hook_url = 'https://hooks.slack.com/services/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';

var dash_button = require('node-dash-button');
var Slack = require('node-slack');
var slack = new Slack(hook_url,{});

var dash = dash_button("50:f5:da:ad:69:d5", null, null, 'all'); //address from step above
console.log('Waiting...');

dash.on("detected", function (){
    console.log("Button was clicked");
    sendSlack();
});


var sendSlack = function(){
	slack.send({
    	text: 'The dash button was clicked !!!',
    	channel: '#devops',
    	username: 'Amazon Dash'
}	);
}