AFRAME.registerComponent('position_of_car',{
    schema:{
        move_car:{type:'number', default:10}
    },
    update:function(){
        window.addEventListener('click',e=> {
            this.data.clickCounter=this.data.clickCounter+1
            if(this.data.clickCounter === 1){
                const rotation={x:0,y:20,z:0}
                this.el.setAttribute("rotation",rotation)
            } else if(this.data.clickCounter === 2){
                const rotation={x:0,y:100,z:0}
            }
        })
    }
})