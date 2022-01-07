var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//型注釈
var num = 10;
var isOk = true;
var message = "Hello";
var x = undefined;
// console.log(num,isOk,message,x);
var count = 10;
function distance(p) {
    return Math.pow((Math.pow(p.x, 2) + Math.pow(p.y, 2)), (1 / 2));
}
var p = {
    x: 10,
    y: 20
};
var result = distance(p);
console.log(p);
console.log(result);
// プリミティブ型
var str = "abc"; //型指定時に特定の値のみを指定可能にすることができる
str = "def";
// ラッパーオブジェクトに入れる
var strObject = new String(str);
// オブジェクトのように扱う
strObject.length; // フィールドの参照
strObject.toUpperCase(); // メソッド呼び出し
console.log(str);
console.log(strObject.length);
console.log(strObject.toUpperCase());
// const foo = { a: 1, b: 2, c: 3 };
// console.log(Object.getPrototypeOf(foo) === Object.prototype);
//オブジェクト
var value1 = 123;
var value2 = 123;
console.log(value1 == value2); //プリミティブ型なので値が同じであれば同一
var object1 = { value: 123 };
var object2 = { value: 123 };
console.log(object1 == object2); //オブジェクトは値が同じでも同一と判定されない
//クラスベースオブジェクト指向
var Menu = /** @class */ (function () {
    function Menu(item_list, total_pages) {
        this.items = item_list;
        this.pages = total_pages;
    }
    Menu.prototype.list = function () {
        console.log("Our menu fot today:");
        for (var i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    };
    return Menu;
}());
var sundayMenu = new Menu(["pancakes", "waffles", "orange juice"], 1);
sundayMenu.list();
var HappyMeel = /** @class */ (function (_super) {
    __extends(HappyMeel, _super);
    function HappyMeel(item_list, total_pages) {
        return _super.call(this, item_list, total_pages) || this;
    }
    return HappyMeel;
}(Menu));
var menu_for_children = new HappyMeel(["candy", "drink", "toy"], 1);
menu_for_children.list();
