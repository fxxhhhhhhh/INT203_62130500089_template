const app = {
    data() {
        return {
            list: [{title: 'KISS ME', pic: '/images/1.jpg', fav: false},
                   {title: 'MARTINI BLUE', pic: '/images/2.jpg', fav: false},
                   {title: 'JASMINE', pic: '/images/3.jpg', fav: false},
                   {title: 'JAM & BUTTERFLY', pic: '/images/4.jpg', fav: false}
                ]
        }
    },
    methods: {
        toggle(index) {
            this.list[index].fav = !this.list[index].fav
        }
    },
    calculated: {
        countFav() {
            return this.list.filter((l)=> l.fav ).length;
        }
    }

};
Vue.createApp(app).mount('#app')