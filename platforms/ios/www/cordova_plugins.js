cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-sqlite-evfree/www/SQLitePlugin.js",
        "id": "cordova-sqlite-evfree.SQLitePlugin",
        "clobbers": [
            "SQLitePlugin"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.0.0",
    "cordova-sqlite-evfree": "0.8.0-pre"
}
// BOTTOM OF METADATA
});