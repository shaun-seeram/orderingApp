import placeholder from "../assets/placeholder.png";

const menuList = [
    {
        id: "01",
        title: "Hot Beverages",
        items: [{
            id: "hb01",
            title: "Brewed Coffee",
            image: placeholder,
            sizes: [{
                size: "Small",
                calories: 10,
                price: 1.76,
            },
            {
                size: "Medium",
                calories: 20,
                price: 2.76,
            },
            {
                size: "Large",
                calories: 30,
                price: 3.76,
            }]
        },
        {
            id: "hb02",
            title: "Hot Coffee",
            image: placeholder,
            sizes: [{
                size: "Small",
                calories: 20,
                price: 4.76,
            },
            {
                size: "Medium",
                calories: 30,
                price: 2.46,
            },
            {
                size: "Large",
                calories: 32,
                price: 5.76,
            },]
        },
        {
            id: "hb03",
            title: "Wow Coffee",
            image: placeholder,
            sizes: [{
                size: "Small",
                calories: 14,
                price: 1.36,
            },
            {
                size: "Medium",
                calories: 22,
                price: 2.76,
            },
            {
                size: "Large",
                calories: 90,
                price: 2.74,
            },]
        },]
    },
    {
        id: "02",
        title: "Cold Beverages",
        items: []
    },
    {
        id: "03",
        title: "Breakfast",
        items: []
    },
    {
        id: "04",
        title: "Lunch",
        items: []
    },
    {
        id: "05",
        title: "Baked Goods",
        items: []
    }
]

export default menuList