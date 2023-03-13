import Phaser from "phaser";
import * as Colyseus from 'colyseus.js';
import Client from "../colyseus/Client";

export default class RoomScene extends Phaser.Scene {
    
    private waitingRoom: Colyseus.Room | null = null;
    private client: Colyseus.Client;

    private playersInRoomText: Phaser.GameObjects.Text | null = null;

    constructor() {
        super('RoomScene');
        this.client = Client.getClient().getColyseusClient();
    }

    create() {
        this.joinRoom();
        this.initializeUI();

        this.events.on("wake", this.joinRoom, this);
        this.events.on("stop", this.leaveRoom, this);
    }

    private initializeUI() {
        // leave button
        let lobbyButton = this.add.rectangle(this.game.scale.width / 2, 50, 200, 50, 0xAAAAAA);
        this.add.text(this.game.scale.width / 2 - 48, 42, "Join Lobby");
        lobbyButton.setInteractive();
        lobbyButton.on(Phaser.Input.Events.POINTER_UP, () => {
            this.scene.switch('LobbyScene');
        }, this);

        // start game button
        let startGameButton = this.add.rectangle(this.game.scale.width / 2, 150, 200, 50, 0xAAAAAA);
        this.add.text(this.game.scale.width / 2 - 48, 142, "Start Game");
        startGameButton.setInteractive();
        startGameButton.on(Phaser.Input.Events.POINTER_UP, () => {
            // start game logic.
        }, this);

        // list of players
        this.playersInRoomText = this.add.text(this.game.scale.width / 2, 300, "Players in room: 0");
    }

    private updatePlayersInRoom(count: number) {
        this.playersInRoomText?.setText(`Players in room: ${count}`)
    }

    private joinRoom() {
        if(Client.getClient().getGameRoomId() === "") {
            this.client.create("waiting").then((room => {
                this.waitingRoom = room;
                console.log("join new waiting room");
            })).catch((e) => {
                console.log("failed to join waiting room");
            })
        } else {
            this.client.joinById(Client.getClient().getGameRoomId()).then((room => {
                this.waitingRoom = room;
                console.log("join existing waiting room: ", Client.getClient().getGameRoomId());
            })).catch((e) => {
                console.log("failed to join waiting room");
            })
        }
    }

    private onJoin() {
        if(this.waitingRoom) {

        }
        // this.waitingRoom?.state.players.onAdd = (player, sessionId) => {
        // }
    }

    private leaveRoom() {
        this.waitingRoom?.leave();
    }

}