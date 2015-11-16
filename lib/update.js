module.exports = exports = function(execApp) {
  console.log('checking for updates...');
  setTimeout(function() {
    execApp();
  },2000);
};
