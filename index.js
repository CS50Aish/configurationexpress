var express = require("express");
var app = express();

// Use app.get() and app.set()
console.log(app.get('title'));
console.log(app.set('title', 'Configuration Commands'));
console.log(app.get('title'));

// Use app.enable and app.disable
app.enable('Configuration command - enable function');
console.log(app.get('Configuration command - enable function'));
app.disable('Configuration command - disable function');
console.log("Disable function => " + app.get('Configuration command - disable function'));

// Use app.enabled and app.disabled
console.log("Is config command disabled for disabled function => " + app.disabled('Configuration command - disabled function'));
console.log("Is config command enabled for disabled function => " + app.enabled('Configuration command - enabled function'));
app.enable('Configuration command - disabled function');
console.log("After enabling config command for disabled function => " + app.disabled('Configuration command - disabled function'));
app.enable('Configuration command - enabled function');
console.log("After enabling config command for enabled function" + app.enabled('Configuration command - enabled function'));

