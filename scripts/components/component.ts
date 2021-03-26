import { Entity } from '../entities/entity';

export abstract class Component {
    protected parent: Entity;

    constructor(parent: Entity) {
        this.parent = parent;
    }

    public update(): void {}
}
