import './styles/styles.css'
const log = console.log
const content = document.querySelector('body')
const main = document.createElement('main')
// page navagation varibales
    let home = true
    let menuNav = false
    let contactNav = false

// page navagation varibales

//navbar varibles
let aMenu = document.createElement('a')
const aCareer = document.createElement('a')
const aContact = document.createElement('a')
const aStory = document.createElement('a')
//navbar varibles

//home screen varibles
const headerDiv = document.createElement('div')
const textDiv = document.createElement('div')
const milkshakeDiv = document.createElement('div')
const img = document.createElement('img')
const findButton = document.createElement('a')
//home screen varibles


// menu div varibles
const menuHeader = document.createElement('header')
const menuDiv =  document.createElement('div')
// menu div varibles

//contact div variables
const contactHeader = document.createElement('header')
const contactDiv =  document.createElement('div')
//contact div variables

function navigation(){
    // chick fil a image and find resturant button
        const lineDiv = document.createElement('div')
        lineDiv.className = 'line'
        const navBar = document.createElement('nav')
        const logodiv = document.createElement('div')
        logodiv.className ='logo-div'
        const img = document.createElement('img')
        img.src = 'https://yt3.ggpht.com/a/AATXAJwl56b_AOMJ8ZurjZv4jrfEpNdo_N4LHk-A=s900-c-k-c0xffffffff-no-rj-mo'
        img.className = 'logo'        
        findButton.className = 'find-btn'
        findButton.innerHTML = 'Home'
        const location = document.createElement('i')
        location.className = 'fa-solid fa-location-dot'
        logodiv.appendChild(img)
        logodiv.appendChild(lineDiv)
        logodiv.appendChild(location)
        logodiv.appendChild(findButton)
        navBar.appendChild(logodiv)
    // chick fil a image and find resturant button

    // menu / stories / about /  careers
    navBar.className = 'navbar'
    const listItems = document.createElement('div')
    listItems.className = 'li-items'
    const hamBurger = document.createElement('ul')
    const menu = document.createElement('li')
    const career = document.createElement('li')
    const about = document.createElement('li')
    const story = document.createElement('li')

    aMenu.className = 'menu'
    aContact.className = 'contact'
    findButton.className = 'clicked'


    aMenu.innerHTML = 'Menu'
    aCareer.innerHTML = 'Careers'
    aContact.innerHTML = 'Contact'
    aStory.innerHTML = 'Stories'


    aMenu.className = 'nav-links'
    aCareer.className = 'nav-links'
    aContact.className = 'nav-links'
    aStory.className = 'nav-links'
    //aMenu.href = 'htmlfiles/menu.html'
    // aCareer.href = 'htmlfiles/careers.html'
    // aAbout.href = 'htmlfiles/about.html'
    // aStory.href = 'htmlfiles/story.html'

    menu.appendChild(aMenu)
    career.appendChild(aCareer)
    about.appendChild(aContact)
    story.appendChild(aStory)
    // the li links
    hamBurger.appendChild(menu)
    hamBurger.appendChild(story)
    hamBurger.appendChild(career)
    hamBurger.appendChild(about)
    listItems.appendChild(hamBurger)
    navBar.appendChild(listItems)
    content.appendChild(navBar)
    // menu / stories / about /  careers

    // sign in links
    const buttonDiv = document.createElement('div')
    buttonDiv.className = 'order-button'
    const chickFilA = document.createElement('a')
    const signIn = document.createElement('a')
    signIn.innerHTML = '<span class="span">(</span> Sign in <span class="span">)</span>'
    chickFilA.innerHTML = 'Chick-fil-A One '
    signIn.className = 'text-color'
    chickFilA.className = 'text-color'
    signIn.href = '#'
    chickFilA.href = '#'
    buttonDiv.appendChild(chickFilA)
    buttonDiv.appendChild(signIn)
    navBar.appendChild(buttonDiv)
    // sign in links

    // order button
    const button = document.createElement('a')
    button.innerHTML = 'Order Food'
    button.href = 'https://order.chick-fil-a.com/get-started?_gl=1*rwbq2y*_ga*NzgxNDg1NTIuMTY1Nzc1MTkzNw..*_ga_W1ZL54JC7M*MTY1OTA3NDQyMC4zLjEuMTY1OTA3NTk4MS4zNg..'
    button.className = 'button'
    const magnifiyGlass = document.createElement('i')
    magnifiyGlass.className = "fa-solid fa-magnifying-glass"
    buttonDiv.appendChild(button)
    buttonDiv.appendChild(magnifiyGlass)
    // order button

}

