import { Injectable } from '@nestjs/common';
import { Board } from './board.model';

@Injectable()
export class BoardsService {
    private boards: Board[] = []

    getAllboards(): Board[] {
        return this.boards
    }
}
