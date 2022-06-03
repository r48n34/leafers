"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signInWithGoogle = signInWithGoogle;
exports.checkLogin = checkLogin;
exports.addCollectionsOneLayer = addCollectionsOneLayer;
exports.addCollectionsTwoLayer = addCollectionsTwoLayer;
exports.addCollectionsTwoLayerNoSecDoc = addCollectionsTwoLayerNoSecDoc;
exports.getTwoLayerCollections = getTwoLayerCollections;
exports.getTwoLayerCollectionsContinue = getTwoLayerCollectionsContinue;
exports.userdataCheck = userdataCheck;
exports.updateSpecificUserSetting = updateSpecificUserSetting;
exports.signOutAcc = exports.auth = void 0;

var _app = _interopRequireDefault(require("firebase/compat/app"));

require("firebase/compat/auth");

require("firebase/compat/firestore");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var firebaseConfig = {
  apiKey: "AIzaSyCHrLIgAYBE7XRslJqJJvR4JZ6pYpdEWTk",
  authDomain: "fypserver-160d2.firebaseapp.com",
  projectId: "fypserver-160d2",
  storageBucket: "fypserver-160d2.appspot.com",
  messagingSenderId: "1072551566605",
  appId: "1:1072551566605:web:73987b85ba0fbdbdbfe444",
  measurementId: "G-BLVG0TQYNK"
};

_app["default"].initializeApp(firebaseConfig);

var provider = new _app["default"].auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

var auth = _app["default"].auth();

exports.auth = auth;

var db = _app["default"].firestore();

function signInWithGoogle() {
  return regeneratorRuntime.async(function signInWithGoogle$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          auth.signInWithPopup(provider)["catch"](function (error) {
            console.error(error);
          });

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
}

var signOutAcc = function signOutAcc() {
  return auth.signOut()["catch"](function (error) {
    console.error(error);
  });
};

exports.signOutAcc = signOutAcc;

function checkLogin() {
  return regeneratorRuntime.async(function checkLogin$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          return _context3.abrupt("return", new Promise(function _callee(rec, rej) {
            return regeneratorRuntime.async(function _callee$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _app["default"].auth().onAuthStateChanged(function (user) {
                      rec(user ? user : false);
                    });

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            });
          }));

        case 1:
        case "end":
          return _context3.stop();
      }
    }
  });
} //const googleProvider = new firebase.auth.GoogleAuthProvider();
// db.collection("users").doc("hkd7SWhYZFS0JcmkZBpa4Yx1Wav1").set({


function addCollectionsOneLayer(collectionsName, docName, obj) {
  return regeneratorRuntime.async(function addCollectionsOneLayer$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          return _context4.abrupt("return", new Promise(function (rec, rej) {
            db.collection(collectionsName).doc(docName).set(obj).then(function () {
              rec(true);
            })["catch"](function (error) {
              console.error("Error adding document: ", error);
              rec(false);
            });
          }));

        case 1:
        case "end":
          return _context4.stop();
      }
    }
  });
}

function addCollectionsTwoLayer(collectionsName1, docName1, collectionsName2, docName2, obj) {
  return regeneratorRuntime.async(function addCollectionsTwoLayer$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          return _context5.abrupt("return", new Promise(function (rec, rej) {
            db.collection(collectionsName1).doc(docName1).collection(collectionsName2).doc(docName2).set(obj).then(function () {
              rec(true);
            })["catch"](function (error) {
              console.error("Error adding document: ", error);
              rec(false);
            });
          }));

        case 1:
        case "end":
          return _context5.stop();
      }
    }
  });
}

function addCollectionsTwoLayerNoSecDoc(collectionsName1, docName1, collectionsName2, obj) {
  return regeneratorRuntime.async(function addCollectionsTwoLayerNoSecDoc$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          return _context6.abrupt("return", new Promise(function (rec, rej) {
            db.collection(collectionsName1).doc(docName1).collection(collectionsName2).doc().set(obj).then(function () {
              rec(true);
            })["catch"](function (error) {
              console.error("Error adding document: ", error);
              rec(false);
            });
          }));

        case 1:
        case "end":
          return _context6.stop();
      }
    }
  });
}