function header(){
    headerDiv.className = 'header'
    const joinDiv =  document.createElement('div')
    const phoneDiv = document.createElement('div')
    phoneDiv.className = 'phoneDiv'
    const titleDiv = document.createElement('div')
    titleDiv.className = 'titleDiv'
    joinDiv.className = 'join'
    const phone = document.createElement('img')
    phone.src = 'https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Home%20Page%20Refresh/CFA_Icon_CFAOne2_Red_PMS_new.png?h=288&amp;w=288&amp;la=en" alt="CFA One Red PMS'
    const h5 = document.createElement('h5')
    h5.innerHTML = 'Make every order count'
    const para = document.createElement('p')
    para.innerHTML = "Join Chick-fil-A One &reg;today"
    phoneDiv.appendChild(phone)
    titleDiv.appendChild(h5)
    titleDiv.appendChild(para)
    joinDiv.appendChild(phoneDiv)
    joinDiv.appendChild(titleDiv)
    headerDiv.appendChild(joinDiv)
    

    const otherDiv = document.createElement('div')
    otherDiv.className = 'otherDiv'
    const link = document.createElement('a')
     link.href = 'https://www.chick-fil-a.com/one'
     link.innerHTML = 'Join today'
    const arrow = document.createElement('i')
    arrow.className = 'fa-solid fa-greater-than'
    otherDiv.appendChild(link)
    otherDiv.appendChild(arrow)
    headerDiv.appendChild(otherDiv)
    content.appendChild(headerDiv)
}
function homeScreen(){
    // make a div main
    main.className = 'main'
    textDiv.className = 'text'
        // put text and links/buttons here
        const h1 = document.createElement('h1')
        const p = document.createElement('p')
        const pickup = document.createElement('a')
        const delivery = document.createElement('a')
        const imgBag = document.createElement('img')
        const imgCar = document.createElement('img')
        const orderDiv = document.createElement('div')
        const orderP = document.createElement('p')
        const orderD = document.createElement('p')
        h1.innerHTML = 'Peach Milkshake season is here'
        p.innerHTML = 'cool off with this creamy classic'

        pickup.href = '#pwo-model-pickup'
        delivery.href = 'https://order.chick-fil-a.com/delivery/address?_gl=1*djxyur*_ga*NzgxNDg1NTIuMTY1Nzc1MTkzNw..*_ga_W1ZL54JC7M*MTY1OTQ1NDU1OC44LjEuMTY1OTQ1NDczNC42MA..'

        orderDiv.className = 'order-div'
        pickup.className = 'pickup order'
        delivery.className = 'delivery order'

        imgBag.src = 'https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Home%20Page%20Refresh/Bag%20Icon.png?h=24&w=24&la=en'
        imgCar.src = 'https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Home%20Page%20Refresh/Delivery.png/Delivery.png?h=22&w=34&la=en'

        orderP.innerHTML = 'Order Pickup'
        orderD.innerHTML = 'Order Delivery'
         // appden div to main
         pickup.appendChild(imgBag)
         pickup.appendChild(orderP)
         delivery.appendChild(imgCar)
         delivery.appendChild(orderD)
         orderDiv.appendChild(pickup)
         orderDiv.appendChild(delivery)
         textDiv.appendChild(h1)
         textDiv.appendChild(p)
         textDiv.appendChild(orderDiv)
         main.appendChild(textDiv)
    // make yet anither div
    
    const wrapperDiv = document.createElement('div')
    const peachImg = document.createElement('img')
    milkshakeDiv.className = 'milkshake'
    wrapperDiv.className = 'wrapper'
    peachImg.src = 'https://www.cfacdn.com/img/order/menu/Online/Sides%26treats/milkshake_peach_PDP.png'
    wrapperDiv.appendChild(peachImg)
    milkshakeDiv.appendChild(wrapperDiv)
    main.appendChild(milkshakeDiv)
    content.appendChild(main)
        //add peach drink to div
       // append that div to main
    // append main div to content 

    //done


}
// this function will creat the elements thatll need to b e display on the menu
function menu(){
    // menuHeader
        // create element h2 'chick-fil-a &#8482; menu'
        const h1Menu = document.createElement('h1')
        const pMenu = document.createElement('p')

        // create p Availability may differ at different locations.
    // menuDiv
        // chicken div
            //  h4 chick-fil-a&#8482; Chicken sandwhich
            const chickenDiv = document.createElement('div')
            const deluxeDiv = document.createElement('div')
            const spicyDiv = document.createElement('div')
            const h4chicken = document.createElement('h4')
            const h4Deluxe = document.createElement('h4')
            const h4Spicy = document.createElement('h4')
            const imgChicken = document.createElement('img')
            const imgDeluxe = document.createElement('img')
            const imgSpicy = document.createElement('img')
            const pChicken = document.createElement('p')
            const pDeluxe = document.createElement('p')
            const pSpicy = document.createElement('p')
            const aChicken = document.createElement('a')
            const aDeluxe = document.createElement('a')
            const aSpicy = document.createElement('a')
            const aElement = document.querySelectorAll('a')
            // p 440 Cal per Sandwhich
            h1Menu.innerHTML = 'Chick-fil-A &#8482; Menu'
            pMenu.innerHTML = 'Availability may differ at different locations.'
            h4chicken.innerHTML = 'Chick-fil-A Chicken Sandwich'
            h4Deluxe.innerHTML = 'Chick-fil-A Deluxe Sandwich'
            h4Spicy.innerHTML = 'Spicy Chicken Sandwich'
            pChicken.innerHTML = '440 Cal per Sandwhich'
            pDeluxe.innerHTML = '500 Cal per Sandwhich'
            pSpicy.innerHTML = '460 Cal per Sandwhich'
            aChicken.innerHTML = 'Order Now'
            aSpicy.innerHTML = 'Order Now'
            aDeluxe.innerHTML = 'Order Now'

            imgChicken.src = 'https://www.cfacdn.com/img/order/menu/Online/Entrees/Jul19_CFASandwich_pdp.png'
            imgSpicy.src = 'https://www.cfacdn.com/img/order/menu/Online/Entrees/CFASpicySandwich_1080.png'
            imgDeluxe.src = 'https://www.cfacdn.com/img/order/COM/Menu_Refresh/Entree/Entree%20PDP/_0000s_0004_NEWStack6200001CFAPDPDeluxeSandwich1085png.png'
            // a order now

            menuHeader.className = 'menuHeader'
            aChicken.className = 'order'
            aSpicy.className = 'order'
            aDeluxe.className = 'order'
            imgChicken.className = 'img-chick'
            imgSpicy.className = 'img-chick'
            imgDeluxe.className = 'img-chick'
            menuDiv.className = 'container'
            chickenDiv.className = 'chickenDiv'
            deluxeDiv.className = 'chickenDiv'
            spicyDiv.className = 'chickenDiv'
            
            menuHeader.appendChild(h1Menu)
            menuHeader.appendChild(pMenu)
            chickenDiv.appendChild(imgChicken)
            chickenDiv.appendChild(h4chicken)
            chickenDiv.appendChild(pChicken)
            chickenDiv.appendChild(aChicken)
            menuDiv.appendChild(chickenDiv)

            deluxeDiv.appendChild(imgDeluxe)
            deluxeDiv.appendChild(h4Deluxe)
            deluxeDiv.appendChild(pDeluxe)
            deluxeDiv.appendChild(aDeluxe)
            menuDiv.appendChild(deluxeDiv)

            spicyDiv.appendChild(imgSpicy)
            spicyDiv.appendChild(h4Spicy)
            spicyDiv.appendChild(pSpicy)
            spicyDiv.appendChild(aSpicy)
            menuDiv.appendChild(spicyDiv)


                        // classname order
        // deluxe div
            //  h4 chick-fil-a&#8482; Chicken sandwhich
            // p 440 Cal per Sandwhich
            // a order now
                // classname order        
        // spicy div
            //  h4 chick-fil-a&#8482; Chicken sandwhich
            // p 440 Cal per Sandwhich
            // a order now
                // classname order    
        // add all elemts to the right divs
}  
function contact(){
    // h1 contact us

    // create container div 
    const container = document.createElement('div')
    const locations = document.createElement('div')
    const hours = document.createElement('div')
    const dublin = document.createElement('div')
    const mowery = document.createElement('div')
    const autoMall = document.createElement('div')
    const img1 = document.createElement('img')
    const img2 = document.createElement('img')
    const img3 = document.createElement('img')
    const autoh4 = document.createElement('h4')
    const dubh4 = document.createElement('h4')
    const mowh4 = document.createElement('h4')
    const autoConH5 = document.createElement('h4')
    const dubConH5 = document.createElement('h4')
    const mowConH5 = document.createElement('h4')
    const h2Hours = document.createElement('h2')
    const phours =  document.createElement('p')
    const p2Hours =  document.createElement('p')
    const mowP = document.createElement('p')
    const autoP = document.createElement('p')
    const dubP = document.createElement('p')
    const autoConP = document.createElement('p')
    const dubConP = document.createElement('p')
    const mowConP = document.createElement('p')
    const h1Header = document.createElement('h1')
        // locations
            // create a ul
                //dublin
                //img
                //address
                //phone number
                //mowery
                //auto mall
        // hours

        h1Header.innerHTML = 'CONTACT US'
        autoh4.innerHTML = 'Address'
        dubh4.innerHTML = 'Address'
        mowh4.innerHTML = 'Address'
        autoConH5.innerHTML = 'Contact'
        dubConH5.innerHTML = 'Contact'
        mowConH5.innerHTML = 'Contact'
        mowConP.innerHTML = '(510) 608-5771'
        autoConP.innerHTML = '(510) 353-1678'
        dubConP.innerHTML = '(925) 331-8384'
        dubP.innerHTML = '5785 Johnson Dr, Pleasanton, CA 94588'
        autoP.innerHTML = '5539 Auto Mall Pkwy, Fremont, CA 94538'
        mowP.innerHTML = '5245 Mowry Ave, Fremont, CA 94538'
        h2Hours.innerHTML = 'We Are Open'
        phours.innerHTML = 'Monday-Saturday 6:30 AM - 10 PM'
        p2Hours.innerHTML = 'CLOSED ON SUNDAYS'

        img1.src = 'https://yt3.ggpht.com/a/AATXAJwl56b_AOMJ8ZurjZv4jrfEpNdo_N4LHk-A=s900-c-k-c0xffffffff-no-rj-mo'
        img1.className = 'logo'
        img2.src = 'https://yt3.ggpht.com/a/AATXAJwl56b_AOMJ8ZurjZv4jrfEpNdo_N4LHk-A=s900-c-k-c0xffffffff-no-rj-mo'
        img2.className = 'logo'
        img3.src = 'https://yt3.ggpht.com/a/AATXAJwl56b_AOMJ8ZurjZv4jrfEpNdo_N4LHk-A=s900-c-k-c0xffffffff-no-rj-mo'
        img3.className = 'logo'
        container.className = 'container'


        h1Header.className = 'h1header'
        contactHeader.className = 'contactHeader'
        contactDiv.className = 'contactdiv'
        mowery.className = 'store'
        autoMall.className = 'store'
        dublin.className = 'store'
        hours.className = 'hours'
        mowery.appendChild(img1)
        mowery.appendChild(mowh4)
        mowery.appendChild(mowP)
        mowery.appendChild(mowConH5)
        mowery.appendChild(mowConP)
        autoMall.appendChild(img2)
        autoMall.appendChild(autoh4)
        autoMall.appendChild(autoP)
        autoMall.appendChild(autoConH5)
        autoMall.appendChild(autoConP)
        dublin.appendChild(img3)
        dublin.appendChild(dubh4)
        dublin.appendChild(dubP)
        dublin.appendChild(dubConH5)
        dublin.appendChild(dubConP)
        hours.appendChild(h2Hours)
        hours.appendChild(phours)
        hours.appendChild(p2Hours)
        container.appendChild(mowery)
        container.appendChild(dublin)
        container.appendChild(autoMall)
        contactHeader.appendChild(h1Header)
        contactDiv.appendChild(container)
        contactDiv.appendChild(hours)


        // visit us at one of our east bay locations
            // img
            // address
            // contact
    //
}

