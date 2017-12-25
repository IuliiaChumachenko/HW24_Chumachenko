'use strict';

var randomMessage = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var message;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        message = ['Привет', 'Как дела?', 'Куда пропал?', 'Давно не виделись'][rand(0, 3)];
                        return _context.abrupt('return', timeout(message, 1));

                    case 2:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function randomMessage() {
        return _ref.apply(this, arguments);
    };
}();

var chat = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var message, mes;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return randomMessage();

                    case 2:
                        message = _context2.sent;
                        mes = message;


                        str = "<div>" + mes + "</div>";
                        $('#chat').append(str);

                    case 6:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function chat() {
        return _ref2.apply(this, arguments);
    };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function timeout(message) {
    var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    return new Promise(function (done) {
        setTimeout(function () {
            return done(message);
        }, time * 1000);
    });
}

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var str = '';

$(document).ready(function () {

    var mes = void 0;
    var browserShouldGo = void 0;

    $('textarea').focus(function () {
        if ($('textarea').val('Plesae enter your message')) {
            $('textarea').val('');
        }
    });

    $('#sendMessage').click(function () {
        var text = $('textarea').val();

        if (!text) {
            $('textarea').val('Plesae enter your message');
            return;
        }

        mes = new message(text);
        $('textarea').val('');

        showMes();

        if (mes.text === 'Good bye, browser!') {
            $('#chat').append('Good bye, my friend, I will miss you!');
            $('#mainForm').css('display', 'none');
            return;
        }

        browserShouldGo = Math.floor(Math.random() * 4) + 1;
        console.log(browserShouldGo);

        if (browserShouldGo === 4) {
            $('#chat').append('Sorry, my friend, I have to leave you!');
            $('#mainForm').css('display', 'none');
            return;
        }

        chat();
    });

    function showMes() {
        str = "<div>" + mes.showText() + "</div>";
        $('#chat').append(str);
    }
});
'use strict';

function message(text) {
    this.text = text;
    this.showText = function () {
        return this.text;
    };
}