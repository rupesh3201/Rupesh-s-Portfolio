import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

// Create and export a shared timeline for Navbar and Hero
const sharedTimeline = gsap.timeline({ paused: true });

export  default sharedTimeline;
