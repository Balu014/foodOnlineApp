import { Component, OnInit } from '@angular/core';
import { CartService } from '../servic/cart.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import * as AOS from 'aos';
@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {


  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['<i class="fa fa-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  page : any;
  
  term : any;
 

  owl_car= [
    {
      img_id: 1,
      imgUrl:"./assets/images/bestIn.jpg",
      imgRouter:"/best-in-town"
    },
    {
      img_id: 2,
      imgUrl:"./assets/images/biriyanisowl.jpg",
      imgRouter:"/biriyani"
    },
    {
      img_id: 3,
      imgUrl:"./assets/images/chinese.jpg",
      imgRouter:"/chinese-cuisine"
    },
    {
      img_id: 4,
      imgUrl:"./assets/images/deals.jpg",
      imgRouter:"/deals-of-day"
    },
    {
      img_id: 5,
      imgUrl:"./assets/images/sweets.jpg",
      imgRouter:"/sweets"
    },
    {
      img_id: 6,
      imgUrl:"./assets/images/treat.jpg",
      imgRouter:"/treats-Top-Rated"
    }
    
  ]
  
  menu = [
    {
      menu_id: 1,
      img:"./assets/images/chicken.jpg",
      cost:300,
      dish:"Chicken Mughlai with Bone",
      quantity:1,
      rating:3.8
    },
    {
      menu_id: 2,
      img:"./assets/images/fishcurry.jpg",
      cost:350,
      dish:"Fish Butter Masala",
      quantity:1,
      rating:4.8
    },
    {
      menu_id: 3,
      img:"./assets/images/burger.jpg",
      cost:150,
      dish:"Chesse Chicken Burger",
      quantity:1,
      rating:4.3
    },
    {
      menu_id: 4,
      img:"./assets/images/pizza.jpg",
      cost:250,
      dish:"Spl Panner Pizza",
      quantity:1,
      rating:3.9
    },
    {
      menu_id: 5,
      img:"./assets/images/biriyani.jpg",
      cost:400,
      dish:"Hyd Chicken Dum Biryani",
      quantity:1,
      rating:4.1
    },
    {
      menu_id: 6,
      img:"./assets/images/muttonsoup.jpg",
      cost:500,
      dish:"Garlic Mutton Soup",
      quantity:1,
      rating:4.8
    }
  ];

  

 
 
  constructor(private cart : CartService) {}
 


 
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
