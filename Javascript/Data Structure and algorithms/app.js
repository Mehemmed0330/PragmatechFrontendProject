// Destructuring Arrays
const restuarant = {
    surname: "Classico Italiano",
    location: "Via Angelo Tavanti 23",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Other"],
    starterMenu: ["Focaccia", "Bruschita", "Garlic", "Bread"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],
    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },
    orderPasta: function(ing1, ing2, ing3) {
        console.log(`${ing1},${ing2},${ing3}`)
    },
    openingHours: {
        thu: {
            open: 12,
            close: 22
        },
        fri: {
            open: 11,
            close: 23
        }
    }
}
restuarant.orderDelivery({
    time: '22:30',
    adress: 'Via Del'
})

const ingr = [prompt("1"),
    prompt("2"),
    prompt("3"),
];
console.log(ingr);
// const arr = [1, 2, 3, 5];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// const d = arr[3];
// console.log(a, b, c, d)

// const [x, y, z, v] = arr
// console.log(x, y, z, v);


// const [, , , second] = restuarant.categories;
// console.log(second);
// const [start, main] = restuarant.order(0, 1);
// console.log(start, main)

// Destructuring Object

// const { surname, categories, openingHours } = restuarant;
// console.log(surname, categories, openingHours);

// const { surname: restuarantSurname, categories: restuarantCategories } = restuarant;
// console.log(restuarantSurname, restuarantCategories)

// const { menu = [], starterMenu: strmenu = [] } = restuarant;
// console.log((menu, strmenu))

// const { fri: { open, close } } = restuarant.openingHours;
// console.log(open, close)

// const arr = [5, 15, 25];
// const newBadarr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(newBadarr);

// const newArray = [5, 9, 7, 8, ...arr];
// console.log(newArray)