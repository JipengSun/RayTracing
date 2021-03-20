//const { vec4 } = require("../../2020.Week1_LineGrid_POSTED/lib/glmatrix");

function CLight(){
    this.lightPt = vec4.create();
    this.isOn = true;
    this.Ia = vec4.create();
    this.Id = vec4.create();
    this.Is = vec4.create();
    this.color = vec4.create();
    this.IntensityA = 1.0;
    this.IntensityD = 1.0;
    this.IntensityS = 1.0;
}
CLight.prototype.init = function(lightPt,Ambi,Diff,Spec){
    vec4.copy(this.lightPt, lightPt);
    vec4.copy(this.Ia, Ambi);
    vec4.copy(this.Id, Diff);
    vec4.copy(this.Is, Spec);
}

CLight.prototype.setPosition = function(lightX,lightY,lightZ){
    vec4.set(this.lightPt, lightX,lightY,lightZ, 1.0);
}
CLight.prototype.setColor = function(R,G,B){
    vec4.set(this.color,R,G,B,1.0);
}
CLight.prototype.setIllum = function(Ia,Id,Is){
    vec4.scale(this.Ia,this.color,Ia);
    vec4.scale(this.Id,this.color,Id);
    vec4.scale(this.Is,this.color,Is);
    
    /*
    vec4.set(this.Ia, Iar,Iag,Iab,1.0);
    vec4.set(this.Id, Idr,Idg,Idb,1.0);
    vec4.set(this.Is, Isr,Isg,Isb,1.0);
    */
}
