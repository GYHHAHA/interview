const _historyWrap = function (type) {
  const orig = history[type];
  const e = new Event(type);
  return function () {
    const rv = orig.apply(this, arguments);
    e.arguments = arguments;
    window.dispatchEvent(e);
    return rv;
  };
};
history.pushState = _historyWrap('pushState');
history.replaceState = _historyWrap('replaceState');
