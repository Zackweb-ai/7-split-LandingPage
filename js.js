arp = document.querySelector('.container')
lefts = document.querySelector('.left')
rights = document.querySelector('.right')

lefts.addEventListener('mouseenter',()=> arp.classList.add('active-left') )
lefts.addEventListener('mouseleave',()=> arp.classList.remove('active-left') )

rights.addEventListener('mouseenter',()=> arp.classList.add('active-right') )
rights.addEventListener('mouseleave',()=> arp.classList.remove('active-right') )