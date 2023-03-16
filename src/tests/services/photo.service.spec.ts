import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import {PhotoService} from "../../app/services/photo.service";
import {PhotoHttpService} from "../../app/services/photo.http.service";

const photoHttpServiceMock = {
  fetchNextPhotos: () => of(['photo1', 'photo2'])
};

let photoService: PhotoService;
let photoHttpService: PhotoHttpService;

describe('PhotoService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PhotoService,
        { provide: PhotoHttpService, useValue: photoHttpServiceMock },
      ],
    });

    photoService = TestBed.inject(PhotoService);
    photoHttpService = TestBed.inject(PhotoHttpService);
  });

  it('should fetch photos and emit them through photos$', () => {
    spyOn(photoHttpService, 'fetchNextPhotos').and.callThrough();
    const photosSpy = jasmine.createSpy('photosSpy');
    photoService.photos$.subscribe(photosSpy);

    photoService.fetchNextPhotos$.next(null);

    expect(photoHttpService.fetchNextPhotos).toHaveBeenCalled();
    expect(photoService.photos).toEqual(['photo1', 'photo2']);
    expect(photosSpy).toHaveBeenCalledWith(['photo1', 'photo2']);
  });
});
