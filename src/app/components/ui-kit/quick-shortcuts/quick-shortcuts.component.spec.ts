import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickShortcutsComponent } from './quick-shortcuts.component';

describe('QuickShortcutsComponent', () => {
  let component: QuickShortcutsComponent;
  let fixture: ComponentFixture<QuickShortcutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickShortcutsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickShortcutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
