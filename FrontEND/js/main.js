$(document).ready(function () {

    // slide for HOME HTML
    $(".index-slider").owlCarousel({
        items: 1,
        loop: true,
        mouseDrag: false,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 500,
        animateOut: "fadeOut",
        dots: false
    });

    // 

    // slide for ABOUT HTML
    $(".about-slider").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        smartSpeed: 500,
        nav: true,
        navText: ["<i style='font-size:1.4em;' class='fa fa-chevron-left'></i>", "<i style='font-size:1.4em;' class='fa fa-chevron-right'></i>"],
        responsiveClass: true,

        responsive: {
            0: {
                items: 1,
                margin: 0,
                slideBy: 1,
                dotsEach: 1
            },
            600: {
                items: 2,
                slideBy: 1,
                dotsEach: 2
            },
            1000: {
                items: 3,
                slideBy: 2,
                dotsEach: 2
            }
        }
    });
    // slide for GALLERY HTML
    $(".gallery-slider").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        smartSpeed: 500,
        nav: true,
        navText: ["<i style='font-size:1.4em;' class='fa fa-chevron-left'></i>", "<i style='font-size:1.4em;' class='fa fa-chevron-right'></i>"],
        responsiveClass: true,

        responsive: {
            0: {
                items: 1,
                slideBy: 1,
                dotsEach: 1
            },
            600: {
                items: 2,
                slideBy: 1,
                dotsEach: 2
            },
            1000: {
                items: 3,
                slideBy: 2,
                dotsEach: 2
            }
        }
    });
    $(".gallery-slider2").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 500,
        autoplayHoverPause: true,
        nav: true,
        navText: ["<i style='font-size:1.4em;' class='fa fa-chevron-left'></i>", "<i style='font-size:1.4em;' class='fa fa-chevron-right'></i>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                slideBy: 1,
                dotsEach: 1
            },
            600: {
                items: 1,
                slideBy: 1,
                dotsEach: 1
            },
            1000: {
                items: 1,
                slideBy: 2,
                dotsEach: 1
            }
        }
    });

    //   

    // var products = [];
    // var btn = $('.button');

    // $(".button").click(function (ev) {
    //     ev.preventDefault();
    //     if (localStorage.productArray !== undefined) {
    //         products = $.parseJSON(localStorage.productArray);
    //     }
    //     var product = {
    //         name: $(this).parent().find('.productName').text(),
    //         pic: $(this).parent().find('img').attr('src'),
    //         price: parseFloat($(this).parent().find('.productPrice').text().substring(1)),
    //         count: 1,
    //     };

    //     var r = checkName(products,product.name);
    //     if(r>=0){
    //         products[r].count++;
    //     }else{
    //         products.push(product);
    //     }

    //     localStorage.setItem("productArray", JSON.stringify(products));
    // });

    // function checkName(products,name) { 
    //     for(var i=0;i<products.length;i++){
    //         if(products[i].name==name){
    //             return i;
    //         }
    //     }

    //     return -1;
    //  }

    // if (localStorage.getItem('productArray') !== null) {
    //     var proList = $.parseJSON(localStorage.productArray);
    //     for (var i = 0; i < proList.length; i++) {

    //         var tr = document.createElement('tr');
    //         var th1 = document.createElement('td');
    //         var th2 = document.createElement('td');
    //         var th3 = document.createElement('td');
    //         var th4 = document.createElement('td');
    //         var th5 = document.createElement('td');
    //         var th6 = document.createElement('td');

    //         th1.innerHTML = "<i class='fas fa-times' style='color:red'></i>"
    //         th2.innerHTML = '<img src="' + proList[i].pic + '" alt="" width="50" height="30">'
    //         th3.innerHTML = proList[i].name
    //         th4.innerHTML = "£" + proList[i].price;
    //         th5.innerHTML = "<input min='1' max='10' type='number' value='"+proList[i].count+"'>";
    //         th6.innerHTML = "£" + (proList[i].price*proList[i].count)

    //         setInterval(function () {
    //             $('input').click('input', function () {
    //                 th6.innerHTML = '£' + proList[i].price * (parseInt($('input').val()))
    //             })
    //         }, 10)
            
    //         tr.append(th1);
    //         tr.append(th2);
    //         tr.append(th3);
    //         tr.append(th4);
    //         tr.append(th5);
    //         tr.append(th6);
    //         $('.shoplist').append(tr)
    //     }
    // }
});
