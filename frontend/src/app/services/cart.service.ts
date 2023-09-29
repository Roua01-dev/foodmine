import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';
import { Food } from '../shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart=this.getCartFromLocalStorage();
  private cartSubject:BehaviorSubject<Cart>=new BehaviorSubject(this.cart);

  constructor() { }

addToCart(food:Food):void{
  let cartItem=this.cart.items.find(item=>item.food.id==food.id);
if (cartItem)
return;
this.cart.items.push(new CartItem(food));
this.setCartToLocalStorage();


  // find() :Elle renvoie le premier élément
  //qui répond à la condition, ou
  //undefined si aucun élément ne répond
  //à la condition.

/*
 if pour vérifier si la variable cartItem
 a une valeur. Si elle a une valeur, cela signifie
  que l'élément est déjà présent dans le panier
 , donc la méthode retourne sans rien faire.

********************
Si la variable cartItem n'a pas de valeur,
cela signifie que l'élément n'est pas présent
dans le panier, donc la méthode continue à exécuter
 le code suivant pour ajouter l'élément au panier.
*******************
push() pour ajouter un nouvel
 objet CartItem au tableau items de l'objet cart
*/

}

removeFromCart(foodId:string):void{
  /* filter() est utilisée pour trouver
   tous les éléments qui répondent à la
    condition spécifiée dans une fonction de
    rappel. Elle renvoie un nouveau tableau
    contenant tous les éléments qui répondent
     à la condition, ou un tableau vide
  si aucun élément ne répond à la condition. */
  this.cart.items=this.cart.items
  .filter(items=>items.food.id!=foodId);
  this.setCartToLocalStorage();


}

changeQuantity(foodId:string,quantity:number){
  let cartItem=this.cart.items.find(item=>item.food.id==foodId);
  if(!cartItem)return;
  cartItem.quantity=quantity;
  cartItem.price=quantity*cartItem.food.price;
  this.setCartToLocalStorage();


}

clearCart(){
  this.cart=new Cart();
  this.setCartToLocalStorage();


}

getCartObservable():Observable<Cart>{
  /*Si le panier est mis à jour ultérieurement
  (par exemple, lorsqu'un nouvel élément est ajouté),
  l'objet cartSubject stockera la nouvelle valeur et
   notifiera tous les observateurs de cet objet
  Observable en leur envoyant la nouvelle valeur. */
  return this.cartSubject.asObservable();
}


getCart():Cart{
return this.cartSubject.value;
}
private setCartToLocalStorage():void{
  /** met à jour le prix total du panier,
   *  stocke l'objet cart mis à jour dans
   *  le stockage local du navigateur en utilisant
   *  la méthode JSON.stringify() et localStorage.
   * setItem(). Cela permet de conserver l'état actuel
   *  du panier entre les sessions utilisateur
   * et de récupérer le panier lorsque l'utilisateur
   * revient sur le site web. */
  this.cart.totalPrice=this.cart.items
  .reduce((prevSum,currentItem)=>prevSum+currentItem.price,0 )
  this.cart.totalCount=this.cart.items
  .reduce((prevSum,currentItem)=>prevSum+currentItem.quantity,0 )
  const cartJson=JSON.stringify(this.cart);
  localStorage.setItem('Cart',cartJson);

  this.cartSubject.next(this.cart);

}


private getCartFromLocalStorage():Cart{
  const cartJson=localStorage.getItem('Cart');
  return cartJson? JSON.parse(cartJson):new Cart();
  //lazem ykoun nafsou eli 7atineh(key) f localStorage 'Cart'
  /** localStorage.getItem() pour récupérer la
   *  chaîne de caractères JSON représentant
   * l'objet cart, puis utilise la méthode
   * JSON.parse() pour convertir cette chaîne
   * de caractères en un objet JavaScript.
   * Si la chaîne de caractères JSON n'est pas
   * présente dans le stockage local,
   * la méthode renvoie un nouvel objet Cart vide. */
////////////////////////////////////////
/**L'opérateur '?' est utilisé pour vérifier
 * si la valeur retournée par la méthode
 * localStorage.getItem() est null ou undefined */
//////////////////////////
/** Si la valeur est null ou undefined,
 * l'expression entière renvoie null. Dans
 * ce cas, la méthode JSON.parse() ne sera
 * pas appelée pour éviter une erreur.

Si la valeur n'est pas null ou undefined,
 l'expression JSON.parse(cartJson) est évaluée
 et renvoie un objet Cart en fonction de la chaîne
 de caractères JSON. */
}


}

