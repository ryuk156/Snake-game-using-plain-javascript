var canvas= document.querySelector('canvas')


canvas.width=600
canvas.height=600

var c=canvas.getContext("2d")



var scale=20

var food={
	x:Math.floor(Math.random()*Math.floor(canvas.width/scale))*scale,
	y:Math.floor(Math.random()*Math.floor(canvas.height/scale))*scale
}




function draw(){
	s.update()
	s.show()
 
	c.fillStyle='red';
    c.fillRect(food.x,food.y,scale,scale);
    if(s.eat()) {
    	food={
	x:Math.floor(Math.random()*Math.floor(canvas.width/scale))*scale,
	y:Math.floor(Math.random()*Math.floor(canvas.height/scale))*scale
}
    }
}


function snake(){
	this.x=0;
	this.y=0;
	this.xspeed=1;
	this.yspeed=0;
    this.count=0;
    this.tail=[];
    


    this.direction =function(x,y){
     this.xspeed=x;
     this.yspeed=y
    }





	this.show= function(){
    

		
		 for(var i=0;i<this.tail.length;i++){
        c.fillStyle='green';
      	c.fillRect(this.tail[i].x,this.tail[i].y,scale,scale);
      }	  
       c.fillStyle='yellow';
		c.fillRect(this.x,this.y,scale,scale);

	}



	this.update=function(){
		
     
      for(var i=0;i<this.tail.length-1;i++){
      	this.tail[i]=this.tail[i+1];
      }

  
  this.tail[this.count-1]={x:this.x,y:this.y}
      

        
		this.x=this.x+this.xspeed*scale;
		this.y=this.y+this.yspeed*scale;

        if(this.x==canvas.width){
        	this.x=canvas.width-scale

        }else if(this.x<=0)
        {
        	this.x=0
        }
        if(this.y==canvas.height){
        	this.y=canvas.height-scale
        }else if(this.y<=0){
        	this.y=0
        }
		
	}

   this.eat =function(){
    
     if(this.x == food.x && this.y == food.y){
       this.count++
       return true;
        // we don't remove the tail
    }else{
    	return false;
    }

   }

   


}


s=new snake()


function animate(){
	window.setInterval(()=>{
    c.clearRect(0,0,canvas.width,canvas.height)
		draw()
	},250 );
    
}

animate();













document.addEventListener("keydown",function(e){
	 var key = e.keyCode;

	if (key  == 38){
		s.direction(0,-1)


	}else if (key == 40){
		s.direction(0,1)
		
	}else if (key == 39){
		s.direction(1,0)
		
	}else if (key == 37){
		s.direction(-1,0)
		
	}
});
