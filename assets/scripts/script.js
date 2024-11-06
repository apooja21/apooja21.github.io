const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
	navClose = document.getElementById('nav-close'),
    navLink = document.querySelectorAll('.nav_link')


    /* ==================Show Menu in Mobile View================= */

    /* =======Menu Show======== */
    //Validate if Nav Toggle symbol exists

if(navToggle){
        navToggle.addEventListener('click', ()=>{
            navMenu.classList.add('show-menu')
        })
    }

    //Validate if Nav Close symbol exists
if (navClose) {
	navClose.addEventListener('click', () => {
		navMenu.classList.remove('show-menu')
	})
}

function linkAction() {
	navMenu.classList.remove('show-menu')
}

navLink.forEach((n) => n.addEventListener('click', linkAction))