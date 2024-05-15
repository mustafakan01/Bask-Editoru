import { TestBed } from '@angular/core/testing';

import { EditorServisiService } from './editor-servisi.service';

describe('EditorServisiService', () => {
  let service: EditorServisiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditorServisiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
