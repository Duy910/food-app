import pizza1 from '../img/pizza_slide_1.png'
import pizza2 from '../img/pizza_slide_3.png'
import pasta from '../img/pasta.png'
import burger1 from '../img/burgur-1.png'

const bestData = [
    {
        id: 1,
        name: 'Santa Fe pizza',
        des: 'Chicken breast, cheddar wrapped in a crispy',
        price: 24,
        imgSrc: pizza1,
    },
    {
        id: 2,
        name: 'Chocolate Donuts',
        des: 'Souce, Spicy, Chicken breast with salads',
        price: 22,
        imgSrc: pizza2,
    },
    {
        id: 3,
        name: 'Black HamBurger',
        des: 'Chicken breast, cheddar wrapped in a crispy',
        price: 21,
        imgSrc: burger1,
    },
    {
        id: 4,
        name: 'Bolognese Pasta',
        des: 'Souce, Spicy, Chicken breast with salads',
        price: 20,
        imgSrc: pasta,
    },
    
]
const categories = [
    {
        id: 1,
        name: 'Pizza',
        urlParamName:'pizza',
    },
    {
        id: 2,
        name: 'Drinks',
        urlParamName:'drink',
    },
    {
        id: 3,
        name: 'Salads',
        urlParamName:'salads',
    },
    {
        id: 4,
        name: 'Pasta',
        urlParamName:'pasta',
    },
    {
        id: 5,
        name: 'Burger',
        urlParamName:'burger',
    },
    {
        id: 6,
        name: 'Deserts',
        urlParamName:'deserts',
    },

]

export default bestData
   
