import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GeneratemainPage } from './generatemain.page';

describe('GeneratemainPage', () => {
  let component: GeneratemainPage;
  let fixture: ComponentFixture<GeneratemainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratemainPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GeneratemainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
