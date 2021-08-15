var canvas=new fabric.Canvas("myCanvas");

superhero_image_width= 30;
superhero_image_height= 30;

superhero_x= 10;
superhero_y= 10;

var superhero_object;

var weapon_object;



function player_updater() {
    fabric.Image.fromURL("player.png",function(Img){
        superhero_object= Img;

        superhero_object.scaleToWidth(150);
        superhero_object.scaleToHeight(140);
        superhero_object.set({
            top: superhero_y,
            left: superhero_x
        });
        canvas.add( superhero_object);
    });
}

function new_image(get_image) {
fabric.Image.fromURL(get_image, function(Img){
    weapon_object=Img;

    weapon_object.scaleToWidth(superhero_image_width);
    weapon_object.scaleToHeight(superhero_image_height);
    weapon_object.set({
        top:superhero_y,
        left:superhero_x
    });
    canvas.add(weapon_object);
    
    
});

}
