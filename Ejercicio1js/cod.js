function calcular_distancia() {
    let distancia = parseInt(document.getElementById('distancia').value);
    if (isNaN(distancia)===true) {
        window.alert("Los datos ingresados son incorrectos...Intentar de nuevo...")
        document.getElementById('distancia').value = '';
        document.getElementById('res').innerHTML = "";
    }else {
        if(distancia <= 1000 ){
            document.getElementById('res').innerHTML = "<h4>El viaje es a pie!!</h4>";
        }else{
            if(distancia > 1000 && distancia < 10000){
                document.getElementById('res').innerHTML = "<h4>El viaje es en bicicleta!!</h4>";
            }else{
                if(distancia > 10000 && distancia < 30000){
                    document.getElementById('res').innerHTML = "<h4>El viaje es en colectivo!!</h4>";
                }else{
                    if(distancia > 30000 && distancia < 100000){
                        document.getElementById('res').innerHTML = "<h4>El viaje es en auto!!</h4>";
                    }else{
                        if(distancia > 100000){
                            document.getElementById('res').innerHTML = "<h4>El viaje es en avion!!</h4>";
                        }
                    }
                
                }
            }
        }
    }
}