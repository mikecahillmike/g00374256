import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MercedesPage } from './mercedes.page';

describe('MercedesPage', () => {
  let component: MercedesPage;
  let fixture: ComponentFixture<MercedesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MercedesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MercedesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
