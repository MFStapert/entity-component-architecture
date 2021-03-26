import { Component } from './component';
import { Entity } from '../entities/entity';
import { LocationComponent } from './location-component';
import { Renderer } from '../main';

export class DrawableComponent extends Component {
    private color: string;

    constructor(parent: Entity, color?: string) {
        super(parent);
        this.color = color ?? 'black';
    }

    public update(): void {
        const context = Renderer.getInstance().context;
        const location = this.parent
            .getComponent<LocationComponent>(LocationComponent)
            .getLocation();
        context.fillStyle = this.color;
        context.beginPath();
        context.fillRect(location.x, location.y, 20, 20);
        context.stroke();
    }
}
