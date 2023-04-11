import { Component, OnInit } from '@angular/core';
import { CartService } from '../servic/cart.service';
import * as AOS from 'aos';


@Component({
  selector: 'app-biriyani-sec',
  templateUrl: './biriyani-sec.component.html',
  styleUrls: ['./biriyani-sec.component.css']
})
export class BiriyaniSecComponent implements OnInit {

  page : any;
  
  term : any;

  menu = [
    {
      menu_id: 11,
      img:"./assets/images/ckcfrybir.jpg",
      cost:300,
      dish:"Chicken Fry Biriyani",
      quantity:1,
      rating:3.9
    },
    {
      menu_id: 12,
      img:"./assets/images/mshbir.jpg",
      cost:350,
      dish:"Mushroom Masala Biriryani",
      quantity:1,
      rating:4.2
    },
    {
      menu_id: 13,
      img:"./assets/images/prwbir.jpg",
      cost:150,
      dish:"Mughlai Prawns Biryani",
      quantity:1,
      rating:4.6
    },
    {
      menu_id: 14,
      img:"./assets/images/ckcbir.jpg",
      cost:250,
      dish:"Ulavacharu Mutton Biryani",
      quantity:1,
      rating:3.7
    },
    {
      menu_id: 15,
      img:"./assets/images/ckchydbir.jpg",
      cost:400,
      dish:"Tandoori Chicken Biryani",
      quantity:1,
      rating:4.9
    },
    {
      menu_id: 16,
      img:"./assets/images/ckcmugbir.jpg",
      cost:500,
      dish:"Special Fish Biryani (bone Less)",
      quantity:1,
      rating:3.4
    },
    {
      menu_id: 17,
      img:"./assets/images/eggbir.jpg",
      cost:500,
      dish:"Egg Dal Biryani",
      quantity:1,
      rating:3.5
    },
    {
      menu_id: 18,
      img:"./assets/images/vebir.jpg",
      cost:500,
      dish:"Schezwan Vegetable Biryani",
      quantity:1,
      rating:3.5
    },
    {
      menu_id: 19,
      img:"./assets/images/gobirice.jpg",
      cost:500,
      dish:"Special Gobi 65 Biriyani",
      quantity:1,
      rating:3.8
    },
    {
      menu_id: 20,
      img:"./assets/images/panbir.jpg",
      cost:500,
      dish:"Spl Paneer Biryani ",
      quantity:1,
      rating:3.9
    }
  ];

  constructor(private cart : CartService) { }
  viewtype = true;

  gridView ={'display':'inline-block'}
  listView ={'display':'inline-flex', 'font-size':'10px !important'}

  gridView1 ={'margin-left': '70px','display': 'inline-flex','width':'300px'}
  listView1 ={'margin-left': '20px' }

  imgwidthInc ={'width':'250%'}
  imgwidthDec ={'width':'88%'}

  gridfont ={'font-size':'20px', 'font-family':' Arial, serif','margin-top':'10px'}
  listfont ={'font-size':'2.5rem', 'font-family':' Arial, serif'}

  gridCartbtns ={'flex-direction': 'column'}
  listCartbtns ={'flex-direction': 'row'}

  ngOnInit(): void {
    AOS.init();
    
  }
  sort(order:any){
    if(order =='asc'){
      this.menu.sort((items1,itmes2)=>{
        console.log('asc')
       return items1.cost > itmes2.cost ? 1 : -1
      })
    }else{
      this.menu.sort((items1,itmes2)=>{
        console.log('dsc')
        return items1.cost > itmes2.cost ? -1 : 1
       })
    }

  }

  OnlistView(){
    this.viewtype= true;
    console.log("working Grid")
  }
  OngridView(){
    this.viewtype= false;
    console.log("working List")
  }

  // Incrementing items in cart
  addItems(details:any){
    if(details.quantity !=5){
      details.quantity += 1
    }
  }

  // Deccrementing items in cart
  removeItems(details:any){
    if(details.quantity !=1){
      details.quantity -= 1 
    }
  }

  itemsCart : any = []

  //On Click of Addcart Button
  addCart(details:any){
    
    // Getting localcart values from localstorage & storing in cartDataNull
    let cartDataNull = localStorage.getItem('localcart',)

    // if cartDataNull did hold any data, then we need to push the details in to Storedata variable & again store that data in localcart key in localstorage 
    if (cartDataNull == null){
      let storeData : any = [];
      storeData.push(details);
      localStorage.setItem("localcart",JSON.stringify(storeData));
    }
    // if cart exist some data
    else{
      var id = details.menu_id;
      let index:number = -1;
      this.itemsCart = JSON.parse(localStorage.getItem('localcart')|| '{}');

      for(let i=0; i<this.itemsCart.length; i++){
        if(parseInt(id) === parseInt(this.itemsCart[i].menu_id)){
          this.itemsCart[i].quantity = details.quantity;
          index = i;
          break;
        }
      }    
      if(index == -1){
        this.itemsCart.push(details);
        localStorage.setItem('localcart', JSON.stringify(this.itemsCart))
      }
      else{
        localStorage.setItem('localcart', JSON.stringify(this.itemsCart))
      }
    }
    this.cartNumFun();
  }

  cartNum : number = 0;
  // Sending cart length to cart service(subject) to fetch at header Section (no:of items selected)
  cartNumFun(){
    var cartValue = JSON.parse(localStorage.getItem('localcart')|| '{}');
    this.cartNum = cartValue.length;
    this.cart.cartSubject.next(this.cartNum)
    console.log("cart values" + this.cartNum)
  }
 

}
