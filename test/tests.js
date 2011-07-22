var tests = {};

function sandbox(){
  var el = document.createElement('div');
  el.className = 'sandbox';
  document.body.appendChild(el);
  return el;
}

tests.add = function(){  
  var container = sandbox(),
      el = document.createElement('textarea');
  domutils.add(container, el);

  assert.equal(container.childNodes.length, 1);
  assert.equal(container.childNodes[0], el);
}

tests.addListener = function(){
  // not implemented
}

tests.removeListener = function(){
  // not implemented
}

tests.attr = function(){
  var el = sandbox();
  assert.equal(domutils.attr(el, 'foo'), undefined);
  
  domutils.attr(el, 'foo', 'bar');
  assert.equal(domutils.attr(el, 'foo'), 'bar');
}

tests.children = function(){
  var parent = sandbox(),
      child = sandbox();

  parent.appendChild(child);
  var children = domutils.children(parent);
  assert.equal(children.length, 1);
  assert.equal(children[0], child);
}

tests.create = function(){
  var el = domutils.create('div');
  assert.equal(el.tagName, 'DIV');
}

tests.select = function(){
  assert.equal(domutils.select('body'), document.body);
}

tests.selectAll = function(){
  assert.equal(domutils.selectAll('body')[0], document.body);
}
