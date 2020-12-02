	var myground;
	var line,line1,line2;
	var paperBall;
	var engine,world;
	const Engine = Matter.Engine;
	const World = Matter.World;
	const Bodies = Matter.Bodies;
	const Body = Matter.Body;
	

	function preload()
	{
		
	}

	function setup() 
	{
		createCanvas(1000, 400);


		engine = Engine.create();
		world = engine.world;

		//Create the Bodies Here.
		myground = new Ground(500,390,1000,10);	

		line = createSprite(850,380,200,10);
		line.shapeColor = ("red");

		line1 = createSprite(950,350,10,70);
		line1.shapeColor = ("red");

		line2 = createSprite(750,350,10,70);
		line2.shapeColor = ("red");

		paperBall = new Paper(100,100,20)

		Engine.run(engine);
	
	}
 
	function draw() 
	{
	rectMode(CENTER);
	background(0);
	
	KeyPressed();

	myground.display();

	line.display();
	line1.display();
	line2.display();

	paperBall.display();
	
	drawSprites();
	}

	function KeyPressed()
	{
		if (keyCode === UP_ARROW)
		{
			Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:85,y:85})
		}
	}