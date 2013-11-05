// Fall v2.0 By MaxxBlade - http://www.maxxblade.co.uk/fall

var fallObjects=new Array();function newObject(url,height,width){fallObjects[fallObjects.length]=new Array(url,height,width);}


var numObjs=30, waft=70, fallSpeed=20, wind=0;
newObject("http://img.photobucket.com/albums/v128/Mercy4Me/BalloonPurple.gif",29,15);
newObject("http://img.photobucket.com/albums/v128/Mercy4Me/BalloonYellow.gif",29,15);
newObject("http://img.photobucket.com/albums/v128/Mercy4Me/BalloonRed.gif",29,15);
newObject("http://img.photobucket.com/albums/v128/Mercy4Me/BalloonGreen.gif",29,15);
newObject("http://img.photobucket.com/albums/v128/Mercy4Me/BalloonBlue.gif",29,15);
newObject("http://img.photobucket.com/albums/v128/Mercy4Me/redfetti.gif",36,33);
newObject("http://img.photobucket.com/albums/v128/Mercy4Me/purplefetti.gif",46,15);
newObject("http://img.photobucket.com/albums/v128/Mercy4Me/fettistar.gif",27,23);
newObject("http://img.photobucket.com/albums/v128/Mercy4Me/fettig.gif",25,21);


function winSize(){winWidth=(moz)?window.innerWidth:document.body.clientWidth;winHeight=(moz)?window.innerHeight:document.body.clientHeight;}
function winOfy(){winOffset=(moz)?window.pageYOffset:document.body.scrollTop;}
function fallObject(num,vari,nu){
	objects[num]=new Array(parseInt(Math.random()*(winWidth-waft)),-30,(parseInt(Math.random()*waft))*((Math.random()>0.5)?1:-1),0.02+Math.random()/20,0,1+parseInt(Math.random()*fallSpeed),vari,fallObjects[vari][1],fallObjects[vari][2]);
	if(nu==1){document.write('<img id="fO'+i+'" style="position:fixed;" src="'+fallObjects[vari][0]+'">'); }
}
function fall(){
	for(i=0;i<numObjs;i++){
		var fallingObject=document.getElementById('fO'+i);
		if((objects[i][1]>(winHeight-(objects[i][5]+objects[i][7])))||(objects[i][0]>(winWidth-(objects[i][2]+objects[i][8])))){fallObject(i,objects[i][6],0);}
		objects[i][0]+=wind;objects[i][1]+=objects[i][5];objects[i][4]+=objects[i][3];
		with(fallingObject.style){ top=objects[i][1]+winOffset+'px';left=objects[i][0]+(objects[i][2]*Math.cos(objects[i][4]))+'px';}
	}
	setTimeout("fall()",31);
}
var objects=new Array(),winOffset=0,winHeight,winWidth,togvis,moz=(document.getElementById&&!document.all)?1:0;winSize();
for (i=0;i<numObjs;i++){fallObject(i,parseInt(Math.random()*fallObjects.length),1);}
fall();
