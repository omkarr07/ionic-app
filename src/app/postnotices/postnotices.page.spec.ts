import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostnoticesPage } from './postnotices.page';

describe('PostnoticesPage', () => {
  let component: PostnoticesPage;
  let fixture: ComponentFixture<PostnoticesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostnoticesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PostnoticesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
