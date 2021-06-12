class stone{
	constructor(x,y,width,height)
	{
		var options = {
			density:12,
			friction: 0.9,
			restitution:0.8
		  };
		  this.x=x;
		  this.y=y;
		  this.height = height ;
		  this.width = width ;
		this.body=Bodies.rectangle(this.x, this.y,this.width,this.height, options)
		World.add(world, this.body);
	

	};
	display()
	{
			var pos=this.body.position;	
			var angle = this.body.angle;	
			push()
			translate(pos.x,pos.y);
			rotate(angle);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("red");
			rect(0, 0, this.width, this.height);
			pop()
	};

};