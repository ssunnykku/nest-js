import { Injectable, NotFoundException } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
  // private : 다른 컴포넌트에서 수정 방지
  // Board[] : 배열이라서
  private boards: Board[] = [];

  // 모든 게시물 가져오기
  getAllBoards(): Board[] {
    return this.boards;
  }

  createBoard(createBoardDto: CreateBoardDto) {
    const { title, description } = createBoardDto;
    const board: Board = {
      id: uuid(),
      title,
      description,
      status: BoardStatus.PUBLIC,
    };

    this.boards.push(board);
    return board;
  }

  //  id로 특정 게시물 가져오기(parameter 이용)
  getBoardById(id: string): Board {
    const found = this.boards.find((board) => board.id === id);
    if (!found) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }
    return found;
  }

  //   id로 특정 게시물 지우기
  deleteBoard(id: string): void {
    // 없는 게시물을 지우려 할 때 결과값 처리
    const found = this.getBoardById(id);
    this.boards = this.boards.filter((board) => board.id !== found.id);
  }

  //   특정 게시물의 상태 업데이트
  updateBoardStatus(id: string, status: BoardStatus): Board {
    // 업데이트 하고자하는 모든 게시물의 정보를 board에 넣어줌
    const board = this.getBoardById(id);
    // 바꿀 status 값
    board.status = status;
    return board;
  }
}
