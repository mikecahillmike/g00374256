import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FarrariPage } from './farrari.page';

describe('FarrariPage', () => {
  let component: FarrariPage;
  let fixture: ComponentFixture<FarrariPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarrariPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FarrariPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
