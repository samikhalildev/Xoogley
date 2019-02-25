
// SEARCH PAGE DOM MANIPULATION

setTimeout(function(){
    removeDOMElement('gb_70', 'id');
    removeDOMElement('gb_7c', 'class');
    removeDOMElement('ab_options', 'id');
    removeDOMElement('hdtb-tls', 'id');
    removeDOMElement('gb', 'id');
    removeDOMElement('brs', 'id');
    removeDOMElement('fbar', 'id');
    removeDOMElement('appbar', 'id');
    removeDOMElement('imagebox_bigimages', 'id');
    removeDOMElement('nrgt', 'class');
    removeDOMElement('extrares', 'id');
    removeDOMElement('dRYYxd', 'class');
    removeDOMElement('Tg7LZd', 'class');

    var ele = document.getElementById('ataw');
    var mw = ele.nextSibling;
    mw.style.paddingTop = '20px';

    let pam = document.getElementById('hdtb-msb');
    pam.style.marginLeft = '0';
    pam.children[0].removeChild(pam.children[0].children[1]);

    const urlParams = new URLSearchParams(window.location.search);
    const searchVal = urlParams.get('q');

    let logo = document.getElementsByClassName('logo')[0];
    logo.children[0].setAttribute('href', 'https://www.google.com');

    let side = document.getElementById('rhs_block');
    side.style.paddingBottom = '0px';
    side.style.marginLeft = '165px';
    side.style.width = '600px';

    let searchform = document.getElementById('searchform');
    searchform.className = 'jsrp mdm';
    searchform.style.position = 'absolute !important';
    searchform.style.top = '20px';


    let main = document.getElementById('rcnt');
    let searchbar = document.getElementById('tsf');

    // SEARCH RESULTS MEDIA QUERY
    var mediaQuery = window.matchMedia( "(max-width: 1440px)" );
	WidthChange(mediaQuery);
    mediaQuery.addListener(WidthChange)

    main.style.marginTop = '10px';
    main.insertBefore(side, main.children[0]);

    if (document.getElementById('taw')) {
        let ele = document.getElementById('taw');
        ele.children[1].style.padding = '0px';
        main.insertBefore(ele, side);
    }

    let bar = document.getElementById('hdtb');
    bar.style.marginTop = '-40px';
    bar.style.marginBottom = '-20px';
    bar.style.borderBottom = 'none';

    let topNavBar = document.getElementById('hdtb-msb-vis');

    let link1 = topNavBar.children[0];
    let link2 = topNavBar.children[1];
    let link3 = topNavBar.children[2];

    link1.style.padding = '5px';
    link1.style.borderBottom = 'none';
    link1.style.marginTop = '25px';

    link1.innerHTML = `<a href='/search?q=${searchVal}'> Web </a>`;
    link2.innerHTML = `<a href='https://www.youtube.com/results?search_query=${searchVal}'> YouTube </a>`;
    link3.innerHTML = `<a href='/search?q=${searchVal}&source=lnms&tbm=isch&sa=X'> Pictures </a>`;

    topNavBar.removeChild(topNavBar.children[4]);
    topNavBar.removeChild(topNavBar.children[3]);

    var linksbar = document.getElementById('top_nav');
    linksbar.style.marginLeft = '16%';

    // nav bar
    document.getElementById('hdtbSum').style.background = 'none';

    document.body.style.background = `no-repeat center fixed`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundImage = 'radial-gradient(circle, #feebff, #fcf1ff, #fcf6ff, #fdfbff, #ffffff)';

    let searchInput = document.getElementsByClassName('RNNXgb')[0];
    searchInput.style.borderRadius = '0px';

    let topWrapper = document.getElementsByClassName('A8SBwf')[0];
    topWrapper.style.marginLeft = '12.5%';

},500);

function removeDOMElement(data, type) {
    if (type == "id") {
        if(document.getElementById(data)) {
            let ele = document.getElementById(data);
            ele.parentNode.removeChild(ele);
        }

    } else if (type == "class") {
        if(document.getElementsByClassName(data)[0]) {
            let ele = document.getElementsByClassName(data)[0];
            ele.parentNode.removeChild(ele);
        }
    }
}


function WidthChange(mq) {
	let main = document.getElementById('rcnt');
    let searchbar = document.getElementById('tsf');
    let topNavBar = document.getElementById('hdtb-msb-vis');

	if (mq.matches) {
    	// window width is at less than 1440px
    	main.style.marginLeft = '20%';
   	 	searchbar.style.marginLeft = '21%';
    	topNavBar.style.marginLeft = '35%';

    	if (document.getElementById('taw')) {
	        let ele = document.getElementById('taw');
	        ele.style.padding = '15px 150px 0 150px';
	        ele.style.marginLeft = '5px';
	    }

	}
	else {
	    // window width is greater than 1440px
	    main.style.marginLeft = '38%';
   	 	searchbar.style.marginLeft = '27%';
   	 	topNavBar.style.marginLeft = '50%';

   	 	if (document.getElementById('taw')) {
	        let ele = document.getElementById('taw');
	        ele.style.padding = '15px 0px 0px 150px';
	        ele.style.marginLeft = '30px';
	    }
	}
}
