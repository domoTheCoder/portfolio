 //imports
import { animate, stagger, splitText, waapi, createTimeline} from 'https://esm.sh/animejs';
//1st animation
const { chars } = splitText('h1', { words: false, chars: true });
animate(chars, {
    y: [
        { to:'-5rem', ease: 'outExpo', duration: 1500},
        { to: 0, ease: 'outBounce', duration: 800, delay: 100}
    ],
   rotate: {
    from: '-1turn',
    delay:0 
   },
    delay: stagger(50),
    ease: 'inOutCirc',
    loopDelay: 2500,
    loop: true
});

//2nd animation
waapi.animate('.homeImage', {
    x:-200 ,
    width:500,
    delay:10,
    rotate: '-1turn'
}); 
//3rd animation
splitText('p', {
  chars: `<span class="char-3d word-{i}">
    <em class="face face-top">{value}</em>
    <em class="face-front">{value}</em>
    <em class="face face-bottom">{value}</em>
  </span>`,
});

const charsStagger = stagger(100, { start: 0 });

createTimeline({ defaults: { ease: 'linear', loop: true, duration: 750 }})
.add('.char-3d', { rotateX: -90 }, charsStagger)
.add('.char-3d .face-top', { opacity: [.5, 0] }, charsStagger)
.add('.char-3d .face-front', { opacity: [1, .5] }, charsStagger)
.add('.char-3d .face-bottom', { opacity: [.5, 1] }, charsStagger);