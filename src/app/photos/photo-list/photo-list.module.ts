import { NgModule } from '@angular/core';
import { PhotosComponent } from './photos/photos.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { FilterByDescription } from './filter-by-description.pipe';
import { CommonModule } from '@angular/common';
import { PhotoModule } from '../photo/photo.module';
import { PhotoListComponent } from './photo-list.component';
import { CardModule } from 'src/app/shared/components/card/card.Module';
import { SearchComponent } from './search/search.component';
import { DarkenOnHouverModule } from 'src/app/shared/Directives/darken-on-houver/darken-on-houver.module';

@NgModule({
    declarations: [ 
        PhotoListComponent,
        PhotosComponent,
        LoadButtonComponent,
        FilterByDescription,
        SearchComponent
    ],
    imports: [ 
        CommonModule,
        PhotoModule,
        CardModule,
        DarkenOnHouverModule
    ]    
})
export class PhotoListModule {}