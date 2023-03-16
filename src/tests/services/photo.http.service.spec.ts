import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../environments/environment';
import { PhotoHttpService } from "../../app/services/photo.http.service";

describe('PhotoHttpService', () => {
  let service: PhotoHttpService;
  let httpMock: HttpTestingController;
  const photoServer = environment.photoServer;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PhotoHttpService]
    });

    service = TestBed.inject(PhotoHttpService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch a photo', (done) => {
    service.fetchPhoto().subscribe(url => {
      expect(url).toEqual(photoServer);
      done();
    });

    const req = httpMock.expectOne(photoServer);
    expect(req.request.method).toEqual('GET');
    req.flush(photoServer);
  });

});
