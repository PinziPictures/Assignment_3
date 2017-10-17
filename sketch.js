var n=8;
var altezza=[50,100,200];
var colori=["#5666e1","#e37d45","#5ccec5","#e74b4b"];
var altezza_b;
var inclinazione=50;
var i,j;
var direzione=true;
var larghezza;
var ultima_sx,ultima_dx;

function setup() {
  createCanvas(500,500);
  //background(255,255,255);
}

function draw() {
  var rumore;
  larghezza=width/n;
  background(255,255,255);
  noFill();
  noStroke();
  for(i=0;i<width;i+=larghezza){
    //altezza_b=random(altezza);
    altezza_b=50;
    if(direzione){
        direzione=false;
    }
    else{
      direzione=true;
    }
    for(j=-inclinazione;j<height+altezza_b;j+=altezza_b){
      if(random()<0.2)
      {
         fill(255,0,0);
      } else {
         fill(200);
      }
      fill(44,62,224);
      if(direzione){
        quad(i,j,i+larghezza,j+inclinazione,i+larghezza,j+altezza_b+inclinazione,i,j+altezza_b);
      }
      else{
        quad(i,j,i+larghezza,j-inclinazione,i+larghezza,j+altezza_b-inclinazione,i,j+altezza_b);
      }
    }
  }
  
  direzione=true;
  
  for(i=0;i<width;i+=larghezza){
    altezza_b=50;
    if(direzione){
        direzione=false;
    }
    else{
      direzione=true;
    }
    if((mouseX>i && mouseX<i+larghezza)){
      
      for(j=-inclinazione;j<height+altezza_b;j+=altezza_b){
        fill(random(colori));
        if(direzione){
          quad(i,j,i+larghezza,j+inclinazione,i+larghezza,j+altezza_b+inclinazione,i,j+altezza_b);
        }
        else{
          quad(i,j,i+larghezza,j-inclinazione,i+larghezza,j+altezza_b-inclinazione,i,j+altezza_b);
        }
      }
    }
  }
  
  
  
}
/*
function mouseMoved() {
  larghezza=width/n;
  for(i=0;i<width;i+=larghezza){
    if((mouseX>i && mouseX<i+larghezza)){
      ultima_dx=i+larghezza;
      ultima_sx=i;
    }
  }
  console.log(ultima_dx);
  loop();
  
  //direzione=false;
  for(i=0;i<width;i+=larghezza){
    altezza_b=50;
    if(direzione){
        direzione=false;
    }
    else{
      direzione=true;
    }
    if((mouseX>i && mouseX<i+larghezza) && (ultima_sx!=i && ultima_dx!=i+larghezza)){
      
      for(j=-inclinazione;j<height+altezza_b;j+=altezza_b){
        fill(random(colori));
        if(direzione){
          quad(i,j,i+larghezza,j+inclinazione,i+larghezza,j+altezza_b+inclinazione,i,j+altezza_b);
        }
        else{
          quad(i,j,i+larghezza,j-inclinazione,i+larghezza,j+altezza_b-inclinazione,i,j+altezza_b);
        }
      }
    }
  }
  noLoop();
}
*/
