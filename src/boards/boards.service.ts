import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardsService {
    private boards = []

    getAllboards() {
        return this.boards
    }
}
