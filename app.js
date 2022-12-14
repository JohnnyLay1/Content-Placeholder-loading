const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile-img')
const names = document.getElementById('names')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_text = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)


// The function used below is hard coded.. it can also be dynamic with API's just replace with ${api value eg. user.title}
function getData() {
    header.innerHTML = `<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
    alt="">`
    title.innerHTML = `Lorem ipsum dolor sit amet consectetur.`
    excerpt.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, enim corporis accusantium sequi exercitationem aliquid commodi nam optio aut repellendus.`
    profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">`
    names.innerHTML = `John Doe`
    date.innerHTML = `Oct 08, 2022`

    animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))

    animated_bg_text.forEach((bg) => bg.classList.remove('animated-bg-text'))
}