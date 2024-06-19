document.addEventListener("DOMContentLoaded", () => {
    //Animation time values
    let durationButtons = .5,
        easingButtons = "power2.inOut";
    //mediaScreen = gsap.matchMedia();

    //Variables
    //buttons
    const buttonAdd = document.querySelectorAll('.button-add')
    const buttonArrow = document.querySelectorAll('.button-arrow')
    const buttonBasic = document.querySelectorAll('.button-basic')
    const buttonClose = document.querySelectorAll('.button-close')

    //cards
    const cardMedium = document.querySelectorAll('.collection-bikes_item')
    const cardSmall = document.querySelectorAll('.card-small')
    const cardFeatures = document.querySelectorAll('.features_card')

    buttonAdd.forEach((item, index) => {

        //Looking for child element for each dropdown
        const buttonIcon = item.querySelector(".button-add_icon")
        const horizontalLine = item.querySelector(".horizontal-line")

        //Timeline with animations and reverse
        let buttonTimeline = gsap.timeline({ paused: true })

        buttonTimeline
            .fromTo(buttonIcon, { scale: 1 }, { scale: .7, duration: durationButtons, ease: easingButtons })
            .fromTo(horizontalLine, { width: '0%' }, { width: '100%', duration: durationButtons, ease: easingButtons }, "<")

        //Play animation on hover on
        item.addEventListener("mouseover", () => {
            buttonTimeline.play()
        })

        //Play reverse on hover out
        item.addEventListener("mouseout", () => {
            buttonTimeline.reverse()
        })

    })

    buttonArrow.forEach((item, index) => {

        //Looking for child element for each dropdown
        const buttonIcon = item.querySelectorAll(".button-arrow_icon")
        const horizontalLine = item.querySelectorAll(".horizontal-line")
        const buttonText = item.querySelectorAll(".text-button-big")

        //Timeline with animations and reverse
        let buttonTimeline = gsap.timeline({ paused: true })

        if (item.classList.contains('is-checkout')) {
            buttonTimeline
                .fromTo(buttonIcon, { x: "0%" }, { x: "130%", duration: durationButtons, ease: easingButtons })
                .to(item, { backgroundColor: "#a9ff80", duration: durationButtons, ease: easingButtons }, "<")
        } else if (item.classList.contains('is-product-main')) {
            buttonTimeline
                .fromTo(buttonIcon, { x: "0%" }, { x: "130%", duration: durationButtons, ease: easingButtons })
                .to(item, { backgroundColor: "#5f4bb6", duration: durationButtons, ease: easingButtons }, "<")
        } else if (item.classList.contains('is-subscription')) {
            buttonTimeline
                .fromTo(buttonIcon, { x: "0%" }, { x: "130%", duration: durationButtons, ease: easingButtons })
                .to(item, { backgroundColor: "#ffffff", duration: durationButtons, ease: easingButtons }, "<")
                .to(buttonText, { color: "#000000", duration: durationButtons, ease: easingButtons }, "<")
        } else {
            buttonTimeline
                .fromTo(buttonIcon, { x: "0%" }, { x: "130%", duration: durationButtons, ease: easingButtons })
                .fromTo(horizontalLine, { width: "0%" }, { width: "100%", duration: durationButtons, ease: easingButtons }, "<")
        }

        //Play animation on hover on
        item.addEventListener("mouseover", () => {
            buttonTimeline.play()
        })

        //Play reverse on hover out
        item.addEventListener("mouseout", () => {
            buttonTimeline.reverse()
        })

    })

    buttonBasic.forEach((item, index) => {

        //Looking for child element for each dropdown
        //const buttonIcon = item.querySelectorAll(".button-arrow_icon")
        const horizontalLine = item.querySelectorAll(".horizontal-line")

        //Timeline with animations and reverse
        let buttonTimeline = gsap.timeline({ paused: true })

        buttonTimeline
            .fromTo(horizontalLine, { width: "0%" }, { width: "100%", duration: durationButtons, ease: easingButtons }, "<")

        //Play animation on hover on
        item.addEventListener("mouseover", () => {
            buttonTimeline.play()
        })

        //Play reverse on hover out
        item.addEventListener("mouseout", () => {
            buttonTimeline.reverse()
        })

    })

    buttonClose.forEach((item, index) => {

        //Looking for child element for each dropdown
        const buttonIcon = item.querySelectorAll(".button-close_icon")
        const horizontalLine = item.querySelectorAll(".horizontal-line")

        //Timeline with animations and reverse
        let buttonTimeline = gsap.timeline({ paused: true })

        buttonTimeline
            .fromTo(buttonIcon, { rotation: 0 }, { rotation: 180, duration: durationButtons, ease: easingButtons })
            .fromTo(horizontalLine, { width: "0%" }, { width: "100%", duration: durationButtons, ease: easingButtons }, "<")

        //Play animation on hover on
        item.addEventListener("mouseover", () => {
            buttonTimeline.play()
        })

        //Play reverse on hover out
        item.addEventListener("mouseout", () => {
            buttonTimeline.reverse()
        })

    })

    cardMedium.forEach((item, index) => {

        //Looking for child element for each card
        const cardName = item.querySelectorAll("h3")
        const cardPrice = item.querySelectorAll(".text-price")
        const cardButton = item.querySelectorAll(".button-add")

        //Timeline with animations and reverse
        let cardTimeline = gsap.timeline({ paused: true })

        cardTimeline
            .fromTo(item, { backgroundColor: "transparent" }, { backgroundColor: "#000000", duration: durationButtons, ease: easingButtons })
            .fromTo(cardName, { color: "#000000" }, { color: "#ffffff", duration: durationButtons, ease: easingButtons }, "<")
            .fromTo(cardPrice, { color: "#000000" }, { color: "#ffffff", duration: durationButtons, ease: easingButtons }, "<")
            .fromTo(cardButton, { opacity: 0 }, { opacity: 1, duration: durationButtons, ease: easingButtons }, "<")

        //Play animation on hover on
        item.addEventListener("mouseover", () => {
            cardTimeline.play()
        })

        //Play reverse on hover out
        item.addEventListener("mouseout", () => {
            cardTimeline.reverse()
        })

    })

    cardSmall.forEach((item, index) => {

        //Looking for child element for each card
        const cardPrice = item.querySelectorAll(".text-price")
        const cardText = item.querySelectorAll(".text-button-big")
        const cardLine = item.querySelectorAll(".horizontal-line")
        const cardIcon = item.querySelectorAll(".button-arrow_icon")
        const cardImage = item.querySelectorAll(".card-small_image")

        //Timeline with animations and reverse
        let cardTimeline = gsap.timeline({ paused: true })

        cardTimeline
            .to(item, { backgroundColor: "#000000", duration: durationButtons, ease: easingButtons }, "<")
            .to(cardPrice, { color: "#ffffff", duration: durationButtons, ease: easingButtons }, "<")
            .to(cardText, { color: "#ffffff", duration: durationButtons, ease: easingButtons }, "<")
            .fromTo(cardIcon, { x: "0%" }, { x: "130%", duration: durationButtons, ease: easingButtons }, "<")
            .fromTo(cardLine, { width: "0%" }, { width: "100%", duration: durationButtons, ease: easingButtons }, "<")
            .fromTo(cardImage, { backgroundColor: "transparent" }, { backgroundColor: "#e3e7eb", duration: durationButtons, ease: easingButtons }, "<")

        //Play animation on hover on
        item.addEventListener("mouseover", () => {
            cardTimeline.play()
        })

        //Play reverse on hover out
        item.addEventListener("mouseout", () => {
            cardTimeline.reverse()
        })

    })

    cardFeatures.forEach((item, index) => {

        //Looking for child element for each card
        const cardIcon = item.querySelectorAll(".features_card-icon")
        const cardTitle = item.querySelectorAll("h3")
        const cardText = item.querySelectorAll("p")
        const cardImage = item.querySelectorAll(".features_card-image")

        //Timeline
        let cardTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: item,
                start: "start+=10% bottom"
            },
            delay: index * 0.15,
        })

        cardTimeline
            .from(item, { y: "3rem", autoAlpha: 0, duration: durationButtons, ease: easingButtons })
            .from(cardIcon, { y: "2rem", autoAlpha: 0, duration: durationButtons, ease: easingButtons }, "<+=20%")
            .from(cardTitle, { y: "2rem", autoAlpha: 0, duration: durationButtons, ease: easingButtons }, "<+=20%")
            .from(cardText, { y: "2rem", autoAlpha: 0, duration: durationButtons, ease: easingButtons }, "<+=20%")
            .from(cardImage, { y: "2rem", autoAlpha: 0, duration: durationButtons, ease: easingButtons }, "<+=20%")

    })

    //OPENING AND CLOSING CATALOG FUNCTIONALITY
    // defining close and open buttons
    const navbar = document.querySelector('.nav')
    const catalogOpenButton = navbar.querySelector('.nav_catalog-button')
    const catalogCloseButton = navbar.querySelector('.button-close')

    //Open catalog on click
    catalogOpenButton.addEventListener('click', function () {

        // Defining catalog window
        let catalogWindow = navbar.querySelector('.nav_catalog-window')

        // Remove display-none and fade in
        catalogWindow.classList.remove('display-none')
        gsap.fromTo(catalogWindow, { opacity: 0 }, { opacity: 1, duration: durationButtons, ease: easingButtons })
    })

    //Close catalog on click
    catalogCloseButton.addEventListener('click', function () {

        // Defining catalog window
        let catalogWindow = navbar.querySelector('.nav_catalog-window')

        // Fade out and add display-none after the animation
        gsap.to(catalogWindow, {
            opacity: 0, duration: durationButtons, ease: easingButtons, onComplete: function () {
                catalogWindow.classList.add('display-none')
            }
        })
    })


    //DETERMINING THE NUMBER OF ITEMS IN EACH CATEGORY
    // looking for each item inside Catalog collection list
    const catalogCategoryItem = document.querySelectorAll(".nav_catalog-window_collection-item")

    // looking for numbers of items inside each category
    const catalogCollectionNumberElements = document.querySelectorAll(".nav_catalog-window_collection-count")

    // Create an array to hold the number of children for each category
    const catalogCollectionNumber = Array.from(catalogCollectionNumberElements).map(element => element.children.length)

    // add appropriate number to each item text
    catalogCategoryItem.forEach((item, index) => {

        const itemCounter = item.querySelector('.nav_catalog-window_collection-item-number')
        itemCounter.innerText = catalogCollectionNumber[index]

    })


    //CATEGORY CARD HOVER ANIMATION
    // looking for each category link block
    const catalogCategoryItemLink = navbar.querySelectorAll('.nav_catalog-window_collection-item-link')

    catalogCategoryItemLink.forEach((item, index) => {

        //Looking for child elements for each link block
        const catalogCategoryItemBackgroundBlock = item.querySelectorAll('.nav_catalog-window_collection-item-background')
        const catalogCategoryItemImage = item.querySelector(".nav_catalog-window_collection-item-image")
        const catalogCategoryItemLine = item.querySelector(".horizontal-line")
        const catalogCategoryItemButtonIcon = item.querySelectorAll('.button-arrow_icon')

        //Timeline with animations and reverse
        let catalogCategoryItemTimeline = gsap.timeline({ paused: true })

        catalogCategoryItemTimeline
            .to(catalogCategoryItemBackgroundBlock, { width: "100%", duration: durationButtons, ease: easingButtons })
            .to(catalogCategoryItemImage, { xPercent: -13, duration: durationButtons, ease: easingButtons }, "<")
            .to(catalogCategoryItemLine, { width: "100%", duration: durationButtons, ease: easingButtons }, "<")
            .to(catalogCategoryItemButtonIcon, { xPercent: 130, duration: durationButtons, ease: easingButtons }, "<")

        //Play animation on hover on
        item.addEventListener("mouseover", () => {
            catalogCategoryItemTimeline.play()
        })

        //Play reverse on hover out
        item.addEventListener("mouseout", () => {
            catalogCategoryItemTimeline.reverse()
        })

    })

})