const scrolling = (upSelector) => {
  const upElem = document.querySelector(upSelector)

  console.log(upElem);

  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 1650) {
      upElem.classList.add('animated', 'fadeIn');
      upElem.classList.remove('fadeOut');
    } else {
      upElem.classList.add('fadeOut');
      upElem.classList.remove('fadeIn');
    }
  });

  //  Pure js scrolling
    const element = document.documentElement,
        body = document.body;

    const calcScroll = () => {

        upElem.addEventListener('click', function (event) {
            let scrollTop = Math.round(body.scrollTop || element.scrollTop);


            if (this.hash !== '') {
                event.preventDefault();

                let hashElem = document.getElementById(this.hash.substring(1)),
                    hashElemTop = 0;

                while (hashElem.offsetParent) {
                    hashElemTop += hashElem.offsetTop;
                    hashElem = hashElem.offsetParent;
                }

                hashElemTop = Math.round(hashElemTop);

                smoothScroll(scrollTop, hashElemTop, this.hash);
            }
        });
    }

    const smoothScroll = (from, to, hash) => {
        let timeInterval = 1,
            prevScrollTop,
            speed;

        if (to > from) {
            speed = 30;
        } else {
            speed = -30;
        }

        let move = setInterval(function () {
            let scrollTop = Math.round(body.scrollTop || element.scrollTop);

            if (prevScrollTop === scrollTop || (to > from && scrollTop >= to) || (to < from && scrollTop <= to)) {
                clearInterval(move);

                history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
            } else {
                body.scrollTop += speed;
                element.scrollTop += speed;
                prevScrollTop = scrollTop;
            }
        }, timeInterval);
    };

    calcScroll();

}

export default scrolling;
