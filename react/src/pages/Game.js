import React, { Component } from 'react';

class Game extends Component {
    render() {
        return (
            <div class="container-fluid">
                <div class="row justify-content-center align-items-center fullheight">
                    <div class="row justify-content-center">
                        <div class="col">
                            <h1 class="text-center display-3">59,95€</h1>
                        </div>
                        <div class="w-100"></div>
                        <div class="col-7">
                            <div class="card-deck">
                                <div class="card">
                                    <img class="card-img-top" src="https://images-na.ssl-images-amazon.com/images/I/81RIrqVgXGL._SL1500_.jpg"/>
                                    <div class="card-body">
                                        <h5 class="card-title">Figurine dansante Groot (Les Gardiens de la Galaxie)</h5>
                                        <p class="card-text">
                                            I am Groot! Based on the now-classic scene from the closing credits of the blockbuster film Guardians of the Galaxy, this official replica of baby Groot in his white flower pot dances to an electronic instrumental version of the Jackson 5's I Want You Back when switched on. Bring home baby Groot and start dancin'!
                                        </p>
                                    </div>
                                </div>
                                <div class="card text-white bg-primary">
                                    <img class="card-img-top" src="https://images-na.ssl-images-amazon.com/images/I/31ObrBI9jJL.jpg"/>
                                    <div class="card-body">
                                        <h5 class="card-title">Lunii, ma Fabrique à Histoires</h5>
                                        <p class="card-text">Choisis tes héros et univers pour que ta Fabrique te raconte une des 48 histoires !
                                            Objet connecté avec de nouvelles histoires à télécharger.
                                            Histoires audio dont tu es le héros...
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        );
    }
}

export default Game;
