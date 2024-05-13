export interface Image {
  id: string;
  filename: string;
  path: string;
}
export type MyFileFilterCallback = (
  req: Request,
  file: Express.Multer.File,
  callback: (error: Error | null, acceptFile: boolean) => void,
) => void;
