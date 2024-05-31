const navigation =
document.querySelector('.navigation');
const listItems =
navigation.querySelectorAll('li');

listItems.forEach((item, index) => {
    setTimeout(() => {
        item.style.opacity = 1;
    }, 100 + (index * 100));
})