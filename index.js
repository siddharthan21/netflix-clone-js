const tabitem =document.querySelectorAll('.tab-item');
const tabcontentitem = document.querySelectorAll('.tab-content-item')
function selectItem(e){
    removeborder();
    removeshow();
    this.classList.add("tab-border");
    const tabcontentitem=document.querySelector(`#${this.id}-content`);
    tabcontentitem.classList.add('show');
}
function removeborder(){
    tabitem.forEach(item => item.classList.remove('tab-border'))
}
function removeshow(){
    tabcontentitem.forEach(item => item.classList.remove('show'))
}
tabitem.forEach(item => item.addEventListener('click',selectItem));
