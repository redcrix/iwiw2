import { NgModule } from '@angular/core';
import { CategoriesComponent } from './categories/categories';
import { ScrollingFeaturedProductsComponent } from './scrolling-featured-products/scrolling-featured-products';
import { IconsComponent } from './icons/icons';
// import { BannersComponent } from './banners/banners';
// import { ProductComponent } from './product/product';
// import { FooterComponent } from './footer/footer';
// import { SlidingTabsComponent } from './sliding-tabs/sliding-tabs';
// import { HeaderComponent } from './header/header';
@NgModule({
    declarations: [IconsComponent,
    IconsComponent
        // CategoriesComponent,
        // ScrollingFeaturedProductsComponent
        // BannersComponent,
        // ProductComponent,
        // FooterComponent,
        // SlidingTabsComponent,
        // HeaderComponent,
    ],
    imports: [],
    exports: [IconsComponent,
    IconsComponent
        // CategoriesComponent,
        // ScrollingFeaturedProductsComponent
        // BannersComponent,
        // ProductComponent,
        // FooterComponent,
        // SlidingTabsComponent,
        // HeaderComponent,
    ]
})
export class ComponentsModule { }