function runResturant(){
    navigation()
    header()
    homeScreen()
    menu()
    contact()
}


function events(){
    aMenu.addEventListener('click', function(){
            if(home){
                content.removeChild(headerDiv)
                main.removeChild(textDiv)
                main.removeChild(milkshakeDiv)
                content.removeChild(main)
                findButton.classList.remove('clicked')
                findButton.className = 'nav-links'
                home = false
                
            }
            if(contactNav){
                content.removeChild(contactHeader)
                main.removeChild(contactDiv)
                content.removeChild(main)
                aContact.classList.remove('clicked')
                aContact.className = 'nav-links'
                contactNav = false
            }
            content.appendChild(menuHeader)
            main.appendChild(menuDiv)
            content.appendChild(main)
            aMenu.classList.remove('nav-links')
            aMenu.className = 'clicked'
            menuNav = true
            console.log(menuNav)
        // while menu is clkicked give it a underline so user can know what parrt of websitwe its using 
    })
    
    aContact.addEventListener('click', function(){
            if(menuNav){
                content.removeChild(menuHeader)
                main.removeChild(menuDiv)
                content.removeChild(main)
                aMenu.classList.remove('clicked')
                aMenu.className = 'nav-links'
                menuNav = false
            }
            if(home){
                content.removeChild(headerDiv)
                main.removeChild(textDiv)
                main.removeChild(milkshakeDiv)
                content.removeChild(main)
                findButton.classList.remove('clicked')
                findButton.className = 'nav-links'
                home = false
            }


        main.appendChild(contactDiv)
        content.appendChild(contactHeader)
        content.appendChild(main)
        aContact.className = 'clicked'
        contactNav = true

    })

    findButton.addEventListener('click', function(){
        if(menuNav){
            content.removeChild(menuHeader)
            main.removeChild(menuDiv)
            content.removeChild(main)
            aMenu.classList.remove('clicked')
            aMenu.className = 'nav-links'
            menuNav = false
        }

        if(contactNav){
            content.removeChild(contactHeader)
            main.removeChild(contactDiv)
            content.removeChild(main)
            aContact.classList.remove('clicked')
            aContact.className = 'nav-links'
            contactNav = false
        }


        main.appendChild(textDiv)
        main.appendChild(milkshakeDiv)
        content.appendChild(headerDiv)
        content.appendChild(main)
        findButton.classList.remove('nav-links')
        findButton.className = 'clicked'
        home = true
    })
}


// add find resturant functionality
// assign main varivles outside in the global scope and assign them in functions to use in other functions














events()
runResturant()
// create each page in seperate javasricpt file 
// onClick elements shopuld be applied so the contents if the page will be display
