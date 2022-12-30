
/* Animate on scroll */
AOS.init();

/* active navbar lists while scrolling with page sections */
	var li = document.querySelectorAll(".nav-item");
	var sec = document.querySelectorAll("section");
	function activemenu(){
		var len= sec.length;
		while(--len && window.scrollY + 50 < sec[len].offsetTop){}
			li.forEach(ltx => ltx.classList.remove("active"));
			li[len].classList.add("active");
		}
		activemenu();
		window.addEventListener("scroll", activemenu);

/* close navbar when click outside */
	$(function(){
		$('body').click(function(e){
			if(e.target.getAttribute("class")==="nav-link"||$(e.target).parents(".nav-link").length > 0)
			{
			}
			else 
			{
				if($(".navbar-collapse").hasClass("show")==true)
				{
					$(".navbar-toggler")[0].click();		
				}
			}
		});
	});

/* slick carousel */
	$.noConflict();
	$('.slider').slick({
		vertical: true,
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 300
	});

/* portfolio filter */
	let list = document.querySelectorAll('.list');
	let itemBox = document.querySelectorAll('.itemBox');
	for(let i = 0; i<list.length; i++){
		list[i].addEventListener('click', function(){
		for(let j = 0; j<list.length; j++){
			list[j].classList.remove('active');
		}
		this.classList.add('active');

		let dataFilter = this.getAttribute('data-filter');

		for(let k = 0; k<itemBox.length; k++){
			itemBox[k].classList.remove('active');
			itemBox[k].classList.add('hide');
			if(itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == "all"){
				itemBox[k].classList.remove('hide');
				itemBox[k].classList.add('active');
			}
		}
		})
	}

/*portfolio section*/
	var menubar = document.getElementById("menubar");
	var proj = document.getElementsByClassName("itemBox");
	var portfolioPop = document.getElementById("portfolioPopup");
	var itemInfo = document.getElementsByClassName("item-info");

	function hideMenubar (){          /* to hide menu bar */
		menubar.style.visibility="hidden";
	} /* end hideMenubar() */

	function showMenubar (){          /* to show menu bar */
		menubar.style.visibility="visible";
	} /* end showMenubar() */

	function showPortfolioPopup(){     /* to show portfolio popup */
		portfolioPop.style.visibility="visible";
	} /* end showPortfolioPopup() */

	proj[0].onclick=function(){
		showPortfolioPopup();
		itemInfo[0].style.display="inline-block";
		hideMenubar();
	}
	
	proj[1].onclick=function(){
		showPortfolioPopup();
		itemInfo[1].style.display="inline-block";
		hideMenubar();
	}
	
	proj[2].onclick=function(){
		showPortfolioPopup();
		itemInfo[2].style.display="inline-block";
		hideMenubar();
	}
	
	proj[3].onclick=function(){
		showPortfolioPopup();
		itemInfo[3].style.display="inline-block";
		hideMenubar();
	}

	proj[4].onclick=function(){
		showPortfolioPopup();
		itemInfo[4].style.display="inline-block";
		hideMenubar();
	}

	proj[5].onclick=function(){
		showPortfolioPopup();
		itemInfo[5].style.display="inline-block";
		hideMenubar();
	}
	function hideIteminfo(){
		itemInfo[0].style.display = "none";
			itemInfo[1].style.display = "none";
			itemInfo[2].style.display = "none";
			itemInfo[3].style.display = "none";
			itemInfo[4].style.display = "none";
			itemInfo[5].style.display = "none";
	}
	window.onclick = function(event) {
		if (event.target == portfolioPop) {
			portfolioPop.style.visibility = "hidden";
			hideIteminfo();
			showMenubar();
		}
	}

	var span = document.getElementsByClassName("close")[0];
	span.onclick = function() {
		portfolioPop.style.visibility = "hidden";
		hideIteminfo();
		showMenubar();
		
	}


/************************ 
 show portfolio projects
*************************/

var imgHover1 = document.getElementById("project-one");
var imgHover2 = document.getElementById("project-two");
var imgHover3 = document.getElementById("project-three");
var imgHover4 = document.getElementById("project-four");
var imgHover5 = document.getElementById("project-five");
var imgHover6 = document.getElementById("project-six");
var showProject = document.getElementsByClassName("show-project")
var a = showProject[0];
var b = showProject[1];
var c = showProject[2];
var d = showProject[3];
var e = showProject[4];
var f = showProject[5];

imgHover1.onmouseover= function(){	
	a.style.visibility="visible";
}
imgHover1.onmouseout= function(){	
	a.style.visibility="hidden";
}

imgHover2.onmouseover= function(){	
	b.style.visibility="visible";
}    
imgHover2.onmouseout= function(){	
	b.style.visibility="hidden";
}

imgHover3.onmouseover= function(){	
	c.style.visibility="visible";
}
imgHover3.onmouseout= function(){	
	c.style.visibility="hidden";
}

imgHover4.onmouseover= function(){	
	d.style.visibility="visible";
}
imgHover4.onmouseout= function(){	
	d.style.visibility="hidden";
} 

imgHover5.onmouseover= function(){	
	e.style.visibility="visible";
}
imgHover5.onmouseout= function(){	
	e.style.visibility="hidden";
}

imgHover6.onmouseover= function(){	
	f.style.visibility="visible";
}
imgHover6.onmouseout= function(){	
	f.style.visibility="hidden";
}

/************************ 
	gsap animation
*************************/

gsap.registerPlugin(ScrollTrigger);
gsap.from(".progress-thumb .percent",{
	scrollTrigger: {
		trigger:".progress-thumb .percent",
		toggleActions: "restart restart none none"
	},
	left:0,
	ease: Power2.easeInOut,
	duration:3,
	stagger:0.1
});
gsap.from(".progress-thumb span",{
	scrollTrigger: {
		trigger:".progress-thumb .percent",
		toggleActions: "restart restart none none"
	},
	width:"0px",
	ease: Power2.easeInOut,
	duration:3,
	stagger:0.1
});