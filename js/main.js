var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GameItem = (function () {
    function GameItem(radius, colour, xPosition, yPosition) {
        if (radius === void 0) { radius = 10; }
        if (colour === void 0) { colour = '#5E0028'; }
        if (xPosition === void 0) { xPosition = 0; }
        if (yPosition === void 0) { yPosition = 0; }
        this.canvas = document.querySelector('canvas');
        this.context = this.canvas.getContext('2d');
        this._radius = radius;
        this._colour = colour;
        this._xPos = xPosition;
        this._yPos = yPosition;
    }
    return GameItem;
}());
var Character = (function (_super) {
    __extends(Character, _super);
    function Character(radius, colour, xPosition, yPosition) {
        if (xPosition === void 0) { xPosition = 0; }
        if (yPosition === void 0) { yPosition = 0; }
        return _super.call(this, radius, colour, xPosition, yPosition) || this;
    }
    Character.prototype.draw = function () {
        this.context.beginPath();
        this.context.arc(this._xPos, this._yPos, this._radius, 0, Math.PI * 2, false);
        this.context.strokeStyle = this._colour;
        this.context.fillStyle = this._colour;
        this.context.stroke();
        this.context.fill();
    };
    return Character;
}(GameItem));
var Game = (function () {
    function Game() {
        var _this = this;
        this.canvas = document.querySelector('canvas');
        this.context = this.canvas.getContext('2d');
        this.gameLoop = function () {
            requestAnimationFrame(_this.gameLoop);
            _this.update();
        };
        this._bouncer = new Array();
        this._player = new Character(10, "#912F40", 10, 10);
        this.setCanvasSize();
        this.draw();
        this.gameLoop();
    }
    Game.prototype.draw = function () {
        var _this = this;
        var radius = 25;
        var xPos = Math.random() * (innerWidth - radius * 2) + radius;
        var yPos = Math.random() * (innerHeight - radius * 2) + radius;
        var xVel = (Math.random() - 0.5) * 10;
        var yVel = (Math.random() - 0.5) * 10;
        this._bouncer.push(new Projectile(radius, '#FFF', xPos, yPos, xVel, yVel));
        setTimeout(function () {
            _this.draw();
        }, 5000);
    };
    Game.prototype.update = function () {
        this.context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        this._bouncer.map(function (bouncer) {
            bouncer.draw();
            bouncer.update();
        });
        this._player.draw();
    };
    Game.prototype.setCanvasSize = function () {
        this.canvas.width = document.body.clientWidth;
        this.canvas.height = document.body.clientHeight;
    };
    return Game;
}());
var app = {};
(function () {
    var init = function () {
        app.game = new Game();
    };
    window.addEventListener('load', init);
})();
var Projectile = (function (_super) {
    __extends(Projectile, _super);
    function Projectile(radius, colour, xPosition, yPosition, xVelocity, yVelocity) {
        if (xPosition === void 0) { xPosition = 0; }
        if (yPosition === void 0) { yPosition = 0; }
        var _this = _super.call(this, radius, colour, xPosition, yPosition) || this;
        _this._xVel = xVelocity;
        _this._yVel = yVelocity;
        return _this;
    }
    Projectile.prototype.draw = function () {
        this.context.beginPath();
        this.context.arc(this._xPos, this._yPos, this._radius, 0, Math.PI * 2, false);
        this.context.strokeStyle = this._colour;
        this.context.stroke();
    };
    Projectile.prototype.update = function () {
        if (this._xPos + this._radius > innerWidth || this._xPos - this._radius < 0) {
            this._xVel = -this._xVel;
        }
        if (this._yPos + this._radius > innerHeight || this._yPos - this._radius < 0) {
            this._yVel = -this._yVel;
        }
        this._xPos += this._xVel;
        this._yPos += this._yVel;
    };
    return Projectile;
}(GameItem));
var Scoreboard = (function () {
    function Scoreboard() {
    }
    return Scoreboard;
}());
var Timer = (function () {
    function Timer() {
    }
    return Timer;
}());
var cCircle = (function () {
    function cCircle(x, y, radius, color, line_width) {
        if (color === void 0) { color = "red"; }
        if (line_width === void 0) { line_width = 2; }
        var _this = this;
        this.x = 0;
        this.y = 0;
        this.radius = 1;
        this.lineWidth = 25;
        this.color = "red";
        this.draw = function () {
            var canvas = document.getElementById('playingField');
            var context = canvas.getContext('2d');
            context.save();
            context.beginPath();
            context.strokeStyle = _this.color;
            context.lineWidth = _this.lineWidth;
            context.arc(_this.x, _this.y, _this.radius, 0, 2 * Math.PI);
            context.stroke();
            context.restore();
        };
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.lineWidth = line_width;
    }
    return cCircle;
}());
var PlayingField = (function () {
    function PlayingField(name) {
        this._name = name;
    }
    Object.defineProperty(PlayingField.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    return PlayingField;
}());
//# sourceMappingURL=main.js.map