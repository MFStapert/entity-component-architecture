import { Enemy } from './entities/enemy-entity';
import { Entity } from './entities/entity';
import { Player } from './entities/player-entity';

window.onload = () => {
    setInterval(() => {
        Renderer.getInstance().clear();
        Game.getInstance().update();
    }, 1000 / Game.gamespeed);
};

export class Renderer {
    private static instance: Renderer;
    public context = (document.getElementById(
        'canvas'
    ) as HTMLCanvasElement).getContext('2d')!;

    public static getInstance(): Renderer {
        if (!Renderer.instance) {
            Renderer.instance = new Renderer();
        }
        return this.instance;
    }

    public clear(): void {
        this.context.clearRect(0, 0, 800, 600);
    }
}

class Game {
    private entities: Entity[] = [];
    public static instance: Game;
    public static gamespeed = 24;

    constructor() {
        this.entities.push(new Player());
    }

    public static getInstance(): Game {
        if (!Game.instance) {
            Game.instance = new Game();
        }
        return this.instance;
    }

    public update(): void {
        if (this.entities.length < 20) {
            this.entities.push(new Enemy());
        }
        this.entities.forEach((e) => e.update());
    }
}
