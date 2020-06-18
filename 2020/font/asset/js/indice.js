var bottoni = document.getElementsByClassName("titolo-capitolo");

				for (var i = 0; i < bottoni.length; i++) {
					
						bottoni[i].addEventListener("click",  function(e){

							var id = e.target.id
							var capitolo =  id.replace("titolo_","")
							var nome_capitolo = "testo_" + capitolo
							var mio_testo = document.getElementById(nome_capitolo);

							var acceso = mio_testo.style.display

								if(acceso == "block"){
								mio_testo.style.display = "none"
								}

								else{
								mio_testo.style.display = "block"
								}
						})
				}