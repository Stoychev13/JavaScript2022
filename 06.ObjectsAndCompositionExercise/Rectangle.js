function rectangle(width, height, color){
    color = `${color.charAt(0).toUpperCase()}${color.substring(1)}`
    return {
        width, height, color,
        calcArea(){
            return width * height;
        }
    }
}