import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedentertainmentComponent } from './savedentertainment.component';

describe('SavedentertainmentComponent', () => {
  let component: SavedentertainmentComponent;
  let fixture: ComponentFixture<SavedentertainmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavedentertainmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedentertainmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
