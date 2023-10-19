export const TYPE=[
    "Dvd","Furniture","Book"
]
export default class StockProduct{
    constructor(
        {sku,type,price,name}
        ){
        this.id=Math.floor(Math.random()*10000000000)
        this.sku=sku
       this.name=name
        this.price=price
        this.type=type 
        
    }}
      export class DvdProduct extends StockProduct {
        constructor({ sku, price, name, mb }) {
          super({ sku, price, name });
          this.type = "Dvd";
          this.mb = mb;
        }
      }
      
      export class FurnitureProduct extends StockProduct {
        constructor({ sku, price, name, height, width, length }) {
          super({ sku, price, name });
          this.type = "Furniture";
          this.height = height;
          this.width = width;
          this.length = length;
        }
      }
      
      export class BookProduct extends StockProduct {
        constructor({ sku, price, name, kg }) {
          super({ sku, price, name });
          this.type = "Book";
          this.kg = kg;
        }
      }
      
   
    