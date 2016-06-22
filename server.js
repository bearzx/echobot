var restify = require('restify');
var builder = require('botbuilder');

//=========================================================
// Bot Setup
//=========================================================
  
// Create bot and setup server
var connector = new builder.ChatConnector({
    appId: 'BumberShootSample',
    appPassword: '7d97a5f67a5b4b02b54b656a1d03c61a'
});
var bot = new builder.UniversalBot(connector);

// Setup Restify Server
var server = restify.createServer();
server.post('/api/messages', connector.verifyBotFramework(), connector.listen());
server.listen(process.env.port || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});

//=========================================================
// Bots Dialogs
//=========================================================

bot.dialog('/', function (session) {
    session.send("Hello World");
});