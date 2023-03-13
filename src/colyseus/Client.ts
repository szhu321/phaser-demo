import * as Colyseus from 'colyseus.js';

export default class Client {
    private static singleton: Client | null = null;
    private client: Colyseus.Client;
    private gameRoomId: string = "";

    private constructor() {
        this.client = new Colyseus.Client('ws://localhost:3000');
    }

    public static getClient(): Client {
        if(this.singleton === null) {
            this.singleton = new Client();
        }
        return this.singleton;
    }

    public getGameRoomId() {
        return this.gameRoomId;
    }

    public setGameRoomId(gameRoomId: string) {
        this.gameRoomId = gameRoomId;
    }

    public getColyseusClient() {
        return this.client;
    }
}