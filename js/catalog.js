const burger = document.querySelector('.header_menu') 
const sidebar = document.querySelector('.sidebar')
burger.addEventListener('click',()=>{ 
    if(burger.classList.contains('active')){ 
        burger.classList.remove('active')
        sidebar.classList.remove('active')
    }else{ 
        burger.classList.add('active') 
        sidebar.classList.add('active')
    } 
})

const modal = document.querySelector('.modal')
const btnModal = document.querySelector('.processed')
btnModal.addEventListener('click',()=>{
    modal.classList.remove('none')
}) 

const btnClose = document.querySelector('.btn-close')
btnClose.addEventListener('click',()=>{
    modal.classList.add('none')
}) 

const cancelBtn = document.querySelectorAll('.cancel-item')
const items = document.querySelector('.items')
const itemProduct = document.querySelectorAll('.item')
items.addEventListener('click',(e)=>{
    cancelBtn.forEach((item,index)=>{
        if(e.target == item ){
            itemProduct.forEach((gloablitem,id)=>{
                if(index == id ){
                    gloablitem.remove()
                }
            })
        }
        else{
            console.log('hflhkgfl')
        }

    })

})