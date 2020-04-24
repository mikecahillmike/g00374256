import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BmwPage } from './bmw.page';

describe('BmwPage', () => {
  let component: BmwPage;
  let fixture: ComponentFixture<BmwPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmwPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BmwPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
