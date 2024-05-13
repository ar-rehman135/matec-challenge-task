import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import * as fs from 'fs';
import { ResponseDto } from './dto/response.dto';
import { CreateImageDto } from './dto/create-image.dto';

@Injectable()
export class ImagesService {
  private readonly uploadDir: string = 'uploads';

  isValidFileType(file: Express.Multer.File): boolean {
    const allowedMimeTypes = [
      'image/jpeg',
      'image/png',
      'image/jpg',
      'image/webp',
      'image/svg+xml',
    ];
    return allowedMimeTypes.includes(file.mimetype);
  }

  async findAll(): Promise<ResponseDto[]> {
    try {
      const imageFiles = fs.readdirSync(this.uploadDir);
      const responseDtos = imageFiles.map((filename) => {
        return {
          id: filename,
          filename: filename,
          path: `${this.uploadDir}/${filename}`,
        } as ResponseDto;
      });
      return responseDtos;
    } catch (error) {
      throw new HttpException('Failed to list images', HttpStatus.BAD_REQUEST);
    }
  }

  async create(filename: string, fileBuffer: Buffer): Promise<CreateImageDto> {
    try {
      const id = uuid().split('-')[0]; // Shorten the UUID;
      const filePath = `${this.uploadDir}/${id}-${filename}`;
      fs.writeFileSync(filePath, fileBuffer); // Write file buffer to disk
      return {
        id: id,
        filename: filename,
        path: filePath,
      };
    } catch (error) {
      throw new HttpException(
        'Failed to save the image',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async remove(id: string): Promise<{ msg: string; success: boolean }> {
    try {
      const filePath = `${this.uploadDir}/${id}`;
      if (!fs.existsSync(filePath)) {
        throw new HttpException('Image does not exist', HttpStatus.NOT_FOUND);
      }
      fs.unlinkSync(filePath);
      return {
        msg: 'Image has been deleted',
        success: true,
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException('Failed to delete image', HttpStatus.BAD_REQUEST);
    }
  }
}
