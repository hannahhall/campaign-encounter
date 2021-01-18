import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MonsterService } from './monster.service';

describe('MonsterService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ RouterTestingModule, HttpClientTestingModule ],
  }));

  it('should be created', () => {
    const service: MonsterService = TestBed.get(MonsterService);
    expect(service).toBeTruthy();
  });
});
