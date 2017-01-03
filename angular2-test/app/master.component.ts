import { Component }   from '@angular/core';
import {DropboxService} from './dropbox.service';

@Component({
    selector: 'master',
    template: `
        <h3>Master</h3>
        <ul>
            <li *ngFor="let folder of folders">{{folder.name}}</li>
        </ul>
    `
})
export class MasterComponent {
    private folders: Array<Object>
    constructor(dropboxService: DropboxService) {
        dropboxService.getFolders()
        .then(folders => this.folders = folders)
    }
}
