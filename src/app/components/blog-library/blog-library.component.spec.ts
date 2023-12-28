import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogLibraryComponent } from './blog-library.component';

describe('BlogLibraryComponent', () => {
  let component: BlogLibraryComponent;
  let fixture: ComponentFixture<BlogLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogLibraryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
