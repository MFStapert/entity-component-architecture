import { Component } from '../components/component';
import { DrawableComponent } from '../components/drawable-component';
import { LocationComponent } from '../components/location-component';
import { Entity } from './entity';

export class Player extends Entity {
    constructor() {
        super();
        this.addComponent(
            new LocationComponent(this, 400, 300),
            new DrawableComponent(this, 'red'),
            new PlayerComponent(this)
        );
    }
}

class PlayerComponent extends Component {
    constructor(parent: Player) {
        super(parent);
        document.onkeydown = (event) => {
            switch (event.key) {
                case ' ':
                    this.move();
            }
        };
    }

    public move(): void {
        this.parent
            .getComponent<LocationComponent>(LocationComponent)
            .updateLocation({
                x: Math.random() * 800,
                y: Math.random() * 600
            });
    }
}
