import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from "lenis";
gsap.registerPlugin(ScrollTrigger);
const lenis = new Lenis();
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);

export function parallax () {

    const photoContainer = document.querySelector('.photo-container');

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: photoContainer,
            start: 'top top',
            end: 'bottom top',
            // markers: true,
            pin: true,
            scrub: 1
        }
    });

    tl.to('.item-1', {
    xPercent: -150,
    rotate: -30,
    opacity: 0.3
    }, 0)
    .to('.item-3', {
    xPercent: -250,
    rotate: -45,
    opacity: 0.3,
    }, 0)
    .to('.item-5', {
    xPercent: -200,
    rotate: -45,
    opacity: 0.3,
    }, 0)
    .to('.item-7', {
    xPercent: -200,
    rotate: -60,
    opacity: 0.3,
    }, 0)
    .to('.item-2', {
    xPercent: 200,
    rotate: 30,
    opacity: 0.3,
    }, 0)
    .to('.item-4', {
    xPercent: 200,
    rotate: 60,
    opacity: 0.3,
    }, 0)
    .to('.item-6', {
    xPercent: 200,
    rotate: 30,
    opacity: 0.3,
    }, 0)
    .to('.photo-content', {
    opacity: 1,
    }, 0.1)

    const tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: '.letter',
            start: 'top top',
            end: 'bottom top',
            pin: true,
            scrub: 1
        }
    });

    tl2.to('.letter-to', {
        opacity: 1,
        duration: 0.5,
        y: 0
    }, 0)
    .to('.letter-content', {
        opacity: 1,
        duration: 0.5,
        y: 0
    }, 0.2)
    .to('.letter-from', {
        opacity: 1,
        duration: 0.5,
        y: 0
    }, 0.5)

}
