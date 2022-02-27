"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uriToTensor = uriToTensor;
exports.getFuntionDataFromId = getFuntionDataFromId;

var tf = _interopRequireWildcard(require("@tensorflow/tfjs"));

var jpeg = _interopRequireWildcard(require("jpeg-js"));

var ImageManipulator = _interopRequireWildcard(require("expo-image-manipulator"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//import * as FileSystem from 'expo-file-system';
//import { decodeJpeg } from '@tensorflow/tfjs-react-native';
// Thanks https://github.com/ohyicong/reactnative-knn-image-classifier/blob/main/App.js
function base64ImageToTensor(base64) {
  //Function to convert jpeg image to tensors
  var rawImageData = tf.util.encodeString(base64, 'base64');
  var TO_UINT8ARRAY = true;

  var _jpeg$decode = jpeg.decode(rawImageData, TO_UINT8ARRAY),
      width = _jpeg$decode.width,
      height = _jpeg$decode.height,
      data = _jpeg$decode.data; // Drop the alpha channel info for mobilenet


  var buffer = new Uint8Array(width * height * 3);
  var offset = 0; // offset into original data

  for (var i = 0; i < buffer.length; i += 3) {
    buffer[i] = data[offset];
    buffer[i + 1] = data[offset + 1];
    buffer[i + 2] = data[offset + 2];
    offset += 4;
  }

  return tf.tensor3d(buffer, [height, width, 3]);
} // resize images for sutiable images


function resizeImage(imageUrl, width, height) {
  var actions, saveOptions, res;
  return regeneratorRuntime.async(function resizeImage$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          actions = [{
            resize: {
              width: width,
              height: height
            }
          }];
          saveOptions = {
            compress: 0.75,
            format: ImageManipulator.SaveFormat.JPEG,
            base64: true
          };
          _context.next = 4;
          return regeneratorRuntime.awrap(ImageManipulator.manipulateAsync(imageUrl, actions, saveOptions));

        case 4:
          res = _context.sent;
          return _context.abrupt("return", res);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
} // Transfer image to tensor data for predict


function uriToTensor(url, imgsize) {
  var imagePred, tensor;
  return regeneratorRuntime.async(function uriToTensor$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(resizeImage(url, imgsize, imgsize));

        case 2:
          imagePred = _context2.sent;
          tensor = base64ImageToTensor(imagePred.base64);
          return _context2.abrupt("return", tensor);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
} // id = 0, food101Model data


function food101Data() {
  var modelJson = require("./modelPath/model.json");

  var mW1 = require("./modelPath/group1-shard1of4.bin");

  var mW2 = require("./modelPath/group1-shard2of4.bin");

  var mW3 = require("./modelPath/group1-shard3of4.bin");

  var mW4 = require("./modelPath/group1-shard4of4.bin");

  return [modelJson, [mW1, mW2, mW3, mW4]];
} // return model data as id input


function getFuntionDataFromId(id) {
  var arr;
  return regeneratorRuntime.async(function getFuntionDataFromId$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          arr = [food101Data];

          if (!(id < 0 || id + 1 > arr.length)) {
            _context3.next = 3;
            break;
          }

          return _context3.abrupt("return", []);

        case 3:
          return _context3.abrupt("return", arr[id]());

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
} // async function uriToTensor(url, imgsize){
//     // old method for transfer image to tensor
//     // const fileUri = url;      
//     // const imgB64 = await FileSystem.readAsStringAsync(fileUri, {
//     //     encoding: FileSystem.EncodingType.Base64,
//     // });
//     // const imgBuffer = tf.util.encodeString(imgB64, 'base64').buffer;
//     // const raw = new Uint8Array(imgBuffer);
//     // const imageTensor = decodeJpeg(raw);
//     // return imageTensor;
// }