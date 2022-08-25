
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)








// variable
const popular = $('.popular-bg .row');
const service = $('.service .row');
const special = $('.special .row')

const app = {
    //data
    menu : [
        {
            id: 1,
            name: "Cappuccino",
            price: 5,
            image: './source/images/cofe1.png',
            type: ['Hot', 'Cold'],
            description: ''
        },
        {
            id: 2,
            name: "Espresso",
            price: 5,
            image: './source/images/espresso.png',
            type: ['Hot', 'Cold'],
            description: ''
        },
        {
            id: 3,
            name: "Hazelnut Late",
            price: 5,
            image: './source/images/hazelnut.png',
            type: ['Hot', 'Cold'],
            description: ''
        },
        {
            id: 4,
            name: "Sandwich",
            price: 12,
            image: './source/images/img5.png',
            type: ['Hot', 'Cold'],
            description: 'bread with meat and vegetables'
        },
        {
            id: 5,
            name: "Hot Milk",
            price: 10,
            image: './source/images/img6.png',
            type: ['Hot', 'Cold'],
            description: 'Hot Milk with less sugar'
        },
        {
            id: 6,
            name: "Coffee Ice Cream",
            price: 5,
            image: './source/images/img7.png',
            type: ['Hot', 'Cold'],
            description: 'Coffee with ice cream vanilla'
        },
        {
            id: 7,
            name: "Cappuccino",
            price: 15,
            image: './source/images/img8.png',
            type: ['Hot', 'Cold'],
            description: 'Hot Cappuccino'
        },
        {
            id: 8,
            name: "Moccacinno",
            price: 25,
            image: './source/images/img9.png',
            type: ['Hot', 'Cold'],
            description: 'Hot Moccacino'
        },
        {
            id: 9,
            name: "Walffe Ice Cream",
            price: 12,
            image: './source/images/img10.png',
            type: ['Hot', 'Cold'],
            description: 'Walffe with ice cream'
        },

    ],
    services: [
        {
            image: './source/images/img.png',
            name: 'choose you coffee',
            txt: 'there are 20+ coffee for you'
        },
        {
            image: './source/images/img2.png',
            name: 'we delivery it to you',
            txt: 'choose delivery service'
        },
        {
            image: './source/images/img3.png',
            name: 'Enjoy your coffee',
            txt: 'choose delivery service'
        }
    ],



    // function
    render: function() {
        const htmls = this.menu.map(item => {
            if (item.id <= 3) {
                return `
                <div class="col-md-4">
                    <div class="drink">
                        <div class="drink-img" style="background-image: url(${item.image});"></div>
                        <div class="drink-body">
                            <div class="drink-header">
                                <div class="drink-name">${item.name}</div>
                                <div class="drink-price">${item.price}$</div>
                            </div>
                            <div class="drink-footer">
                                <div class="drink-options">
                                    <span class="drink-option active">${item.type[0]}</span>
                                    <span class="drink-option">${item.type[1]}</span>
                                </div>
                                <span class="icon">
                                    <span></span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                `
            }
        });
        popular.innerHTML = htmls.join('')
        
        const htmls2 = this.services.map(item => {
            return `
            <div class="col-md-4">
                <div class="service-box">
                    <div class="service-image" style="background-image: url(${item.image})"></div>
                    <div class="service-title">${item.name}</div>
                    <p class="service-description">${item.txt}</p>
                </div>
            </div>
            `
        });
        service.innerHTML = htmls2.join('')

        const htmls3 = this.menu.map(item => {
            if (item.id > 3) {
                return `
                <div class="col-md-4">
                    <div class="drink">
                        <div class="drink-img" style="background-image: url(${item.image});"></div>
                        <div class="drink-body">
                            <div class="drink-header">
                                <div class="drink-name">${item.name}</div>
                                <div class="drink-price">${item.price}$</div>
                            </div>
                            <div class="drink-footer">
                                <div class="drink-text">
                                    <p>${item.description}</p>
                                </div>
                                <span class="icon">
                                    <span></span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                `
            }
        });
        special.innerHTML = htmls3.join('')
    },
    toTop: function(){
        // hidden button
        window.onscroll = () => {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                $('.btnTop').style.display = 'block';
            } else {
                $('.btnTop').style.display = 'none'
            }
        }
        // event click button to top
        $('.btnTop').onclick = function() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
    },
    showCart: function() {
        $('.cart').addEventListener('click', function() {
            $('.buy').classList.toggle('active')
        })
    },
    activeNav: function() {
        $$('.menu-link').forEach(link => {
            link.addEventListener('click',() => {
                $('.menu-link.active').classList.remove('active')
                link.classList.add('active')
            })
        });
    },

    // auto run app
    start: function() {

        // render menu
        this.render()
        // to top
        this.toTop()
        // show cart
        this.showCart()
        // active navbar
        this.activeNav()
    }
}
app.start()