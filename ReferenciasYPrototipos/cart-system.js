class Cart {
    constructor() {
        this.items = []
    }

    // 💥 Estás mutando directamente el objeto dentro del array
    // addProduct(product){
    //     const findItem = this.items.find((item) => item.name === product.name)
    //     if (findItem){
    //         findItem.quantity += 1
    //     } else {
    //         product.quantity = 1
    //         this.items = [...this.items, product]
    //     }
    // }

    // ✅ Versión PRO (inmutable)
        addProduct(product) {
            const exists = this.items.find(item => item.name === product.name)

            if (exists) {
                this.items = this.items.map(item => {
                    if (item.name === product.name) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
            } else {
                this.items = [...this.items, { ...product, quantity: 1 }]
            }
        }








    removeProduct(name){
        this.items = this.items.filter((product) => product.name !== name)
    }

    getTotal() {
        return this.items.reduce(
            (acc, product) => acc + product.price * product.quantity,
            0
        )
    }

    getSummary(){
        const totalItems = this.items.reduce(
            (acc, product) => acc + product.quantity,
            0
        )
        const totalPrice = this.getTotal()

        return {
            totalItems,
            totalPrice
        }
    }
}


const cart = new Cart()

cart.addProduct({ name: "Laptop", price: 1000 })
cart.addProduct({ name: "Mouse", price: 50 })
cart.addProduct({ name: "Laptop", price: 1000 })

console.log(cart);

console.log(cart.getSummary());

console.log(cart.getTotal());