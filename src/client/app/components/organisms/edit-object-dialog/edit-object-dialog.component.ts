import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormControl, Validators } from '@angular/forms';
import { IEditObjectDialog } from '../../../../../interface/common.interface';

@Component({
  selector: 'app-edit-object-dialog',
  templateUrl: './edit-object-dialog.component.html',
  styleUrls: ['./edit-object-dialog.component.scss'],
})
export class EditObjectDialogComponent implements OnInit {
  inputControl = new FormControl('', [Validators.required]);

  constructor(
    public dialogRef: MatDialogRef<EditObjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IEditObjectDialog
  ) {
    dialogRef.disableClose = true;
  }

  ngOnInit() {
    this.inputControl.setValue(this.data.name);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
