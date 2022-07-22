import SweetScroll from 'sweet-scroll';


export function returnTo(target, type = 'easeInOutQuart', time = 1400, off = -20) {
    let scroller = new SweetScroll({
        easing: type,
        duration: time,
        offset: off,
        cancellable: true,
    })

    scroller.to(target);
}