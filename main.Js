class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }
  class ShoppingCartItem {
    constructor(product, quantity) {
      this.product = product;  // Une instance de Product
      this.quantity = quantity;
    }
  
    // Méthode pour calculer le prix total de cet élément
    getTotalPrice() {
      return this.product.price * this.quantity;
    }
  }
  class ShoppingCart {
    constructor() {
      this.items = [];  // Tableau pour stocker les éléments du panier
    }
  
    // Méthode pour obtenir le total des éléments dans le panier
    getTotalItems() {
      return this.items.reduce((total, item) => total + item.quantity, 0);
    }
  
    // Méthode pour obtenir le total du panier (prix total de tous les éléments)
    getTotalPrice() {
      return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }
  
    // Méthode pour ajouter un produit au panier
    addItem(product, quantity) {
      // Vérifier si le produit est déjà dans le panier
      let existingItem = this.items.find(item => item.product.id === product.id);
      if (existingItem) {
        existingItem.quantity += quantity;  // Si le produit est déjà dans le panier, on augmente la quantité
      } else {
        this.items.push(new ShoppingCartItem(product, quantity));  // Sinon, on l'ajoute
      }
    }
  
    // Méthode pour supprimer un produit du panier
    removeItem(productId) {
      this.items = this.items.filter(item => item.product.id !== productId);  // On filtre l'élément à supprimer
    }
  
    // Méthode pour afficher le contenu du panier
    displayCart() {
      if (this.items.length === 0) {
        console.log("Le panier est vide.");
      } else {
        this.items.forEach(item => {
          console.log(`${item.product.name} x${item.quantity} = ${item.getTotalPrice()}€`);
        });
      }
      console.log(`Total des articles : ${this.getTotalItems()}`);
      console.log(`Total à payer : ${this.getTotalPrice()}€`);
    }
  }
  
  