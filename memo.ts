//型注釈
const num: number = 10;
const isOk: boolean = true;
const message: string = "Hello";
const x:undefined = undefined;

// console.log(num,isOk,message,x);

const count: number = 10;
// console.log(`現在、${count}名が見ています。`);

//関数
type Point = {
  x: number;
  y: number;
}

function distance(p: Point):number{
  return (p.x ** 2 + p.y ** 2) ** (1/2);
}
const p: Point = {
  x: 10,
  y: 20
}
const result = distance(p);
console.log(p);
console.log(result);

// プリミティブ型
let str: "abc" | "def" = "abc"; //型指定時に特定の値のみを指定可能にすることができる
str = "def";
// ラッパーオブジェクトに入れる
const strObject = new String(str);
// オブジェクトのように扱う
strObject.length; // フィールドの参照
strObject.toUpperCase(); // メソッド呼び出し

console.log(str);
console.log(strObject.length);
console.log(strObject.toUpperCase());

// const foo = { a: 1, b: 2, c: 3 };
// console.log(Object.getPrototypeOf(foo) === Object.prototype);

//オブジェクト
const value1 = 123;
const value2 = 123;
console.log(value1 == value2); //プリミティブ型なので値が同じであれば同一
 
const object1 = { value: 123 };
const object2 = { value: 123 };
console.log(object1 == object2); //オブジェクトは値が同じでも同一と判定されない


//クラスベースオブジェクト指向
class Menu {
  items: Array<string>;
  pages: number;

  constructor(item_list: Array<string>, total_pages: number){
    this.items = item_list;
    this.pages = total_pages;
  }

  list(): void {
    console.log("Our menu fot today:");
    for(let i=0; i<this.items.length; i++){
      console.log(this.items[i]);
    }
  }
}

const sundayMenu = new Menu(["pancakes","waffles","orange juice"],1);
sundayMenu.list();


class HappyMeel extends Menu {
  constructor(item_list: Array<string>, total_pages: number){
    super(item_list, total_pages);
  }
}

const menu_for_children = new HappyMeel(["candy","drink","toy"],1);
menu_for_children.list();