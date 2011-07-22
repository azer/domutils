var domutils = (function(){

  function add(parentEl/*, elements to be added */){
    var i = 0,
        len = add.arguments.length;
    while(++i<len){
      parentEl.appendChild(arguments[i]);
    }

    return parentEl;
  }

  function addListener(object, eventName, fn, capture){
    object[ window.attachEvent && 'attachEvent' || 'addEventListener' ]( ( window.attachEvent && 'on' || '' ) + eventName, fn, capture );
  }

  function attr(el,name,value){
    return value ? el.setAttribute(name,value) : el.getAttribute(name);
  }

  function children(el){
    return el.children;
  }

  function create(tagName,doc){
    return (doc || document).createElement(tagName); 
  }

  function removeListener(object, eventName, fn, capture){
    object[ window.detachEvent && 'detachEvent' || 'removeEventListener' ]( ( window.detachEvent && 'on' || '' ) + eventName, fn, capture );
  }

  function select(/*element (optional), selector */){
    var args = select.arguments,
        element = args.length > 1 ? args[0] : document,
        selector = args[ args.length > 1 ? 1 : 0];
    return element.querySelector(selector); 
  }

  function selectAll(/*element (optional), selector */){
    var args = selectAll.arguments,
        element = args.length > 1 ? args[0] : document,
        selector = args[ args.length > 1 ? 1 : 0];
    return element.querySelectorAll(selector); 
  }

  return {
    'add':add
  , 'addListener':addListener
  , 'attr':attr
  , 'children':children
  , 'create':create
  , 'on':addListener
  , 'removeListener':removeListener
  , 'select':select
  , 'selectAll':selectAll
  };

})();

if(typeof module != 'undefined' && module.exports){
  module.exports = domutils;
}
