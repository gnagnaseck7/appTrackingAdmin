import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilComponent } from './accueil.component';
import { SharedModule } from '../../../shared/shared.module';
import { SidebarHookService } from '../../../shared/services/sidebar-hook.service';

fdescribe('AccueilComponent', () => {
  let component: AccueilComponent;
  let fixture: ComponentFixture<AccueilComponent>;

  let sidebarhookservice: SidebarHookService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ SharedModule],
      declarations: [ AccueilComponent ],
      providers: [SidebarHookService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilComponent);
    component = fixture.componentInstance;
    sidebarhookservice = TestBed.get(SidebarHookService);
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('OnInit', () => {
    it('should call method createGenericSideBar of sidebarhookservice', () => {
      spyOn(sidebarhookservice, 'createGenericSideBar');
      component.ngOnInit();
      expect(sidebarhookservice.createGenericSideBar).toHaveBeenCalled();
    })
  })
});
