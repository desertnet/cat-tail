"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _stream = require("stream");

var filesToCat = Symbol("filesToCat");
var currentStream = Symbol("currentStream");

var CatHerd = (function (_Readable) {
  _inherits(CatHerd, _Readable);

  function CatHerd(files) {
    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    _classCallCheck(this, CatHerd);

    _get(Object.getPrototypeOf(CatHerd.prototype), "constructor", this).call(this, opts);

    this[filesToCat] = files.slice();
    this[currentStream] = _fs2["default"].createReadableStream();
  }

  _createClass(CatHerd, [{
    key: "_read",
    value: function _read(size) {
      // Nothing needed here, yet?
    }
  }]);

  return CatHerd;
})(_stream.Readable);

exports["default"] = CatHerd;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9DYXRIZXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBQWUsSUFBSTs7OztzQkFDSSxRQUFROztBQUUvQixJQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUE7QUFDdkMsSUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFBOztJQUV4QixPQUFPO1lBQVAsT0FBTzs7QUFDZCxXQURPLE9BQU8sQ0FDYixLQUFLLEVBQVc7UUFBVCxJQUFJLHlEQUFDLEVBQUU7OzBCQURSLE9BQU87O0FBRXhCLCtCQUZpQixPQUFPLDZDQUVsQixJQUFJLEVBQUM7O0FBRVgsUUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQTtBQUNoQyxRQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsZ0JBQUcsb0JBQW9CLEVBQUUsQ0FBQTtHQUNoRDs7ZUFOa0IsT0FBTzs7V0FRcEIsZUFBQyxJQUFJLEVBQUU7O0tBRVo7OztTQVZrQixPQUFPO1dBTHBCLFFBQVE7O3FCQUtLLE9BQU8iLCJmaWxlIjoiQ2F0SGVyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tIFwiZnNcIlxuaW1wb3J0IHtSZWFkYWJsZX0gZnJvbSBcInN0cmVhbVwiXG5cbmNvbnN0IGZpbGVzVG9DYXQgPSBTeW1ib2woXCJmaWxlc1RvQ2F0XCIpXG5jb25zdCBjdXJyZW50U3RyZWFtID0gU3ltYm9sKFwiY3VycmVudFN0cmVhbVwiKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRIZXJkIGV4dGVuZHMgUmVhZGFibGUge1xuICBjb25zdHJ1Y3RvciAoZmlsZXMsIG9wdHM9e30pIHtcbiAgICBzdXBlcihvcHRzKVxuXG4gICAgdGhpc1tmaWxlc1RvQ2F0XSA9IGZpbGVzLnNsaWNlKClcbiAgICB0aGlzW2N1cnJlbnRTdHJlYW1dID0gZnMuY3JlYXRlUmVhZGFibGVTdHJlYW0oKVxuICB9XG5cbiAgX3JlYWQgKHNpemUpIHtcbiAgICAvLyBOb3RoaW5nIG5lZWRlZCBoZXJlLCB5ZXQ/XG4gIH1cbn1cbiJdfQ==