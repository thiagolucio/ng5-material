import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule, MatInputModule, MatProgressSpinnerModule, MatCardModule } from '@angular/material/';


@NgModule ({
    imports: [MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatInputModule, MatProgressSpinnerModule],
    exports: [MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatInputModule, MatProgressSpinnerModule],
})

export class MaterialModule {}