function getTwoLayerCollections(collectionName1, docName, collectionName2) {
  return regeneratorRuntime.async(function getTwoLayerCollections$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          return _context8.abrupt("return", new Promise(function _callee2(rec, rej) {
            var docRef, arr;
            return regeneratorRuntime.async(function _callee2$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.prev = 0;
                    _context7.next = 3;
                    return regeneratorRuntime.awrap(db.collection(collectionName1).doc(docName).collection(collectionName2).orderBy("createAt", "desc").limit(2).get());

                  case 3:
                    docRef = _context7.sent;
                    arr = docRef.docs.map(function (doc) {
                      return doc.data();
                    });
                    rec({
                      status: true,
                      data: arr
                    });
                    _context7.next = 12;
                    break;

                  case 8:
                    _context7.prev = 8;
                    _context7.t0 = _context7["catch"](0);
                    console.log(_context7.t0);
                    rec({
                      status: false
                    });

                  case 12:
                  case "end":
                    return _context7.stop();
                }
              }
            }, null, null, [[0, 8]]);
          }));

        case 1:
        case "end":
          return _context8.stop();
      }
    }
  });
}

function getTwoLayerCollectionsContinue(collectionName1, docName, collectionName2, lastVisible) {
  return regeneratorRuntime.async(function getTwoLayerCollectionsContinue$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          return _context10.abrupt("return", new Promise(function _callee3(rec, rej) {
            var docRef, arr;
            return regeneratorRuntime.async(function _callee3$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.prev = 0;
                    _context9.next = 3;
                    return regeneratorRuntime.awrap(db.collection(collectionName1).doc(docName).collection(collectionName2).orderBy("createAt", "desc").startAfter(lastVisible).limit(2).get());

                  case 3:
                    docRef = _context9.sent;
                    arr = docRef.docs.map(function (doc) {
                      return doc.data();
                    });
                    console.log(arr);
                    rec({
                      status: true,
                      data: arr
                    });
                    _context9.next = 13;
                    break;

                  case 9:
                    _context9.prev = 9;
                    _context9.t0 = _context9["catch"](0);
                    console.log(_context9.t0);
                    rec({
                      status: false
                    });

                  case 13:
                  case "end":
                    return _context9.stop();
                }
              }
            }, null, null, [[0, 9]]);
          }));

        case 1:
        case "end":
          return _context10.stop();
      }
    }
  });
}

function userdataCheck(userId) {
  return regeneratorRuntime.async(function userdataCheck$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          return _context12.abrupt("return", new Promise(function _callee4(rec, rej) {
            var docRef, arr;
            return regeneratorRuntime.async(function _callee4$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.prev = 0;
                    _context11.next = 3;
                    return regeneratorRuntime.awrap(db.collection("users").doc(userId).collection("userSetting").doc("currentConfig").get());

                  case 3:
                    docRef = _context11.sent;
                    arr = docRef.exists ? docRef.data() : [];
                    rec({
                      status: true,
                      data: arr
                    });
                    _context11.next = 12;
                    break;

                  case 8:
                    _context11.prev = 8;
                    _context11.t0 = _context11["catch"](0);
                    console.log(_context11.t0);
                    rec({
                      status: false
                    });

                  case 12:
                  case "end":
                    return _context11.stop();
                }
              }
            }, null, null, [[0, 8]]);
          }));

        case 1:
        case "end":
          return _context12.stop();
      }
    }
  });
}

function updateSpecificUserSetting(userId, singleObj) {
  return regeneratorRuntime.async(function updateSpecificUserSetting$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          return _context14.abrupt("return", new Promise(function _callee5(rec, rej) {
            var docRef;
            return regeneratorRuntime.async(function _callee5$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.prev = 0;
                    //let docRef = await db.collection(userId).doc("userSetting").collection("currentConfig").get();
                    docRef = db.collection("users").doc(userId).collection("userSetting").doc("currentConfig");
                    _context13.next = 4;
                    return regeneratorRuntime.awrap(docRef.update(singleObj));

                  case 4:
                    //let arr = docRef.exists ? docRef.data() : [];
                    rec({
                      status: true
                    });
                    _context13.next = 11;
                    break;

                  case 7:
                    _context13.prev = 7;
                    _context13.t0 = _context13["catch"](0);
                    console.log(_context13.t0);
                    rec({
                      status: false
                    });

                  case 11:
                  case "end":
                    return _context13.stop();
                }
              }
            }, null, null, [[0, 7]]);
          }));

        case 1:
        case "end":
          return _context14.stop();
      }
    }
  });
} //getTwoLayerCollections("users", "hkd7SWhYZFS0JcmkZBpa4Yx1Wav1", "predictHistory");