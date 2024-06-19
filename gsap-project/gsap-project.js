document.addEventListener("DOMContentLoaded", () => {

    //Variables

    let time = .9,
        easing = "power2.inOut",
        mediaScreen = gsap.matchMedia();

    const navbar = document.querySelector('.navbar')
    const navWrapper = document.querySelector(".navbar_content-wrapper")
    const heroTags = document.querySelectorAll(".hero-tag")
    const logo = document.querySelector(".logo-link")
    const heroHeading = document.querySelector(".hero-heading")
    const heroImages = document.querySelectorAll(".hero_image")
    const menuButton = document.querySelector(".navbar_menu-button")
    let heroTimeline = gsap.timeline({ delay: .1 });

    const sectionServices = document.getElementById("services-section")
    const sectionServicesBoxes = document.querySelectorAll(".services_content-block")
    const sectionServicesHeading = document.getElementById("heading-services")

    const aboutPoints = document.querySelectorAll(".about_point-wrapper")
    const aboutImages = document.querySelectorAll(".about_image")
    const aboutText = document.querySelectorAll(".text-about")
    const aboutGrid = document.querySelector(".about_grid")

    const dropdownApproach = document.querySelectorAll(".approach_dropdown")
    const textApproach = document.querySelectorAll(".text-approach")

    const sectionProjects = document.querySelector('.projects')
    const projectsWrapper = document.querySelector(".projects_projects-wrapper")
    const projectCard = document.querySelectorAll('.projects_project-card')
    const textProjects = document.getElementById('text-projects')
    const headingProjects = document.getElementById('projects-heading')

    const awardCards = document.querySelectorAll(".awards_award-card")
    const headingAwards = document.getElementById("heading-awards")
    const awardCardText = document.querySelectorAll('.awards_award-card-text')

    const footer = document.querySelector('.footer')
    const footerLink = document.querySelectorAll(".footer_top > p")
    const footerCenter = document.querySelector(".footer_center")
    const footerBottom = document.querySelectorAll(".footer_bottom > div")
    const footerSocials = document.querySelectorAll('.footer_socials-wrapper > *')

    //Desktop 1
    mediaScreen.add("(min-width: 768px)", () => {

        //Hero section
        gsap.set(logo, { width: "33.3rem" });

        //Animation on page load
        heroTimeline
            .fromTo(logo, {
                x: (i, el) => navWrapper.offsetWidth - el.offsetWidth,
                width: "33.3rem",
            }, {
                x: 0,
                width: "5.625rem",
                duration: time,
                ease: easing
            })
            .from(".navbar_bottom-line", {
                scaleX: 0,
                transformOrigin: "right center",
                duration: time,
                ease: easing
            }, "<20%")
            .fromTo(menuButton, {
                opacity: 0,
            }, {
                opacity: 1,
                duration: time,
                ease: easing
            }, "<")
            .from(heroHeading, {
                autoAlpha: 0,
                yPercent: 100,
                duration: time,
                ease: easing
            }, ">")
            .from(heroTags, {
                autoAlpha: 0,
                yPercent: 100,
                stagger: .05,
                duration: time,
                ease: easing
            }, "<40%")
            .from(heroImages, {
                scale: 0,
                transformOrigin: "center bottom",
                duration: 1.4,
                ease: easing,
                stagger: .4
            }, "<60%")
            .from("#hero-vertical-line", {
                scaleY: 0,
                transformOrigin: "center top",
                duration: time,
                ease: easing
            }, "<");

        gsap.to(heroImages, {
            scrollTrigger: {
                trigger: heroImages.parentNode,
                start: "60% bottom",
                end: "bottom 20%",
                scrub: 1,
            },
            yPercent: -10,
            ease: "none"
        })



        //Services section

        //Creating Timeline
        let sectionServicesTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: sectionServices,
                start: 'top-=16% top',
                end: "+=300%",
                scrub: true,
                pin: true,
                pinReparent: true,
            }
        });

        //Animations for the timeline
        sectionServicesTimeline
            .from(sectionServicesHeading, {
                autoAlpha: 0,
                yPercent: 50,
                duration: time,
                ease: easing
            })
            .from(sectionServicesBoxes[0], {
                autoAlpha: 0,
                yPercent: -100,
                duration: time,
                ease: easing
            }, "<")
            .from(sectionServicesBoxes[2], {
                autoAlpha: 0,
                yPercent: 100,
                duration: time,
                ease: easing
            })
            .from(sectionServicesBoxes[1], {
                autoAlpha: 0,
                xPercent: 100,
                duration: time,
                ease: easing
            });



        //About section

        gsap.set(aboutText, { autoAlpha: 0 })

        ScrollTrigger.batch(aboutText, {
            start: "5% bottom",
            end: "95% top",
            onEnter: batch => gsap.fromTo(batch, { autoAlpha: 0, yPercent: 50 }, { autoAlpha: 1, yPercent: 0, stagger: .1, duration: time, ease: easing }),
            onLeave: batch => gsap.to(batch, { autoAlpha: 0, yPercent: 50, stagger: .1, duration: time, ease: easing }),
            onEnterBack: batch => gsap.fromTo(batch, { autoAlpha: 0, yPercent: -50 }, { autoAlpha: 1, yPercent: 0, stagger: .1, duration: time, ease: easing }),
            onLeaveBack: batch => gsap.to(batch, { autoAlpha: 0, yPercent: 50, stagger: .1, duration: time, ease: easing })
        })

        gsap.set(aboutPoints, { autoAlpha: 0, xPercent: 100 })

        ScrollTrigger.batch(aboutPoints, {
            start: "5% bottom",
            end: "95% top",
            onEnter: batch => gsap.to(batch, { autoAlpha: 1, xPercent: 0, stagger: .05, duration: time, ease: easing }),
            onLeave: batch => gsap.to(batch, { autoAlpha: 0, xPercent: 100, stagger: .05, duration: time, ease: easing }),
            onEnterBack: batch => gsap.to(batch, { autoAlpha: 1, xPercent: 0, stagger: .05, duration: time, ease: easing }),
            onLeaveBack: batch => gsap.to(batch, { autoAlpha: 0, xPercent: 100, stagger: .05, duration: time, ease: easing })
        })

        gsap.set(aboutImages, { autoAlpha: 0, x: (i, el) => aboutGrid.offsetWidth - el.offsetLeft })

        ScrollTrigger.batch(aboutImages, {
            start: "5% bottom",
            end: "95% top",
            onEnter: batch => gsap.to(batch, { autoAlpha: 1, x: 0, stagger: .3, duration: time, ease: easing }),
            onLeave: batch => gsap.to(batch, { autoAlpha: 0, x: (i, el) => aboutGrid.offsetWidth - el.offsetLeft, stagger: .3, duration: time, ease: easing }),
            onEnterBack: batch => gsap.to(batch, { autoAlpha: 1, x: 0, stagger: .3, duration: time, ease: easing }),
            onLeaveBack: batch => gsap.to(batch, { autoAlpha: 0, x: (i, el) => aboutGrid.offsetWidth - el.offsetLeft, stagger: .3, duration: time, ease: easing }),
        })
    })





    //Mobile screen
    mediaScreen.add("(max-width: 767px)", () => {

        //Hero section
        gsap.set(heroTags, { autoAlpha: 0, yPercent: 50 })

        ScrollTrigger.batch(heroTags, {
            start: "15% bottom",
            end: "85% top",
            onEnter: batch => gsap.to(batch, { autoAlpha: 1, yPercent: 0, stagger: .05, duration: time, ease: easing }),
            onLeave: batch => gsap.to(batch, { autoAlpha: 0, yPercent: 50, stagger: .05, duration: time, ease: easing }),
            onEnterBack: batch => gsap.fromTo(batch, { autoAlpha: 0, yPercent: -50 }, { autoAlpha: 1, yPercent: 0, stagger: .05, duration: time, ease: easing }),
            onLeaveBack: batch => gsap.to(batch, { autoAlpha: 0, yPercent: 50, stagger: .05, duration: time, ease: easing }),
        });

        gsap.set(heroHeading, { autoAlpha: 0, yPercent: 50 })

        ScrollTrigger.batch(heroHeading, {
            start: "5% bottom",
            end: "95% top",
            onEnter: batch => gsap.to(batch, { autoAlpha: 1, yPercent: 0, duration: time, ease: easing }),
            onLeave: batch => gsap.to(batch, { autoAlpha: 0, yPercent: 50, duration: time, ease: easing }),
            onEnterBack: batch => gsap.fromTo(batch, { autoAlpha: 0, yPercent: -50 }, { autoAlpha: 1, yPercent: 0, duration: time, ease: easing }),
            onLeaveBack: batch => gsap.to(batch, { autoAlpha: 0, yPercent: 50, duration: time, ease: easing }),
        });

        gsap.set(heroImages, { autoAlpha: 0, yPercent: 50 })

        ScrollTrigger.batch(heroImages, {
            start: "5% bottom",
            end: "95% top",
            onEnter: batch => gsap.to(batch, { autoAlpha: 1, yPercent: 0, duration: time, ease: easing }),
            onLeave: batch => gsap.to(batch, { autoAlpha: 0, yPercent: 50, duration: time, ease: easing }),
            onEnterBack: batch => gsap.fromTo(batch, { autoAlpha: 0, yPercent: -50 }, { autoAlpha: 1, yPercent: 0, duration: time, ease: easing }),
            onLeaveBack: batch => gsap.to(batch, { autoAlpha: 0, yPercent: 50, duration: time, ease: easing }),
        });



        //Services section
        gsap.set(sectionServicesHeading, { autoAlpha: 0 })

        ScrollTrigger.batch(sectionServicesHeading, {
            start: "15% bottom",
            end: "85% top",
            onEnter: batch => gsap.fromTo(batch, { yPercent: 50 }, { autoAlpha: 1, yPercent: 0, duration: time, ease: easing }),
            onLeave: batch => gsap.to(batch, { autoAlpha: 0, yPercent: 50, duration: time, ease: easing }),
            onEnterBack: batch => gsap.fromTo(batch, { autoAlpha: 0, yPercent: -50 }, { autoAlpha: 1, yPercent: 0, duration: time, ease: easing }),
            onLeaveBack: batch => gsap.to(batch, { autoAlpha: 0, yPercent: 50, duration: time, ease: easing }),
        });

        gsap.set(sectionServicesBoxes, { autoAlpha: 0 })

        ScrollTrigger.batch(sectionServicesBoxes, {
            start: "15% bottom",
            end: "85% top",
            onEnter: batch => gsap.fromTo(batch, { yPercent: 50 }, { autoAlpha: 1, yPercent: 0, duration: time, ease: easing }),
            onLeave: batch => gsap.to(batch, { autoAlpha: 0, yPercent: 50, duration: time, ease: easing }),
            onEnterBack: batch => gsap.fromTo(batch, { autoAlpha: 0, yPercent: -50 }, { autoAlpha: 1, yPercent: 0, duration: time, ease: easing }),
            onLeaveBack: batch => gsap.to(batch, { autoAlpha: 0, yPercent: 50, duration: time, ease: easing }),
        });



        //About section
        gsap.set(aboutText, { autoAlpha: 0 })

        ScrollTrigger.batch(aboutText, {
            start: "5% bottom",
            end: "95% top",
            onEnter: batch => gsap.fromTo(batch, { yPercent: 50 }, { autoAlpha: 1, yPercent: 0, duration: time, ease: easing }),
            onLeave: batch => gsap.to(batch, { autoAlpha: 0, yPercent: 50, duration: time, ease: easing }),
            onEnterBack: batch => gsap.fromTo(batch, { autoAlpha: 0, yPercent: -50 }, { autoAlpha: 1, yPercent: 0, duration: time, ease: easing }),
            onLeaveBack: batch => gsap.to(batch, { autoAlpha: 0, yPercent: 50, duration: time, ease: easing }),
        });

        gsap.set(aboutImages, { autoAlpha: 0 })

        ScrollTrigger.batch(aboutImages, {
            start: "15% bottom",
            end: "85% top",
            onEnter: batch => gsap.fromTo(batch, { yPercent: 50 }, { autoAlpha: 1, yPercent: 0, duration: time, ease: easing }),
            onLeave: batch => gsap.to(batch, { autoAlpha: 0, yPercent: 50, duration: time, ease: easing }),
            onEnterBack: batch => gsap.fromTo(batch, { autoAlpha: 0, yPercent: -50 }, { autoAlpha: 1, yPercent: 0, duration: time, ease: easing }),
            onLeaveBack: batch => gsap.to(batch, { autoAlpha: 0, yPercent: 50, duration: time, ease: easing }),
        })
    })



    //Appoach for both Desktop and Mobile

    gsap.set(".approach_dropdown-list", { autoAlpha: 0, height: 0 })


    dropdownApproach.forEach((item, index) => {

        //Looking for child element for each dropdown
        const dropdownList = item.querySelector(".approach_dropdown-list")
        const dropdownNumber = item.querySelectorAll(".approach_dropdown-number > .h4")
        const dropdownTitle = item.querySelector(".approach_dropdown-heading > .h3")
        const dropdownCross = item.querySelector(".approach_dropdown-cross")

        //Giving number order for dropdowns
        dropdownNumber.forEach(number => {
            const dropdownNumberFormat = index < 9 ? `0${index + 1}` : `${index + 1}`
            number.textContent = dropdownNumberFormat
        })

        //Timeline with animations and reverse
        let dropdownTimeline = gsap.timeline({ paused: true })
        dropdownTimeline
            .to(dropdownList, { autoAlpha: 1, height: "auto", duration: .4, ease: easing })
            .to(dropdownNumber, { color: "#51B613", duration: .4, ease: easing }, "<")
            .to(dropdownTitle, { color: "#51B613", duration: .4, ease: easing }, "<")
            .to(dropdownCross, { rotation: 135, color: "#000000", duration: .4, ease: easing }, "<")
            .reverse()

        //First dropdown is open by default
        if (index == 0) {
            dropdownTimeline.play();
            setTimeout(() => {
                ScrollTrigger.refresh()
            }, 500);
        }

        //Play animation on click
        item.addEventListener("click", () => {
            dropdownTimeline.reversed(!dropdownTimeline.reversed())
            setTimeout(() => {
                ScrollTrigger.refresh();
            }, 500);
        })

    })

    //Animating dropdowns on scroll
    gsap.set(textApproach, { autoAlpha: 0 })

    ScrollTrigger.batch(textApproach, {
        start: "15% bottom",
        end: "85% top",
        onEnter: batch => gsap.fromTo(batch, { yPercent: 50 }, { autoAlpha: 1, yPercent: 0, stagger: .05, duration: time, ease: easing }),
        onLeave: batch => gsap.to(batch, { autoAlpha: 0, yPercent: -50, stagger: .05, duration: time, ease: easing }),
        onEnterBack: batch => gsap.fromTo(batch, { autoAlpha: 0, yPercent: -50 }, { autoAlpha: 1, yPercent: 0, stagger: .05, duration: time, ease: easing }),
        onLeaveBack: batch => gsap.to(batch, { autoAlpha: 0, yPercent: 50, stagger: .05, duration: time, ease: easing })
    })

    gsap.set(dropdownApproach, { autoAlpha: 0 })

    ScrollTrigger.batch(dropdownApproach, {
        start: "15% bottom",
        end: "85% top",
        onEnter: batch => gsap.fromTo(batch, { yPercent: 50 }, { autoAlpha: 1, yPercent: 0, duration: time, ease: easing }),
        onLeave: batch => gsap.to(batch, { autoAlpha: 0, yPercent: -50, duration: time, ease: easing }),
        onEnterBack: batch => gsap.fromTo(batch, { autoAlpha: 0, yPercent: -50 }, { autoAlpha: 1, yPercent: 0, duration: time, ease: easing }),
        onLeaveBack: batch => gsap.to(batch, { autoAlpha: 0, yPercent: 50, duration: time, ease: easing })
    })



    //Desktop screen
    mediaScreen.add("(min-width: 768px)", () => {


        //Projects section

        //Calculating scroll width of the container with projects
        let projectsWrapperWidth = projectsWrapper.scrollWidth;

        //Timline
        let projectsTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: sectionProjects,
                start: "10% bottom"
            }
        })

        projectsTimeline
            .from(headingProjects, {
                yPercent: 50,
                autoAlpha: 0,
                duration: time,
                ease: easing,
            })
            .from(textProjects, {
                yPercent: 50,
                autoAlpha: 0,
                duration: time,
                ease: easing,
            }, "<40%");

        //Horizontal scroll animation
        let horizontalScrollAnimation = gsap.fromTo(projectsWrapper, {
            x: () => 0
        }, {
            scrollTrigger: {
                trigger: sectionProjects,
                pin: true,
                scrub: true,
                pinReparent: true,
                start: 'top top',
                end: () => "+=" + (projectsWrapper.scrollWidth - window.innerWidth)
            },
            x: () => window.innerWidth - projectsWrapperWidth
        })

        //Looking for projects' images
        const projectImages = document.querySelectorAll('.projects_project-image')

        // Parallax effect for the images
        projectImages.forEach(img => {
            gsap.to(img, {
                scrollTrigger: {
                    trigger: img.parentNode,
                    start: "left right-=40vw",
                    end: "right left+=40vw",
                    scrub: true,
                    invalidateOnRefresh: true,
                    containerAnimation: horizontalScrollAnimation,
                },
                x: '-2.8rem'
            })
        })

        //Hover on a project card
        const projectInfoWrappers = document.querySelectorAll('.projects_project-info-wrapper')

        projectInfoWrappers.forEach((info) => {
            gsap.set(info, { opacity: 0 })

            info.addEventListener('mouseover', () => {
                gsap.to(info, {
                    opacity: 1,
                    duration: .4,
                    ease: easing
                })
            })

            info.addEventListener('mouseout', () => {
                gsap.to(info, {
                    opacity: 0,
                    duration: .4,
                    ease: easing
                })
            })
        })



        //Awards section

        //Animation on scroll
        let awardsTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: headingAwards,
                start: "50% bottom"
            }
        })

        awardsTimeline
            .from(headingAwards, {
                yPercent: 50,
                autoAlpha: 0,
                duration: time,
                ease: easing
            })
            .from(awardCards, {
                yPercent: 20,
                autoAlpha: 0,
                stagger: .1,
                duration: time,
                ease: easing
            }, "<40%")

        //Hover animation for each award
        awardCards.forEach(item => {

            const awardImage = item.querySelector(".awards_award-image")

            let awardsAnimation = gsap.from(awardImage, {
                autoAlpha: 0,
                scaleX: 0,
                transformOrigin: 'left center',
                duration: .4,
                ease: easing,
                paused: true //paused till users hovers
            });

            item.addEventListener('mouseenter', () => {
                awardsAnimation.play();
            });

            item.addEventListener('mouseleave', () => {
                awardsAnimation.reverse();
            });
        });



        //Footer section

        gsap.from(footerLink, {
            scrollTrigger: {
                trigger: footerLink,
                start: "50% bottom"
            },
            autoAlpha: 0,
            yPercent: 30,
            stagger: .2,
            duration: time,
            ease: easing
        })

        gsap.from(footerCenter, {
            scrollTrigger: {
                trigger: footerCenter,
                start: "50% bottom"
            },
            yPercent: 50,
            autoAlpha: 0,
            duration: time,
            ease: easing
        })

        gsap.from(footerBottom, {
            scrollTrigger: {
                trigger: footerBottom,
                start: "20% bottom"
            },
            yPercent: 50,
            autoAlpha: 0,
            stagger: .2,
            duration: time,
            ease: easing
        })
    })





    //Mobile screen
    mediaScreen.add("(max-width: 767px)", () => {

        //Projects section

        gsap.set(textProjects, { autoAlpha: 0 })

        ScrollTrigger.batch(textProjects, {
            start: "15% bottom",
            end: "85% top",
            onEnter: batch => gsap.fromTo(batch, { yPercent: 50 }, { autoAlpha: 1, yPercent: 0, duration: time, ease: easing }),
            onLeave: batch => gsap.to(batch, { autoAlpha: 0, yPercent: 50, duration: time, ease: easing }),
            onEnterBack: batch => gsap.fromTo(batch, { autoAlpha: 0, yPercent: -50 }, { autoAlpha: 1, yPercent: 0, duration: time, ease: easing }),
            onLeaveBack: batch => gsap.to(batch, { autoAlpha: 0, yPercent: 50, duration: time, ease: easing }),
        })

        gsap.set(projectCard, { autoAlpha: 0 })

        ScrollTrigger.batch(projectCard, {
            start: "15% bottom",
            end: "85% top",
            onEnter: batch => gsap.fromTo(batch, { yPercent: 50 }, { autoAlpha: 1, yPercent: 0, duration: time, ease: easing }),
            onLeave: batch => gsap.to(batch, { autoAlpha: 0, yPercent: 50, duration: time, ease: easing }),
            onEnterBack: batch => gsap.fromTo(batch, { autoAlpha: 0, yPercent: -50 }, { autoAlpha: 1, yPercent: 0, duration: time, ease: easing }),
            onLeaveBack: batch => gsap.to(batch, { autoAlpha: 0, yPercent: 50, duration: time, ease: easing }),
        })



        //Awards section

        gsap.set(headingAwards, { autoAlpha: 0 })

        ScrollTrigger.batch(headingAwards, {
            start: "15% bottom",
            end: "85% top",
            onEnter: batch => gsap.fromTo(batch, { yPercent: 50 }, { autoAlpha: 1, yPercent: 0, duration: time, ease: easing }),
            onLeave: batch => gsap.to(batch, { autoAlpha: 0, yPercent: 50, duration: time, ease: easing }),
            onEnterBack: batch => gsap.fromTo(batch, { autoAlpha: 0, yPercent: -50 }, { autoAlpha: 1, yPercent: 0, duration: time, ease: easing }),
            onLeaveBack: batch => gsap.to(batch, { autoAlpha: 0, yPercent: 50, duration: time, ease: easing }),
        })

        gsap.set(awardCardText, { autoAlpha: 0 })

        ScrollTrigger.batch(awardCardText, {
            trigger: awardCardText,
            start: "15% bottom",
            end: "85% top",
            onEnter: batch => gsap.fromTo(batch, { yPercent: 50 }, { autoAlpha: 1, yPercent: 0, duration: time, ease: easing, stagger: .15 }),
            onLeave: batch => gsap.to(batch, { autoAlpha: 0, yPercent: 50, duration: time, ease: easing, stagger: .15 }),
            onEnterBack: batch => gsap.fromTo(batch, { autoAlpha: 0, yPercent: -50 }, { autoAlpha: 1, yPercent: 0, duration: time, ease: easing, stagger: .15 }),
            onLeaveBack: batch => gsap.to(batch, { autoAlpha: 0, yPercent: 50, duration: time, ease: easing, stagger: .15 }),
        })



        //Footer section
        gsap.set(footerLink, { autoAlpha: 0 })

        ScrollTrigger.batch(footerLink, {
            start: "15% bottom",
            end: "85% top",
            onEnter: batch => gsap.fromTo(batch, { yPercent: 50 }, { autoAlpha: 1, yPercent: 0, duration: time, ease: easing, stagger: .15 }),
            onLeave: batch => gsap.to(batch, { autoAlpha: 0, yPercent: 50, duration: time, ease: easing, stagger: .15 }),
            onEnterBack: batch => gsap.fromTo(batch, { autoAlpha: 0, yPercent: -50 }, { autoAlpha: 1, yPercent: 0, duration: time, ease: easing, stagger: .15 }),
            onLeaveBack: batch => gsap.to(batch, { autoAlpha: 0, yPercent: 50, duration: time, ease: easing, stagger: .15 }),
        })

        gsap.set(footerCenter, { autoAlpha: 0 })

        ScrollTrigger.batch(footerCenter, {
            start: "15% bottom",
            end: "85% top",
            onEnter: batch => gsap.fromTo(batch, { xPercent: 100 }, { autoAlpha: 1, xPercent: 0, duration: time, ease: easing }),
            onLeave: batch => gsap.to(batch, { autoAlpha: 0, xPercent: 100, duration: time, ease: easing }),
            onEnterBack: batch => gsap.fromTo(batch, { autoAlpha: 0, xPercent: 100 }, { autoAlpha: 1, xPercent: 0, duration: time, ease: easing }),
            onLeaveBack: batch => gsap.to(batch, { autoAlpha: 0, xPercent: 100, duration: time, ease: easing }),
        })

        gsap.set(footerSocials, { autoAlpha: 0 })

        ScrollTrigger.batch(footerSocials, {
            start: "15% bottom",
            end: "85% top",
            onEnter: batch => gsap.fromTo(batch, { yPercent: 50 }, { autoAlpha: 1, yPercent: 0, duration: time, ease: easing, stagger: .15 }),
            onLeave: batch => gsap.to(batch, { autoAlpha: 0, yPercent: 50, duration: time, ease: easing, stagger: .15 }),
            onEnterBack: batch => gsap.fromTo(batch, { autoAlpha: 0, yPercent: -50 }, { autoAlpha: 1, yPercent: 0, duration: time, ease: easing, stagger: .15 }),
            onLeaveBack: batch => gsap.to(batch, { autoAlpha: 0, yPercent: 50, duration: time, ease: easing, stagger: .15 }),
        })

        gsap.set('.footer_bottom-wrapper', { autoAlpha: 0 })

        ScrollTrigger.batch('.footer_bottom-wrapper', {
            start: "15% bottom",
            end: "85% top",
            onEnter: batch => gsap.fromTo(batch, { yPercent: 50 }, { autoAlpha: 1, yPercent: 0, duration: time, ease: easing }),
            onLeave: batch => gsap.to(batch, { autoAlpha: 0, yPercent: 50, duration: time, ease: easing }),
            onEnterBack: batch => gsap.fromTo(batch, { autoAlpha: 0, yPercent: -50 }, { autoAlpha: 1, yPercent: 0, duration: time, ease: easing }),
            onLeaveBack: batch => gsap.to(batch, { autoAlpha: 0, yPercent: 50, duration: time, ease: easing }),
        })
    })



    //Footer for both Desktop and Mobile
    gsap.to(navbar, {
        scrollTrigger: {
            trigger: footer,
            start: "top-=5% top",
            end: "top top",
            scrub: 1
        },
        yPercent: -100,
        duration: .6,
        ease: easing
    })
})