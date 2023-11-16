import { createStore } from 'vuex'

export default createStore({
    state: {
        categories: [
            {   
                name: 'Ноутбуки', 
                id: 'notebooks', 
                products: [
                    { id: 1, name: 'MacBook Air - Space Grey' , image: 'macbook-air-space-gray.jpeg', price: 1229}, 
                    { id: 2, name: 'Lenovo IdeaPad Slim 3' , image: 'lenovo-ideapad-slim-3.avif', price: 320}
                    
                ]  
            },
            {   name: 'Телефони', 
                id: 'telephones', 
                products: [
                    { id: 1, name: 'iPhone 15', image: 'iphone-15-black.jpeg', price: 979 },
                    { id: 2, name: 'Google Pixel 8 Pro', image: 'google_pixel_.jpg', price: 999 }
                ]
            },
            {
                name: 'Телевізори', 
                id: 'televisions', 
                products: [
                    { id: 1, name: 'LG UQ81 70 ', image: 'lg-smarttv.jpeg', price: 799 },
                    { id: 2, name: 'Samsung 55 Inch CU7100', image: 'samsungTv_.jpg', price: 429 }
                ]
            },
          ]
    },


    getters: {
        getCategories: (state) => state.categories,
        getCategoryById: (state) => {
            return (categoryId) => {
                return { ...state.categories.find((category) => category.id == categoryId) }
            }
        },
    },
    mutations: {},

    actions: {},

    modules: {},
})