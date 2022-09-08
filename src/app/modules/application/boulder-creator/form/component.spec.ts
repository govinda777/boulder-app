import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { BoulderCreatorComponent } from './component';
import { PrettyJsonPipe } from './pretty-json.pipe';

describe('BoulderCreatorComponent', () => {
  let component: BoulderCreatorComponent;
  let fixture: ComponentFixture<BoulderCreatorComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
      ],
      declarations: [
        BoulderCreatorComponent,
        PrettyJsonPipe
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoulderCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
