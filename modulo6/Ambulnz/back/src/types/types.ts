export type Pizza = {
    name: string,
    price: number,
    ingredients: string[]
}

export type OrderItem = {
    id: string,
    pizza: string,
    quantity: number, 
    itemPrice: number
}

export type Order = {
    id: string,
    items: OrderItem[],
    totalPrice: number
}