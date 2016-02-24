exports.onStart = function(ev) {
  // take option
  console.log(' ------ onStart ev.data.option ------ \n', ev.data.option);
};

exports.onHandleConfig = function(ev) {
  // modify config
  console.log(' ------ onHandleConfig ev.data.config ------ \n', ev.data.config);
};

exports.onHandleCode = function(ev) {
  // modify code
  console.log(' ------ onHandleCode ev.data.code ------ \n', ev.data.code);
};

exports.onHandleCodeParser = function(ev) {
  // modify parser
  console.log(' ------ onHandleCodeParser ------ \n', ev.data.parser);
};

exports.onHandleAST = function(ev) {
  // modify AST
  console.log(' ------ onHandleAST ev.data.ast ------ \n', ev.data.ast);
};

exports.onHandleTag = function(ev) {
  // modify tag
  console.log(' ------ onHandleTag ev.data.tag ------ \n', ev.data.tag);
};

exports.onHandleHTML = function(ev) {
  // modify HTML
  console.log(' ------ onHandleHTML ev.data.html ------ \n', ev.data.html);
};

exports.onComplete = function(ev) {
  // complete
};