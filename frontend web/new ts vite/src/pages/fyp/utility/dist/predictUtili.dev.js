"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createModel = createModel;
exports.createObj = createObj;
exports.predictResult = predictResult;
exports.toindexedDb = toindexedDb;

var tf = _interopRequireWildcard(require("@tensorflow/tfjs"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

//<input type="file" name="avatar" accept="image/png, image/jpeg" onInput={(e) => setThisPic(e.target.files[0])} ></input>
function createModel(url, method) {
  var mod;
  return regeneratorRuntime.async(function createModel$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(method === "LayersModel")) {
            _context.next = 6;
            break;
          }

          _context.next = 3;
          return regeneratorRuntime.awrap(tf.loadLayersModel(url));

        case 3:
          _context.t0 = _context.sent;
          _context.next = 9;
          break;

        case 6:
          _context.next = 8;
          return regeneratorRuntime.awrap(tf.loadGraphModel(url));

        case 8:
          _context.t0 = _context.sent;

        case 9:
          mod = _context.t0;
          return _context.abrupt("return", mod);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  });
} // for img elements to display the images fron=m useState


function createObj(img) {
  return URL.createObjectURL(img);
}

function timer(t) {
  return new Promise(function (rec) {
    setTimeout(rec, t);
  });
}

function toindexedDb(model, modelName) {
  var saveResult;
  return regeneratorRuntime.async(function toindexedDb$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(model.save("indexeddb://" + modelName));

        case 3:
          saveResult = _context2.sent;
          console.log(saveResult);
          return _context2.abrupt("return", true);

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
          return _context2.abrupt("return", false);

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 8]]);
}

function predictResult(myModel, imgInputId, imgSize, subNum, divNum, labelArr) {
  var obj, imageRef, waitTime, start, imgPre, afterResize, p, labelMyModel, ind;
  return regeneratorRuntime.async(function predictResult$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          imageRef = document.getElementById(imgInputId); // That image elements

          waitTime = 1300; // Normal wait time

          _context3.next = 5;
          return regeneratorRuntime.awrap(timer(waitTime));

        case 5:
          start = new Date();
          console.log(subNum);
          console.log(divNum);
          imgPre = tf.browser.fromPixels(imageRef).resizeNearestNeighbor([imgSize, imgSize]).toFloat().div(tf.scalar(divNum)).sub(tf.scalar(subNum)).expandDims();
          afterResize = new Date();
          console.log("Img resize & rescale time", (new Date() - start) / 1000);
          _context3.next = 13;
          return regeneratorRuntime.awrap(myModel.predict(imgPre).data());

        case 13:
          p = _context3.sent;
          console.log("yo");
          labelMyModel = labelArr;
          ind = p.indexOf(Math.max.apply(Math, _toConsumableArray(p)));
          console.log(p);
          console.log("MyModel:", labelMyModel[ind]);
          obj = {
            status: true,
            object: labelMyModel[ind],
            confident: (Math.max.apply(Math, _toConsumableArray(p)) * 100).toFixed(2) + "%",
            timeTaken: (new Date() - start) / 1000 + " secs",
            timeTakenOffset: (new Date() - start + waitTime) / 1000 + " secs"
          };
          console.log(obj);
          console.log("Time used to predict: ", (new Date() - afterResize) / 1000);
          console.log("Overall time: ", (new Date() - start) / 1000);
          console.log("----------------------------");
          _context3.next = 29;
          break;

        case 26:
          _context3.prev = 26;
          _context3.t0 = _context3["catch"](0);
          obj = {
            status: false,
            object: "",
            confident: 0,
            timeTaken: 0,
            timeTakenOffset: 0
          };

        case 29:
          _context3.prev = 29;
          return _context3.abrupt("return", obj);

        case 32:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 26, 29, 32]]);
}