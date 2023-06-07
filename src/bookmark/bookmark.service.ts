import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { BookMarkDto } from './dto';
import { Bookmark } from '@prisma/client';
import { EditBookMarkDto } from './dto/edit-bookmark.dto';

@Injectable()
export class BookmarkService {
  constructor(private prisma: PrismaService) {}

  async getAllbookmarks(userid: number): Promise<Array<Bookmark>> {
    const bookmarks = await this.prisma.bookmark.findMany({
      where: {
        userid,
      },
    });

    if (!bookmarks) {
      throw new ForbiddenException('error in getting the bookmarks');
    }

    return bookmarks;
  }
  async addBookmark(userid: number, bookmark: BookMarkDto): Promise<any> {
    const newbook = await this.prisma.bookmark.create({
      data: {
        userid,
        ...bookmark,
      },
    });

    if (!newbook) {
      return new ForbiddenException('error in creating bookmark');
    }
    return newbook;
  }

  async updateBookmarkById(
    bookmarkid: number,
    bookmark: EditBookMarkDto,
  ): Promise<Bookmark> {
    const updated_bookmark = await this.prisma.bookmark.update({
      where: {
        id: bookmarkid,
      },
      data: {
        ...bookmark,
      },
    });

    if (!bookmark) {
      throw new Error(' there some error in updating bookmark');
    }

    return updated_bookmark;
  }

  async deleteBookMark(id: number): Promise<Bookmark> {
    const deleted_bookmark = await this.prisma.bookmark.delete({
      where: {
        id,
      },
    });

    if (!deleted_bookmark) {
      throw new Error('ERROR IN DELETING BOOK MARK');
    }

    return deleted_bookmark;
  }
}
